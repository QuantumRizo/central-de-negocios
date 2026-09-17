import { useEffect, useRef } from 'react'
import './CentralSimi.css'

const stats = [
  { value: '+15', label: 'Campañas anuales', tone: 'red' },
  { value: '+100', label: 'Socios comerciales', tone: 'blue' },
  { value: '100%', label: 'Cobertura nacional', tone: 'teal' },
]

const corePillars = [
  'Planeación estratégica',
  'Compra e implementación de medios',
  'Innovación en medios tradicionales',
  'Proyectos de alto impacto',
  'Reporting, Data Analytics & Automatización',
]

const jugadaMaestraSteps = [
  { step: '01', title: 'Identificación de oportunidad estratégica de alto valor', desc: 'Detección temprana del potencial del Mundial 2026 y posicionamiento estratégico en la sede Monterrey.' },
  { step: '02', title: 'Estrategia y propuesta a la medida', desc: 'Diseño conceptual y comercial alineado a los objetivos de alcance e imagen del grupo.' },
  { step: '03', title: 'Negociación de presupuesto & assets', desc: 'Optimización de inversión para maximizar los activos incluidos en el convenio.' },
  { step: '04', title: 'Gestión legal & comercial ante FIFA', desc: 'Negociación directa y participación coordinada de las marcas clave del portafolio.' },
  { step: '05', title: 'Asesoría & activación de patrocinio', desc: 'Acompañamiento operativo continuo, activaciones BTL y promotoría de campo.' },
]

const capabilities = [
  {
    number: '01',
    eyebrow: 'Planeación & compra',
    title: 'Una operación OFF diseñada para crecer',
    description: 'Arquitectura de medios, negociación directa y control de inversión para que cada campaña tenga escala, eficiencia y trazabilidad.',
    image: '/cases/centralsimi-campaign.png',
    alt: 'Campaña de Farmacias Similares en publicidad exterior',
    tags: ['OOH', 'TV', 'Radio', 'Prensa'],
  },
  {
    number: '02',
    eyebrow: 'Brand experience',
    title: 'La marca también se construye en la calle',
    description: 'Convertimos presencia nacional en experiencias memorables: activaciones, patrocinios y proyectos especiales que conectan con la comunidad.',
    image: '/cases/centralsimi-fabrica-alegria.jpg',
    alt: 'Activación de CentralSimi en La Fábrica de la Alegría',
    tags: ['Experiencias', 'BTL', 'Promotoría'],
  },
  {
    number: '03',
    eyebrow: 'Data & governance',
    title: 'Decisiones claras para una inversión más inteligente',
    description: 'Reporting, automatización y analítica para convertir la cobertura en aprendizaje accionable y mejores decisiones comerciales.',
    image: '/cases/monterrey-stage.jpg',
    alt: 'Escenario de activación en Monterrey',
    tags: ['Analytics', 'Reporting', 'Automatización'],
  },
]

