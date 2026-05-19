// Generic primitives: Reveal, Modal, KPI, QuickLink, Toolbar, AddBlock, Chips
var React = window.React;
const { useState, useEffect, useRef, useCallback } = React;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, delay = 0, className = "", as: As = "div" }) => {
  const ref = useReveal();
  return <As ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</As>;
};

const Modal = ({ open, onClose, title, desc, children, footer }) => {
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-ov" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>{title}</h3>
        {desc && <p className="h-desc">{desc}</p>}
        {children}
        {footer && <div className="modal-actions">{footer}</div>}
      </div>
    </div>
  );
};

const Field = ({ label, children }) => (
  <div className="field">
    <label>{label}</label>
    {children}
  </div>
);

const KPI = ({ icon, val, lbl, delta, trend = "up", tone = "p" }) => (
  <div className={`card kpi ${tone === 'o' ? 'o' : tone === 'l' ? 'l' : ''}`}>
    <div className="kpi-ico"><Icon name={icon} size={20} /></div>
    <div className="kpi-val">{val}</div>
    <div className="kpi-lbl">{lbl}</div>
    {delta && <div className={`kpi-delta ${trend}`}>
      <Icon name={trend === 'up' ? 'trend' : 'trend'} size={12} /> {delta}
    </div>}
  </div>
);

const QuickLink = ({ icon, title, desc, tone = "p", onClick }) => (
  <div className={`card ql-card hover ${tone === 'o' ? 'o' : tone === 'l' ? 'l' : ''}`} onClick={onClick}>
    <div className="ico"><Icon name={icon} size={22} /></div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <div className="arr"><Icon name="arrow-right" size={14} /></div>
  </div>
);

const AddBlock = ({ label = "Adicionar bloco", sub = "Texto, imagem, link ou arquivo", onClick }) => (
  <button className="add-block" onClick={onClick}>
    <div className="plus">+</div>
    <div className="t">{label}</div>
    <div className="s">{sub}</div>
  </button>
);

const Toolbar = ({ search, onSearch, children, right }) => (
  <div className="toolbar">
    <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
      {typeof search === 'string' && (
        <div className="search">
          <span className="s-ico"><Icon name="search" size={16} /></span>
          <input placeholder="Buscar..." value={search} onChange={e => onSearch(e.target.value)} />
        </div>
      )}
      {children}
    </div>
    {right && <div style={{ display: 'flex', gap: 10 }}>{right}</div>}
  </div>
);

const Chips = ({ options, value, onChange }) => (
  <div className="chips">
    {options.map(o => (
      <button key={o} className={`chip ${value === o ? 'active' : ''}`} onClick={() => onChange(o)}>{o}</button>
    ))}
  </div>
);

const SectionHead = ({ eyebrow, title, right }) => (
  <div className="section-head">
    <div>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
    </div>
    {right}
  </div>
);

