import { useState, useEffect, useRef } from 'react'
import './SuccessStories.css'

const caseStudies = [
  {
    id: 'simi',
    name: 'CentralSimi',
    themeClass: 'theme-simi',
    logo: '/centralsimi.webp',
    badge: 'Agencia Única Exclusiva',
    title: 'CentralSimi: Agencia Única & Ecosistema de Farmacias Similares',
    description: 'Ecosistema de medios dedicado a la gestión estratégica, compra e innovación publicitaria nacional de Farmacias Similares.',
    ctaText: 'Ver Caso Completo CentralSimi & Mundial 2026 →',
    ctaLink: '#centralsimi',
    metrics: [
      { value: '+15', label: 'Campañas anuales estratégicas', isAlt: true },
      { value: '+100', label: 'Socios comerciales gestionados', isAlt: false },
      { value: '100%', label: 'Cobertura Nacional en Medios', isAlt: true }
    ],
    visual: {
      number: '01',
      label: 'CASO EMBLEMÁTICO MUNDIAL 2026',
      title: 'Host City Supporter Monterrey 2026 & Gobernanza de Medios',
      description: 'Planeación 360°, negociación directa de alto impacto y gestión comercial estratégica ante la FIFA con presencia nacional.',
      kpi: '2.1X Valor Comercial Obtenido',
      image: '/simi partner.png',
      isStacked: true
    }
  },
  {
    id: 'sika',
    name: 'Sika',
    themeClass: 'theme-sika',
    logo: '/partners/sika.png',
    badge: 'Patrocinio Oficial',
    title: 'PATROCINIO SIKA × CLUB AMÉRICA',
    description: 'Consultoría estratégica, coordinación y gestión operativa del patrocinio de SIKA con el Club América.',
    metrics: [
      { value: '+$12M', label: 'Media Value en negociación', isAlt: false },
      { value: '+11M', label: 'Impactos orgánicos generados', isAlt: true },
      { value: '+115%', label: 'Incremental de visibilidad', isAlt: false }
    ],
    visual: {
      number: '02',
      label: 'SPONSORSHIP & BRAND AWARENESS',
      title: 'Estrategia & Posicionamiento de Marca',
      description: 'Negociación de patrocinio de alto rendimiento en la liga nacional, activaciones en estadio y amplificación digital.',
      kpi: '+$12M Media Value en Negociación',
      image: '/partners/sika.png',
      isStacked: true
    }
  },
  {
    id: 'waldos',
    name: "Waldo's",
    themeClass: 'theme-waldos',
    logo: '/partners/waldos.webp',
    badge: 'Aliado Estratégico 4+ Años',
    title: 'ESTRATEGIA RETAIL & MEDIOS DIGITALES WALDO\'S',
    description: 'Gestión integral de campañas digitales always-on, formatos OFF y activaciones de tráfico a tiendas retail.',
    metrics: [
      { value: '+5', label: 'Campañas anuales ejecutadas', isAlt: false },
      { value: '+5%', label: 'Crecimiento de Brand Purchase', isAlt: true },
      { value: '+50%', label: 'Visibilidad procedente de Medios', isAlt: false }
    ],
    visual: {
      number: '03',
      label: 'RETAIL MEDIA & PERFORMANCE',
      title: 'Campañas Always-On & Tráfico a Sucursales',
      description: 'Estrategias geolocalizadas de gran formato y optimización continua en Meta, Google Ads y TikTok con atribución a tienda.',
      kpi: '+5% Crecimiento en Brand Purchase',
      image: '/partners/waldos.webp',
      isStacked: true
    }
  }
]

const SuccessStories = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const cardRefs = useRef([])
  const rightColumnRef = useRef(null)
  const activeIdxRef = useRef(0)

  const activeCase = caseStudies[activeIdx]

  // Smooth cross-fade transition helper
  const triggerCaseChange = (newIdx) => {
    if (newIdx === activeIdxRef.current) return
    activeIdxRef.current = newIdx
    setIsFading(true)
    setTimeout(() => {
      setActiveIdx(newIdx)
      setTimeout(() => {
        setIsFading(false)
      }, 40)
    }, 140)
  }

  // IntersectionObserver to auto-switch left panel content on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-case-idx'))
            if (!isNaN(idx)) {
              triggerCaseChange(idx)
            }
          }
        })
      },
      { threshold: 0.45, rootMargin: '-15% 0px -15% 0px' }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="cases" 
      className={`success-cases section ${activeCase.themeClass}`}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="cases-header text-center animate-fade-in-up">
          <span className="cases-eyebrow">SELECTED WORK</span>
          <h2 className="cases-title">CASOS DE ÉXITO</h2>
          <p className="cases-subtitle">
            Resultados reales construidos a través de estrategia, negociación, ejecución y datos.
          </p>
        </div>

        {/* Two-Column Scroll-Driven Layout */}
        <div className="cases-story-layout">
          
          {/* LEFT COLUMN — STICKY (Smooth Cross-Fade on transition) */}
          <div className={`cases-sticky-left ${isFading ? 'is-fading' : ''}`}>
            
            <div className="sticky-brand-bar">
              <div className="sticky-logo-card">
                <img src={activeCase.logo} alt={activeCase.name} className="sticky-client-logo" />
              </div>
              <span className="sticky-badge">{activeCase.badge}</span>
            </div>

            <h3 className="sticky-case-title">{activeCase.title}</h3>
            <p className="sticky-case-desc">{activeCase.description}</p>

            {/* 3 Main KPIs */}
            <div className="sticky-kpi-grid">
              {activeCase.metrics.map((m, idx) => (
                <div className="sticky-kpi-box" key={idx}>
                  <div className={`kpi-val ${m.isAlt ? 'kpi-alt' : ''}`}>{m.value}</div>
                  <div className="kpi-lbl">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Optional Full Case CTA */}
            {activeCase.ctaLink && (
              <div className="sticky-cta-wrapper">
                <a href={activeCase.ctaLink} className="btn btn-sticky-cta">
                  {activeCase.ctaText}
                </a>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN — 1 CARD PER CASE STUDY (Scrolls vertically) */}
          <div className="cases-story-right" ref={rightColumnRef}>
            {caseStudies.map((item, idx) => (
              <div 
                key={item.id} 
                data-case-idx={idx}
                className={`story-scene-item ${activeIdx === idx ? 'scene-active' : ''}`}
                ref={el => cardRefs.current[idx] = el}
              >
                
                {/* Card Header Badges */}
                <div className="scene-header-line">
                  <span className="scene-num-badge">CASE 0{idx + 1}</span>
                  <span className="scene-capability-tag">{item.visual.label}</span>
                </div>

                {/* Layered Stacked Image Gallery */}
                <div className="scene-visual-wrapper">
                  <div className="editorial-stack-gallery">
                    <div className="stack-layer layer-back" />
                    <div className="stack-layer layer-mid" />
                    <div className="stack-layer layer-front">
                      <img src={item.visual.image} alt={item.visual.title} className="scene-hero-image" />
                    </div>
                  </div>
                </div>

                {/* Card Text & Supporting KPI */}
                <div className="scene-body-content">
                  <h4 className="scene-title">{item.visual.title}</h4>
                  <p className="scene-desc">{item.visual.description}</p>
                  
                  {item.visual.kpi && (
                    <div className="scene-kpi-pill">
                      <span className="kpi-pill-icon">⚡</span>
                      <span className="kpi-pill-text">{item.visual.kpi}</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default SuccessStories
