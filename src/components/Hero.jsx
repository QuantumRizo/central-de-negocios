import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-title">Media Ecosystem <br /> <span className="hero-gradient-text">Data-driven.</span></h1>
          <p className="hero-subtitle">
            Somos un equipo multidisciplinario de más de 20 especialistas. 
            Integramos décadas de experiencia con talento joven, creativo y orientado a datos 
            para resolver retos reales de negocio.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">Descubre nuestras soluciones</a>
          </div>
        </div>
        
        <div className="hero-visuals animate-fade-in-up delay-200">
          {/* Abstract floating elements inspired by dinamo.agency */}
          <div className="abstract-shape shape-1">
            <span className="shape-text">Solutions</span>
          </div>
          <div className="abstract-shape shape-2">
            <span className="shape-text">Strategy</span>
          </div>
          <div className="abstract-shape shape-3">
            <span className="shape-text">Experience</span>
          </div>
          <div className="abstract-shape shape-4">
            <span className="shape-text">Innovation</span>
          </div>
          <div className="abstract-shape shape-5">
            <span className="shape-text">Creativity</span>
          </div>
          <div className="hero-glow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
