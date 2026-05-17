const Sidebar = ({ current, onNav }) => {
  const groups = [
  {
    label: "Principal",
    items: [
    { id: "home", name: "Início", icon: "home" }]

  },
  {
    label: "Operação",
    items: [
    { id: "pcm", name: "PCM", icon: "gear" },
    { id: "pops", name: "POPs", icon: "file" },
    { id: "mapros", name: "MAPROs", icon: "folder" },
    { id: "indicadores", name: "Indicadores", icon: "chart" }]

  },
  {
    label: "Institucional",
    items: [
    { id: "quemsomos", name: "Quem Somos", icon: "building" },
    { id: "projetos", name: "Projetos Entregues", icon: "rocket" },
    { id: "iniciativas", name: "Iniciativas", icon: "bulb" },
    { id: "novidades", name: "Novidades", icon: "megaphone" },
    { id: "equipe", name: "Equipe", icon: "users" }]

  }];


  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo-wrap">
          <img src="assets/pcm-logo.png" alt="PCM" />
        </div>
        <div>
          <div className="name">Portal PCM</div>
          <div className="sub">MULTILIXO</div>
        </div>
      </div>

      {groups.map((g) =>
      <div key={g.label}>
          <div className="nav-group-label">{g.label}</div>
          {g.items.map((it) =>
        <button
          key={it.id}
          className={`nav-item ${current === it.id ? 'active' : ''}`}
          onClick={() => onNav(it.id)}>
          
              <span className="ico"><Icon name={it.icon} size={18} /></span>
              {it.name}
            </button>
        )}
        </div>
      )}

      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="avatar">GS</div>
          <div style={{ minWidth: 0 }}>
            <div className="who">Gabriel Santos</div>
            <div className="role" style={{ textAlign: "center" }}>PCM</div>
          </div>
        </div>
      </div>
    </aside>);

};

window.Sidebar = Sidebar;