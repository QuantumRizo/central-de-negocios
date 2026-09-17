import { useState, useEffect, useRef } from 'react'
import './SuccessStories.css'
import HoverImageGallery from './HoverImageGallery'

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
    services: [
      'Agencia Única & Compra Masiva de Medios (TV, Radio, OOH)',
      'Negociación de Patrocinios (FIFA 2026 Host City Monterrey)',
      'Estrategia Creativa & Activaciones de Marca',
      'Data Analytics & Monitoreo de Retorno de Inversión'
    ],
    visual: {
      number: '01',
      label: 'CASO EMBLEMÁTICO MUNDIAL 2026',
      title: 'Host City Supporter Monterrey 2026',
      description: 'Planeación 360°, negociación directa de alto impacto y gestión comercial estratégica ante la FIFA con presencia nacional.',
      images: [
        { src: '/simi-monterrey-landscape.png', alt: 'Host City Supporter Monterrey 2026', kind: 'graphic' },
        { src: '/simi-monterrey-photo.jpg', alt: 'Activación Sede Monterrey' },
        { src: '/cases/centralsimi-fabrica-alegria.jpg', alt: 'La Fábrica de la Alegría' }
      ]
    }
  },
  {
    id: 'sika',
    name: 'Sika',
    themeClass: 'theme-sika',
    logo: '/partners/sika.png',
    badge: null,
    title: '8-Year Business Partnership',
    description: 'Una relación integral para activar soluciones de negocio, marca y medios de principio a fin.',
    services: [
      'Campañas ON & OFF (Full Service)',
      'Estudios de Consumidor y Mercado',
      'Diseño & Creative',
      'Patrocinios Deportivos',
      'Data Analytics & Business Intelligence',
      'Consultoría de Negocio'
    ],
    visual: {
      number: '02',
      label: 'SPONSORSHIP & BRAND AWARENESS',
      title: 'Patrocinio Oficial Club América',
      description: 'Negociación de patrocinio de alto rendimiento en la liga nacional, presencia de marca y amplificación digital.',
      images: [
        { src: '/sika-america.jpg', alt: 'Patrocinio Oficial Club América', kind: 'graphic' },
        { src: '/cases/sika-product-bag.png', alt: 'Producto SikaCeram 240 Solución Total' },
        { src: '/cases/sika-club-america-event.png', alt: 'Activación Sika x Club América' }
      ]
    }
  },
  {
    id: 'waldos',
    name: "Waldo's",
    themeClass: 'theme-waldos',
    logo: '/partners/waldos-logo.png',
    badge: 'Aliado Estratégico 4+ Años',
    title: 'Estrategia Retail Media & Medios Waldo\'s',
    description: 'Gestión integral de campañas digitales always-on, formatos OFF y activaciones de tráfico a tiendas retail.',
    services: [
      'Campañas Digitales Always-On (Meta, Google & TikTok Ads)',
      'Retail Media & Geolocalización de Alta Conversión',
      'Publicidad Exterior (OOH Masivo) en Puntos Clave',
      'Modelos de Atribución & Tráfico a Sucursales'
    ],
    visual: {
      number: '03',
      label: 'RETAIL MEDIA & PERFORMANCE',
      title: 'Campañas Always-On & Tráfico a Tiendas',
      description: 'Estrategias geolocalizadas de gran formato y optimización continua con atribución medible a sucursales.',
      images: [
        { src: '/partners/waldos-logo.png', alt: 'Waldo\'s', kind: 'graphic' },
        { src: '/cases/waldos-event.png', alt: 'Activación Waldo\'s' },
        { src: '/cases/waldos-social.png', alt: 'Campaña digital Waldo\'s' }
      ]
    }
  }
]

