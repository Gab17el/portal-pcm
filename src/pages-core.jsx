// Home, PCM, POPs, MAPROs, Indicadores
var React = window.React;
const { useState, useEffect, useRef } = React;

const HomePage = ({ onNav, blocks, addBlock }) =>
<>
    <Hero onNav={onNav} />
    <div className="page" style={{ paddingTop: 100 }}>
      <Reveal>
        <SectionHead eyebrow="Acesso rápido" title="Por onde começar" />
      </Reveal>
      <div className="grid grid-4">
        <Reveal delay={0}><QuickLink icon="chart" title="Indicadores" desc="Dashboards Power BI de manutenção, frota e telemetria." tone="p" onClick={() => onNav('indicadores')} /></Reveal>
        <Reveal delay={60}><QuickLink icon="file" title="POPs" desc="Procedimentos Operacionais Padrão — baixe, anexe novos." tone="o" onClick={() => onNav('pops')} /></Reveal>
        <Reveal delay={120}><QuickLink icon="folder" title="MAPROs" desc="Mapas de processo e fluxogramas da manutenção." tone="l" onClick={() => onNav('mapros')} /></Reveal>
        <Reveal delay={180}><QuickLink icon="rocket" title="Projetos entregues" desc="O que o PCM já entregou para a operação." tone="p" onClick={() => onNav('projetos')} /></Reveal>
      </div>

      <Reveal className="section">
        <SectionHead eyebrow="Institucional" title="Conheça o PCM Multilixo" />
      </Reveal>
      <div className="grid grid-3">
        <Reveal delay={0}><QuickLink icon="building" title="Quem Somos" desc="Grupo Multilixo — 30+ anos, 10 empresas, líder em logística circular." tone="p" onClick={() => onNav('quemsomos')} /></Reveal>
        <Reveal delay={60}><QuickLink icon="bulb" title="Iniciativas" desc="Melhorias internas que nasceram dentro do PCM." tone="o" onClick={() => onNav('iniciativas')} /></Reveal>
        <Reveal delay={120}><QuickLink icon="users" title="Equipe" desc="As pessoas por trás do planejamento e da execução." tone="l" onClick={() => onNav('equipe')} /></Reveal>
      </div>

      <Reveal className="section">
        <SectionHead eyebrow="Últimas novidades" title="O que aconteceu no PCM" right={<button className="btn btn-outline btn-sm" onClick={() => onNav('novidades')}>Ver todas <Icon name="arrow-right" size={14} /></button>} />
      </Reveal>
      <div className="grid grid-3">
        <Reveal delay={0}>
          <div className="card hover" style={{ padding: 22, cursor: 'pointer' }} onClick={() => onNav('novidades')}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange-dark)', fontWeight: 600, marginBottom: 8 }}>22 ABR · 2026</div>
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>Digitalização dos MAPROs concluída</h3>
            <p style={{ fontSize: 13 }}>Todos os mapas de processo da manutenção agora estão disponíveis no portal.</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card hover" style={{ padding: 22, cursor: 'pointer' }} onClick={() => onNav('novidades')}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--purple-700)', fontWeight: 600, marginBottom: 8 }}>18 ABR · 2026</div>
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>Novo dashboard de telemetria</h3>
            <p style={{ fontSize: 13 }}>Gestão de boas práticas ao volante integrada ao Power BI.</p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="card hover" style={{ padding: 22, cursor: 'pointer' }} onClick={() => onNav('novidades')}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lime-dark)', fontWeight: 600, marginBottom: 8 }}>10 ABR · 2026</div>
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>Iniciativa: SGM Follow-up diário</h3>
            <p style={{ fontSize: 13 }}>Rotina de acompanhamento diário de caminhões e máquinas implantada.</p>
          </div>
        </Reveal>
      </div>

      {blocks.length > 0 &&
    <div className="section">
          <SectionHead eyebrow="Personalizado" title="Blocos adicionados" />
          <div className="grid grid-3">
            {blocks.map((b, i) =>
        <div key={i} className="card" style={{ padding: 22 }}>
                {b.icon && <div style={{ marginBottom: 10, color: 'var(--purple-800)' }}><Icon name={b.icon} size={24} /></div>}
                <h3 style={{ fontSize: 17, marginBottom: 6 }}>{b.title}</h3>
                <p style={{ fontSize: 13 }}>{b.desc}</p>
              </div>
        )}
          </div>
        </div>
    }

      <div className="section">
        <FreeContentBoard storageKey="pcm.home.free" title="Mural da Home" subtitle="Adicione apresentações, imagens, textos, links, dashboards Power BI, PDFs, Word, vídeos — qualquer coisa." />
      </div>
    </div>
  </>;


