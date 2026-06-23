import { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services section">
      <div className="container services-layout">
        
        {/* Left Column: Title and Subtitle */}
        <div className="services-left">
          <h2 className="services-title scroll-animate-left" ref={el => cardsRef.current[0] = el}>
            MEDIA<br/>SOLUTIONS
          </h2>
          <p className="services-description scroll-animate-left delay-100" ref={el => cardsRef.current[1] = el}>
            Soluciones integrales divididas en tres grandes ejes de ejecución basadas en data para potenciar tus resultados.
          </p>
        </div>

        {/* Right Column: Services List */}
        <div className="services-right">
          
          {/* Service 1 */}
          <div className="modern-service-card scroll-animate-up" ref={el => cardsRef.current[2] = el}>
            <div className="service-number">01</div>
            <div className="service-content-wrapper">
              <h3>Estrategia y Compra de Medios</h3>
              <p><strong>Medios Online (ON):</strong> Compra programática, Search, Social Ads, SEM, SEO y Lead Generation.</p>
              <p><strong>Medios Tradicionales (OFF):</strong> Publicidad exterior (OOH), TV, Radio y Prensa, con sólida negociación.</p>
              <p><strong>Desarrollo Táctico:</strong> Investigación de mercados y campañas integrales 360°.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="modern-service-card scroll-animate-up delay-100" ref={el => cardsRef.current[3] = el}>
            <div className="service-number">02</div>
            <div className="service-content-wrapper">
              <h3>Analítica de Datos y Reportes</h3>
              <p>Medición de KPIs y post-buy analysis.</p>
              <p>Tableros de visualización de datos automatizados.</p>
              <p>Optimización en tiempo real de campañas.</p>
              <p>Monitoreo de salud de marca (Brand Tracking & Lift).</p>
              <p>Analítica Web y Marketing Mix Modeling.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="modern-service-card scroll-animate-up delay-200" ref={el => cardsRef.current[4] = el}>
            <div className="service-number">03</div>
            <div className="service-content-wrapper">
              <h3>Experiencia de Marca y PR</h3>
              <p><strong>Estrategia y Producción:</strong> Diseño de comunicación, producción audiovisual, rodajes y Audio Branding.</p>
              <p><strong>Redes Sociales:</strong> Creación de contenido, diseño, Community Management y Social Listening.</p>
              <p><strong>Relaciones Públicas:</strong> Gestión de eventos de alto impacto, influencers, prensa y activaciones.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
