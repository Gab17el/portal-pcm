// Quem Somos, Projetos, Iniciativas, Novidades, Equipe — with detail views and attachments
var React = window.React;
const { useState, useEffect } = React;

const QuemSomosPage = () => {
  const [siteUrl, setSiteUrl] = useState(() => localStorage.getItem('pcm.qs.site') || 'https://www.grupomultilixo.com.br/');
  const [editing, setEditing] = useState(false);
  const [tmp, setTmp] = useState(siteUrl);
  const saveSite = () => {
    let v = (tmp||'').trim();
    if (v && !/^https?:\/\//i.test(v)) v = 'https://' + v;
    setSiteUrl(v); localStorage.setItem('pcm.qs.site', v); setEditing(false);
  };
  const [embedSite, setEmbedSite] = useState(() => localStorage.getItem('pcm.qs.embed') === '1');
  const toggleEmbed = (v) => { setEmbedSite(v); localStorage.setItem('pcm.qs.embed', v?'1':'0'); };

  const companies = [
    { n: 'Multilixo',       d: 'Gestão de Resíduos' },
    { n: 'Flacipel',        d: 'Reciclagem' },
    { n: 'Multi Bioenergia',d: 'Reciclagem de Madeira' },
    { n: 'UTGR',            d: 'Gestão de Aterro' },
    { n: 'BIOBR',           d: 'Resíduos em Energia Limpa' },
    { n: 'Trata Entulho',   d: 'Resíduos da Construção Civil' },
    { n: 'Multi UVR',       d: 'Reciclagem Energética' },
    { n: 'UR Florestal',    d: 'Reflorestamento' },
    { n: 'Multi Cultivo',   d: 'Compostagem' },
    { n: 'TWM Ambiental',   d: 'Resíduos Perigosos' },
  ];

  return (
  <div className="page">
    <Reveal>
      <div className="qs-hero qs-hero-tight">
        <div className="qs-hero-text">
          <div className="eyebrow">Quem Somos</div>
          <h2>Papel fundamental no <span style={{color:'var(--orange)'}}>futuro</span> das próximas gerações.</h2>
          <p>O Grupo Multilixo é formado por <strong>10 empresas, 100% familiar</strong>, com mais de <strong>30 anos</strong> no mercado brasileiro. Líder na gestão de resíduos e o maior grupo de logística circular de São Paulo.</p>
          <p>Fundado em 1993 com a <strong>Flacipel</strong> e em 1996 com a <strong>Multilixo</strong>, o grupo cresceu unindo eficiência ambiental, impacto social e resultado.</p>
          <div style={{display:'flex',gap:10,marginTop:20,flexWrap:'wrap',alignItems:'center'}}>
            <a className="btn btn-primary btn-sm" href={siteUrl} target="_blank" rel="noreferrer"><Icon name="link" size={14}/> Site institucional</a>
            <button className="btn btn-outline btn-sm" onClick={()=>{setTmp(siteUrl);setEditing(true);}}><Icon name="edit" size={14}/> Editar URL</button>
            <label style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:'var(--ink-2)',cursor:'pointer'}}>
              <input type="checkbox" checked={embedSite} onChange={e=>toggleEmbed(e.target.checked)} /> Incorporar site na página
            </label>
          </div>
          {editing && (
            <div style={{marginTop:12,display:'flex',gap:8}}>
              <input value={tmp} onChange={e=>setTmp(e.target.value)} placeholder="https://www.grupomultilixo.com.br/" style={{flex:1,padding:'8px 12px',border:'1px solid var(--line)',borderRadius:8,fontSize:13}}/>
              <button className="btn btn-solid btn-sm" onClick={saveSite}>Salvar</button>
            </div>
          )}
        </div>

        <div className="qs-diagram qs-diagram-tight">
          <div className="qs-feature-logo">
            <div className="qs-feature-logo-ring">
              <img src="assets/multilixo-logo.png" alt="Grupo Multilixo" />
            </div>
            <div className="qs-feature-stat">
              <div className="qs-feature-num">10</div>
              <div className="qs-feature-lbl">Empresas<br/>do grupo</div>
            </div>
          </div>
          <div className="qs-co-grid">
            {companies.map((c) => (
              <div key={c.n} className="qs-co-card">
                <div className="qs-co-dot" />
                <div className="qs-co-info">
                  <div className="qs-co-n">{c.n}</div>
                  <div className="qs-co-d">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>

    {embedSite && (
      <div className="section">
        <SectionHead eyebrow="Site institucional" title="Grupo Multilixo · ao vivo" right={<a className="btn btn-outline btn-sm" href={siteUrl} target="_blank" rel="noreferrer"><Icon name="link" size={14}/> Abrir em nova aba</a>} />
        <div className="qs-embed">
          <iframe src={siteUrl} title="Site Grupo Multilixo" />
        </div>
        <p style={{fontSize:12,color:'var(--ink-3)',marginTop:8}}>Caso o site não carregue dentro do iframe (alguns sites bloqueiam), use o botão acima.</p>
      </div>
    )}

    <div className="section">
      <SectionHead eyebrow="Os números" title="Multilixo em escala" />
      <div className="grid grid-4">
        <KPI icon="clock" val="+30" lbl="Anos de mercado" tone="p" />
        <KPI icon="truck" val="+1.200" lbl="Caminhões" tone="o" />
        <KPI icon="users" val="+8.000" lbl="Clientes ativos" tone="l" />
        <KPI icon="target" val="+9.000" lbl="Pontos diários" tone="p" />
      </div>
    </div>

    <div className="section">
      <SectionHead eyebrow="Nossos pilares" title="O que nos move" />
      <div className="about-pillars">
        {[
          { i:'shield', t:'Honestidade', d:'Integridade e transparência em tudo que fazemos.' },
          { i:'target', t:'Responsabilidade', d:'Foco em resultado e compromisso com o prazo.' },
          { i:'trend', t:'Eficiência', d:'Excelência em cada entrega, do planejamento à rua.' },
          { i:'leaf', t:'Sustentabilidade', d:'Cuidamos do planeta — é o nosso ofício.' },
        ].map((p,i) => (
          <Reveal key={p.t} delay={i*80}>
            <div className="pillar">
              <div className="ico"><Icon name={p.i} size={22}/></div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <div className="section">
      <FreeContentBoard storageKey="pcm.quemsomos.free" title="Mais conteúdo institucional" subtitle="Adicione apresentações, vídeos, links, PDFs, fotos — qualquer material sobre o grupo." />
    </div>
  </div>
  );
};

// Generic detail panel for an item with attachments
const DetailPanel = ({ item, onClose, kind }) => {
  if (!item) return null;
  return (
    <div className="card" style={{padding:'32px 36px',marginBottom:32,border:'1px solid var(--purple-100)',boxShadow:'var(--shadow-md)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16,marginBottom:18}}>
        <div>
          <div style={{fontFamily:'JetBrains Mono',fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--purple-700)',fontWeight:500,marginBottom:8}}>{kind} · {item.date || item.s || 'Detalhes'}</div>
          <h2 style={{fontSize:28,marginBottom:6}}>{item.t || item.title}</h2>
          {item.who && <div style={{fontSize:13,color:'var(--ink-3)'}}>Por <strong style={{color:'var(--ink)'}}>{item.who}</strong> · {item.area}</div>}
        </div>
        <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={onClose}><Icon name="x" size={14}/> Fechar</button>
      </div>

      <p style={{fontSize:15,color:'var(--ink-2)',marginBottom:22,lineHeight:1.6}}>{item.full || item.b || item.d || item.desc}</p>

      {item.imp && (
        <div style={{padding:'14px 18px',background:'var(--surface-2)',borderRadius:10,borderLeft:`3px solid var(--orange)`,marginBottom:22}}>
          <div style={{fontFamily:'JetBrains Mono',fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-3)',fontWeight:600}}>Impacto</div>
          <div style={{fontSize:15,fontWeight:600,marginTop:2}}>{item.imp}</div>
        </div>
      )}

      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14,marginTop:6}}>
        <h3 style={{fontSize:16,fontWeight:700}}>Evidências e arquivos</h3>
        <button className="btn btn-outline btn-sm"><Icon name="upload" size={14}/> Anexar</button>
      </div>
      <div className="grid grid-2" style={{gap:12}}>
        {(item.files || [
          { ft:'PDF', n:'Apresentação.pdf', s:'1.4 MB' },
          { ft:'XLS', n:'Plano-de-acao.xlsx', s:'320 KB' },
          { ft:'IMG', n:'Foto-evidencia-01.jpg', s:'2.1 MB' },
        ]).map((f,i) => (
          <div key={i} className="card pop-card hover" style={{padding:'14px 16px'}}>
            <div className="ft-ico" style={{width:36,height:36,fontSize:10}}>{f.ft}</div>
            <div className="body">
              <div className="title" style={{fontSize:14}}>{f.n}</div>
              <div className="meta"><span>{f.s}</span></div>
            </div>
            <div className="dl"><Icon name="download" size={14}/> Abrir</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const useEditMode = () => {
  const [on, setOn] = useState(() => document.body.dataset.editMode === '1');
  useEffect(() => {
    const sync = () => setOn(document.body.dataset.editMode === '1');
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ['data-edit-mode'] });
    sync();
    return () => obs.disconnect();
  }, []);
  return on;
};

const fmtData = (v) => { if (!v) return '—'; const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v); return m ? `${m[3]}/${m[2]}/${m[1]}` : v; };

const WorkItemDetail = ({ item, kind, evKey, onClose, onSave, editMode }) => {
  if (!item) return null;
  const set = (patch) => onSave({ ...item, ...patch });
  const infoBox = (label, node) => (
    <div style={{ flex: '1 1 180px', minWidth: 160 }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', fontWeight: 600, marginBottom: 4 }}>{label}</div>
      {node}
    </div>
  );
  return (
    <div className="card" style={{ padding: '32px 36px', marginBottom: 32, border: '1px solid var(--purple-100)', boxShadow: 'var(--shadow-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple-700)', fontWeight: 500, marginBottom: 8 }}>{kind}{item.s ? ' · ' + item.s : ''}</div>
          <h2 style={{ fontSize: 28, marginBottom: 6 }}>{item.t}</h2>
        </div>
        <button className="btn btn-ghost btn-sm" style={{ background: 'var(--surface-2)', color: 'var(--ink)', border: '1px solid var(--line)' }} onClick={onClose}><Icon name="x" size={14} /> Fechar</button>
      </div>

      <p style={{ fontSize: 15, color: 'var(--ink-2)', marginBottom: 22, lineHeight: 1.6 }}>{item.full || item.d}</p>

      {item.imp &&
      <div style={{ padding: '14px 18px', background: 'var(--surface-2)', borderRadius: 10, borderLeft: '3px solid var(--orange)', marginBottom: 22 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', fontWeight: 600 }}>Impacto</div>
          <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{item.imp}</div>
        </div>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, padding: '18px 20px', background: 'var(--surface-2)', borderRadius: 12, marginBottom: 26 }}>
        {infoBox('Responsável', editMode ?
          <input value={item.resp || ''} onChange={e => set({ resp: e.target.value })} placeholder="Nome do responsável" style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line-strong)', fontFamily: 'inherit', fontSize: 14 }} /> :
          <div style={{ fontSize: 14, fontWeight: 600 }}>{item.resp || '—'}</div>)}
        {infoBox('Início', editMode ?
          <input type="date" value={item.inicio || ''} onChange={e => set({ inicio: e.target.value })} style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line-strong)', fontFamily: 'inherit', fontSize: 14 }} /> :
          <div style={{ fontSize: 14, fontWeight: 600 }}>{fmtData(item.inicio)}</div>)}
        {infoBox('Término', editMode ?
          <input type="date" value={item.fim || ''} onChange={e => set({ fim: e.target.value })} style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line-strong)', fontFamily: 'inherit', fontSize: 14 }} /> :
          <div style={{ fontSize: 14, fontWeight: 600 }}>{fmtData(item.fim)}</div>)}
        {infoBox('Status', editMode ?
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, cursor: 'pointer' }}>
            <input type="checkbox" checked={!!item.done} onChange={e => set({ done: e.target.checked })} /> Concluído
          </label> :
          <div style={{ fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, color: item.done ? '#16a34a' : 'var(--ink-2)' }}>
            {item.done ? <><Icon name="check" size={16} /> Concluído</> : 'Em andamento'}
          </div>)}
      </div>

      <FreeContentBoard storageKey={evKey} title="Evidências" subtitle="Anexe imagens, apresentações, textos ou links especificando o que foi feito." />
    </div>
  );
};

const ProjetosPage = () => {
  const [filter, setFilter] = useState('Todos');
  const [open, setOpen] = useState(false);
  const [focusedId, setFocusedId] = useState(null);
  const editMode = useEditMode();
  const cats = ['Todos', 'Concluído', 'Em andamento', 'Planejado'];
  const seed = [
    { s:'Concluído', cls:'', t:'MAPROs Mapeadas', d:'Mapas de processo da manutenção escritos, padronizados e disponíveis no portal.', full:'Mapeamento e escrita dos MAPROs (mapas de processo) da manutenção, padronizados e centralizados no portal digital com busca e versionamento. Substituiu pastas físicas e arquivos espalhados em e-mails.', imp:'Processos mapeados e acessíveis online', who:'Gabriel Santos', area:'PCM', tone:'p', files:[{ft:'XLS',n:'MAPROs-consolidados.xlsx',s:'—'}] },
    { s:'Concluído', cls:'', t:'Follow-up diário SGM', d:'Rotina diária de checagem dos caminhões e máquinas, com indicadores em tempo real.', full:'Implementação de uma rotina diária de 30 minutos onde toda a equipe revisa o status da frota, prioriza ações e atualiza os indicadores. Reduziu drasticamente o tempo de reação a problemas.', imp:'Redução de 38% no tempo de reação', who:'Equipe PCM', area:'PCM + Operação', tone:'o' },
    { s:'Concluído', cls:'', t:'Reunião 360', d:'Reunião semanal para tratar custo, atualizações e diretrizes do PCM.', full:'Reunião semanal de manutenção (360) com a liderança para acompanhar custo, atualizações dos projetos e definir diretrizes do PCM. Apoiada pelos painéis de Power BI do portal.', imp:'Liderança alinhada toda semana', who:'Gabriel Santos', area:'PCM', tone:'l' },
    { s:'Em andamento', cls:'ip', t:'Padronização dos POPs', d:'Revisão de todos os procedimentos operacionais e unificação de formatos.', full:'Revisão de todos os 60+ POPs da manutenção, unificando formato, criando capa padrão, adicionando fluxograma e validando com a equipe técnica.', imp:'62% dos POPs revisados', who:'Equipe PCM', area:'PCM', tone:'o' },
    { s:'Concluído', cls:'', t:'TCO · Custo Total de Propriedade', d:'Metodologia trazida pelo diretor Júlio, aplicada na renovação de frota.', full:'Metodologia de TCO (Custo Total de Propriedade) trazida pelo diretor de manutenção Júlio e aplicada na renovação da frota, gerando economia e permitindo comparação objetiva entre marcas.', imp:'Economia e comparação entre marcas', who:'Júlio Scalisse · Gabriel Santos', area:'Engenharia de Manutenção', tone:'p' },
    { s:'Concluído', cls:'', t:'Checklist de Retífica', d:'Acompanhamento de todo motor enviado para retífica.', full:'Checklist criado para acompanhar cada motor enviado às retíficas — entrada, status, orçamento e retorno — dando rastreabilidade total ao processo.', imp:'Rastreabilidade dos motores em retífica', who:'Gabriel Santos', area:'PCM', tone:'o' },
    { s:'Concluído', cls:'', t:'Checklist de Aquisição de Empresas', d:'Roteiro padrão para due diligence de manutenção em aquisições.', full:'Checklist padronizado para avaliar a estrutura de manutenção em processos de aquisição de empresas, apoiando a tomada de decisão.', imp:'Due diligence padronizada', who:'Gabriel Santos', area:'PCM', tone:'l' },
    { s:'Concluído', cls:'', t:'Indicadores no Power BI', d:'CRM, Orçado x Realizado, Custo de Peças, Custo de Veículos, Frota Auxiliar e Ordem de Serviço.', full:'Conjunto de painéis no Power BI: CRM, Orçado x Realizado, Custo de Peças, Custo de Veículos, Frota Auxiliar e Ordem de Serviço — todos disponíveis no portal.', imp:'6 painéis no ar', who:'Gabriel Santos', area:'PCM', tone:'p' },
    { s:'Concluído', cls:'', t:'POPs Críticas Mapeadas', d:'23 POPs críticas mapeadas e documentadas.', full:'Mapeamento e documentação das 23 POPs consideradas críticas para a operação da manutenção.', imp:'23 POPs críticas mapeadas', who:'Equipe PCM', area:'PCM', tone:'o' },
    { s:'Concluído', cls:'', t:'Mapa de Processos', d:'Mapeamento dos processos da manutenção.', full:'Mapa consolidado dos processos da manutenção, base para padronização e digitalização.', imp:'Processos mapeados', who:'Gabriel Santos', area:'PCM', tone:'l' },
    { s:'Concluído', cls:'', t:'Arquitetura da Nova Sede', d:'Projeto de arquitetura e layout da nova sede.', full:'Definição de arquitetura e layout operacional da nova sede, incluindo fluxo de veículos e boxes de manutenção.', imp:'Layout definido', who:'Gabriel Santos', area:'PCM + Engenharia', tone:'p' },
    { s:'Concluído', cls:'', t:'Arquitetura Jacareí', d:'Projeto de arquitetura do polo de Jacareí.', full:'Arquitetura e layout do novo polo regional de Jacareí (Vale do Paraíba), com inventário de frota, garagem e fluxo operacional.', imp:'Polo Jacareí estruturado', who:'Gabriel Santos', area:'PCM + Engenharia', tone:'o' },
    { s:'Concluído', cls:'', t:'Organograma de Manutenção e Máquinas', d:'Estrutura organizacional da manutenção e de máquinas.', full:'Organograma completo das áreas de manutenção e máquinas, com papéis e responsabilidades definidos.', imp:'Estrutura organizacional definida', who:'Gabriel Santos', area:'PCM', tone:'l' },
    { s:'Concluído', cls:'', t:'Cobrança Automática de ATA por E-mail', d:'Disparo automático de cobrança das atas do PCM por e-mail.', full:'Automação que cobra as atas das reuniões do PCM por e-mail, sem intervenção manual.', imp:'Cobrança 100% automática', who:'Gabriel Santos', area:'PCM', tone:'p' },
    { s:'Concluído', cls:'', t:'Indicador MTR / VTR · Envio 18h', d:'Indicador de máquinas e veículos retidos com envio automático diário às 18:00.', full:'Indicador de MTR (máquinas retidas) e VTR (veículos retidos) com envio automático por e-mail todo dia às 18:00.', imp:'Envio automático diário às 18h', who:'Gabriel Santos', area:'PCM', tone:'o' },
    { s:'Concluído', cls:'', t:'Mapeamento Multi Bio e Multilixo', d:'Mapeamento dos sistemas Oracle, SB e SISMA.', full:'Mapeamento dos processos e sistemas da Multi Bio e da Multilixo, cobrindo Oracle, SB e SISMA, para integração e padronização.', imp:'Sistemas mapeados (Oracle · SB · SISMA)', who:'Gabriel Santos', area:'PCM + TI', tone:'l' },
  ];
  const initial = seed.map((p, idx) => ({ id: 'p' + (idx + 1), resp: p.who, inicio: '', fim: '', done: p.s === 'Concluído', ...p }));
  const [projects, setProjects] = useLocalAttachments('pcm.projetos.v1', initial);
  const focused = projects.find(p => p.id === focusedId) || null;
  const filtered = projects.filter(p => filter === 'Todos' || p.s === filter);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">O que o PCM já entregou</div>
          <h1>Projetos entregues</h1>
          <p className="lead">Cada projeto com seu dono, descrição e impacto medido na operação. Clique em qualquer card para ver evidências e arquivos.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Icon name="plus" size={16}/> Novo projeto</button>
      </div>

      {focused && <WorkItemDetail item={focused} kind="Projeto" evKey={'pcm.ev.proj.' + focused.id} onClose={() => setFocusedId(null)} onSave={(u) => setProjects(projects.map(x => x.id === u.id ? u : x))} editMode={editMode} />}

      <Toolbar>
        <Chips options={cats} value={filter} onChange={setFilter} />
      </Toolbar>

      <div className="grid grid-3">
        {filtered.map((p,i) => (
          <Reveal key={i} delay={i*50}>
            <div className={`card proj-card hover ${p.tone}`} style={{cursor:'pointer'}} onClick={() => setFocusedId(p.id)}>
              <div className={`status ${p.cls}`}><span style={{width:6,height:6,borderRadius:'50%',background:'currentColor'}}></span>{p.s}</div>
              <h3>{p.t}</h3>
              <p className="desc">{p.d}</p>
              <div className="impact">
                <div className="lbl">Impacto</div>
                <div className="val">{p.imp}</div>
              </div>
              <div className="owner" style={{justifyContent:'flex-end',gap:8}}>
                {p.done && <span style={{marginRight:'auto',display:'inline-flex',alignItems:'center',gap:5,fontSize:12,fontWeight:600,color:'#16a34a'}}><Icon name="check" size={14}/> Concluído</span>}
                <div style={{color:'var(--purple-800)',fontSize:12,fontWeight:600,display:'inline-flex',alignItems:'center',gap:4}}>Ver <Icon name="arrow-right" size={12}/></div>
              </div>
            </div>
          </Reveal>
        ))}
        <AddBlock label="Adicionar projeto" sub="Nome, descrição, dono, impacto" onClick={() => setOpen(true)} />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Novo projeto entregue">
        <Field label="Nome do projeto"><input placeholder="Ex.: Automação da OS"/></Field>
        <Field label="Descrição"><textarea placeholder="O que foi feito?"/></Field>
        <Field label="Impacto"><input placeholder="Ex.: -30% em tempo de diagnóstico"/></Field>
        <Field label="Responsável"><input placeholder="Nome · Área"/></Field>
        <Field label="Evidências (arquivos)"><Dropzone /></Field>
        <div className="modal-actions">
          <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={() => setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={() => setOpen(false)}>Salvar</button>
        </div>
      </Modal>

      <div className="section" style={{marginTop:48}}>
        <FreeContentBoard storageKey="pcm.projetos.free" title="Mais conteúdo de projetos" subtitle="Apresentações, dashboards, fotos, links — tudo o que apoia os projetos." />
      </div>
    </div>
  );
};

const IniciativasPage = () => {
  const [focusedId, setFocusedId] = useState(null);
  const [open, setOpen] = useState(false);
  const editMode = useEditMode();
  const seed = [
    { t:'Quadro Visual da Oficina', d:'Implementação de quadro visual kanban para acompanhamento em tempo real das OS na oficina.', full:'Instalamos um quadro físico + digital de OS na oficina, com colunas: Fila → Em execução → Aguarda peça → Concluído. Toda a equipe contribui na atualização em tempo real, com fotos do antes/depois.', who:'Gabriel Santos', area:'Analista PCM', tone:'p' },
    { t:'Integração Planilhas → Power BI', d:'Automatização da ingestão de dados das planilhas SGM no Power BI, sem digitação manual.', full:'Antes: planilhas SGM eram preenchidas manualmente e copiadas para outras bases. Agora: scripts Power Query automatizam a ingestão diretamente do SGM para o Power BI.', who:'Gabriel Santos', area:'Analista PCM', tone:'l' },
    { t:'Padrão de Abertura de OS', d:'Criação de template único para abertura de OS, com campos obrigatórios e classificação.', full:'Criação de um padrão único de abertura de OS — campos obrigatórios, classificação ABC de criticidade e linkagem direta com o estoque de peças.', who:'Equipe PCM', area:'PCM', tone:'p' },
    { t:'Ronda 5S Mensal', d:'Implantação de auditoria 5S mensal nas oficinas, com pontuação e plano de ação.', full:'Auditoria 5S mensal nas oficinas, com checklist objetivo, pontuação e plano de ação para cada item identificado. Resultados publicados na intranet.', who:'Gabriel Santos', area:'Analista PCM', tone:'o' },
    { t:'Reunião Diária do PCM', d:'Rotina de 15 minutos toda manhã — backlog, prioridades, bloqueios.', full:'Stand-up diário de 15 minutos toda manhã às 7h30: backlog do dia, prioridades, bloqueios. Aumentou drasticamente a velocidade de resposta e a coesão da equipe.', who:'Equipe PCM', area:'PCM', tone:'l' },
    { t:'Projeto Importação de Peças e Pneus da China', d:'Importação direta de peças e pneus da China para reduzir o custo de aquisição.', full:'Iniciativa de importação direta de peças e pneus da China, encurtando a cadeia de fornecimento e reduzindo o custo unitário de aquisição frente aos fornecedores locais.', who:'Gabriel Santos', area:'PCM + Compras', tone:'p' },
    { t:'Projeto Estoque de Peças Consignado', d:'Estoque de peças em consignação com fornecedor parceiro, reduzindo capital imobilizado.', full:'Modelo de estoque de peças em consignação: o fornecedor mantém o material no almoxarifado e a Multilixo só paga pelo que consome, reduzindo capital imobilizado e risco de obsolescência.', who:'Gabriel Santos', area:'PCM + Compras', tone:'o' },
    { t:'Catálogo Digital de Peças — CDI', d:'Saneamento de estoque, acurácia de compras e identificação padronizada de peças.', full:'Proposta ASSISTE (22/2026) para o Catálogo Digital Interativo de peças, padronizando a identificação e melhorando a acurácia das compras. CAPEX/OPEX em negociação com a T.I.', who:'Gabriel Santos', area:'PCM + TI · ASSISTE', tone:'l' },
    { t:'Views / Banco de Dados — Power BI', d:'8 views para acabar com tabelas manuais — dashboards em tempo real e autonomia gerencial.', full:'Proposta ASSISTE (3/2026): criação de 8 views/análises no banco para alimentar o Power BI diretamente, eliminando tabelas manuais e dando autonomia gerencial sobre os dados.', who:'Gabriel Santos', area:'PCM + TI · ASSISTE', tone:'p' },
    { t:'GT Frota', d:'Controle de combustível e avaliação de contrato de manutenção preventiva — rastreabilidade total.', full:'Avaliação do contrato de manutenção preventiva e controle de combustível via GT Frota, garantindo que 100% do combustível passe pelo sistema e rastreabilidade total.', who:'PCM + TI', area:'Operação', tone:'o' },
    { t:'Integração SISMA ↔ SB · Baixa de Peças', d:'Baixa de peças em tempo real — fim das baixas erradas e do backlog.', full:'Integração entre SISMA e SB para baixa de peças em tempo real, eliminando baixas erradas e o backlog de lançamentos. Concluído.', who:'PCM + TI', area:'TI · ASSISTE', tone:'l' },
    { t:'Portal do Fornecedor', d:'Orçamentos externos sistêmicos, histórico auditável e análise de variação.', full:'Proposta ASSISTE (19/2026): portal para os fornecedores enviarem orçamentos de forma sistêmica, com histórico auditável e análise de variação de preços. Requer integração com o SISMA.', who:'PCM + TI', area:'TI · ASSISTE', tone:'p' },
    { t:'Automação Teams — n8n + IA', d:'Jornal PCM diário automático e cobrança de atas — elimina trabalho manual.', full:'Workflows n8n + IA (Gemini) que geram o Jornal PCM diário, fazem a cobrança automática de atas e disparam notificações — eliminando trabalho manual repetitivo. Concluído.', who:'Gabriel Santos', area:'PCM', tone:'o' },
    { t:'Módulo Materiais (MRO)', d:'Gestão de estoque integrada ao SISMA, eliminando controles paralelos.', full:'Proposta ASSISTE (23/02/2026): módulo de materiais (MRO) integrado ao SISMA para gestão de estoque, eliminando os controles paralelos em planilhas.', who:'PCM + TI', area:'TI · ASSISTE', tone:'l' },
    { t:'RENOVE (CAUE)', d:'Análise estratégica do ponto ótimo de substituição de máquinas.', full:'Ferramenta RENOVE (CAUE) para análise do ponto ótimo de substituição de máquinas, valorada por número de modelos. Em avaliação com a T.I.', who:'PCM + TI', area:'Engenharia de Manutenção', tone:'p' },
    { t:'Filiais sem SISMA', d:'Ampliação de 31 licenças para padronizar a manutenção em todas as unidades.', full:'Ampliação de 31 licenças SISMA para cobrir as 11 filiais ainda sem o sistema (Sorocaba, Campinas, Multibio, Tatuí, Taboão, Mucuri, Três Lagoas, entre outras), padronizando os processos de manutenção.', who:'PCM + TI', area:'TI', tone:'o' },
    { t:'Vídeo Aulas Multilixo', d:'Treinamento em vídeo para reduzir erros operacionais por uso incorreto do sistema.', full:'Produção de vídeo aulas internas da Multilixo para treinar os usuários no uso correto do sistema, reduzindo erros operacionais. Plataforma de gravação em verificação.', who:'PCM', area:'PCM + RH', tone:'l' },
    { t:'Checklist SISMA', d:'Digitalização de inspeções preventivas e padronização de checklists no app SISMA.', full:'Proposta ASSISTE (02/2026): digitalizar as inspeções preventivas e padronizar os checklists diretamente no app SISMA.', who:'PCM + TI', area:'TI · ASSISTE', tone:'p' },
  ];
  const initial = seed.map((p, idx) => ({ id: 'i' + (idx + 1), resp: p.who, inicio: '', fim: '', done: false, ...p }));
  const [items, setItems] = useLocalAttachments('pcm.iniciativas.v1', initial);
  const focused = items.find(p => p.id === focusedId) || null;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Iniciativas do PCM</div>
          <h1>Iniciativas internas</h1>
          <p className="lead">Pequenas e grandes melhorias que nasceram dentro do PCM. Clique em qualquer card para ver detalhes e evidências.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Icon name="plus" size={16}/> Nova iniciativa</button>
      </div>

      {focused && <WorkItemDetail item={focused} kind="Iniciativa" evKey={'pcm.ev.init.' + focused.id} onClose={() => setFocusedId(null)} onSave={(u) => setItems(items.map(x => x.id === u.id ? u : x))} editMode={editMode} />}

      <div className="grid grid-3">
        {items.map((it,i) => (
          <Reveal key={i} delay={i*50}>
            <div className={`card proj-card hover ${it.tone}`} style={{cursor:'pointer'}} onClick={() => setFocusedId(it.id)}>
              <div className="status">{it.done ? <><span style={{width:6,height:6,borderRadius:'50%',background:'#16a34a'}}></span>Concluído</> : <><span style={{width:6,height:6,borderRadius:'50%',background:'currentColor'}}></span>Ativo</>}</div>
              <h3>{it.t}</h3>
              <p className="desc">{it.d}</p>
              <div className="owner" style={{justifyContent:'flex-end',gap:8}}>
                {it.done && <span style={{marginRight:'auto',display:'inline-flex',alignItems:'center',gap:5,fontSize:12,fontWeight:600,color:'#16a34a'}}><Icon name="check" size={14}/> Concluído</span>}
                <div style={{color:'var(--purple-800)',fontSize:12,fontWeight:600,display:'inline-flex',alignItems:'center',gap:4}}>Ver <Icon name="arrow-right" size={12}/></div>
              </div>
            </div>
          </Reveal>
        ))}
        <AddBlock label="Adicionar iniciativa" sub="Projeto interno, autor, descrição" onClick={() => setOpen(true)} />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Nova iniciativa">
        <Field label="Nome"><input placeholder="Ex.: Padrão de etiquetagem de peças"/></Field>
        <Field label="Descrição"><textarea placeholder="O que está sendo proposto?"/></Field>
        <Field label="Responsável"><input placeholder="Nome · Área"/></Field>
        <Field label="Evidências"><Dropzone /></Field>
        <div className="modal-actions">
          <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={() => setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={() => setOpen(false)}>Salvar</button>
        </div>
      </Modal>

      <div className="section" style={{marginTop:48}}>
        <FreeContentBoard storageKey="pcm.iniciativas.free" title="Mais conteúdo de iniciativas" subtitle="Anote ideias, anexe propostas, links, estudos e qualquer material de apoio." />
      </div>
    </div>
  );
};

const NOV_MESES = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
const novHoje = () => { const d = new Date(); return `${String(d.getDate()).padStart(2,'0')} ${NOV_MESES[d.getMonth()]} · ${d.getFullYear()}`; };

const NovidadesPage = () => {
  const [focused, setFocused] = useState(null);
  const [open, setOpen] = useState(false);
  const [np, setNp] = useState({ t:'', b:'', full:'' });
  const [editMode, setEditMode] = useState(() => document.body.dataset.editMode === '1');
  useEffect(() => {
    const sync = () => setEditMode(document.body.dataset.editMode === '1');
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes:true, attributeFilter:['data-edit-mode'] });
    sync();
    return () => obs.disconnect();
  }, []);

  const initial = [
    { id:'n2',  date:'04 JUN · 2026', t:'Indicadores de manutenção no Power BI', b:'Frota, custo, frota auxiliar e MTR/VTR agora acompanhados em painéis de Power BI no portal.', full:'Subimos no portal o conjunto de indicadores de manutenção em Power BI: inventário de frota, custo de manutenção, frota auxiliar e MTR/VTR (máquinas e veículos retidos). Tudo acessível pela aba Indicadores.', tone:'o' },
    { id:'n3',  date:'02 JUN · 2026', t:'Checklist de frota auxiliar', b:'Novo checklist para acompanhamento da frota auxiliar de apoio às operações.', full:'Implantamos o checklist da frota auxiliar, padronizando a verificação dos veículos de apoio e alimentando os indicadores de disponibilidade.', tone:'l' },
    { id:'n4',  date:'30 MAI · 2026', t:'Arquitetura da nova sede', b:'Projeto de arquitetura e layout operacional da nova sede definido.', full:'Concluímos a definição de arquitetura e layout da nova sede, incluindo fluxo de veículos, boxes de manutenção e áreas de apoio.', tone:'p' },
    { id:'n5',  date:'28 MAI · 2026', t:'Arquitetura da sede de Jacareí', b:'Layout do novo polo regional de Jacareí (Vale do Paraíba) estruturado.', full:'Definimos a arquitetura e o layout do polo de Jacareí, com inventário de frota, garagem e fluxo operacional do Vale do Paraíba.', tone:'o' },
    { id:'n6',  date:'26 MAI · 2026', t:'Definições de regionais — caminhões e máquinas', b:'Estrutura das regionais de manutenção definida para caminhões e máquinas.', full:'Estruturamos as definições das regionais de manutenção, separando responsabilidades e cobertura para caminhões e para máquinas.', tone:'l' },
    { id:'n7',  date:'22 MAI · 2026', t:'Acompanhamento de SLA — entrega de peças (máquinas)', b:'Indicador de SLA de entrega de peças para a manutenção de máquinas.', full:'Iniciamos o acompanhamento do SLA de entrega de peças para máquinas, medindo o tempo entre solicitação e disponibilização e seu impacto na máquina parada.', tone:'p' },
    { id:'n8',  date:'20 MAI · 2026', t:'Solicitação de Apoio e Orçamento · Máquinas', b:'Formulário digital para solicitar apoio e orçamento para máquinas.', full:'Disponibilizamos o formulário de solicitação de apoio e orçamento para máquinas, centralizando os pedidos e dando rastreabilidade ao atendimento.', tone:'o' },
    { id:'n10', date:'12 MAI · 2026', t:'Mapeamento de processos: diesel e peças', b:'Processos de diesel e de peças mapeados e documentados.', full:'Mapeamos os processos de controle de diesel (abastecimento e conciliação) e de peças (entrada, baixa e consumo), base para padronização e automação.', tone:'p' },
    { id:'n11', date:'22 ABR · 2026', t:'Digitalização dos MAPROs 100% concluída', b:'Todos os mapas de processo da manutenção agora estão disponíveis no portal, com busca, categorias e versionamento.', full:'Após meses de trabalho, finalizamos a digitalização dos MAPROs. Os mapas de processo agora estão na biblioteca digital, com busca por nome e categoria e versionamento.', tone:'o' },
    { id:'n12', date:'10 ABR · 2026', t:'Iniciativa: SGM Follow-up diário', b:'Rotina de acompanhamento diário de caminhões e máquinas oficialmente implantada em todas as filiais.', full:'A rotina de follow-up diário do SGM agora é oficial e roda em todas as filiais. 30 minutos pela manhã, com toda a equipe operacional, revisando status, prioridades e plano do dia.', tone:'l' },
    { id:'n1',  date:'20 MAR · 2026', t:'TCO para renovação de frota', b:'Metodologia de Custo Total de Propriedade aplicada na renovação da frota — economia e comparação entre marcas.', full:'Aplicamos o TCO (Custo Total de Propriedade), metodologia trazida pelo diretor de manutenção, na renovação da frota. O estudo compara marcas de forma objetiva (aquisição + manutenção + revenda) e já gerou economia na decisão de compra.', tone:'p' },
    { id:'n14', date:'26 FEV · 2026', t:'Padronização de POPs iniciada', b:'Revisão de todos os procedimentos operacionais da manutenção começou.', full:'Iniciamos a padronização dos POPs. Todos serão revisados, atualizados, com capa padrão e fluxograma.', tone:'o' },
    { id:'n13', date:'12 FEV · 2026', t:'Reunião de Manutenção 360', b:'Apresentação da visão consolidada da manutenção para toda a liderança operacional.', full:'Realizamos a reunião Manutenção 360, apresentando à liderança os principais indicadores: disponibilidade, MTTR, custo unitário e backlog.', tone:'l' },
    { id:'n9',  date:'15 JAN · 2026', t:'Ronda mensal 5S', b:'Auditoria 5S mensal nas oficinas, com pontuação e plano de ação.', full:'A ronda mensal 5S passou a ser rotina nas oficinas — checklist objetivo, pontuação e plano de ação por item, com resultados publicados.', tone:'p' },
  ];
  const [posts, setPosts] = useLocalAttachments('pcm.novidades.posts.v2', initial);

  const publish = () => {
    if (!np.t.trim()) return;
    const post = { id: 'n_' + Date.now(), date: novHoje(), t: np.t.trim(), b: np.b.trim(), full: (np.full || np.b).trim(), tone: ['p','o','l'][posts.length % 3] };
    setPosts([post, ...posts]);
    setNp({ t:'', b:'', full:'' });
    setOpen(false);
  };
  const removePost = (id) => { if (confirm('Remover esta novidade?')) setPosts(posts.filter(p => p.id !== id)); };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Feed do PCM</div>
          <h1>Novidades</h1>
          <p className="lead">O que está acontecendo no PCM. Clique em qualquer publicação para ver o conteúdo completo e os arquivos.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Icon name="plus" size={16}/> Publicar</button>
      </div>

      {focused && <DetailPanel item={focused} onClose={() => setFocused(null)} kind="Novidade" />}

      <div className="timeline">
        {posts.map((p,i) => (
          <Reveal key={p.id || i} delay={i*40} className={`tl-item ${p.tone === 'p' ? 'p' : p.tone === 'l' ? 'l' : ''}`}>
            <div className="tl-card hover" style={{cursor:'pointer',position:'relative'}} onClick={() => setFocused(p)}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
                <div style={{flex:1}}>
                  <div className="date">{p.date}</div>
                  <h3>{p.t}</h3>
                  <p>{p.b}</p>
                </div>
                <div style={{color:'var(--purple-800)',fontSize:12,fontWeight:600,display:'inline-flex',alignItems:'center',gap:4,whiteSpace:'nowrap',marginTop:4}}>Ver <Icon name="arrow-right" size={12}/></div>
              </div>
              {editMode &&
                <button onClick={(e)=>{e.stopPropagation();removePost(p.id);}} title="Remover" style={{position:'absolute',top:8,right:8,width:24,height:24,borderRadius:6,border:'1px solid var(--line)',background:'var(--surface)',color:'var(--ink-3)',cursor:'pointer',fontSize:14,lineHeight:1}}>×</button>}
            </div>
          </Reveal>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Nova publicação" desc="Aparece no topo da linha do tempo com a data de hoje.">
        <Field label="Título"><input value={np.t} onChange={e=>setNp({...np,t:e.target.value})} placeholder="Ex.: Novo POP publicado"/></Field>
        <Field label="Resumo"><textarea value={np.b} onChange={e=>setNp({...np,b:e.target.value})} placeholder="Frase curta para o feed"/></Field>
        <Field label="Conteúdo completo"><textarea value={np.full} onChange={e=>setNp({...np,full:e.target.value})} placeholder="Detalhes da novidade (opcional)"/></Field>
        <div className="modal-actions">
          <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={() => setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={publish}>Publicar</button>
        </div>
      </Modal>

      <div className="section" style={{marginTop:48}}>
        <FreeContentBoard storageKey="pcm.novidades.free" title="Mural livre" subtitle="Publique qualquer coisa: PDF, vídeo, link, foto, dashboard PBI, deck, Word — tudo cabe aqui." />
      </div>
    </div>
  );
};

const EquipePage = ({ onNav }) => {
  const initial = [
    { id:'t1',  n:'Julio Scalisse',        r:'Diretor de Manutenção',                      b:'Governança da diretoria de manutenção.',                                                                                          email:'julio.scalisse@multilixo.com.br',    photo:null },
    { id:'t2',  n:'Cristiano Guertes',      r:'Gerente de Manutenção',                      b:'Planejamento de frota (caminhões).',                                                                                              email:'cristiano.guertes@multilixo.com.br', photo:null },
    { id:'t3',  n:'Clayton Faneli',         r:'Gestão Estratégica · Máquinas',              b:'Gestão estratégica da manutenção de máquinas: equipes, custos, programação de serviços, indicadores e suporte técnico às operações.', email:'clayton.faneli@multilixo.com.br',    photo:null },
    { id:'t4',  n:'Gabriel Sousa Santos',   r:'PCM · Digitalização / Processos',            b:'Digitalização, BI e PCM da diretoria de manutenção.',                                                                             email:'gabriel.santos@multilixo.com.br',    photo:null },
    { id:'t5',  n:'Camila Cicone',          r:'PCM · Controle de Custos',                   b:'Controle de custos da manutenção, orçamento, análises financeiras, acompanhamento de despesas e elaboração de TCO.',                email:'camila.cicone@multilixo.com.br',     photo:null },
    { id:'t6',  n:'Thais Florentino',       r:'PCM · Governança Administrativa',            b:'Governança administrativa da manutenção, padronização de processos, análises de consumo e relatórios gerenciais.',                 email:'thais.florentino@multilixo.com.br',  photo:null },
    { id:'t7',  n:'Bruna Pereira',          r:'PCM · RH da Manutenção',                     b:'Gestão administrativa de RH da manutenção: ponto, férias, atestados, bonificações e treinamentos.',                                email:'bruna.pereira@multilixo.com.br',     photo:null },
    { id:'t8',  n:'Ricardo Tavares',        r:'PCM · Sinistros / Suporte RH',               b:'Controle de opacidade, gestão de sinistros e suporte administrativo e de RH.',                                                     email:'ricardo.tavares@multilixo.com.br',   photo:null },
    { id:'t9',  n:'Camila Silva',           r:'PCM · Combustível',                          b:'Gestão de combustível, abastecimentos, conciliações, controle de diesel e suporte às filiais.',                                    email:'camila.silva@multilixo.com.br',      photo:null },
    { id:'t10', n:'Arnaldo Dantas',         r:'PCM · Auditoria / Ativos',                   b:'Auditoria da manutenção, controle de revisões, preventivas, notas fiscais e gestão de ativos.',                                    email:'arnaldo.dantas@multilixo.com.br',    photo:null },
    { id:'t11', n:'Maicon Rodrigues',       r:'PCM · Pneus e Lubrificantes',                b:'Gestão de pneus, lubrificantes e apoio ao planejamento das manutenções preventivas.',                                             email:'maicon.rodrigues@multilixo.com.br',  photo:null },
    { id:'t12', n:'Jonathan Rocha',         r:'Máquinas · Controle Operacional',            b:'Controle operacional da manutenção de máquinas: preventivas, telemetria, consumo de combustível, máquinas paradas, ordens de serviço e notas fiscais.', email:'jonathan.rocha@multilixo.com.br',  photo:null },
    { id:'t13', n:'Victor Silva',           r:'Máquinas · Materiais e Peças',               b:'Gestão de materiais, peças e serviços da manutenção de máquinas, acompanhando compras, fornecedores e reparos.',                   email:'',                                   photo:null },
    { id:'t14', n:'Lucas Dias',             r:'Venda de Máquinas e Caminhões',              b:'Responsável pela venda de máquinas e caminhões.',                                                                                 email:'lucas.dias@multilixo.com.br',        photo:null },
    { id:'t15', n:'Rodrigo Silva',          r:'Recepção Ativa / Triagem',                   b:'Responsável pela recepção ativa de caminhões e pela triagem de equipe.',                                                          email:'rodrigo.silva@multilixo.com.br',     photo:null },
  ];
  const [team, setTeam] = useLocalAttachments('pcm.team.v3', initial);
  const [open, setOpen] = useState(false);
  const [nf, setNf] = useState({ n:'', r:'', b:'', email:'', photo:null });

  const [editId, setEditId] = useState(null);
  const [maproId, setMaproId] = useState(null);
  const editing = editId ? team.find(p => p.id === editId) : null;
  const maproPerson = maproId ? team.find(p => p.id === maproId) : null;
  const updateField = (id, key, val) => setTeam(team.map(p => p.id===id ? {...p, [key]: val} : p));

  const [uploading, setUploading] = useState(null);
  const onPhoto = async (id, file) => {
    if (!file) return;
    if (file.size > 8*1024*1024) { alert('Imagem muito grande (máx. 8 MB). Tente uma menor.'); return; }
    setUploading(id);
    try {
      const dataURL = await fileToDataURL(file);
      let photo = dataURL;
      if (window.PCM_UPLOAD) {
        try {
          const url = await window.PCM_UPLOAD(dataURL, 'foto-' + id + '-' + Date.now() + '.jpg');
          if (url && /^https?:\/\//.test(url)) photo = url;
        } catch (e) { console.warn('[PCM] upload de foto falhou, usando base64', e); }
      }
      setTeam(prev => prev.map(p => p.id===id ? {...p, photo} : p));
    } finally {
      setUploading(null);
    }
  };
  const onNewPhoto = async (file) => {
    if (!file) return;
    const dataURL = await fileToDataURL(file);
    let photo = dataURL;
    if (window.PCM_UPLOAD) {
      try {
        const url = await window.PCM_UPLOAD(dataURL, 'foto-novo-' + Date.now() + '.jpg');
        if (url && /^https?:\/\//.test(url)) photo = url;
      } catch (e) { console.warn('[PCM] upload de foto falhou, usando base64', e); }
    }
    setNf({...nf, photo});
  };
  const addPerson = () => {
    if (!nf.n) return;
    setTeam([...team, {...nf, id: Date.now()+''}]);
    setNf({ n:'', r:'', b:'', email:'', photo:null });
    setOpen(false);
  };
  const remove = (id) => setTeam(team.filter(p=>p.id!==id));

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Quem faz acontecer</div>
          <h1>Equipe PCM</h1>
          <p className="lead">As pessoas por trás do planejamento, execução e melhoria contínua da manutenção.</p>
        </div>
        <button className="btn btn-primary" onClick={()=>setOpen(true)}><Icon name="plus" size={16}/> Adicionar pessoa</button>
      </div>

      <div className="grid grid-4">
        {team.map((p,i) => (
          <Reveal key={p.id} delay={i*50}>
            <div className="card team-card hover" style={{height:'100%',display:'flex',flexDirection:'column'}}>
              <label className="ph" style={{flexShrink:0, background: p.photo ? '#000' : `linear-gradient(135deg, ${['var(--purple-800), var(--orange)','var(--orange), var(--lime)','var(--lime), var(--purple-800)','var(--purple-600), var(--orange)'][i%4]})`, cursor:'pointer'}}>
                {p.photo ? <img src={p.photo} alt={p.n} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:`center ${p.photoY||'top'}`,transform:`scale(${p.photoZoom||1})`,transformOrigin:`center ${p.photoY||'top'}`}}/> :
                  <div className="initials">{p.n.split(' ').map(x=>x[0]).slice(0,2).join('')}</div>}
                <input type="file" accept="image/*" style={{display:'none'}} onChange={e=>onPhoto(p.id, e.target.files[0])}/>
                <div className="ph-edit">📷 {p.photo?'trocar':'adicionar foto'}</div>
                {uploading===p.id && <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:13,fontFamily:'JetBrains Mono'}}>Enviando…</div>}
              </label>
              <div className="info" style={{flex:1,display:'flex',flexDirection:'column'}}>
                <h4>{p.n}</h4>
                <div className="role">{p.r}</div>
                <div className="bio" title={p.b} style={{display:'-webkit-box',WebkitLineClamp:4,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{p.b}</div>
                {p.email && <a className="team-email" href={`mailto:${p.email}`}>{p.email}</a>}
                <div className="team-actions" style={{marginTop:'auto'}}>
                  <button className="btn-team-mapro" onClick={()=>setMaproId(p.id)} title="MAPROs">
                    <Icon name="file" size={13}/> MAPROs
                  </button>
                  <button className="btn-team-edit" onClick={()=>setEditId(p.id)} title="Editar">
                    <Icon name="edit" size={13}/> Editar
                  </button>
                </div>
              </div>
              <button className="team-del" onClick={()=>remove(p.id)} title="Remover">×</button>
            </div>
          </Reveal>
        ))}
        <AddBlock label="Adicionar pessoa" sub="Nome, função, foto" onClick={()=>setOpen(true)} />
      </div>

      <div className="section" style={{marginTop:48}}>
        <FreeContentBoard storageKey="pcm.equipe.free" title="Mural da equipe" subtitle="Adicione fotos do time, eventos, conquistas, links e qualquer coisa que importa." />
      </div>

      <Modal open={!!maproPerson} onClose={()=>setMaproId(null)} title={maproPerson ? `MAPROs — ${maproPerson.n}` : ''}
        footer={<button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={()=>setMaproId(null)}>Fechar</button>}>
        {maproPerson && <FreeContentBoard storageKey={`pcm.equipe.mapros.${maproPerson.id}`} title={`MAPROs de ${maproPerson.n}`} subtitle="Adicione os MAPROs sob responsabilidade desta pessoa — arquivos, links, imagens." />}
      </Modal>

      <Modal open={!!editing} onClose={()=>setEditId(null)} title={editing ? `Editar — ${editing.n}` : ''}
        footer={<>
          <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={()=>setEditId(null)}>Fechar</button>
        </>}>
        {editing && <>
          <Field label="Nome"><input value={editing.n} onChange={e=>updateField(editId,'n',e.target.value)}/></Field>
          <Field label="Função / Área"><input value={editing.r} onChange={e=>updateField(editId,'r',e.target.value)}/></Field>
          <Field label="Bio"><textarea rows={3} value={editing.b||''} onChange={e=>updateField(editId,'b',e.target.value)}/></Field>
          <Field label="E-mail"><input type="email" value={editing.email||''} onChange={e=>updateField(editId,'email',e.target.value)}/></Field>
          <Field label="Foto"><input type="file" accept="image/*" onChange={e=>onPhoto(editId, e.target.files[0])}/></Field>
          <Field label="Posição vertical da foto">
            <div style={{display:'flex',gap:8}}>
              {['top','center','bottom'].map(pos => (
                <button key={pos} type="button" className={`kind-btn${(editing.photoY||'top')===pos?' active':''}`} onClick={()=>updateField(editId,'photoY',pos)}>
                  {pos==='top'?'Topo (rosto)':pos==='center'?'Centro':'Base'}
                </button>
              ))}
            </div>
          </Field>
          <Field label={`Zoom da foto · ${(editing.photoZoom||1).toFixed(2)}×`}>
            <input type="range" min="0.8" max="2" step="0.05" value={editing.photoZoom||1} onChange={e=>updateField(editId,'photoZoom',parseFloat(e.target.value))} style={{width:'100%'}}/>
          </Field>
          <div style={{marginTop:16,paddingTop:14,borderTop:'1px solid var(--line)'}}>
            <button className="btn btn-ghost btn-sm" style={{color:'#c53030',border:'1px solid #fbd5d5',background:'#fff5f5'}} onClick={()=>{remove(editId);setEditId(null);}}>Remover pessoa</button>
          </div>
        </>}
      </Modal>

      <Modal open={open} onClose={()=>setOpen(false)} title="Adicionar pessoa"
        footer={<>
          <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={()=>setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={addPerson}>Salvar</button>
        </>}>
        <Field label="Nome"><input value={nf.n} onChange={e=>setNf({...nf,n:e.target.value})}/></Field>
        <Field label="Função"><input value={nf.r} onChange={e=>setNf({...nf,r:e.target.value})}/></Field>
        <Field label="Bio curta"><textarea rows={2} value={nf.b} onChange={e=>setNf({...nf,b:e.target.value})}/></Field>
        <Field label="E-mail"><input type="email" value={nf.email||''} onChange={e=>setNf({...nf,email:e.target.value})} placeholder="nome.sobrenome@multilixo.com.br"/></Field>
        <Field label="Foto"><input type="file" accept="image/*" onChange={e=>onNewPhoto(e.target.files[0])}/></Field>
        {nf.photo && <img src={nf.photo} style={{width:80,height:80,borderRadius:8,objectFit:'cover'}}/>}
      </Modal>
    </div>
  );
};

Object.assign(window, { QuemSomosPage, ProjetosPage, IniciativasPage, NovidadesPage, EquipePage });