const PCMPage = () =>
<div className="page">
    <div className="page-header">
      <div>
        <div className="eyebrow">Planejamento e Controle</div>
        <h1>Gestão da manutenção · PCM</h1>
        <p className="lead">Pilares que sustentam a disciplina operacional do PCM Multilixo — foco em entrega de valor, tempo real, padrão e eliminação de desperdícios.</p>
      </div>
    </div>

    <div className="pcm-hero-card">
      <div className="pcm-hero-text">
        <div className="pcm-hero-eyebrow">Casa da excelência operacional</div>
        <h2>Planejamento. Método. Padrão. <span className="lime-accent">Resultado.</span></h2>
        <p>Cuidamos de toda a frota Multilixo — caminhões compactadores, basculantes, roll-on/roll-off, prancha — e também do parque de máquinas florestais que opera nos pátios e centros de triagem. O PCM organiza o ciclo da manutenção do início ao fim: do planejamento preventivo ao pós-serviço, garantindo que cada ativo, sobre rodas ou esteiras, volte à operação no menor tempo possível.</p>
        <p className="pcm-hero-sub">Da rua aos pátios, do compactador à pá-carregadeira: cada equipamento parado é coleta atrasada, contrato em risco e custo correndo. Por isso o PCM existe — para fazer a manutenção previsível, mensurável e financeiramente sã.</p>
      </div>

      <div className="pcm-hero-side">
        <div className="pcm-hero-logo">
          <img src="assets/pcm-logo.png" alt="PCM" />
        </div>
        <div className="pcm-hero-pillars">
          {['Planejamento', 'Método', 'Padrão', 'Tempo Real', 'Visual', 'Eliminar desperdícios'].map((p, i) =>
        <div key={p} className="pcm-hero-pill">
              <div className="pcm-hero-pill-num">0{i + 1}</div>
              <div className="pcm-hero-pill-name">{p}</div>
            </div>
        )}
        </div>
      </div>
    </div>

    <div className="section">
      <SectionHead eyebrow="O que cuidamos" title="Frota e máquinas sob nossos olhos" />
      <div className="grid grid-3">
        {[
      { i: 'truck', n: 'Caminhões coletores', d: 'Compactadores, roll-on/roll-off, basculantes e prancha — a linha de frente da operação Multilixo, em rotas urbanas e industriais 24/7.' },
      { i: 'wrench', n: 'Máquinas florestais', d: 'Pás-carregadeiras, escavadeiras, retroescavadeiras e empilhadeiras que operam nos pátios, aterros e centros de triagem.' },
      { i: 'bulb', n: 'Equipamentos auxiliares', d: 'Geradores, compressores, prensas e linhas de processamento — o suporte invisível que mantém a operação girando.' }].
      map((s, i) =>
      <Reveal key={s.n} delay={i * 70}>
            <div className="card" style={{ padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--purple-100)', color: 'var(--purple-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name={s.i} size={22} /></div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{s.n}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55 }}>{s.d}</p>
            </div>
          </Reveal>
      )}
      </div>
    </div>

    <div className="section">
      <SectionHead eyebrow="Fluxo do PCM" title="Como trabalhamos" />
      <div className="grid grid-4">
        {[
      { i: 'calendar', n: '1. Planejar', d: 'Cronograma de preventivas, insumos e equipe.' },
      { i: 'wrench', n: '2. Executar', d: 'OS emitidas, equipe alocada, serviço feito.' },
      { i: 'check', n: '3. Controlar', d: 'Apontamento, validação e custo real.' },
      { i: 'trend', n: '4. Melhorar', d: 'Análise de indicadores e ajuste de padrão.' }].
      map((s, i) =>
      <Reveal key={s.n} delay={i * 70}>
            <div className="card" style={{ padding: 22 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--purple-100)', color: 'var(--purple-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}><Icon name={s.i} size={20} /></div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.n}</div>
              <p style={{ fontSize: 13 }}>{s.d}</p>
            </div>
          </Reveal>
      )}
      </div>
    </div>

    <div className="section">
      <SectionHead eyebrow="Plano Diretor de Manutenção (PDM)" title="O que vamos fazer · Pirâmide da Diretoria de Manutenção" />
      <p style={{ fontSize: 14, color: 'var(--ink-2)', maxWidth: 780, marginBottom: 28 }}>
        Roadmap de evolução da manutenção em quatro estágios — da fundação operacional à excelência. Cada bloco tem responsável e meta de maturidade. Adaptado da Pirâmide SAMI · Vale.
      </p>
      <PdmPyramid />
    </div>

    <div className="section">
      <SectionHead eyebrow="Entregáveis Diretoria de Manutenção" title="O que está sob nossa responsabilidade" />
      <div className="grid grid-2">
        {[
      { n: '1. Estratégia de Manutenção', d: 'Plano Diretor de Manutenção (3–5 anos), padrões técnicos, políticas corporativas e diretrizes de disponibilidade, confiabilidade e ciclo de vida da frota.' },
      { n: '2. Gestão Orçamentária (OPEX/CAPEX)', d: 'Planejamento e controle do orçamento anual, avaliação de ROI de renovação ou reforma de veículos.' },
      { n: '3. Performance Operacional', d: 'Garantir disponibilidade exigida pelo negócio, reduzir retrabalho e implantar cultura de confiabilidade contra falhas repetitivas.' },
      { n: '4. Montadoras e Fornecedores Críticos', d: 'Negociar contratos corporativos com fabricantes, peças, pneus, oficinas credenciadas e telemetria — saindo do modo emergencial.' },
      { n: '5. Indicadores e Tecnologia', d: 'Aproveitar 100% do Sisma, criar book de indicadores e implantar a Torre de Controle da Manutenção.' },
      { n: '6. Pessoas e Cultura', d: 'Plano de carreira da manutenção, capacitação técnica e desenvolvimento de sucessores em todos os níveis.' }].
      map((e, i) =>
      <Reveal key={e.n} delay={i * 50}>
            <div className="card" style={{ padding: 24, borderLeft: '3px solid var(--orange)' }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: 'var(--purple-800)' }}>{e.n}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-2)' }}>{e.d}</p>
            </div>
          </Reveal>
      )}
      </div>
    </div>

    <div className="section">
      <SectionHead eyebrow="Princípio" title="Manutenção é estratégia, não custo." />
      <div className="card" style={{ padding: '32px 36px', background: 'linear-gradient(135deg, #fff 0%, #faf6ee 100%)', borderLeft: '4px solid var(--orange)' }}>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink)', fontStyle: 'italic', fontWeight: 500 }}>" Você não precisa lembrar seu coração de bater , já imaginou uma organização assim ? "

      </p>
        <div style={{ marginTop: 16, fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple-700)', fontWeight: 600 }}>-DEE HOCK,ORGANIZAÇÕES CAÓRDICAS </div>
      </div>
    </div>

    <div className="section">
      <FreeContentBoard storageKey="pcm.pcm.free" title="Mais conteúdo do PCM" subtitle="Adicione apresentações, dashboards Power BI, PDFs, Word, links, fotos — qualquer material que ampare o PDM." />
    </div>
  </div>;


/* PDM Pyramid — 4 stages of maturity, adapted from SAMI/Vale */
const PdmPyramid = () => {
  const stages = [
  {
    key: '4',
    label: 'ESTÁGIO 4 · 2029+',
    title: 'Excelência Operacional',
    color: 'var(--purple-800)',
    items: ['IA para Manutenção', 'TCO — Total Cost of Ownership', 'LCC — Life Cycle Cost']
  },
  {
    key: '3',
    label: 'ESTÁGIO 3 · 2028',
    title: 'Excelência do Processo',
    color: '#5A2E8E',
    items: ['DEQM — Eng. e Qualidade', 'Manutenção Pro Ativa', 'Manutenção Preditiva', 'Engenharia de Confiabilidade', 'Gestão de Ativos · ISO 55000', 'Padronização de Equipamentos']
  },
  {
    key: '2',
    label: 'ESTÁGIO 2 · 2027',
    title: 'Manutenção Proativa',
    color: 'var(--orange)',
    items: ['Gerenciamento de Material/Estoque · Eliana', 'Produtividade de Oficina', 'Digitalização das Oficinas / Histórico', 'Homologação de Marcas e Fornecedores', 'Plano de Carreira · Sucessores']
  },
  {
    key: '1',
    label: 'ESTÁGIO 1 · 2026',
    title: 'Manutenção Básica',
    color: 'var(--lime)',
    items: [
    'Governança da Manutenção · Julio',
    'Mapa de Processos · Thaís / Jonathan',
    'Planejamento e Programação · Cristiano / Clayton',
    'Gestão Orçamentária · Paulo / Julio',
    'Torre de Controle · Julio',
    'Capacitação Técnica · Bruna / Arnaldo']

  }];

  return (
    <div className="pdm-wrap">
      <div className="pdm-pyramid">
        {stages.map((s, i) => {
          const widthPct = 45 + i * 18; // 45, 63, 81, 99 — narrow top, wide bottom
          return (
            <Reveal key={s.key} delay={i * 120}>
              <div className="pdm-row">
                <div className="pdm-meta">
                  <div className="pdm-stage" style={{ color: s.color }}>{s.label}</div>
                  <div className="pdm-title">{s.title}</div>
                </div>
                <div className="pdm-bar" style={{ width: `${widthPct}%`, background: `linear-gradient(135deg, ${s.color}, color-mix(in oklch, ${s.color} 65%, white))` }}>
                  <div className="pdm-items">
                    {s.items.map((it) => <span key={it} className="pdm-pill">{it}</span>)}
                  </div>
                </div>
                <div className="pdm-meta-right">
                  {s.items.length} iniciativa{s.items.length !== 1 ? 's' : ''}
                </div>
              </div>
            </Reveal>);

        })}
      </div>
      <div className="pdm-note">Fonte: Pirâmide SAMI — adaptado Vale.</div>
    </div>);

};

const POPsPage = () => {
  const [pops, setPops] = useState([
  { ft: 'PDF', title: 'POP-01 · Troca de óleo e filtros', cat: 'Preventiva', date: '12/03/2026', size: '1.2 MB' },
  { ft: 'PDF', title: 'POP-02 · Inspeção de freios a cada 10.000 km', cat: 'Preventiva', date: '08/03/2026', size: '2.4 MB' },
  { ft: 'PDF', title: 'POP-03 · Diagnóstico de falha elétrica', cat: 'Corretiva', date: '22/02/2026', size: '0.9 MB' },
  { ft: 'XLS', title: 'POP-04 · Checklist de pneus e suspensão', cat: 'Inspeção', date: '15/02/2026', size: '340 KB' },
  { ft: 'PDF', title: 'POP-05 · Soldagem em estrutura do compactador', cat: 'Corretiva', date: '04/02/2026', size: '3.1 MB' },
  { ft: 'DOC', title: 'POP-06 · Lubrificação de rolamentos', cat: 'Preventiva', date: '28/01/2026', size: '610 KB' }]
  );
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('Todas');
  const [open, setOpen] = useState(false);
  const [nf, setNf] = useState({ title: '', cat: 'Preventiva' });

  const cats = ['Todas', 'Preventiva', 'Corretiva', 'Preditiva', 'Inspeção'];
  const filtered = pops.filter((p) => (cat === 'Todas' || p.cat === cat) && p.title.toLowerCase().includes(search.toLowerCase()));

  const add = () => {
    if (!nf.title) return;
    setPops([{ ft: 'PDF', title: nf.title, cat: nf.cat, date: new Date().toLocaleDateString('pt-BR'), size: '—' }, ...pops]);
    setNf({ title: '', cat: 'Preventiva' });
    setOpen(false);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Procedimentos Operacionais Padrão</div>
          <h1>POPs da manutenção</h1>
          <p className="lead">Biblioteca viva de procedimentos — baixe, siga e contribua com novos.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Icon name="plus" size={16} /> Adicionar POP</button>
      </div>

      <Toolbar search={search} onSearch={setSearch}>
        <Chips options={cats} value={cat} onChange={setCat} />
      </Toolbar>

      <div className="grid grid-2">
        {filtered.map((p, i) =>
        <Reveal key={i} delay={i * 40}>
            <div className="card pop-card hover">
              <div className="ft-ico">{p.ft}</div>
              <div className="body">
                <div className="title">{p.title}</div>
                <div className="meta">
                  <span className="tag">{p.cat}</span>
                  <span>{p.date}</span>
                  <span>{p.size}</span>
                </div>
              </div>
              <div className="dl"><Icon name="download" size={14} /> Baixar</div>
            </div>
          </Reveal>
        )}
        <AddBlock label="Adicionar novo POP" sub="PDF, Excel, Word ou imagem" onClick={() => setOpen(true)} />
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Adicionar novo POP"
        desc="Preencha os dados e anexe o arquivo do procedimento."
        footer={<>
          <button className="btn btn-ghost btn-sm" style={{ background: 'var(--surface-2)', color: 'var(--ink)', border: '1px solid var(--line)' }} onClick={() => setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={add}>Salvar POP</button>
        </>}>
        
        <Field label="Título do POP">
          <input value={nf.title} onChange={(e) => setNf({ ...nf, title: e.target.value })} placeholder="Ex.: POP-07 · Alinhamento de direção" />
        </Field>
        <Field label="Categoria">
          <select value={nf.cat} onChange={(e) => setNf({ ...nf, cat: e.target.value })}>
            {cats.slice(1).map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Arquivo">
          <Dropzone />
        </Field>
      </Modal>

      <div className="section" style={{ marginTop: 48 }}>
        <FreeContentBoard storageKey="pcm.pops.free" title="Conteúdo livre · POPs" subtitle="Anexe versões antigas, vídeos de treinamento, links de referência e materiais de apoio." />
      </div>
    </div>);

};

const MAPROsPage = () => {
  const [items, setItems] = useState([
  { ft: 'XLS', t: 'Gestão Orçamentária', s: 'Matriz de projeto — gestão orçamentária da manutenção.', b: 'Gestão', date: '15/04/2026', size: '664 KB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQBxHlXYzTcPTLukXCa-a5VpAd9xZ5dGVSt9dwpIKTmSW48?e=OtAFIY' },
  { ft: 'XLS', t: 'Mapa de Processo', s: 'Mapa de processo da manutenção.', b: 'Processo', date: '27/05/2026', size: '759 KB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQDEFcwk8dcOQphAb3UDOqneAdcgz_wCktElymyNFnqsHKU?e=OW5nea' },
  { ft: 'XLS', t: 'Capacitação Técnica', s: 'Matriz de projeto — capacitação técnica da equipe.', b: 'Matriz de Projeto', date: '26/05/2026', size: '612 KB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQChkJm_eYgARbsGq3Mm4OMKAXWC7Q-8rRZFXc_qasCoeIg?e=dADvcV' },
  { ft: 'XLS', t: 'Planejamento de Frota — Caminhões e Máquinas', s: 'Matriz de projeto — planejamento de manutenção da frota.', b: 'Matriz de Projeto', date: '13/05/2026', size: '2.2 MB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQC1gMLyU_fNTY7eSx9_rEloAfhu69H14sjov-sO33lJzGk?e=YvLQav' },
  { ft: 'XLS', t: 'Governança da Manutenção', s: 'Matriz de projeto — governança da manutenção Multilixo.', b: 'Matriz de Projeto', date: '26/05/2026', size: '730 KB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQCjQyMvTrqzSpUZCc395puzAd9VtXZodzlHNZYTdk5GuTI?e=Vn1x3d' },
  { ft: 'XLS', t: 'Máquinas Leves e Pesadas', s: 'Matriz de projeto — governança de máquinas leves e pesadas.', b: 'Matriz de Projeto', date: '23/04/2026', size: '603 KB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQAmPWA1TfRySo2SQDNj6jLGAedXHhwkKKmdDUnWW4UU7C0?e=7SdvTo' },
  { ft: 'XLS', t: 'Digitalização da Manutenção', s: 'Mapa de processo da digitalização da manutenção.', b: 'Digitalização', date: '08/05/2026', size: '474 KB', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQCFjAfCUjBSSplk9JTfuXAVARVCjCK-PmqLn4Utt3sVUT4?e=iWCp2I' }]
  );
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('Todas');
  const [open, setOpen] = useState(false);
  const cats = ['Todas', 'Gestão', 'Processo', 'Matriz de Projeto', 'Digitalização'];
  const filtered = items.filter((p) => (cat === 'Todas' || p.b === cat) && p.t.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Mapas de processo</div>
          <h1>MAPROS · Matriz de Projeto</h1>
          <p className="lead">Matrizes de projeto e mapas de processo da manutenção — abra e contribua com novos.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Icon name="plus" size={16} /> Novo MAPRO</button>
      </div>

      <Toolbar search={search} onSearch={setSearch}>
        <Chips options={cats} value={cat} onChange={setCat} />
      </Toolbar>

      <div className="grid grid-2">
        {filtered.map((p, i) =>
        <Reveal key={i} delay={i * 40}>
            <div className="card pop-card hover" style={{ cursor: p.url ? 'pointer' : 'default' }} onClick={() => p.url && window.open(p.url, '_blank', 'noopener')}>
              <div className="ft-ico">{p.ft}</div>
              <div className="body">
                <div className="title">{p.t}</div>
                <div className="meta">
                  <span className="tag">{p.b}</span>
                  <span>{p.date}</span>
                  <span>{p.size}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>{p.s}</div>
              </div>
              <div className="dl"><Icon name="link" size={14} /> Abrir</div>
            </div>
          </Reveal>
        )}
        <AddBlock label="Adicionar MAPRO" sub="PDF, imagem ou diagrama" onClick={() => setOpen(true)} />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Novo MAPRO" desc="Anexe imagem ou PDF do fluxo.">
        <Field label="Nome"><input placeholder="Ex.: MAPRO-07 · Compras" /></Field>
        <Field label="Categoria">
          <select>{cats.slice(1).map((c) => <option key={c}>{c}</option>)}</select>
        </Field>
        <Field label="Descrição"><textarea placeholder="Resumo do fluxo" /></Field>
        <Field label="Arquivo"><Dropzone /></Field>
        <div className="modal-actions">
          <button className="btn btn-ghost btn-sm" style={{ background: 'var(--surface-2)', color: 'var(--ink)', border: '1px solid var(--line)' }} onClick={() => setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={() => setOpen(false)}>Salvar</button>
        </div>
      </Modal>

      <div className="section" style={{ marginTop: 48 }}>
        <FreeContentBoard storageKey="pcm.mapros.free" title="Conteúdo livre · MAPROs" subtitle="Versões anteriores, fluxogramas, vídeos, e qualquer material de apoio aos mapas de processo." />
      </div>
    </div>);

};

const IndicadoresPage = () => {
  const [dashboards, setDashboards] = useState([
  { t: 'MTR / VTR · Retidos', d: 'Máquinas retidas (MTR) e veículos retidos (VTR) — controle 2026.', ico: 'truck', tone: 'p', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQCc_DWQQM7ESpcM52Y_tKdnAcuun5LgfdfR31lNj4M306M?e=368iyR' },
  { t: 'ATA · PCM', d: 'Atas e acompanhamento das reuniões diárias do PCM.', ico: 'calendar', tone: 'o', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQCn5XSV75nvSYFkNHz_UzbqARrvnBBNyl2lC8lBDcZx560?e=xE2NlH' },
  { t: 'Mapa dos Processos 2026', d: 'Mapa consolidado dos processos da manutenção — 2026.', ico: 'flow', tone: 'l', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQBczakhDhqTSLs681X0gs54AR-sJJKqJk92R9FnSoGo0jU?e=eifOqT' },
  { t: 'CRM · Fechamento do Mês', d: 'Fechamento mensal da manutenção — orçado x realizado.', ico: 'calendar', tone: 'o', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/9c9f93a3-dcec-44c0-b875-29d3bca039bb/f199eb34572138cda909?language=pt-BR&experience=power-bi' },
  { t: 'Custo de Manutenção · Diário', d: 'Orçado x realizado diário do custo de manutenção da frota.', ico: 'chart', tone: 'l', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/f19987f87002e0329880?language=pt-BR&experience=power-bi' },
  { t: 'Inventário de Frota', d: 'Composição da frota: cadastrada, patrimonial, locada e operacional.', ico: 'truck', tone: 'p', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/f199eb34572138cda909?language=pt-BR&experience=power-bi' },
  { t: 'Frota Auxiliar', d: 'Acompanhamento da frota auxiliar de apoio às operações.', ico: 'truck', tone: 'o', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/e5c8062f-0249-461f-a1f9-d12b31c22c32/64718a8041c18d712186?language=pt-BR&experience=power-bi' },
  { t: 'Saída de Peças', d: 'Custo das saídas de peças por empresa, filial e período.', ico: 'wrench', tone: 'l', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/059eb79ffdd89f891415?language=pt-BR&experience=power-bi' },
  { t: 'Gestão de Pneus', d: 'Controle de pneus — vida útil, rodízio, custo e descarte.', ico: 'gear', tone: 'p', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/64fdd3cc-f87a-46b7-9ab6-9921546bd57b/059eb79ffdd89f891415?language=pt-BR&experience=power-bi' },
  { t: 'Custo por Veículos', d: 'Custo de manutenção por veículo, modelo e fabricante.', ico: 'truck', tone: 'o', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/ace112990848200ac195?language=pt-BR&experience=power-bi' },
  { t: 'Abertura de O.S.', d: 'Volume, custo e aging das ordens de serviço por motivo.', ico: 'file', tone: 'l', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/4b1bf6d12a9cca9ee126?language=pt-BR&experience=power-bi' },
  { t: 'Mapa de Calor · Checklist', d: 'Distribuição do checklist por dia e horário — mapa de calor.', ico: 'dashboard', tone: 'p', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/b2c4e56d-8068-4653-a797-7ba180ca3b52/bc121af00d7c21501942?language=pt-BR&experience=power-bi' },
  { t: 'CPK · Custo por KM', d: 'Custo de manutenção por quilômetro rodado.', ico: 'trend', tone: 'o', url: '#', dev: true },
  { t: 'QPK · Quebra por KM', d: 'Índice de quebras por quilômetro rodado.', ico: 'target', tone: 'l', url: '#', dev: true },
  { t: 'MTBF', d: 'Tempo médio entre falhas (Mean Time Between Failures).', ico: 'clock', tone: 'p', url: '#', dev: true },
  { t: 'MTTR', d: 'Tempo médio de reparo (Mean Time To Repair).', ico: 'gear', tone: 'o', url: '#', dev: true }]
  );
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(null);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Indicadores & Acompanhamento</div>
          <h1>Indicadores & Acompanhamento</h1>
          <p className="lead">Indicadores de manutenção, frota e custos — saiba o que cada painel mostra antes de abrir.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Icon name="plus" size={16} /> Novo dashboard</button>
      </div>

      {focused &&
      <div className="section" style={{ marginTop: 0, marginBottom: 32 }}>
          <SectionHead eyebrow={focused.t} title="Dashboard em foco" right={<button className="btn btn-ghost btn-sm" style={{ background: 'var(--surface-2)', color: 'var(--ink)', border: '1px solid var(--line)' }} onClick={() => setFocused(null)}><Icon name="x" size={14} /> Fechar</button>} />
          <div className="iframe-wrap" style={{ height: 600 }}>
            {focused.dev ?
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 12, color: 'var(--ink-3)' }}>
                <Icon name="gear" size={32} />
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Em desenvolvimento</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Este indicador está sendo construído e em breve estará disponível.</div>
              </div> :
          focused.url && focused.url !== '#' ?
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16 }}>
                <div style={{ color: 'var(--ink-3)', fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{focused.url.includes('powerbi.com') ? 'Power BI · abre em nova aba' : 'Planilha · abre em nova aba'}</div>
                <a className="btn btn-primary" href={focused.url} target="_blank" rel="noopener noreferrer"><Icon name="arrow-right" size={16} /> Abrir {focused.t}</a>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', maxWidth: 360, textAlign: 'center' }}>Requer login na conta Multilixo. Os relatórios do Power BI não podem ser embarcados por política do ambiente.</div>
              </div> :

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--ink-3)', fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Conecte um link a este indicador</div>
          }
          </div>
        </div>
      }

      <div className="grid grid-3">
        {dashboards.map((d, i) =>
        <Reveal key={i} delay={i * 50}>
            <div className={`card bi-card hover ${d.tone}`} onClick={() => setFocused(d)}>
              <div className="bi-head">
                <div className="ico"><Icon name={d.ico} size={20} /></div>
                <div><h3>{d.t}</h3></div>
              </div>
              <div className="bi-desc">{d.d}</div>
              <div className="bi-preview">
                <div className="mini-lbl">Indicador</div>
                <div className="mini-bars">
                  {[40, 72, 55, 88, 62, 91, 78, 95, 68].map((v, k) => <div key={k} className="bar" style={{ height: `${v}%` }}></div>)}
                </div>
              </div>
              <div className="bi-foot">
                <span>{d.dev ? 'Em desenvolvimento' : d.url && d.url !== '#' ? 'Conectado' : 'Placeholder'}</span>
                <span className="open">Abrir <Icon name="arrow-right" size={12} /></span>
              </div>
            </div>
          </Reveal>
        )}
        <AddBlock label="Adicionar dashboard" sub="Cole um link do Power BI" onClick={() => setOpen(true)} />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Novo dashboard" desc="Cole a URL pública do Power BI.">
        <Field label="Título"><input placeholder="Ex.: Disponibilidade de frota" /></Field>
        <Field label="Descrição"><textarea placeholder="O que este dashboard mostra?" /></Field>
        <Field label="URL Power BI (iframe)"><input placeholder="https://app.powerbi.com/..." /></Field>
        <div className="modal-actions">
          <button className="btn btn-ghost btn-sm" style={{ background: 'var(--surface-2)', color: 'var(--ink)', border: '1px solid var(--line)' }} onClick={() => setOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={() => setOpen(false)}>Adicionar</button>
        </div>
      </Modal>

      <div className="section" style={{ marginTop: 48 }}>
        <FreeContentBoard storageKey="pcm.indicadores.free" title="Mais painéis e materiais" subtitle="Cole iframes do Power BI, links de relatórios, anexe screenshots ou notas." />
      </div>
    </div>);

};

Object.assign(window, { HomePage, PCMPage, POPsPage, MAPROsPage, IndicadoresPage });