const Dropzone = ({ onFiles, accept = "*", label = "Arraste arquivos aqui ou clique para selecionar" }) => {
  const ref = useRef(null);
  const [drag, setDrag] = useState(false);
  return (
    <div
      className={`dropzone ${drag ? 'dragover' : ''}`}
      onClick={() => ref.current?.click()}
      onDragOver={e => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={e => { e.preventDefault(); setDrag(false); onFiles?.(Array.from(e.dataTransfer.files)); }}
    >
      <Icon name="upload" size={24} />
      <div style={{ marginTop: 8, fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>PDF, Excel, Word, imagens</div>
      <input ref={ref} type="file" multiple accept={accept} style={{ display: 'none' }} onChange={e => onFiles?.(Array.from(e.target.files))} />
    </div>
  );
};

Object.assign(window, { Reveal, Modal, Field, KPI, QuickLink, AddBlock, Toolbar, Chips, SectionHead, Dropzone, useReveal });

/* Universal attachment system — text, image, link, PDF, PPT, Word, PBI, anything */
const ATTACH_KINDS = [
  { id: 'note',   icon: 'file',  label: 'Nota / Texto' },
  { id: 'image',  icon: 'file',  label: 'Imagem' },
  { id: 'link',   icon: 'link',  label: 'Link / URL' },
  { id: 'embed',  icon: 'chart', label: 'Embed (Power BI, YouTube, iframe)' },
  { id: 'file',   icon: 'file',  label: 'Arquivo (PDF, PPT, Word, Excel)' },
];

const useLocalAttachments = (key, initial = []) => {
  const [items, setItems] = useState(() => {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : initial; } catch (e) { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(items)); } catch (e) {} }, [items, key]);
  return [items, setItems];
};

const fileToDataURL = (file) => new Promise((res) => {
  const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(file);
});

const SIZE_OPTIONS = [
  { id: 'sm',   label: 'Pequeno' },
  { id: 'md',   label: 'Médio' },
  { id: 'lg',   label: 'Grande' },
  { id: 'full', label: 'Destaque (largura total)' },
];

const AttachmentEditor = ({ open, onClose, onSave, initial }) => {
  const [kind, setKind] = useState('link');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [url, setUrl] = useState('');
  const [embed, setEmbed] = useState('');
  const [size, setSize] = useState('md');
  const [textPos, setTextPos] = useState('below');
  const [file, setFile] = useState(null);
  const [existing, setExisting] = useState(null);
  useEffect(() => {
    if (initial) {
      setKind(initial.kind || 'link');
      setTitle(initial.title || '');
      setBody(initial.body || initial.caption || '');
      setUrl(initial.url || '');
      setEmbed(initial.embed || '');
      setSize(initial.size || 'md');
      setTextPos(initial.textPos || 'below');
      setExisting(initial);
      setFile(null);
    } else {
      setKind('link'); setTitle(''); setBody(''); setUrl(''); setEmbed(''); setSize('md'); setTextPos('below'); setFile(null); setExisting(null);
    }
  }, [initial, open]);
  const reset = () => { setKind('link'); setTitle(''); setBody(''); setUrl(''); setEmbed(''); setSize('md'); setTextPos('below'); setFile(null); setExisting(null); };
  const uploadIfPossible = async (dataURL, filename) => {
    if (typeof window !== 'undefined' && typeof window.PCM_UPLOAD === 'function') {
      try {
        const url = await window.PCM_UPLOAD(dataURL, filename);
        if (url && typeof url === 'string' && url.indexOf('http') === 0) return url;
      } catch (e) { console.warn('upload helper falhou, mantendo base64', e); }
    }
    return dataURL;
  };
  const save = async () => {
    const id = existing?.id || (Date.now() + '-' + Math.random().toString(36).slice(2,7));
    const base = { id, kind, title: title || 'Sem título', size, textPos, body, date: existing?.date || new Date().toLocaleDateString('pt-BR') };
    if (kind === 'note')  return finish({ ...base });
    if (kind === 'link')  return finish({ ...base, url });
    if (kind === 'embed') return finish({ ...base, embed });
    if (kind === 'image') {
      if (file) {
        const dataURL = await fileToDataURL(file);
        const stored = await uploadIfPossible(dataURL, file.name);
        return finish({ ...base, dataURL: stored, fileName: file.name });
      }
      if (existing) return finish({ ...base, dataURL: existing.dataURL, fileName: existing.fileName });
    }
    if (kind === 'file') {
      if (file) {
        const dataURL = await fileToDataURL(file);
        const stored = await uploadIfPossible(dataURL, file.name);
        return finish({ ...base, dataURL: stored, fileName: file.name, fileSize: file.size, fileType: file.type });
      }
      if (existing) return finish({ ...base, dataURL: existing.dataURL, fileName: existing.fileName, fileSize: existing.fileSize, fileType: existing.fileType });
    }
  };
  const finish = (item) => { onSave(item); reset(); onClose(); };

  return (
    <Modal open={open} onClose={onClose} title={existing?'Editar conteúdo':'Adicionar conteúdo'} desc="Tipo, título, descrição e tamanho. Imagens e cards aparecem no fluxo da página."
      footer={<>
        <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={onClose}>Cancelar</button>
        <button className="btn btn-solid btn-sm" onClick={save}>Salvar</button>
      </>}>
      {!existing && <div className="kind-row">
        {ATTACH_KINDS.map(k => (
          <button key={k.id} className={`kind-btn ${kind===k.id?'active':''}`} onClick={()=>setKind(k.id)}>
            <Icon name={k.icon} size={16}/> {k.label}
          </button>
        ))}
      </div>}
      <Field label="Título"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ex.: A Casa Multilixo, PDM 2026, Dashboard PBI..." /></Field>
      {kind === 'link' && <Field label="URL"><input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://..." /></Field>}
      {kind === 'embed' && <Field label="Cole o iframe ou URL embed (Power BI publish to web, YouTube embed, etc)"><textarea rows={4} value={embed} onChange={e=>setEmbed(e.target.value)} placeholder='<iframe src="..." />' /></Field>}
      {(kind === 'image' || kind === 'file') && (
        <Field label={kind==='image' ? (existing?'Trocar imagem (opcional)':'Imagem') : (existing?'Trocar arquivo (opcional)':'Arquivo (PDF, PPT, Word, Excel...)')}>
          <input type="file" accept={kind==='image'?'image/*':'*'} onChange={e=>setFile(e.target.files[0])} />
          {existing && existing.fileName && <div style={{fontSize:12,color:'var(--ink-3)',marginTop:6}}>Atual: {existing.fileName}</div>}
        </Field>
      )}
      <Field label={kind==='note' ? 'Texto' : 'Descrição (texto livre — opcional)'}><textarea rows={kind==='note'?6:3} value={body} onChange={e=>setBody(e.target.value)} placeholder={kind==='note' ? 'Escreva sua nota...' : 'Adicione contexto, valores, legendas...'} /></Field>
      <Field label="Tamanho no fluxo">
        <div className="size-row">
          {SIZE_OPTIONS.map(s => (
            <button key={s.id} type="button" className={`size-btn ${size===s.id?'active':''}`} onClick={()=>setSize(s.id)}>{s.label}</button>
          ))}
        </div>
      </Field>
      {(kind==='image' || kind==='embed') && <Field label="Posição do texto">
        <div className="size-row">
          <button type="button" className={`size-btn ${textPos==='above'?'active':''}`} onClick={()=>setTextPos('above')}>Texto em cima</button>
          <button type="button" className={`size-btn ${textPos==='below'?'active':''}`} onClick={()=>setTextPos('below')}>Texto embaixo</button>
        </div>
      </Field>}
    </Modal>
  );
};

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);
  if (!src) return null;
  return (
    <div className="lightbox-ov" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>
      <img src={src} alt={alt} onClick={(e)=>e.stopPropagation()} />
    </div>
  );
};

