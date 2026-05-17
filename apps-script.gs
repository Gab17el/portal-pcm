/**
 * Portal PCM Multilixo — Backend (Google Apps Script)
 *
 * COMO USAR:
 *  1. Crie uma planilha nova no Google Sheets, dê o nome "Portal PCM — Dados".
 *  2. Em Extensões → Apps Script, cole TODO este código.
 *  3. Salve. Clique em "Implantar" → "Nova implantação" → tipo "Aplicativo da Web".
 *       - Executar como: "Eu" (sua conta)
 *       - Quem tem acesso: "Qualquer pessoa"
 *  4. Copie a URL gerada (termina em /exec) e cole em Portal PCM Multilixo.html
 *     na variável window.PORTAL_API_URL.
 *  5. Crie uma pasta no Google Drive chamada "Portal PCM — Arquivos", abra ela,
 *     copie o ID que aparece na URL (depois de /folders/) e cole abaixo em DRIVE_FOLDER_ID.
 */

const DRIVE_FOLDER_ID = 'COLE_AQUI_O_ID_DA_PASTA_DO_DRIVE';
const SHEET_TAB = 'kv';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_TAB);
  if (!sh) {
    sh = ss.insertSheet(SHEET_TAB);
    sh.appendRow(['key', 'value', 'updated']);
  }
  return sh;
}

function doGet(e) {
  const action = (e.parameter && e.parameter.action) || 'getAll';
  if (action === 'getAll') {
    const prefix = (e.parameter && e.parameter.prefix) || '';
    const sh = getSheet_();
    const last = sh.getLastRow();
    const out = {};
    if (last > 1) {
      const rows = sh.getRange(2, 1, last - 1, 2).getValues();
      rows.forEach(r => {
        const k = String(r[0] || '');
        if (!k) return;
        if (prefix && !k.startsWith(prefix)) return;
        out[k] = String(r[1] || '');
      });
    }
    return json_({ ok: true, items: out });
  }
  return json_({ ok: false, error: 'unknown action' });
}

function doPost(e) {
  let body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {}
  const action = body.action;

  if (action === 'setMany') {
    const items = body.items || {};
    const sh = getSheet_();
    const last = sh.getLastRow();
    const map = {};
    if (last > 1) {
      const rows = sh.getRange(2, 1, last - 1, 1).getValues();
      rows.forEach((r, i) => { map[String(r[0] || '')] = i + 2; });
    }
    const now = new Date();
    Object.entries(items).forEach(([k, v]) => {
      if (!k) return;
      const row = map[k];
      if (row) {
        sh.getRange(row, 2, 1, 2).setValues([[String(v == null ? '' : v), now]]);
      } else {
        sh.appendRow([k, String(v == null ? '' : v), now]);
      }
    });
    return json_({ ok: true, count: Object.keys(items).length });
  }

  if (action === 'upload') {
    const filename = body.filename || ('file-' + Date.now());
    const dataUrl = body.dataUrl || '';
    const m = dataUrl.match(/^data:([^;]+);base64,(.*)$/);
    if (!m) return json_({ ok: false, error: 'invalid dataUrl' });
    const mime = m[1];
    const bytes = Utilities.base64Decode(m[2]);
    const blob = Utilities.newBlob(bytes, mime, filename);
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const id = file.getId();
    const url = 'https://drive.google.com/uc?export=view&id=' + id;
    return json_({ ok: true, url: url, id: id });
  }

  return json_({ ok: false, error: 'unknown action' });
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
