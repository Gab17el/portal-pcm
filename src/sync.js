// Portal PCM Multilixo — Sync & Edit Mode (v3 — CORS fix)
// 1) Espelha localStorage para um Apps Script (Sheets + Drive)
// 2) Modo edicao protegido por senha
// 3) Helper de upload via JSONP-like (GET com callback)

(function () {
  /* ============ CONFIG ============ */
  const API_URL = window.PORTAL_API_URL || '';
  const EDIT_PASSWORD = 'pcm2026';
  const KEY_PREFIX = 'pcm.';
  const POLL_MS = 8000;

  /* ============ EDIT MODE ============ */
  function getEditMode() {
    return sessionStorage.getItem('pcm.editMode') === '1';
  }
  function setEditMode(on) {
    if (on) sessionStorage.setItem('pcm.editMode', '1');
    else sessionStorage.removeItem('pcm.editMode');
    document.body.setAttribute('data-edit-mode', on ? '1' : '0');
    document.dispatchEvent(new Event('pcm:editmodechange'));
  }
  function promptEdit() {
    if (getEditMode()) { setEditMode(false); return; }
    const pw = prompt('Senha para entrar no modo edicao:');
    if (pw === null) return;
    if (pw === EDIT_PASSWORD) {
      setEditMode(true);
    } else {
      alert('Senha incorreta.');
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.body.setAttribute('data-edit-mode', getEditMode() ? '1' : '0');
    mountLock();
  });

  /* ============ LOCK BUTTON ============ */
  function mountLock() {
    const btn = document.createElement('button');
    btn.id = 'pcm-edit-lock';
    btn.title = 'Modo edicao';
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
    btn.onclick = promptEdit;
    document.body.appendChild(btn);
    const updateLabel = () => {
      const on = getEditMode();
      btn.classList.toggle('on', on);
      btn.title = on ? 'Sair do modo edicao' : 'Entrar no modo edicao';
    };
    updateLabel();
    document.addEventListener('pcm:editmodechange', updateLabel);
  }

  window.PCM_EDIT = { get: getEditMode, set: setEditMode, prompt: promptEdit };

  /* ============ JSONP HELPER (contorna CORS) ============ */
  let jsonpCounter = 0;
  function jsonpRequest(params, timeoutMs) {
    return new Promise((resolve, reject) => {
      if (!API_URL) { reject(new Error('no API_URL')); return; }
      const callbackName = 'pcm_jsonp_' + (++jsonpCounter) + '_' + Date.now();
      const script = document.createElement('script');
      let done = false;
      const cleanup = () => {
        try { delete window[callbackName]; } catch (e) { window[callbackName] = undefined; }
        if (script.parentNode) script.parentNode.removeChild(script);
      };
      const timer = setTimeout(() => {
        if (done) return;
        done = true;
        cleanup();
        reject(new Error('JSONP timeout'));
      }, timeoutMs || 30000);
      window[callbackName] = (data) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        cleanup();
        resolve(data);
      };
      const qs = new URLSearchParams(Object.assign({}, params, { callback: callbackName })).toString();
      script.src = API_URL + (API_URL.indexOf('?') >= 0 ? '&' : '?') + qs;
      script.onerror = () => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        cleanup();
        reject(new Error('JSONP load error'));
      };
      document.head.appendChild(script);
    });
  }

  /* ============ SYNC ============ */
  if (!API_URL) {
    console.log('[PCM] API_URL nao configurada — rodando em modo localStorage apenas.');
    return;
  }
  console.log('[PCM] sync ativo (v3 JSONP), API:', API_URL);

  // Intercepta writes do localStorage para espelhar no backend
  const origSet = localStorage.setItem.bind(localStorage);
  localStorage.setItem = function (key, value) {
    origSet(key, value);
    if (typeof key === 'string' && key.startsWith(KEY_PREFIX)) {
      remoteSet(key, value);
    }
  };
  const origRemove = localStorage.removeItem.bind(localStorage);
  localStorage.removeItem = function (key) {
    origRemove(key);
    if (typeof key === 'string' && key.startsWith(KEY_PREFIX)) {
      remoteSet(key, '');
    }
  };

  let pendingWrites = {};
  let writeTimer = null;
  function remoteSet(key, value) {
    pendingWrites[key] = value;
    if (writeTimer) return;
    writeTimer = setTimeout(flushWrites, 400);
  }
  async function flushWrites() {
    writeTimer = null;
    const batch = pendingWrites;
    pendingWrites = {};
    try {
      // Usa POST com text/plain (request "simples" — sem preflight CORS)
      // E NAO tenta ler a resposta — usa no-cors pra evitar erro de CORS
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'setMany', items: batch })
      });
      console.log('[PCM] sync write OK,', Object.keys(batch).length, 'chave(s)');
    } catch (e) {
      console.warn('[PCM] sync write falhou', e);
    }
  }

  async function pullAll() {
    try {
      // JSONP em vez de fetch — contorna CORS
      const data = await jsonpRequest({ action: 'getAll', prefix: KEY_PREFIX }, 15000);
      if (!data || !data.items) return;
      let changed = 0;
      Object.entries(data.items).forEach(([k, v]) => {
        const cur = localStorage.getItem(k);
        if (cur !== v) {
          if (v === '' || v == null) origRemove(k);
          else origSet(k, v);
          changed++;
        }
      });
      if (changed) {
        console.log('[PCM] sync pull aplicou', changed, 'mudanca(s)');
        document.dispatchEvent(new Event('pcm:datachanged'));
      }
    } catch (e) {
      console.warn('[PCM] sync pull falhou', e);
    }
  }

  pullAll();
  setInterval(pullAll, POLL_MS);

  /* ============ FILE UPLOAD ============ */
  // Upload tambem via JSONP (precisa ler a URL retornada do Drive).
  // Apps Script tem limite de URL ~50KB, entao arquivos grandes nao vao caber.
  // Fallback: mantem dataUrl no localStorage (limita ~5MB total).
  window.PCM_UPLOAD = async function (dataUrl, filename) {
    if (!API_URL) return dataUrl;
    try {
      // Tenta upload via JSONP — funciona pra arquivos pequenos
      const data = await jsonpRequest({
        action: 'upload',
        filename: filename || ('file-' + Date.now()),
        dataUrl: dataUrl
      }, 60000);
      if (data && data.ok && data.url) {
        console.log('[PCM] upload OK:', data.url);
        return data.url;
      }
      console.warn('[PCM] upload retornou erro:', data);
      return dataUrl;
    } catch (e) {
      console.warn('[PCM] upload falhou, mantendo data URL', e);
      return dataUrl;
    }
  };
})();
