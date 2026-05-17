// Portal PCM Multilixo — Sync & Edit Mode
// 1) Mirrors localStorage to a Google Apps Script backend (Sheets + Drive)
// 2) Edit-mode password gate ("pcm2026") — toggles body[data-edit-mode]
// 3) Image upload helper — sends base64 to backend, gets back a Drive URL

(function () {
  /* ============ CONFIG ============ */
  // Set this to the Apps Script Web App URL after publishing (see SETUP.md)
  // Example: 'https://script.google.com/macros/s/AKfycby.../exec'
  const API_URL = window.PORTAL_API_URL || '';
  const EDIT_PASSWORD = 'pcm2026';
  const KEY_PREFIX = 'pcm.';         // only mirror keys with this prefix
  const POLL_MS = 8000;              // how often to re-pull fresh data

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
    const pw = prompt('Senha para entrar no modo edição:');
    if (pw === null) return;
    if (pw === EDIT_PASSWORD) {
      setEditMode(true);
    } else {
      alert('Senha incorreta.');
    }
  }
  // initial body attribute
  document.addEventListener('DOMContentLoaded', () => {
    document.body.setAttribute('data-edit-mode', getEditMode() ? '1' : '0');
    mountLock();
  });

  /* ============ LOCK BUTTON ============ */
  function mountLock() {
    const btn = document.createElement('button');
    btn.id = 'pcm-edit-lock';
    btn.title = 'Modo edição';
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
    btn.onclick = promptEdit;
    document.body.appendChild(btn);
    const updateLabel = () => {
      const on = getEditMode();
      btn.classList.toggle('on', on);
      btn.title = on ? 'Sair do modo edição' : 'Entrar no modo edição';
    };
    updateLabel();
    document.addEventListener('pcm:editmodechange', updateLabel);
  }

  window.PCM_EDIT = { get: getEditMode, set: setEditMode, prompt: promptEdit };

  /* ============ SYNC ============ */
  if (!API_URL) {
    console.log('[PCM] API_URL not set — running in localStorage-only mode.');
    return;
  }

  // Patch localStorage.setItem so writes mirror to backend
  const origSet = localStorage.setItem.bind(localStorage);
  localStorage.setItem = function (key, value) {
    origSet(key, value);
    if (typeof key === 'string' && key.startsWith(KEY_PREFIX)) {
      remoteSet(key, value);
    }
  };
  // Same for removeItem
  const origRemove = localStorage.removeItem.bind(localStorage);
  localStorage.removeItem = function (key) {
    origRemove(key);
    if (typeof key === 'string' && key.startsWith(KEY_PREFIX)) {
      remoteSet(key, ''); // empty value = deleted
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
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'setMany', items: batch })
      });
    } catch (e) {
      console.warn('[PCM] sync write failed', e);
    }
  }

  async function pullAll() {
    try {
      const r = await fetch(API_URL + '?action=getAll&prefix=' + encodeURIComponent(KEY_PREFIX));
      if (!r.ok) return;
      const data = await r.json();
      if (!data || !data.items) return;
      let changed = false;
      Object.entries(data.items).forEach(([k, v]) => {
        const cur = localStorage.getItem(k);
        if (cur !== v) {
          if (v === '' || v == null) origRemove(k);
          else origSet(k, v);
          changed = true;
        }
      });
      if (changed) document.dispatchEvent(new Event('pcm:datachanged'));
    } catch (e) {
      console.warn('[PCM] sync pull failed', e);
    }
  }

  // First pull and periodic refresh
  pullAll();
  setInterval(pullAll, POLL_MS);

  /* ============ FILE UPLOAD ============ */
  // Upload a data URL to Drive via Apps Script; returns the public URL
  window.PCM_UPLOAD = async function (dataUrl, filename) {
    if (!API_URL) return dataUrl; // fallback: keep base64
    try {
      const r = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'upload',
          filename: filename || ('file-' + Date.now()),
          dataUrl: dataUrl
        })
      });
      const j = await r.json();
      return j && j.url ? j.url : dataUrl;
    } catch (e) {
      console.warn('[PCM] upload failed, keeping data URL', e);
      return dataUrl;
    }
  };
})();