const AttachmentToolbar = ({ onEdit, onDelete }) => (
  <div className="att-tools">
    <button className="att-tool" title="Editar" onClick={(e)=>{e.preventDefault();e.stopPropagation();onEdit();}}><Icon name="edit" size={14}/></button>
    <button className="att-tool" title="Remover" onClick={(e)=>{e.preventDefault();e.stopPropagation();onDelete();}}>×</button>
  </div>
);

const AttachmentCard = ({ item, onDelete, onEdit }) => {
  const [zoom, setZoom] = useState(false);
  const size = item.size || 'md';
  const textPos = item.textPos || 'below';
  const wrapClass = `att-card att-${item.kind} att-size-${size}`;
  const TextBlock = () => (
    <>
      {item.title && item.title !== 'Sem título' && <div className="att-title-text">{item.title}</div>}
      {item.body && <div className="att-body">{item.body}</div>}
    </>
  );
  if (item.kind === 'note') return (
    <div className={wrapClass}>
      <AttachmentToolbar onEdit={onEdit} onDelete={()=>onDelete(item.id)} />
      <div className="att-title-text">{item.title}</div>
      <div className="att-body">{item.body}</div>
      <div className="att-foot">{item.date}</div>
    </div>
  );
  if (item.kind === 'image') return (
    <>
      <div className={wrapClass}>
        <AttachmentToolbar onEdit={onEdit} onDelete={()=>onDelete(item.id)} />
        {textPos === 'above' && <TextBlock />}
        <img src={item.dataURL} alt={item.title} onClick={()=>setZoom(true)} />
        {textPos !== 'above' && <TextBlock />}
        <div className="att-foot">{item.fileName} · {item.date}</div>
      </div>
      {zoom && <Lightbox src={item.dataURL} alt={item.title} onClose={()=>setZoom(false)} />}
    </>
  );
  if (item.kind === 'link') return (
    <a className={wrapClass} href={item.url} target="_blank" rel="noreferrer">
      <AttachmentToolbar onEdit={onEdit} onDelete={()=>onDelete(item.id)} />
      <div className="att-title-text">{item.title}</div>
      <div className="att-url">{item.url}</div>
      {item.body && <div className="att-body">{item.body}</div>}
      <div className="att-foot">{item.date}</div>
    </a>
  );
  if (item.kind === 'embed') return (
    <div className={wrapClass}>
      <AttachmentToolbar onEdit={onEdit} onDelete={()=>onDelete(item.id)} />
      {textPos === 'above' && <TextBlock />}
      <div className="att-embed-wrap" dangerouslySetInnerHTML={{__html: item.embed.startsWith('<') ? item.embed : `<iframe src="${item.embed}" frameborder="0" allowfullscreen></iframe>`}} />
      {textPos !== 'above' && <TextBlock />}
      <div className="att-foot">{item.date}</div>
    </div>
  );
  if (item.kind === 'file') return (
    <a className={wrapClass} href={item.dataURL} download={item.fileName}>
      <AttachmentToolbar onEdit={onEdit} onDelete={()=>onDelete(item.id)} />
      <div className="att-title-text">{item.title}</div>
      <div className="att-file-info">
        <div className="att-file-ico">{(item.fileName||'').split('.').pop().toUpperCase().slice(0,4)}</div>
        <div>
          <div className="att-file-n">{item.fileName}</div>
          <div className="att-file-s">{item.fileSize?Math.round(item.fileSize/1024)+' KB':''} · {item.date}</div>
        </div>
      </div>
      {item.body && <div className="att-body">{item.body}</div>}
    </a>
  );
  return null;
};

