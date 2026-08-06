import { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e, cardEl) => {
    if (!cardEl || !cardEl.classList.contains('is-visible')) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const tiltX = (y / (rect.height / 2)) * -6
    const tiltY = (x / (rect.width / 2)) * 6
    cardEl.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-8px) scale(1.015)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = ''
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header text-center scroll-animate-up" ref={el => cardsRef.current[0] = el}>
          <span className="services-area-badge">CAPACIDADES & SOLUCIONES DE NEGOCIO</span>
          <h2 className="services-main-title">QUÉ HACEMOS</h2>
          <p className="services-header-subtitle">
            Estructura de consultoría, medios y ejecución analítica de alto valor diseñada para acelerar la rentabilidad real de tu negocio.
          </p>
        </div>

        {/* Editorial Rhythm Layout */}
        <div className="services-editorial-layout">
          
          {/* 01. FEATURED HERO CARD 1: Media Strategy & Planning (WHITE) */}
          <div 
            className="service-card featured-service-card card-theme-white scroll-animate-up delay-100"
            ref={el => cardsRef.current[1] = el}
            onMouseMove={(e) => handleMouseMove(e, cardsRef.current[1])}
            onMouseLeave={() => handleMouseLeave(cardsRef.current[1])}
          >
            <div className="service-card-header">
              <div className="service-header-left">
                <h3 className="service-title">Estrategia de Medios & Planeación de Negocio</h3>
              </div>
              <div className="service-corner-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
              </div>
            </div>

            <p className="service-desc">
              Consultoría estratégica de negocios y arquitectura de medios de alta dirección orientada a resolver retos comerciales complejos y maximizar el valor de la marca.
            </p>

            <div className="service-divider"></div>

            <div className="service-capabilities-section">
              <h4 className="capabilities-label">CAPACIDADES Y ALCANCE</h4>
              <div className="capabilities-check-grid grid-2col">
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Estrategia de Medios 360°</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Planeación Táctica de Campañas</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Consultoría Estratégica de Negocios</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Estrategia de Comunicación Institucional</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 1: 2 MEDIUM CARDS (02: BLUE, 03: WHITE) */}
          <div className="services-grid-2col">
            
            {/* 02. Media Buying & Negotiation (BLUE) */}
            <div 
              className="service-card medium-service-card card-theme-blue scroll-animate-up delay-100"
              ref={el => cardsRef.current[2] = el}
              onMouseMove={(e) => handleMouseMove(e, cardsRef.current[2])}
              onMouseLeave={() => handleMouseLeave(cardsRef.current[2])}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Compra de Medios & Negociación de Alto Valor</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Poder de compra directo y capacidad de negociación de alto valor en medios masivos tradicionales y plataformas digitales.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPACIDADES Y ALCANCE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Programática & Búsqueda (Search)</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Publicidad en Redes & Canales Digitales</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">TV, Radio y Publicidad Exterior (OOH)</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Prensa & Negociación de Alto Valor</span></div>
                </div>
              </div>
            </div>

            {/* 03. Data Analytics & Business Intelligence (WHITE) */}
            <div 
              className="service-card medium-service-card card-theme-white scroll-animate-up delay-200"
              ref={el => cardsRef.current[3] = el}
              onMouseMove={(e) => handleMouseMove(e, cardsRef.current[3])}
              onMouseLeave={() => handleMouseLeave(cardsRef.current[3])}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Data Analytics & Inteligencia de Negocios</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Inteligencia cuantitativa avanzada, tableros automatizados de KPIs en tiempo real y optimización predictiva de ROI.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPACIDADES Y ALCANCE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Tableros de KPIs & Reporteo</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Análisis Post-Compra & Optimización</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Brand Tracking & Medición de Brand Lift</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Modelado Marketing Mix (MMM) & Analítica</span></div>
                </div>
              </div>
            </div>

          </div>

          {/* ROW 2: 2 MEDIUM CARDS (04: WHITE, 05: ORANGE) */}
          <div className="services-grid-2col">
            
            {/* 04. Creative & Brand Experience (WHITE) */}
            <div 
              className="service-card medium-service-card card-theme-white scroll-animate-up delay-100"
              ref={el => cardsRef.current[4] = el}
              onMouseMove={(e) => handleMouseMove(e, cardsRef.current[4])}
              onMouseLeave={() => handleMouseLeave(cardsRef.current[4])}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Estrategia Creativa & Activos de Marca</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Estrategia conceptual creativa, producción audiovisual multiformato y diseño de identidades visuales de alto impacto.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPACIDADES Y ALCANCE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Estrategia Creativa & Conceptualización</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Producción de Contenido & Activos</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Diseño Gráfico & Identidad Visual</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Producción Audiovisual & Branding Sonoro</span></div>
                </div>
              </div>
            </div>

            {/* 05. Social Media Ecosystem (ORANGE) */}
            <div 
              className="service-card medium-service-card card-theme-orange scroll-animate-up delay-200"
              ref={el => cardsRef.current[5] = el}
              onMouseMove={(e) => handleMouseMove(e, cardsRef.current[5])}
              onMouseLeave={() => handleMouseLeave(cardsRef.current[5])}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Ecosistema de Redes Sociales & Engagement</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Gestión integral del ecosistema social, monitoreo de marca en tiempo real y creatividad digital orientada a conversión.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPACIDADES Y ALCANCE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Creación de Contenido Multiplataforma</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Gestión de Comunidad & Crecimiento</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Monitoreo Social & Rastreo de Tendencias</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Creatividad Digital para Performance</span></div>
                </div>
              </div>
            </div>

          </div>

          {/* 06. FEATURED HERO CARD 2: Public Relations & Partnerships (BLUE) */}
          <div 
            className="service-card featured-service-card card-theme-blue scroll-animate-up delay-100"
            ref={el => cardsRef.current[6] = el}
            onMouseMove={(e) => handleMouseMove(e, cardsRef.current[6])}
            onMouseLeave={() => handleMouseLeave(cardsRef.current[6])}
          >
            <div className="service-card-header">
              <div className="service-header-left">
                <h3 className="service-title">Relaciones Públicas, Patrocinios & Experiencias</h3>
              </div>
              <div className="service-corner-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>

            <p className="service-desc">
              Relaciones públicas de alto valor estratégico, gestión comercial ante ligas/patrocinios mundiales y experiencias BTL masivas.
            </p>

            <div className="service-divider"></div>

            <div className="service-capabilities-section">
              <h4 className="capabilities-label">CAPACIDADES Y ALCANCE</h4>
              <div className="capabilities-check-grid grid-2col">
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Estrategia de RR.PP. & Relacionamiento</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Gestión de Eventos & Activaciones BTL</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Marketing de Influencers & Creadores</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Patrocinios & Alianzas Estratégicas</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services