const CentralSimi = () => {
  const revealRefs = useRef([])

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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    revealRefs.current.forEach((element) => element && observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="centralsimi" className="centralsimi-page">
      <header className="cs-hero">
        <div className="cs-hero-lines" aria-hidden="true" />
        <div className="container cs-hero-inner">
          <div className="cs-hero-copy animate-fade-in-up">
            <span className="cs-eyebrow">CENTRAL SIMI</span>
            <img src="/centralsimi.webp" alt="CentralSimi" className="cs-hero-logo" />
            <h1>La agencia única del ecosistema Farmacias Similares.</h1>
            <p>
              Planeación estratégica y compra de medios offline con integración digital,
              innovación comercial y expansión de activos de marca.
            </p>
            <a className="cs-hero-link" href="#cs-overview">
              Explorar el ecosistema <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="cs-hero-visual" aria-hidden="true">
            <div className="cs-hero-orbit" />
            <img src="/estatua-simi.png" alt="" />
            <div className="cs-hero-stamp">
              <strong>100%</strong>
              <span>Cobertura<br />nacional</span>
            </div>
          </div>
        </div>
      </header>

      <div>
        <section id="cs-overview" className="cs-overview cs-section">
          <div className="container cs-overview-grid">
            <div className="cs-overview-copy cs-reveal" ref={(element) => { revealRefs.current[0] = element }}>
              <span className="cs-eyebrow cs-eyebrow-dark">Gestión nacional</span>
              <h2>Una operación que conecta una marca con todo México.</h2>
              <p>
                CentralSimi es el ecosistema de medios dedicado a gestionar la presencia
                nacional de Farmacias Similares: de la estrategia y la negociación a la
                activación y la lectura de resultados.
              </p>
              <ul className="cs-pillar-list">
                {corePillars.map((pillar) => (
                  <li key={pillar}>
                    <strong>{pillar}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-overview-collage cs-reveal" ref={(element) => { revealRefs.current[1] = element }}>
              <figure className="cs-collage-main">
                <img src="/cases/centralsimi-campaign.png" alt="Campaña de Farmacias Similares en publicidad exterior" />
                <figcaption>Presencia que se ve. Estrategia que se mide.</figcaption>
              </figure>
              <figure className="cs-collage-small cs-collage-small-top">
                <img src="/simi-monterrey-photo.jpg" alt="Activación de Farmacias Similares en Monterrey" />
              </figure>
              <figure className="cs-collage-small cs-collage-small-bottom">
                <img src="/cases/centralsimi-fabrica-alegria.jpg" alt="Activación La Fábrica de la Alegría" />
              </figure>
            </div>
          </div>
        </section>

        <section className="cs-proof-strip" aria-label="Resultados de CentralSimi">
          <div className="container cs-proof-grid">
            {stats.map((stat) => (
              <div className={`cs-proof-stat ${stat.tone}`} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-case-study cs-section">
          <div className="container">
            <div className="cs-case-heading cs-reveal" ref={(element) => { revealRefs.current[2] = element }}>
              <div>
                <span className="cs-eyebrow cs-eyebrow-dark">Caso emblemático</span>
                <h2>Host City Supporter Monterrey</h2>
              </div>
              <p>Una jugada maestra para convertir una sede mundialista en una plataforma de negocio para el portafolio.</p>
            </div>

            <div className="cs-case-layout">
              <div className="cs-case-story cs-reveal" ref={(element) => { revealRefs.current[3] = element }}>
                <div className="cs-impact-row">
                  <div><strong>-80%</strong><span>Reducción de costo en la negociación</span></div>
                  <div><strong>2X</strong><span>Assets obtenidos vs. acuerdo inicial</span></div>
                  <div><strong>+160%</strong><span>Cumplimiento del alcance original</span></div>
                  <div><strong>2.1X</strong><span>Valor comercial vs. inversión</span></div>
                </div>

                <div className="cs-timeline">
                  {jugadaMaestraSteps.map((item) => (
                    <div className="cs-timeline-item" key={item.step}>
                      <span className="cs-step-number">{item.step}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs-case-gallery cs-reveal" ref={(element) => { revealRefs.current[4] = element }}>
                <figure className="cs-gallery-wide">
                  <img src="/simi-monterrey-landscape.png" alt="Identidad de Host City Supporter Monterrey 2026" />
                </figure>
                <figure className="cs-gallery-tall">
                  <img src="/cases/monterrey-stage.jpg" alt="Activación de CentralSimi en Monterrey" />
                </figure>
                <figure className="cs-gallery-square">
                  <img src="/cases/centralsimi-fabrica-alegria.jpg" alt="La Fábrica de la Alegría" />
                </figure>
                <figure className="cs-gallery-portrait">
                  <img src="/simi-monterrey-portrait.png" alt="Personaje de Farmacias Similares en Monterrey" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-capabilities cs-section">
          <div className="container">
            <div className="cs-capabilities-heading cs-reveal" ref={(element) => { revealRefs.current[5] = element }}>
              <span className="cs-eyebrow cs-eyebrow-dark">Cómo lo hacemos</span>
              <h2>De la idea al impacto, en una sola operación.</h2>
            </div>

            <div className="cs-capability-list">
              {capabilities.map((capability, index) => (
                <article className={`cs-capability-row ${index % 2 ? 'is-reversed' : ''} cs-reveal`} key={capability.number} ref={(element) => { revealRefs.current[6 + index] = element }}>
                  <figure className="cs-capability-image">
                    <img src={capability.image} alt={capability.alt} />
                  </figure>
                  <div className="cs-capability-copy">
                    <span className="cs-eyebrow cs-eyebrow-dark">{capability.eyebrow}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    <div className="cs-tag-list">
                      {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-closing">
          <div className="container cs-closing-inner">
            <span className="cs-eyebrow">CentralSimi</span>
            <h2>Una marca. Un ecosistema. Todo el país.</h2>
            <a className="cs-closing-link" href="#contact">Hablemos de tu siguiente jugada <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default CentralSimi
