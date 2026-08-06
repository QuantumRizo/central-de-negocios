import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      
      {/* SVG Animated Cables Layer */}
      <svg className="hero-cables-overlay" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E676" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF3D00" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2979FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D500F9" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-coral" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E85C41" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Cable paths */}
        <path d="M 280 250 C 340 180, 390 140, 460 132" className="cable-base" />
        <path d="M 280 250 C 340 180, 390 140, 460 132" className="cable-flow flow-yellow" />

        <path d="M 270 300 C 290 320, 310 330, 340 336" className="cable-base" />
        <path d="M 270 300 C 290 320, 310 330, 340 336" className="cable-flow flow-cyan" />

        <path d="M 250 320 C 265 370, 280 410, 300 444" className="cable-base" />
        <path d="M 250 320 C 265 370, 280 410, 300 444" className="cable-flow flow-green" />

        <path d="M 290 220 C 440 110, 580 80, 750 90" className="cable-base" />
        <path d="M 290 220 C 440 110, 580 80, 750 90" className="cable-flow flow-red" />

        <path d="M 280 340 C 330 410, 380 450, 450 492" className="cable-base" />
        <path d="M 280 340 C 330 410, 380 450, 450 492" className="cable-flow flow-blue" />

        <path d="M 310 350 C 440 440, 570 490, 720 516" className="cable-base" />
        <path d="M 310 350 C 440 440, 570 490, 720 516" className="cable-flow flow-purple" />

        <path d="M 330 360 C 480 460, 680 510, 880 528" className="cable-base" />
        <path d="M 330 360 C 480 460, 680 510, 880 528" className="cable-flow flow-coral" />
      </svg>

      {/* Hero Content Layer */}
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <span className="hero-top-badge">MEDIA ECOSYSTEM</span>
          <h1 className="hero-title">
            DATA-DRIVEN<span className="hero-red-dot">.</span>
          </h1>
          <p className="hero-subtitle">
            Somos un equipo multidisciplinario de más de 20 especialistas. 
            Integramos estrategia, medios, creatividad y datos para resolver retos reales de negocio.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-hero-primary">
              Descubre nuestras soluciones <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nodes HTML Overlay */}
      <div className="hero-nodes-layer">
        <div className="hero-node-item node-tv" style={{ top: '22%', left: '46%' }}>
          <span className="node-label">TV</span>
          <span className="node-dot dot-yellow"></span>
        </div>

        <div className="hero-node-item node-digital" style={{ top: '56%', left: '34%' }}>
          <span className="node-label">DIGITAL</span>
          <span className="node-dot dot-cyan"></span>
        </div>

        <div className="hero-node-item node-retail" style={{ top: '74%', left: '30%' }}>
          <span className="node-label">RETAIL</span>
          <span className="node-dot dot-green"></span>
        </div>

        <div className="hero-node-item node-ooh" style={{ top: '15%', left: '75%' }}>
          <span className="node-dot dot-red"></span>
          <span className="node-label">OOH</span>
        </div>

        <div className="hero-node-item node-analytics" style={{ top: '82%', left: '45%' }}>
          <span className="node-dot dot-blue"></span>
          <span className="node-label">ANALYTICS</span>
        </div>

        <div className="hero-node-item node-radio" style={{ top: '86%', left: '72%' }}>
          <span className="node-dot dot-purple"></span>
          <span className="node-label">RADIO</span>
        </div>

        <div className="hero-node-item node-pr" style={{ top: '88%', left: '88%' }}>
          <span className="node-dot dot-coral"></span>
          <span className="node-label">PR & INFLUENCERS</span>
        </div>
      </div>

    </section>
  )
}

export default Hero
