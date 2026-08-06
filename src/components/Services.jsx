import { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services section">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header text-center scroll-animate-up" ref={el => cardsRef.current[0] = el}>
          <span className="services-area-badge">BUSINESS CAPABILITIES & SOLUTIONS</span>
          <h2 className="services-main-title">WHAT WE DO</h2>
          <p className="services-header-subtitle">
            Estructura de consultoría, medios y ejecución analítica de alto valor diseñada para acelerar la rentabilidad real de tu negocio.
          </p>
        </div>

        {/* Editorial Rhythm Layout */}
        <div className="services-editorial-layout">
          
          {/* 01. FEATURED HERO CARD 1: Media Strategy & Planning */}
          <div 
            className="service-card featured-service-card scroll-animate-up delay-100"
            ref={el => cardsRef.current[1] = el}
          >
            <div className="service-card-header">
              <div className="service-header-left">
                <h3 className="service-title">Media Strategy & Business Planning</h3>
              </div>
              <div className="service-corner-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
              </div>
            </div>

            <p className="service-desc">
              Consultoría estratégica de negocios y arquitectura de medios de alta dirección orientada a resolver retos comerciales complejos y maximizar el valor de la marca.
            </p>

            <div className="service-divider"></div>

            <div className="service-capabilities-section">
              <h4 className="capabilities-label">CAPABILITES & SCOPE</h4>
              <div className="capabilities-check-grid grid-2col">
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">360° Media Strategy</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Tactical Campaign Planning</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Business Consulting</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Communication Strategy</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 1: 2 MEDIUM CARDS (02 & 03) */}
          <div className="services-grid-2col">
            
            {/* 02. Media Buying & Negotiation */}
            <div 
              className="service-card medium-service-card scroll-animate-up delay-100"
              ref={el => cardsRef.current[2] = el}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Media Buying & High-Value Negotiation</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Poder de compra directo y capacidad de negociación de alto valor en medios masivos tradicionales y plataformas digitales.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPABILITES & SCOPE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Programmatic & Search</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Social Ads & Digital Channels</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">TV, Radio & Outdoor (OOH)</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Print & High-Value Negotiation</span></div>
                </div>
              </div>
            </div>

            {/* 03. Data Analytics & Business Intelligence */}
            <div 
              className="service-card medium-service-card scroll-animate-up delay-200"
              ref={el => cardsRef.current[3] = el}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Data Analytics & Performance BI</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Inteligencia cuantitativa avanzada, tableros automatizados de KPIs en tiempo real y optimización predictiva de ROI.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPABILITES & SCOPE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">KPI Dashboards & Reporting</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Post-Buy Analysis & Optimization</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Brand Tracking & Brand Lift</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Marketing Mix Modeling (MMM) & Analytics</span></div>
                </div>
              </div>
            </div>

          </div>

          {/* ROW 2: 2 MEDIUM CARDS (04 & 05) */}
          <div className="services-grid-2col">
            
            {/* 04. Creative & Brand Experience */}
            <div 
              className="service-card medium-service-card scroll-animate-up delay-100"
              ref={el => cardsRef.current[4] = el}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Creative Strategy & Brand Assets</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Estrategia conceptual creativa, producción audiovisual multiformato y diseño de identidades visuales de alto impacto.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPABILITES & SCOPE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Creative Strategy & Concepting</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Content & Asset Production</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Graphic Design & Visual Identity</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Video Production & Audio Branding</span></div>
                </div>
              </div>
            </div>

            {/* 05. Social Media Ecosystem */}
            <div 
              className="service-card medium-service-card scroll-animate-up delay-200"
              ref={el => cardsRef.current[5] = el}
            >
              <div className="service-card-header">
                <div className="service-header-left">
                  <h3 className="service-title">Social Media Ecosystem & Engagement</h3>
                </div>
                <div className="service-corner-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
              </div>

              <p className="service-desc">
                Gestión integral del ecosistema social, monitoreo de marca en tiempo real y creatividad digital orientada a conversión.
              </p>

              <div className="service-divider"></div>

              <div className="service-capabilities-section">
                <h4 className="capabilities-label">CAPABILITES & SCOPE</h4>
                <div className="capabilities-check-grid">
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Multi-Platform Content Creation</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Community Management & Growth</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Social Listening & Trend Tracking</span></div>
                  <div className="check-item"><span className="check-badge">✓</span><span className="check-text">Digital Performance Creatives</span></div>
                </div>
              </div>
            </div>

          </div>

          {/* 06. FEATURED HERO CARD 2: Public Relations & Partnerships */}
          <div 
            className="service-card featured-service-card scroll-animate-up delay-100"
            ref={el => cardsRef.current[6] = el}
          >
            <div className="service-card-header">
              <div className="service-header-left">
                <h3 className="service-title">Public Relations, Sponsorships & Experiential</h3>
              </div>
              <div className="service-corner-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>

            <p className="service-desc">
              Relaciones públicas de alto valor estratégico, gestión comercial ante ligas/patrocinios mundiales y experiencias BTL masivas.
            </p>

            <div className="service-divider"></div>

            <div className="service-capabilities-section">
              <h4 className="capabilities-label">CAPABILITES & SCOPE</h4>
              <div className="capabilities-check-grid grid-2col">
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">High-Impact PR Strategy & Outreach</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Event & BTL Activation Management</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Influencer & Creator Marketing</span>
                </div>
                <div className="check-item">
                  <span className="check-badge">✓</span>
                  <span className="check-text">Sponsorship & Strategic Partnerships</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services
