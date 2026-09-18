import './Services.css'
import { useEffect, useState } from 'react'
import { DrawInView } from './BrandMotion'

const servicesData = [
  {
    id: '01',
    title: 'Estrategia de Medios & Planeación de Negocio',
    details: [
      'Estrategia integral de medios y comunicación',
      'Arquitectura de canales y customer journey',
      'Planeación de audiencias, mercados y puntos de contacto',
      'Distribución y optimización de inversión',
      'Estrategia SEO, SXO & Search Intelligence',
      'Auditoría, benchmarking y eficiencia de medios'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    )
  },
  {
    id: '02',
    title: 'Compra de Medios & Negociación de Alto Valor',
    details: [
      'Compra integral de medios on & offline',
      'Audience network, Search, Social Ads & Digital Media',
      'Negociación estratégica con medios y publishers',
      'Optimización de costos, inventarios y beneficios'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z"/>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      </svg>
    )
  },
  {
    id: '03',
    title: 'Data Analytics & Inteligencia de Negocios',
    details: [
      'Business Intelligence & visualización de datos',
      'Dashboards y reporting ejecutivo',
      'Brand Tracking, Brand Lift & estudios de mercado adhoc',
      'Modelos de atribución y efectividad de medios',
      'Insights y recomendaciones accionables'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Estrategia Creativa & Activos de Marca',
    details: [
      'Estrategia creativa y plataformas de comunicación',
      'Desarrollo de branding e identidad',
      'Diseño y producción de contenidos',
      'Producción audiovisual y postproducción',
      'UX/UI, diseño de experiencias y activos digitales',
      'Desarrollo web, landing pages & plataformas digitales'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    id: '05',
    title: 'Ecosistema de Redes Sociales & Engagement',
    details: [
      'Estrategia y arquitectura de canales sociales',
      'Planeación editorial y contenido',
      'Creación de contenido social-first',
      'Community Management & Social Care',
      'Social Listening & Trend Intelligence'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: '06',
    title: 'Relaciones Públicas, Patrocinios & Experiencias',
    details: [
      'Estrategia, negociación y gestión de patrocinios',
      'Estrategia de PR y comunicación de marca',
      'Influencers, KOLs & Talent Management',
      'Eventos, activaciones y experiencias de marca',
      'Alianzas estratégicas & branded partnerships',
      'Medición de impacto y valor generado'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  }
]

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id)
  const [expandedServiceId, setExpandedServiceId] = useState(servicesData[0].id)
  const activeService = servicesData.find((service) => service.id === activeServiceId) || servicesData[0]

  useEffect(() => {
    const syncServiceFromHash = () => {
      const serviceId = window.location.hash.match(/^#service-(\d{2})$/)?.[1]
      if (serviceId && servicesData.some((service) => service.id === serviceId)) {
        setActiveServiceId(serviceId)
        setExpandedServiceId(serviceId)
      }
    }

    syncServiceFromHash()
    window.addEventListener('hashchange', syncServiceFromHash)
    return () => window.removeEventListener('hashchange', syncServiceFromHash)
  }, [])

  const selectService = (serviceId) => {
    setActiveServiceId(serviceId)
    setExpandedServiceId(serviceId)
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header text-center">
          <h2 className="services-main-title">WHAT WE DO</h2>
          <p className="services-header-subtitle">
            Estructura de consultoría, medios y ejecución analítica de alto valor diseñada para acelerar la rentabilidad real de tu negocio.
          </p>
        </div>

        <div className="services-explorer">
          <div className="services-list" aria-label="Servicios">
            {servicesData.map((service) => (
              <DrawInView key={service.id}>
                <button
                  type="button"
                  id={`service-${service.id}`}
                  className={`service-list-item ${activeServiceId === service.id ? 'is-active' : ''}`}
                  aria-pressed={activeServiceId === service.id}
                  onClick={() => selectService(service.id)}
                >
                  <span className="service-list-number">{service.id}</span>
                  <span className="service-list-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="service-list-title">{service.title}</span>
                  <span className="service-list-arrow" aria-hidden="true">→</span>
                </button>
              </DrawInView>
            ))}
          </div>

          <div className="services-detail-panel" key={activeService.id} aria-live="polite">
            <div className="service-detail-visual">
              <img
                src="/brand-showcase.webp"
                alt="Activos de marca CENTRAL MX aplicados a espectaculares, video, editorial, digital e impresos"
                loading="lazy"
              />
            </div>
            <span className="service-detail-number">{activeService.id}</span>
            <h3 className="service-detail-title">{activeService.title}</h3>
            <ul className="service-detail-list">
              {activeService.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </div>
        </div>

        <div className="services-mobile-accordion">
          {servicesData.map((service) => {
            const isExpanded = expandedServiceId === service.id
            return (
              <div className={`mobile-service-item ${isExpanded ? 'is-expanded' : ''}`} key={service.id}>
                <button
                  type="button"
                  className="mobile-service-trigger"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                >
                  <span className="service-list-number">{service.id}</span>
                  <span className="mobile-service-title">{service.title}</span>
                  <span className="mobile-service-toggle" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                </button>
                {isExpanded && (
                  <ul className="service-detail-list mobile-service-detail">
                    {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services
