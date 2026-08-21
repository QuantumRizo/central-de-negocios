import './Services.css'

const servicesData = [
  {
    id: 1,
    title: 'Estrategia de Medios & Planeación de Negocio',
    theme: 'card-theme-white',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m16 12-4-4-4 4"/>
        <path d="M12 16V8"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Compra de Medios & Negociación de Alto Valor',
    theme: 'card-theme-primary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z"/>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Data Analytics & Inteligencia de Negocios',
    theme: 'card-theme-white',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Estrategia Creativa & Activos de Marca',
    theme: 'card-theme-white',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Ecosistema de Redes Sociales & Engagement',
    theme: 'card-theme-accent',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Relaciones Públicas, Patrocinios & Experiencias',
    theme: 'card-theme-primary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  }
]

const Services = () => {
  const handleMouseMove = (e) => {
    const cardEl = e.currentTarget
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const tiltX = (y / (rect.height / 2)) * -5
    const tiltY = (x / (rect.width / 2)) * 5
    cardEl.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-6px) scale(1.02)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header text-center">
          <span className="services-area-badge">CAPACIDADES & SOLUCIONES DE NEGOCIO</span>
          <h2 className="services-main-title">QUÉ HACEMOS</h2>
          <p className="services-header-subtitle">
            Estructura de consultoría, medios y ejecución analítica de alto valor diseñada para acelerar la rentabilidad real de tu negocio.
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${service.theme}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="service-card-top">
                <span className="service-number">0{service.id}</span>
                <div className="service-corner-icon">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
