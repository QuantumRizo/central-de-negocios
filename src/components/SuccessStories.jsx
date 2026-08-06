import { useState, useEffect, useRef } from 'react'
import './SuccessStories.css'

const caseStudies = {
  simi: {
    id: 'simi',
    name: 'CentralSimi',
    themeClass: 'theme-simi',
    logo: '/centralsimi.webp',
    badge: 'Agencia Única Exclusiva',
    title: 'CentralSimi: Agencia Única & Ecosistema de Farmacias Similares',
    isFeatured: true,
    metrics: [
      { value: '+15', label: 'Campañas anuales estratégicas', isAlt: true, icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg> },
      { value: '+100', label: 'Socios comerciales gestionados', isAlt: false, icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { value: '100%', label: 'Cobertura Nacional en Medios', isAlt: true, icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> }
    ],
    subtitle: 'Gestión Integral del Portafolio de Medios Tradicionales & Especiales',
    subtext: 'OOH, TV, RADIO, PRENSA, DERRAME DIGITAL, EVENTOS & PATROCINIOS',
    bullets: [
      'Planeación estratégica y gobernanza de medios',
      'Compra e implementación de alta negociación',
      'Proyectos de alto impacto (Mundial Monterrey 2026, activaciones, patrocinios)',
      'Reporting en tiempo real, Data Analytics y Automatización'
    ],
    footer: 'Modelo de agencia dedicada highly eficiente que maximiza inversión, cobertura e impacto nacional',
    layout: 'simi-layout'
  },
  sika: {
    id: 'sika',
    name: 'Sika',
    themeClass: 'theme-sika',
    logo: '/partners/sika.png',
    badge: 'Patrocinio',
    title: 'PATROCINIO SIKA × CLUB AMÉRICA',
    metrics: [
      { value: '+12M', label: 'De Media Value en negociación' },
      { value: '+11M', label: 'De impactos orgánicos en patrocinio' },
      { value: '+115%', label: 'Incremental de impactos en patrocinio' }
    ],
    subtitle: 'Gestionamos el patrocinio de SIKA con Club América',
    subtext: 'BRAND AWARENESS, ESTRATEGIA DIGITAL, POSICIONAMIENTO',
    bullets: [
      'Consultoría estratégica, análisis de impacto y rentabilidad',
      'Coordinación y negociación de patrocinio',
      'Gestión estratégica y operativa de patrocinio',
      'Activaciones de producto y estrategia digital'
    ],
    footer: 'Gestión integral de campañas de medios, lanzamientos de producto, Data Analytics y Promotoría',
    layout: 'sika-layout'
  },
  waldos: {
    id: 'waldos',
    name: "Waldo's",
    themeClass: 'theme-waldos',
    logo: '/partners/waldos.webp',
    badge: 'Aliado 4+ años',
    title: 'ESTRATEGIA RETAIL & MEDIOS DIGITALES WALDO\'S',
    metrics: [
      { value: '+5', label: 'Campañas anuales' },
      { value: '+5%', label: 'De Brand Purchase' },
      { value: '+50%', label: 'De visibilidad procedente de Media' }
    ],
    subtitle: 'Gestionamos campañas digitales always on y campañas OFF',
    subtext: 'META, GOOGLE ADS, TIK TOK, OOH',
    bullets: [
      'Planeación estratégica y compra de medios',
      'Eventos especiales y activaciones retail',
      'Data Analytics & Brand Tracking continuo'
    ],
    footer: 'Campañas de branding, retail geolocalizado, formatos interactivos y generación de tráfico a tienda',
    layout: 'waldos-layout'
  }
}

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState('simi')
  const [isAnimating, setIsAnimating] = useState(false)
  const elementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
  
  const handleTabChange = (id) => {
    if (id === activeTab || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsAnimating(false);
    }, 280);
  }

  const activeCase = caseStudies[activeTab];

  return (
    <section id="cases" className={`success-cases section ${activeCase.themeClass}`}>
      <div className="container">
        
        <div 
          className="cases-header text-center scroll-animate-up"
          ref={el => elementsRef.current[0] = el}
        >
          <h2 className="cases-title">CASOS DE<br/>ÉXITO</h2>
          <p className="section-subtitle">Casos emblemáticos que demuestran nuestra capacidad de ejecución y gobernanza de medios</p>
        </div>

        <div 
          className="tabs-container scroll-animate-up delay-100"
          ref={el => elementsRef.current[1] = el}
        >
          {Object.values(caseStudies).map((c) => (
            <button 
              key={c.id} 
              className={`tab-btn tab-btn-${c.id} ${activeTab === c.id ? 'active' : ''}`}
              onClick={() => handleTabChange(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div 
          className={`case-content-wrapper ${isAnimating ? 'fading' : ''} scroll-animate-up delay-200`}
          ref={el => elementsRef.current[2] = el}
        >
          <div className="case-card">
            
            <div className="case-card-header">
              <div className="case-header-aligned-row">
                {activeCase.logo && (
                  <div className="case-logo-wrapper">
                    <img src={activeCase.logo} alt={activeCase.name} className="case-client-logo" />
                  </div>
                )}
                <div className="case-header-text-content">
                  {activeCase.badge && <span className="case-badge">{activeCase.badge}</span>}
                  <h3>{activeCase.title}</h3>
                </div>
              </div>
            </div>

            <div className="case-metrics">
              {activeCase.metrics.map((m, i) => (
                <div className="metric-box" key={i}>
                  {m.icon && <span className={`metric-icon ${m.isAlt ? 'icon-alt' : ''}`}>{m.icon}</span>}
                  <div className={`metric-value ${m.isAlt ? 'val-alt' : ''}`}>{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="case-body">
              <div className="case-details">
                <div className="case-subtitle-box">
                  <h4>{activeCase.subtitle}</h4>
                  <p className="case-subtext">{activeCase.subtext}</p>
                </div>
                
                <ul className="case-bullets">
                  {activeCase.bullets.map((bullet, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`case-visuals ${activeCase.layout}`}>
                {activeCase.id === 'simi' && (
                  <>
                    <div className="placeholder-image ph-simi-1">Espacio para campaña (CentralSimi)</div>
                    <div className="placeholder-image ph-simi-2">Espacio para activación (BTL / Eventos)</div>
                  </>
                )}
                {activeCase.id === 'sika' && (
                  <div className="placeholder-image ph-sika">Espacio para foto Club América x Sika</div>
                )}
                {activeCase.id === 'waldos' && (
                  <>
                    <div className="placeholder-image ph-waldos-1">Espacio para foto sucursal</div>
                    <div className="placeholder-image ph-waldos-2">Espacio para post (Redes Sociales)</div>
                  </>
                )}
              </div>
            </div>

            <div className="case-footer">
              <span className="arrows">»</span>
              <p>{activeCase.footer}</p>
              <span className="arrows">«</span>
            </div>

            {activeCase.id === 'simi' && (
              <div className="cs-cta-wrapper text-center" style={{ marginTop: '1.8rem' }}>
                <a href="#centralsimi" className="btn btn-cs-accent">Ver Caso Completo CentralSimi & Mundial 2026 →</a>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default SuccessStories
