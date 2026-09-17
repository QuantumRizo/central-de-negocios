import './Navbar.css'
import { useState, useEffect, useRef } from 'react'

const Navbar = ({ currentView = 'home' }) => {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownCloseTimer = useRef(null)

  const services = [
    { id: '01', title: 'Estrategia de Medios & Planeación de Negocio' },
    { id: '02', title: 'Compra de Medios & Negociación de Alto Valor' },
    { id: '03', title: 'Data Analytics & Inteligencia de Negocios' },
    { id: '04', title: 'Estrategia Creativa & Activos de Marca' },
    { id: '05', title: 'Ecosistema de Redes Sociales & Engagement' },
    { id: '06', title: 'Relaciones Públicas, Patrocinios & Experiencias' },
  ]

  const cases = [
    { id: 'simi', title: 'CentralSimi: Agencia Única & Ecosistema de Farmacias Similares' },
    { id: 'sika', title: '8-Year Business Partnership' },
    { id: 'waldos', title: 'Estrategia Retail Media & Medios Waldo\'s' },
  ]

  const closeMenus = () => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
      dropdownCloseTimer.current = null
    }
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }

  const openDropdownOnHover = (dropdown) => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
      dropdownCloseTimer.current = null
    }
    setOpenDropdown(dropdown)
  }

  const closeDropdownOnLeave = () => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
    }
    dropdownCloseTimer.current = window.setTimeout(() => {
      setOpenDropdown(null)
      dropdownCloseTimer.current = null
    }, 180)
  }

  const toggleDropdownOnMobile = (dropdown) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown((current) => current === dropdown ? null : dropdown)
    }
  }

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} view-${currentView} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container navbar-content">
        <a href="#hero" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <img src="/Logo_CN_2025_Negro.webp" alt="Central MX" className="logo-img" />
        </a>

        <ul className="nav-links">
          <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
          <li
            className={`nav-services ${openDropdown === 'services' ? 'is-open' : ''}`}
            onMouseEnter={() => openDropdownOnHover('services')}
            onMouseLeave={closeDropdownOnLeave}
          >
            <button
              type="button"
              className="nav-services-trigger"
              aria-expanded={openDropdown === 'services'}
              aria-controls="services-menu"
              onClick={() => toggleDropdownOnMobile('services')}
            >
              Services <span className="nav-services-chevron" aria-hidden="true">⌄</span>
            </button>
            <div className="nav-services-menu" id="services-menu">
              {services.map((service) => (
                <a
                  href={`#service-${service.id}`}
                  key={service.id}
                  onClick={closeMenus}
                >
                  <span className="nav-service-number">{service.id}</span>
                  <span>{service.title}</span>
                </a>
              ))}
            </div>
          </li>
          <li><a href="#partners" onClick={() => setMobileMenuOpen(false)}>Our Partners</a></li>
          <li
            className={`nav-services nav-cases ${openDropdown === 'cases' ? 'is-open' : ''}`}
            onMouseEnter={() => openDropdownOnHover('cases')}
            onMouseLeave={closeDropdownOnLeave}
          >
            <button
              type="button"
              className="nav-services-trigger"
              aria-expanded={openDropdown === 'cases'}
              aria-controls="cases-menu"
              onClick={() => toggleDropdownOnMobile('cases')}
            >
              Success Stories <span className="nav-services-chevron" aria-hidden="true">⌄</span>
            </button>
            <div className="nav-services-menu" id="cases-menu">
              {cases.map((item) => (
                <a
                  href={`#case-${item.id}`}
                  key={item.id}
                  onClick={closeMenus}
                >
                  <span className="nav-service-number">{item.id.toUpperCase()}</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </li>
          <li><a href="#about" onClick={closeMenus}>Team</a></li>
          <li>
            <a 
              href="#centralsimi" 
              className={`nav-highlight-link ${currentView === 'centralsimi' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CentralSimi
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-accent" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
