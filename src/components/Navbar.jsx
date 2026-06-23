import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#hero" className="logo">
          <img src="/Logo_CN_2025_Negro.webp" alt="Central MX" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#hero">About Us</a></li>
          <li><a href="#about">Team</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Our Partners</a></li>
        </ul>
        <a href="#contact" className="btn btn-accent">Contact Us</a>
      </div>
    </nav>
  )
}

export default Navbar
