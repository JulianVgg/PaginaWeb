function Hero({ hero }) {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge">{hero.badge}</span>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>

          <div className="button-group">
            <a href="#cofa" className="button button-primary">
              {hero.primaryCta}
            </a>
            <a href="#dispensario" className="button button-secondary">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <h3>¿Qué encontrarás aquí?</h3>
            <ul className="hero-list">
              {hero.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-card hero-card-soft">
            <h3>Enfoque del sitio</h3>
            <p>
              El diseño está pensado para transmitir seriedad, cercanía,
              confianza y claridad, con una estructura moderna pero sobria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;