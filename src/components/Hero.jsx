import './Hero.css'
import HeroNetwork from './HeroNetwork'
import { AnimatedInfinity } from './BrandMotion'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      
      <HeroNetwork />

      {/* Hero Content Layer */}
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-brand-heading" aria-label="Central MX">
            <AnimatedInfinity fullLogo />
          </h1>
          <p className="hero-subtitle">
            Somos la <strong>agencia boutique</strong> para marcas que necesitan <strong>atención senior</strong>, <strong>criterio de negocio</strong>, <strong>capacidad de ejecución</strong>, <strong>gobernanza y negociación de alto valor</strong>, sin la burocracia de una red global.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-hero-primary">
              Descubre nuestras soluciones <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
