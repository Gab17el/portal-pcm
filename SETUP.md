# Portal PCM Multilixo — Como publicar

Este guia te leva de zero a um site público com dados sincronizados em **~30 minutos**.

## Visão geral

- **Frontend**: HTML estático hospedado no **GitHub Pages**
- **Backend**: **Google Sheets** + **Apps Script** (grátis, sem servidor)
- **Modo edição**: protegido por senha `pcm2026` (só quem souber consegue editar)
- **Armazenamento**: dados na planilha, arquivos/imagens no Google Drive

---

## Parte 1 — Backend (Google)

### 1.1 Crie a planilha

1. Vá em [sheets.new](https://sheets.new) e crie uma planilha em branco
2. Renomeie para **"Portal PCM — Dados"**
3. Anote essa aba — o script vai criar uma aba `kv` automaticamente

### 1.2 Crie a pasta de arquivos no Drive

1. Vá em [drive.google.com](https://drive.google.com), botão **Novo → Pasta**
2. Chame de **"Portal PCM — Arquivos"**
3. Abra a pasta. Na URL, copie o ID (é a parte depois de `/folders/`):
   ```
   https://drive.google.com/drive/folders/1AbCdEf123XYZ...
                                          └────── este ID ──────┘
   ```

### 1.3 Cole o Apps Script

1. Na planilha, vá em **Extensões → Apps Script**
2. Apague todo o código que estiver lá
3. Abra o arquivo `apps-script.gs` deste projeto, copie tudo e cole no editor do Apps Script
4. Na linha `const DRIVE_FOLDER_ID = '…'`, cole o ID que você copiou no passo 1.2
5. **Salvar** (Ctrl+S) — dê um nome ao projeto, ex.: "Portal PCM API"

### 1.4 Publique como Web App

1. Clique em **Implantar → Nova implantação**
2. Engrenagem ⚙️ → **Aplicativo da Web**
3. Configurações:
   - **Descrição**: `API Portal PCM`
   - **Executar como**: `Eu (seu-email@multilixo.com.br)`
   - **Quem tem acesso**: `Qualquer pessoa` (importante — senão o site não consegue ler)
4. Clique **Implantar**
5. Autorize o acesso (vai pedir permissões para Sheets e Drive)
6. **Copie a URL gerada** (termina em `/exec`). Ex.: `https://script.google.com/macros/s/AKfycby.../exec`

---

## Parte 2 — Frontend (GitHub Pages)

### 2.1 Configure a URL da API no portal

1. Abra `Portal PCM Multilixo.html` neste projeto
2. Encontre a linha:
   ```html
   <script>window.PORTAL_API_URL = '';</script>
   ```
3. Cole a URL do passo 1.4 entre as aspas:
   ```html
   <script>window.PORTAL_API_URL = 'https://script.google.com/macros/s/AKfycby.../exec';</script>
   ```

### 2.2 Suba pro GitHub

1. Crie um novo repositório no GitHub: [github.com/new](https://github.com/new)
   - Nome: `portal-pcm-multilixo` (ou o que preferir)
   - Visibilidade: **Public** (precisa pra GitHub Pages grátis)
2. Faça download deste projeto inteiro (botão de download na barra lateral)
3. No repositório recém-criado, clique **uploading an existing file** e arraste **todos os arquivos** da pasta (HTML, src/, assets/, styles.css, etc.)
4. **Commit changes**

### 2.3 Ative o GitHub Pages

1. No repositório, **Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` (ou `master`) → pasta `/ (root)`
4. **Save**
5. Aguarde ~1 minuto. A URL aparece em cima:
   ```
   https://SEU-USUARIO.github.io/portal-pcm-multilixo/
   ```

---

## Parte 3 — Como usar

### Para todos (modo visualização)
- Acessam a URL pública e veem tudo
- Não enxergam botões de "adicionar", "editar", "remover"

### Para você (modo edição)
- Clique no **cadeado** no canto inferior direito 🔒
- Digite a senha: `pcm2026`
- Agora todos os botões de edição aparecem
- Cada mudança é gravada na planilha automaticamente (~400ms de delay)
- Para sair, clique no cadeado de novo

### Compartilhar a senha
Compartilhe `pcm2026` só com quem deve editar. Para mudar a senha:
- Abra `src/sync.js`
- Procure `const EDIT_PASSWORD = 'pcm2026';`
- Mude para a senha nova
- Commit no GitHub — em ~1min o site atualiza

---

## Parte 4 — Backup e troubleshooting

### Backup
- A planilha **é o banco** — exporte para Excel/CSV periodicamente (Arquivo → Fazer download)
- Os arquivos ficam na pasta do Drive — backup automático pelo Google

### "Os dados não estão sincronizando"
1. Abra o site, F12 → Console
2. Procure por mensagens `[PCM]` — vão indicar o problema
3. Causas comuns:
   - URL da API errada → verifique passo 2.1
   - Apps Script não publicado como "Qualquer pessoa" → reabra a implantação
   - Pasta do Drive com ID errado → verifique o `DRIVE_FOLDER_ID` no script

### "Quero atualizar o site depois de mudar código"
- Edite os arquivos no GitHub (pode editar direto na interface)
- **Commit** → o GitHub Pages atualiza sozinho em ~1min

### "Quero usar domínio próprio (pcm.multilixo.com.br)"
- No repositório: **Settings → Pages → Custom domain**
- Adicione `pcm.multilixo.com.br`
- No DNS da Multilixo, crie um CNAME apontando para `seu-usuario.github.io`
- Pode levar até 24h pra propagar

---

## Dúvidas?

- O cadeado no canto inferior direito é seu único controle de edição
- Os dados vivem na planilha — você pode editar direto lá também
- Se algo der errado, o portal volta a funcionar em modo local (sem sincronizar) automaticamente
