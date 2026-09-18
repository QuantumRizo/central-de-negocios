import './SuccessStories.css'

const caseStudies = [
  {
    id: 'simi',
    name: 'CentralSimi',
    themeClass: 'theme-simi',
    logo: '/centralsimi.webp',
    badge: 'Agencia Única Exclusiva',
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
      label: '2026 WORLD CUP FLAGSHIP',
      title: 'Host City Supporter Monterrey 2026',
      description: 'Planeación 360°, negociación directa de alto impacto y gestión comercial estratégica ante la FIFA con presencia nacional.',
      heroImage: { src: '/simi-monterrey-host-city.png', alt: 'Monterrey Host City Supporter y Farmacias Similares', kind: 'graphic' },
      primaryAccent: { src: '/estatua-simi.webp', alt: 'Simi futbolista con balón', kind: 'graphic' },
      accentImages: [
        { src: '/cases/centralsimi-monterrey-comunidad.jpg', alt: 'Visitantes compartiendo la experiencia de CentralSimi en Monterrey' },
        { src: '/cases/centralsimi-monterrey-taller.jpg', alt: 'Personas haciendo manualidades con personajes de Simi durante la activación' }
      ]
    }
  },
  {
    id: 'sika',
    name: 'Sika',
    themeClass: 'theme-sika',
    logo: '/partners/sika.png',
    badge: '8-Year Business Partnership',
    ctaText: null,
    ctaLink: null,
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
      heroImage: { src: '/sika-america.jpg', alt: 'Bienvenida Patrocinio Oficial Club América x Sika', kind: 'graphic' },
      accentImages: [
        { src: '/cases/sika-club-america-event.webp', alt: 'Activación Sika x Club América' },
        { src: '/cases/sika-carrera-podium.webp', alt: 'Podio Carrera Grandes de Corazón Sika x Club América' }
      ]
    }
  },
  {
    id: 'waldos',
    name: "Waldo's",
    themeClass: 'theme-waldos',
    logo: '/partners/waldos-logo.webp',
    badge: '4-Year Business Partnership',
    ctaText: null,
    ctaLink: null,
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
      heroImage: { src: '/partners/waldos-logo.webp', alt: "Waldo's", kind: 'graphic' },
      accentImages: [
        { src: '/cases/waldos-event.webp', alt: "Activación Waldo's" }
      ]
    }
  }
]

const StoryRow = ({ item, index }) => {
  const { visual } = item
  const reversed = item.imageSide === 'right'
  const accents = visual.accentImages || []
  const primaryAccent = visual.primaryAccent

  return (
    <div
      id={`case-${item.id}`}
      className={`story-row ${item.themeClass} ${reversed ? 'story-row-reverse' : ''}`}
    >
      <div className="story-row-inner container">

        <div className="story-visual">
          <figure className={`story-visual-main ${visual.heroImage.kind === 'graphic' ? 'is-graphic' : ''}`}>
            <img src={visual.heroImage.src} alt={visual.heroImage.alt} loading="lazy" />
          </figure>
          {primaryAccent && (
            <figure className={`story-visual-primary ${primaryAccent.kind === 'graphic' ? 'is-graphic' : ''}`}>
              <img src={primaryAccent.src} alt={primaryAccent.alt} loading="lazy" />
            </figure>
          )}
          {accents.length > 0 && (
            <div className={`story-visual-accent-group ${accents.length > 1 ? 'has-two' : ''}`}>
              {accents.map((accent) => (
                <figure
                  key={accent.src}
                  className={`story-visual-accent ${accent.kind === 'graphic' ? 'is-graphic' : ''}`}
                >
                  <img src={accent.src} alt={accent.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          )}
        </div>

        <div className="story-content">
          <div className="story-brand-row">
            <span className="story-logo-card">
              <img src={item.logo} alt={item.name} className="story-logo-img" />
            </span>
          </div>

          {item.badge && <h3 className="story-partnership-title">{item.badge}</h3>}

          <span className="story-case-eyebrow">CASE 0{index + 1} · {visual.label}</span>
          <h4 className="story-title">{visual.title}</h4>
          <p className="story-desc">{visual.description}</p>

          <ul className="story-services">
            {item.services.map((srv) => (
              <li key={srv}>
                <span className="story-service-bullet" aria-hidden="true" />
                <span>{srv}</span>
              </li>
            ))}
          </ul>

          {item.ctaLink && (
            <a href={item.ctaLink} className="btn story-cta">
              {item.ctaText}
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

const SuccessStories = () => {
  return (
    <section id="cases" className="success-cases section">
      <div className="container">
        <div className="cases-header text-center animate-fade-in-up">
          <h2 className="cases-title">SUCCESS STORIES</h2>
          <p className="cases-subtitle">
            Resultados reales construidos a través de estrategia, negociación y ejecución de alto impacto.
          </p>
        </div>
      </div>

      <div className="story-rows">
        {caseStudies.map((item, idx) => (
          <StoryRow key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  )
}

export default SuccessStories
