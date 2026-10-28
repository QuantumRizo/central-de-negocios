import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const elementsRef = useRef([])

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const leadershipTeam = [
    {
      name: 'Fanny García',
      role: 'CEO',
      isCeo: true,
      image: '/team/fanny-garcia.png'
    },
    {
      name: 'Patricia Martínez',
      alias: 'Paty',
      role: 'COO',
      image: '/team/patricia-martinez.jpg'
    },
    {
      name: 'Carolina Anaya',
      alias: 'Caro',
      role: 'Head of Digital & Creative Media',
      image: '/team/carolina-anaya.jpg'
    },
    {
      name: 'Juan Pablo Millán',
      alias: 'JP',
      role: 'Commercial Lead & Sports Marketing',
      image: '/team/juan-pablo-millan.jpg'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">

        <div
          className="section-header scroll-animate-up"
          ref={el => elementsRef.current[0] = el}
        >
          <span className="section-eyebrow">Equipo</span>
          <h2 className="section-title">Leadership team.</h2>
          <p className="section-lede">
            Un equipo directivo senior con décadas de experiencia liderando la estrategia de medios, analítica y visión creativa para marcas líderes.
          </p>
        </div>

        {/* Leadership Heads */}
        <div className="leadership-grid">
          {leadershipTeam.map((leader, index) => (
            <div
              className={`leader-card scroll-animate-up delay-${(index + 1) * 100}`}
              key={index}
              ref={el => elementsRef.current[1 + index] = el}
            >
              <div className="leader-photo-wrapper">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-photo"
                    loading="lazy"
                  />
                ) : (
                  <div className="member-photo-placeholder"></div>
                )}
              </div>
              <div className="leader-info">
                <h3>{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
