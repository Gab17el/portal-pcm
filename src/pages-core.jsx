// Portal PCM · Multilixo — Todas as páginas consolidadas e componentes
var React = window.React;
const { useState, useEffect, useRef, useCallback } = React;

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
        <SectionHead eyebrow="Acesso externo" title="Sistemas Utilizados" />
      </Reveal>
      <div className="grid grid-3">
        <Reveal delay={0}>
          <a href="https://sisma.assisteweb.com.br/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="card hover" style={{ padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: 'var(--purple-100)', color: 'var(--purple-800)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="link" size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 4, color: 'var(--ink)' }}>SISMA Assiste</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>Gestão de manutenção e abertura de ordens de serviço.</p>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={60}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="card hover" style={{ padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: 'var(--surface-2)', color: 'var(--ink-3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="database" size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 4, color: 'var(--ink)' }}>Oracle / SB</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>Sistemas ERP e controles internos.</p>
              </div>
            </div>
          </a>
        </Reveal>
      </div>

      <Reveal className="section">
        <SectionHead eyebrow="Institucional" title="Conheça o PCM Multilixo" />
      </Reveal>
      <div className="grid grid-3">
        <Reveal delay={0}><QuickLink icon="users" title="Quem Somos" desc="Grupo Multilixo — 30+ anos, 10 empresas, líder em logística circular." tone="p" onClick={() => onNav('quemsomos')} /></Reveal>
        <Reveal delay={60}><QuickLink icon="bulb" title="Iniciativas" desc="Melhorias internas que nasceram dentro do PCM." tone="o" onClick={() => onNav('iniciativas')} /></Reveal>
        <Reveal delay={120}><QuickLink icon="users" title="Equipe" desc="As pessoas por trás do planejamento e da execução." tone="l" onClick={() => onNav('equipe')} /></Reveal>
      </div>

      <Reveal className="section">
        <SectionHead eyebrow="Últimas novidades" title="O que aconteceu no PCM" />
      </Reveal>
      <Reveal>
        <div className="card" style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', background: 'linear-gradient(135deg,#fff 0%, #faf6ee 100%)', borderLeft: '4px solid var(--orange)' }}>
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>Acompanhe tudo o que está acontecendo no PCM</h3>
            <p style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>Entregas, iniciativas, indicadores e avisos — atualizados na linha do tempo.</p>
          </div>
          <button className="btn btn-primary" onClick={() => onNav('novidades')}>Abrir Novidades <Icon name="arrow-right" size={16} /></button>
        </div>
      </Reveal>

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


const ClassificacaoOficinas = () => {
  const [tab, setTab] = useState('caminhoes');
  const tipoCor = { 1: '#16a34a', 2: '#f59e0b', 3: '#94a3b8' };
  const tipoLbl = { 1: 'Completa', 2: 'Parcial', 3: 'Apoio' };
  const caminhoes = [
    { reg: 'Sede Multilixo', cor: '#f08a2a', f: [['Multilixo Matriz', 1], ['Cubatão', 2], ['Recírculo', 3], ['Multi Bio Guarulhos', 3], ['Flacipel', 3], ['Aeroporto Guarulhos/Congonhas', 3], ['Pari', 3], ['Alcântara', 3], ['Midea', 3]] },
    { reg: 'Regional Jaguaré', cor: '#c6a700', f: [['Multilixo Jaguaré', 2], ['TWM - Itapevi', 3], ['Multilixo Ceagesp', 3], ['Multilixo Taboão', 3]] },
    { reg: 'Regional Itupeva', cor: '#5b8fb0', f: [['Itupeva', 2], ['Multibio - Mogi Guaçu', 2], ['Sorocaba', 3], ['Campinas (Hortolândia)', 3], ['TWM - Campinas', 3], ['Lençóis Paulista', 3]] },
    { reg: 'Regional Vale do Paraíba', cor: '#7cb342', f: [['MTL – Jacareí / Fábrica', 2], ['MTL – Suzano / Fábrica', 2], ['São José dos Campos', 3], ['Transbordo / Mult. Suzano', 3], ['MTL - Jacareí', 2]] },
    { reg: 'Regionais Independentes', cor: '#6b5b8e', f: [['Engep Jambeiro', 2], ['UTGR - Americana', 2], ['Multibio - Tatuí', 2], ['MTL - Mucuri', 2], ['MTL - Três Lagoas', 2]] }];
  const maquinas = [
    { reg: 'Sede Multilixo', cor: '#f08a2a', f: [['Multilixo', 1], ['Multibio Matriz', 3], ['Flacipel', 3], ['Trata Entulho', 3], ['Multi UVR', 3], ['Ceagesp', 3], ['Jaguaré', 3], ['Pari', 3], ['TWM - Itapevi', 3], ['TWM - Campinas', 3], ['Itupeva', 3], ['Lençóis Paulista', 3], ['Sorocaba', 3], ['Tatuí', 3], ['Cubatão', 3]] },
    { reg: 'Regional Mogi Guaçu', cor: '#c6a700', f: [['Mogi Guaçu (Geral)', 2]] },
    { reg: 'Regional Aterros e MS', cor: '#5b8fb0', f: [['Americana', 2], ['Jambeiro', 2], ['Três Lagoas - MS', 2]] },
    { reg: 'Regional Vale do Paraíba', cor: '#7cb342', f: [['Suzano / Fábrica', 2], ['Jacareí / Fábrica', 2], ['Caraguá', 3], ['Rechego Vale e Oeste', 3], ['Carregamento Vale Paraíba', 3]] },
    { reg: 'Regional Mucuri', cor: '#6b5b8e', f: [['Mucuri', 2]] }];
  const data = tab === 'caminhoes' ? caminhoes : maquinas;
  const totalFiliais = data.reduce((s, r) => s + r.f.length, 0);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
        <div className="chips">
          <button className={`chip ${tab === 'caminhoes' ? 'active' : ''}`} onClick={() => setTab('caminhoes')}>Caminhões</button>
          <button className={`chip ${tab === 'maquinas' ? 'active' : ''}`} onClick={() => setTab('maquinas')}>Máquinas e Geradores</button>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontSize: 12, color: 'var(--ink-2)' }}>
          {[1, 2, 3].map(t =>
          <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', background: tipoCor[t], color: '#fff', fontSize: 11, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{t}</span>
              {tipoLbl[t]}
            </span>)}
          <span style={{ fontFamily: 'JetBrains Mono', color: 'var(--ink-3)' }}>{data.length} regionais · {totalFiliais} filiais</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, alignItems: 'start' }}>
        {data.map((r, i) =>
        <Reveal key={r.reg} delay={i * 50}>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ background: r.cor, color: '#fff', padding: '12px 16px', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{r.reg}</span><span style={{ opacity: 0.85, fontSize: 11 }}>{r.f.length}</span>
              </div>
              <div style={{ padding: '8px 0' }}>
                {r.f.map(([nome, tipo], k) =>
                <div key={k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '8px 16px', borderBottom: k < r.f.length - 1 ? '1px solid var(--line)' : 'none' }}>
                    <span style={{ fontSize: 13, color: 'var(--ink)' }}>{nome}</span>
                    <span title={tipoLbl[tipo]} style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: tipoCor[tipo], color: '#fff', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{tipo}</span>
                  </div>)}
              </div>
            </div>
          </Reveal>)}
      </div>
    </div>);

};

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
      <SectionHead eyebrow="Estrutura da manutenção" title="Classificação de Oficinas e Filiais" />
      <p style={{ fontSize: 14, color: 'var(--ink-2)', maxWidth: 780, marginBottom: 24 }}>
        Tipo de oficina por filial, separado por frota (caminhões e máquinas) e regional. Tipo 1 — Completa · Tipo 2 — Parcial · Tipo 3 — Ponto de Apoio.
      </p>
      <ClassificacaoOficinas />
    </div>

    <div className="section">
      <SectionHead eyebrow="Princípio" title="Manutenção é estratégia, não custo." />
      <div className="card" style={{ padding: '32px 36px', background: 'linear-gradient(135deg, #fff 0%, #faf6ee 100%)', borderLeft: '4px solid var(--orange)' }}>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink)', fontStyle: 'italic', fontWeight: 500 }}>" Você não precisa lembrar seu coração de bater , já imaginou uma organização assim ? "

      </p>
        <div style={{ marginTop: 16, fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--purple-700)', fontWeight: 600 }}>-DEE HOCK,ORGANIZAÇÕES CAÓRDICAS </div>
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
  { t: 'SGM · Daily Follow-up', d: 'Follow-up diário SGM — caminhões, máquinas, diesel e DTP. Clique para escolher.', ico: 'clock', tone: 'p', children: [
    { t: 'Daily · Follow-up Caminhões', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQC6mt9VSm6ARZ5z0YPvgJRnAaZx4dG_uAA_xiL2yv3NRUI?e=ISl33P' },
    { t: 'Daily · Follow-up Máquinas', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQD9n00G93wDS5Z1D7_-Hz-NAcXkjcXoFUT0Pc4NAeCeW3A?e=DXqtAP' },
    { t: 'Daily · Follow-up Diesel', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQBaub6sxty-RrHgW0rGfT9YAfOizfOCGiew9z19SEhPW60?e=U8hXLP' },
    { t: 'Daily · Follow-up DTP', url: 'https://grmultilixo-my.sharepoint.com/:x:/g/personal/gabriel_santos_multilixo_com_br/IQAIhC2aHeveQayubMT_jkuUATXXYCCTnd2Z_8A-A7wGYWE?e=AJc7W1' }] },
  { t: 'CRM · Fechamento do Mês', d: 'Fechamento mensal da manutenção — orçado x realizado.', ico: 'calendar', tone: 'o', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/9c9f93a3-dcec-44c0-b875-29d3bca039bb/f199eb34572138cda909?language=pt-BR&experience=power-bi' },
  { t: 'Custo de Manutenção · Diário', d: 'Orçado x realizado diário do custo de manutenção da frota.', ico: 'chart', tone: 'l', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/f19987f87002e0329880?language=pt-BR&experience=power-bi' },
  { t: 'Inventário de Frota', d: 'Composição da frota: cadastrada, patrimonial, locada e operacional.', ico: 'truck', tone: 'p', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/f199eb34572138cda909?language=pt-BR&experience=power-bi' },
  { t: 'Frota Auxiliar', d: 'Acompanhamento da frota auxiliar de apoio às operações.', ico: 'truck', tone: 'o', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/e5c8062f-0249-461f-a1f9-d12b31c22c32/64718a8041c18d712186?language=pt-BR&experience=power-bi' },
  { t: 'Saída de Peças', d: 'Custo das saídas de peças por empresa, filial e período.', ico: 'wrench', tone: 'l', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/059eb79ffdd89f891415?language=pt-BR&experience=power-bi' },
  { t: 'Gestão de Pneus', d: 'Controle de pneus — vida útil, rodízio, custo e descarte.', ico: 'gear', tone: 'p', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/64fdd3cc-f87a-46b7-9ab6-9921546bd57b/059eb79ffdd89f891415?language=pt-BR&experience=power-bi' },
  { t: 'Custo por Veículos', d: 'Custo de manutenção por veículo, modelo e fabricante.', ico: 'truck', tone: 'o', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/ace112990848200ac195?language=pt-BR&experience=power-bi' },
  { t: 'Abertura de O.S.', d: 'Volume, custo e aging das ordens de serviço por motivo.', ico: 'file', tone: 'l', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/c8769fa2-8670-42ea-a629-90a630151db8/4b1bf6d12a9cca9ee126?language=pt-BR&experience=power-bi' },
  { t: 'Mapa de Calor · Checklist', d: 'Distribuição do checklist por dia e horário — mapa de calor.', ico: 'dashboard', tone: 'p', url: 'https://app.powerbi.com/groups/3ddeded8-81f5-420c-911d-00b515315786/reports/b2c4e56d-8068-4653-a797-7ba180ca3b52/bc121af00d7c21501942?language=pt-BR&experience=power-bi' },
  { t: 'Solicitação de Apoio e Orçamento · Máquinas', d: 'Formulário para solicitar apoio e orçamento para máquinas.', ico: 'file', tone: 'o', url: 'https://script.google.com/macros/s/AKfycbyz44HPLiksX5w9YDNLR_Rsgu02YrBlMnFwhH_gJWpZRokWDd1rGy-50LTZ1RMoDiC4/exec' },
  { t: 'SLA · Manutenção Preventiva de Máquinas', d: 'Acompanhamento do SLA da manutenção preventiva de máquinas.', ico: 'target', tone: 'l', url: 'https://jhroochamulti.github.io/manutencao-preventiva-multilixo/index.html?v=54' },
  { t: 'CPK · Custo por KM', d: 'Custo de manutenção por quilômetro rodado.', ico: 'trend', tone: 'o', url: '#', dev: true },
  { t: 'QPK · Quebra por KM', d: 'Índice de quebras por quilômetro rodado.', ico: 'target', tone: 'l', url: '#', dev: true },
  { t: 'MTBF', d: 'Tempo médio entre falhas (Mean Time Between Failures).', ico: 'clock', tone: 'p', url: '#', dev: true },
  { t: 'MTTR', d: 'Tempo médio de reparo (Mean Time To Repair).', ico: 'gear', tone: 'o', url: '#', dev: true }]
  );
  const [open, setOpen] = useState(false);
  const [chooser, setChooser] = useState(null);
  const [query, setQuery] = useState('');

  const openDash = (d) => {
    if (d.dev) return;
    if (d.children) { setChooser(d); return; }
    if (d.url && d.url !== '#') window.open(d.url, '_blank', 'noopener');
  };

  const q = query.trim().toLowerCase();
  const shown = dashboards.filter(d => !q || (d.t + ' ' + d.d).toLowerCase().includes(q) || (d.children || []).some(c => c.t.toLowerCase().includes(q)));

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

      <div className="search" style={{ maxWidth: 420, marginBottom: 24 }}>
        <span className="s-ico"><Icon name="search" size={16} /></span>
        <input placeholder="Buscar indicador..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>

      <div className="grid grid-3">
        {shown.map((d, i) =>
        <Reveal key={d.t} delay={i * 40}>
            <div className={`card bi-card hover ${d.tone}`} style={{ cursor: d.dev ? 'default' : 'pointer' }} onClick={() => openDash(d)}>
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
                <span>{d.dev ? 'Em desenvolvimento' : d.children ? `${d.children.length} planilhas` : d.url && d.url !== '#' ? 'Conectado' : 'Placeholder'}</span>
                <span className="open">{d.dev ? '—' : d.children ? 'Escolher' : 'Abrir'} {!d.dev && <Icon name="arrow-right" size={12} />}</span>
              </div>
            </div>
          </Reveal>
        )}
        {shown.length === 0 &&
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: 'var(--ink-3)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>Nenhum indicador encontrado para "{query}".</div>}
        {!q && <AddBlock label="Adicionar dashboard" sub="Cole um link do Power BI" onClick={() => setOpen(true)} />}
      </div>

      <Modal open={!!chooser} onClose={() => setChooser(null)} title={chooser ? chooser.t : ''} desc="Escolha qual planilha abrir (abre em nova aba).">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {chooser && chooser.children.map((c, k) =>
          <a key={k} className="btn btn-solid" style={{ justifyContent: 'space-between', textAlign: 'left' }} href={c.url} target="_blank" rel="noopener noreferrer" onClick={() => setChooser(null)}>
              {c.t} <Icon name="arrow-right" size={16} />
            </a>)}
        </div>
      </Modal>

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

const DetailPanel = ({ item, onClose, kind }) => {
  if (!item) return null;

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; 
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '5vh 20px', overflowY: 'auto', backdropFilter: 'blur(4px)' }} onClick={onClose}>
      <div className="card" style={{ width: '100%', maxWidth: 860, margin: '0 auto', padding: '32px 36px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '1px solid var(--purple-100)' }} onClick={e => e.stopPropagation()}>
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

        <FreeContentBoard storageKey={`pcm.ev.detail.${item.id || item.t.replace(/\s+/g, '')}`} title="Fotos e Arquivos" subtitle="Anexe fotos, apresentações, PDFs ou links sobre esta novidade." />
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

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; 
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const set = (patch) => onSave({ ...item, ...patch });
  const infoBox = (label, node) => (
    <div style={{ flex: '1 1 180px', minWidth: 160 }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', fontWeight: 600, marginBottom: 4 }}>{label}</div>
      {node}
    </div>
  );
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '5vh 20px', overflowY: 'auto', backdropFilter: 'blur(4px)' }} onClick={onClose}>
      <div className="card" style={{ width: '100%', maxWidth: 860, margin: '0 auto', padding: '32px 36px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '1px solid var(--purple-100)' }} onClick={e => e.stopPropagation()}>
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
        <Field label="Evidências (arquivos)"><Dropzone /></Field>
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
        <Field label="Fotos / Arquivos"><Dropzone /></Field>
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
    { id:'t1',  n:'Julio Scalisse',        r:'Diretor de Manutenção',                     b:'Governança da diretoria de manutenção.',                                                                                                            email:'julio.scalisse@multilixo.com.br',   photo:null },
    { id:'t2',  n:'Cristiano Guertes',      r:'Gerente de Manutenção',                      b:'Planejamento de frota (caminhões).',                                                                                                                email:'cristiano.guertes@multilixo.com.br', photo:null },
    { id:'t3',  n:'Clayton Faneli',         r:'Gestão Estratégica · Máquinas',              b:'Gestão estratégica da manutenção de máquinas: equipes, custos, programação de serviços, indicadores e suporte técnico às operações.', email:'clayton.faneli@multilixo.com.br',   photo:null },
    { id:'t4',  n:'Gabriel Sousa Santos',   r:'PCM · Digitalização / Processos',            b:'Digitalização, BI e PCM da diretoria de manutenção.',                                                                                               email:'gabriel.santos@multilixo.com.br',   photo:null },
    { id:'t5',  n:'Camila Cicone',          r:'PCM · Controle de Custos',                   b:'Controle de custos da manutenção, orçamento, análises financeiras, acompanhamento de despesas e elaboração de TCO.',                email:'camila.cicone@multilixo.com.br',     photo:null },
    { id:'t6',  n:'Thais Florentino',       r:'PCM · Governança Administrativa',            b:'Governança administrativa da manutenção, padronização de processos, análises de consumo e relatórios gerenciais.',                 email:'thais.florentino@multilixo.com.br',  photo:null },
    { id:'t7',  n:'Bruna Pereira',          r:'PCM · RH da Manutenção',                     b:'Gestão administrativa de RH da manutenção: ponto, férias, atestados, bonificações e treinamentos.',                                   email:'bruna.pereira@multilixo.com.br',     photo:null },
    { id:'t8',  n:'Ricardo Tavares',        r:'PCM · Sinistros / Suporte RH',               b:'Controle de opacidade, gestão de sinistros e suporte administrativo e de RH.',                                                                      email:'ricardo.tavares@multilixo.com.br',  photo:null },
    { id:'t9',  n:'Camila Silva',           r:'PCM · Combustível',                          b:'Gestão de combustível, abastecimentos, conciliações, controle de diesel e suporte às filiais.',                                     email:'camila.silva@multilixo.com.br',      photo:null },
    { id:'t10', n:'Arnaldo Dantas',         r:'PCM · Auditoria / Ativos',                   b:'Auditoria da manutenção, controle de revisões, preventivas, notas fiscais e gestão de ativos.',                                     email:'arnaldo.dantas@multilixo.com.br',    photo:null },
    { id:'t11', n:'Maicon Rodrigues',       r:'PCM · Pneus e Lubrificantes',                b:'Gestão de pneus, lubrificantes e apoio ao planejamento das manutenções preventivas.',                                               email:'maicon.rodrigues@multilixo.com.br',  photo:null },
    { id:'t12', n:'Jonathan Rocha',         r:'Máquinas · Controle Operacional',            b:'Controle operacional da manutenção de máquinas: preventivas, telemetria, consumo de combustível, máquinas paradas, ordens de serviço e notas fiscais.', email:'jonathan.rocha@multilixo.com.br',  photo:null },
    { id:'t13', n:'Victor Silva',           r:'Máquinas · Materiais e Peças',               b:'Gestão de materiais, peças e serviços da manutenção de máquinas, acompanhando compras, fornecedores e reparos.',                    email:'',                                   photo:null },
    { id:'t14', n:'Lucas Dias',             r:'Venda de Máquinas e Caminhões',              b:'Responsável pela venda de máquinas e caminhões.',                                                                                                   email:'lucas.dias@multilixo.com.br',        photo:null },
    { id:'t15', n:'Rodrigo Silva',          r:'Recepção Ativa / Triagem',                   b:'Responsável pela recepção ativa de caminhões e pela triagem de equipe.',                                                                            email:'rodrigo.silva@multilixo.com.br',     photo:null },
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

// Generic primitives: Reveal, Modal, KPI, QuickLink, Toolbar, AddBlock, Chips
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
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch (e) {
      try {
        const stripped = Array.isArray(items)
          ? items.map(it => (it && typeof it.photo === 'string' && it.photo.startsWith('data:')) ? { ...it, photo: null } : it)
          : items;
        localStorage.setItem(key, JSON.stringify(stripped));
        console.warn('[PCM] localStorage cheio: salvei sem fotos base64. Use o upload para o Drive.');
      } catch (e2) {
        console.error('[PCM] não foi possível salvar no localStorage', e2);
      }
    }
  }, [items, key]);
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