const FreeContentBoard = ({ storageKey, title = "Conteúdo livre", subtitle = "Adicione apresentações, imagens, textos, links, PowerBI, vídeos — qualquer coisa." }) => {
  const [items, setItems] = useLocalAttachments(storageKey, []);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const upsert = (item) => {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === item.id);
      if (idx >= 0) { const copy = prev.slice(); copy[idx] = item; return copy; }
      return [...prev, item];
    });
  };
  const del = (id) => setItems(items.filter(i => i.id !== id));
  return (
    <div className="free-board">
      <div className="free-board-head">
        <div>
          <div className="eyebrow">Espaço livre</div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="att-grid">
        {items.map(it => <AttachmentCard key={it.id} item={it} onDelete={del} onEdit={()=>{setEditing(it);setOpen(true);}} />)}
        <button className="att-add-tile" onClick={()=>{setEditing(null);setOpen(true);}}>
          <div className="plus">+</div>
          <div className="t">{items.length === 0 ? 'Adicionar primeiro conteúdo' : 'Adicionar mais conteúdo'}</div>
          <div className="s">Texto · Imagem · Link · Embed · Arquivo</div>
        </button>
      </div>
      <AttachmentEditor open={open} onClose={()=>{setOpen(false);setEditing(null);}} onSave={upsert} initial={editing} />
    </div>
  );
};

Object.assign(window, { AttachmentEditor, AttachmentCard, FreeContentBoard, useLocalAttachments, fileToDataURL });
