import { useEffect, useRef } from 'react'
import './ValueProposition.css'
import { ScrollWords } from './BrandMotion'

const proofStats = [
  { value: '+35', label: 'Años de experiencia en Medios', tone: 'white' },
  { value: '+8', label: 'Años construyendo soluciones boutique', tone: 'light' },
  { value: '+10', label: 'Categorías de especialización', tone: 'white' },
]

const benefits = [
  {
    title: 'Especialización Multi-categoría',
    desc: 'Experiencia probada en más de 10 verticales comerciales distintas.',
  },
  {
    title: 'Enfoque Client-Centric',
    desc: 'Procesos internos diseñados bajo esquemas de alta flexibilidad, agilidad operativa y un robusto ecosistema de socios.',
  },
  {
    title: 'Estrategias a la Medida',
    desc: 'Soluciones diseñadas al 100% de acuerdo a los objetivos e inversiones específicas de cada negocio.',
  },
  {
    title: 'Equipo Híbrido',
    desc: 'Combinación balanceada de alta veteranía ejecutiva en la industria con pensamiento joven y ágil de vanguardia.',
  },
  {
    title: 'Tecnología Propia',
    desc: 'Infraestructura orientada a optimizar el ROI, automatizar reportes y refinar modelos predictivos basados en Business Intelligence.',
  },
]

const ValueProposition = () => {
  const elementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="proof-strip" aria-label="Resultados de Central">
        <div className="container proof-grid">
          {proofStats.map((stat) => (
            <div className={`proof-stat ${stat.tone}`} key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="value-prop section bg-secondary">
      <div className="container vp-layout">
        <div className="vp-left">
          <h2 className="vp-title scroll-animate-left" ref={el => elementsRef.current[0] = el}>
            WHY<br />CENTRAL
          </h2>
          <p className="vp-description scroll-animate-left delay-100" ref={el => elementsRef.current[1] = el}>
            <ScrollWords>Aceleramos tu negocio con infraestructura propia, enfoque ágil y un ecosistema de distribución robusto.</ScrollWords>
          </p>

          <div className="vp-cta scroll-animate-up delay-200" ref={el => elementsRef.current[2] = el}>
            <h3>¿Listo para transformar tu estrategia?</h3>
            <p>Conecta con nuestros especialistas y diseñemos una solución a la medida de tu marca.</p>
            <a href="#contact" className="vp-contact-link">Contactar a un experto <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="vp-list">
          {benefits.map((benefit, index) => (
            <div
              className="vp-line-item"
              key={benefit.title}
            >
              <span className="vp-line-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="vp-line-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}

export default ValueProposition
