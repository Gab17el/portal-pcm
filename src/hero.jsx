const Hero = ({ onNav }) => {
  const heroRef = React.useRef(null);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.35, 200);
  const fadeOut = Math.max(1 - scrollY / 500, 0);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-grid-lines" style={{ transform: `translateY(${parallax * 0.3}px)` }}></div>
      </div>

      {/* Road + centered truck — driving lane behind text */}
      <div className="hero-road" style={{ opacity: fadeOut, transform: `translateY(${parallax * 0.15}px)` }}>
        <div className="hero-road-stripes"></div>
        <img src="assets/truck-hero.png" className="hero-road-truck" alt="" />
      </div>

      <div className="hero-content" style={{ transform: `translateY(${-parallax * 0.2}px)`, opacity: fadeOut, position: 'relative', zIndex: 5 }}>
        <div className="hero-eyebrow">
          <span className="dot"></span>
          PORTAL INTERNO · PCM MULTILIXO
        </div>
        <h1>
          Planejamento que<br />
          <span className="accent">move</span> a <span className="accent2">operação.</span>
        </h1>
        <p className="subtitle">
          Hub central do Planejamento e Controle da Manutenção da frota Multilixo — indicadores, POPs, MAPROs, projetos e iniciativas em um só lugar.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onNav('indicadores')}>
            <Icon name="chart" size={16} /> Ver Indicadores
          </button>
          <button className="btn btn-lime" onClick={() => onNav('pops')}>
            <Icon name="file" size={16} /> Acessar POPs
          </button>
          <button className="btn btn-ghost" onClick={() => onNav('quemsomos')}>
            Quem somos
          </button>
        </div>
      </div>
    </section>);

};

window.Hero = Hero;
