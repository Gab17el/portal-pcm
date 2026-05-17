const { useState: useStateApp, useEffect: useEffectApp } = React;

const App = () => {
  const [page, setPage] = useStateApp(() => {
    return (window.location.hash || '#home').replace('#', '') || 'home';
  });
  const [homeBlocks, setHomeBlocks] = useStateApp([]);
  const [addOpen, setAddOpen] = useStateApp(false);
  const [newBlock, setNewBlock] = useStateApp({ title: '', desc: '', icon: 'bulb' });

  useEffectApp(() => {
    window.location.hash = page;
    // Set screen label for comments
    document.body.setAttribute('data-screen-label', `page-${page}`);
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const addHomeBlock = () => setAddOpen(true);
  const saveBlock = () => {
    if (!newBlock.title) return;
    setHomeBlocks([...homeBlocks, newBlock]);
    setNewBlock({ title: '', desc: '', icon: 'bulb' });
    setAddOpen(false);
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage onNav={setPage} blocks={homeBlocks} addBlock={addHomeBlock} />;
      case 'pcm': return <PCMPage />;
      case 'pops': return <POPsPage />;
      case 'mapros': return <MAPROsPage />;
      case 'indicadores': return <IndicadoresPage />;
      case 'quemsomos': return <QuemSomosPage />;
      case 'projetos': return <ProjetosPage />;
      case 'iniciativas': return <IniciativasPage />;
      case 'novidades': return <NovidadesPage />;
      case 'equipe': return <EquipePage onNav={setPage} />;
      default: return <HomePage onNav={setPage} blocks={homeBlocks} addBlock={addHomeBlock} />;
    }
  };

  return (
    <div className="app">
      <Sidebar current={page} onNav={setPage} />
      <main className="main">
        {renderPage()}
      </main>

      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Adicionar card na home"
        desc="Crie um novo bloco flexível com ícone, título e descrição."
        footer={<>
          <button className="btn btn-ghost btn-sm" style={{background:'var(--surface-2)',color:'var(--ink)',border:'1px solid var(--line)'}} onClick={() => setAddOpen(false)}>Cancelar</button>
          <button className="btn btn-solid btn-sm" onClick={saveBlock}>Adicionar</button>
        </>}
      >
        <Field label="Título">
          <input value={newBlock.title} onChange={e => setNewBlock({ ...newBlock, title: e.target.value })} placeholder="Ex.: Link para SharePoint" />
        </Field>
        <Field label="Descrição">
          <textarea value={newBlock.desc} onChange={e => setNewBlock({ ...newBlock, desc: e.target.value })} placeholder="O que este bloco aponta?" />
        </Field>
        <Field label="Ícone">
          <select value={newBlock.icon} onChange={e => setNewBlock({ ...newBlock, icon: e.target.value })}>
            <option value="bulb">Lâmpada (ideia)</option>
            <option value="link">Link</option>
            <option value="file">Arquivo</option>
            <option value="chart">Gráfico</option>
            <option value="rocket">Foguete</option>
            <option value="wrench">Ferramenta</option>
            <option value="truck">Caminhão</option>
            <option value="target">Alvo</option>
          </select>
        </Field>
      </Modal>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