const SuccessStories = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const cardRefs = useRef([])
  const leftColumnRef = useRef(null)
  const activeIdxRef = useRef(0)

  const activeCase = caseStudies[activeIdx]

  // Smooth cross-fade transition helper for sticky right column
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

  // IntersectionObserver to auto-switch right panel content as user scrolls left cards
  useEffect(() => {
    const syncCaseFromHash = () => {
      const caseId = window.location.hash.match(/^#case-([a-z-]+)$/)?.[1]
      const caseIndex = caseStudies.findIndex((item) => item.id === caseId)
      if (caseIndex !== -1) {
        activeIdxRef.current = caseIndex
        setActiveIdx(caseIndex)
        setIsFading(false)
      }
    }

    syncCaseFromHash()
    window.addEventListener('hashchange', syncCaseFromHash)
    return () => window.removeEventListener('hashchange', syncCaseFromHash)
  }, [])

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
          <h2 className="cases-title">SUCCESS STORIES</h2>
          <p className="cases-subtitle">
            Resultados reales construidos a través de estrategia, negociación y ejecución de alto impacto.
          </p>
        </div>

        {/* Two-Column Scroll-Driven Layout: Left (Images/Cases) | Right (Services/Info Sticky) */}
        <div className="cases-story-layout">
          
          {/* LEFT COLUMN — SCROLLABLE CASE STUDY IMAGE CARDS */}
          <div className="cases-story-scroll-left" ref={leftColumnRef}>
            {caseStudies.map((item, idx) => (
              <div 
                key={item.id} 
                id={`case-${item.id}`}
                data-case-idx={idx}
                className={`story-scene-item ${activeIdx === idx ? 'scene-active' : ''}`}
                ref={el => cardRefs.current[idx] = el}
              >
                
                {/* Mobile-Only Brand Header */}
                <div className="mobile-case-header">
                  <div className="sticky-brand-bar">
                    <div className="sticky-logo-card">
                      <img src={item.logo} alt={item.name} className="sticky-client-logo" />
                    </div>
                    {item.badge && <span className="sticky-badge">{item.badge}</span>}
                  </div>
                  <h3 className="sticky-case-title">{item.title}</h3>
                </div>

                {/* Card Header Badges */}
                <div className="scene-header-line">
                  <span className="scene-num-badge">CASE 0{idx + 1}</span>
                  <span className="scene-capability-tag">{item.visual.label}</span>
                </div>

                {/* Visual Image / Gallery Container */}
                <div className="scene-visual-wrapper">
                  <HoverImageGallery images={item.visual.images} title={item.visual.title} />
                </div>

                {/* Card Text: Only Title & Narrative (No metrics) */}
                <div className="scene-body-content">
                  <h4 className="scene-title">{item.visual.title}</h4>
                  <p className="scene-desc">{item.visual.description}</p>
                </div>

                {/* Mobile-Only Services & CTA */}
                <div className="mobile-case-services">
                  <span className="services-lead-label">Servicios a la empresa:</span>
                  <ul className="sticky-services-list">
                    {item.services.map((srv, sIdx) => (
                      <li key={sIdx} className="sticky-service-chip">
                        <span className="chip-bullet">•</span>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                  {item.ctaLink && (
                    <div className="sticky-cta-wrapper">
                      <a href={item.ctaLink} className="btn btn-sticky-cta">
                        {item.ctaText}
                      </a>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT COLUMN — STICKY (Services & Company Info, smoothly cross-fades on scroll) */}
          <div className={`cases-sticky-right ${isFading ? 'is-fading' : ''}`}>
            
            <div className="sticky-brand-bar">
              <div className="sticky-logo-card">
                <img src={activeCase.logo} alt={activeCase.name} className="sticky-client-logo" />
              </div>
              {activeCase.badge && <span className="sticky-badge">{activeCase.badge}</span>}
            </div>

            <h3 className="sticky-case-title">{activeCase.title}</h3>
            <p className="sticky-case-desc">{activeCase.description}</p>

            {/* Services provided to this company */}
            <div className="sticky-services-block">
              <span className="services-lead-label">Servicios a la empresa:</span>
              <ul className="sticky-services-list">
                {activeCase.services.map((srv, sIdx) => (
                  <li key={sIdx} className="sticky-service-chip">
                    <span className="chip-bullet">•</span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            {activeCase.ctaLink && (
              <div className="sticky-cta-wrapper">
                <a href={activeCase.ctaLink} className="btn btn-sticky-cta">
                  {activeCase.ctaText}
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

export default SuccessStories
