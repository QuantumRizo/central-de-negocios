import { useState, useEffect, useRef } from 'react'
import './SuccessStories.css'

const caseStudies = {
  simi: {
    id: 'simi',
    name: 'Farmacias Similares',
    badge: 'CentralSimi',
    title: 'CentralSimi; agencia única de Farmacias Similares',
    metrics: [
      { value: '+15', label: 'Campañas anuales', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg> },
      { value: '+100', label: 'Socios comerciales', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { value: '100%', label: 'Cobertura Nacional', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> }
    ],
    subtitle: 'Gestionamos el portafolio OFF de Farmacias Similares',
    subtext: 'OOH, TV, RADIO, PRENSA, DERRAME DIGITAL, PROYECTOS ESPECIALES',
    bullets: [
      'Planeación estratégica',
      'Compra e implementación de medios',
      'Innovación en medios tradicionales',
      'Proyectos de alto impacto (Mundial, eventos, patrocinios)',
      'Reporting, Data Analytics, Automatización'
    ],
    footer: 'Estrategias funcionales, eficientes y escalables que maximizan inversión y cobertura nacional',
    layout: 'simi-layout'
  },
  sika: {
    id: 'sika',
    name: 'Sika',
    badge: 'Patrocinio',
    title: 'PATROCINIO SIKA × CLUB AMÉRICA',
    metrics: [
      { value: '+12M', label: 'De Media Value en negociación' },
      { value: '+11M', label: 'De impactos orgánicos en patrocinio' },
      { value: '+115%', label: 'Incremental de impactos en patrocinio' }
    ],
    subtitle: 'Gestionamos el patrocinio de SIKA con Club América',
    subtext: 'BRAND AWARENESS, ESTRATEGIA DIGITAL, POSICIONAMIENTO',
    bullets: [
      'Consultoría estratégica, análisis de impacto y rentabilidad',
      'Coordinación y negociación de patrocinio',
      'Gestión estratégica y operativa de patrocinio',
      'Activaciones de producto',
      'Diseño e implementación de estrategia digital'
    ],
    footer: 'Además, gestionamos campañas de medios, lanzamientos de producto, Data Analytics, Community Management, Conceptos Creativos, Promotoría y más',
    layout: 'sika-layout'
  },
  waldos: {
    id: 'waldos',
    name: "Waldo's",
    badge: 'Aliado 4+ años',
    title: 'Aliado comercial +4 años',
    metrics: [
      { value: '+5', label: 'Campañas anuales' },
      { value: '+5%', label: 'De Brand Purchase' },
      { value: '+50%', label: 'De visibilidad procedente de Media' }
    ],
    subtitle: 'Gestionamos campañas digitales always on y campañas OFF',
    subtext: 'META, GOOGLE ADS, TIK TOK',
    bullets: [
      'Planeación estratégica',
      'Compra de medios y negociación',
      'Eventos especiales',
      'Data Analytics (Brand Tracking)',
      'Reporting'
    ],
    footer: 'Campañas de branding, geolocalizadas, retail, formatos interactivos, CTA, Tráfico a tienda',
    layout: 'waldos-layout'
  }
}

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState('simi')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const handleTabChange = (id) => {
    if (id === activeTab || isAnimating) return;
    setIsAnimating(true);
    // Smooth fade out/in effect
    setTimeout(() => {
      setActiveTab(id);
      setIsAnimating(false);
    }, 300);
  }

  const activeCase = caseStudies[activeTab];

  return (
    <section id="cases" className="success-cases section">
      <div className="container">
        
        <div className="cases-header text-center">
          <h2 className="cases-title">CASOS DE<br/>ÉXITO</h2>
          <p className="section-subtitle">Profundiza en las estrategias que han transformado a nuestros principales partners</p>
        </div>

        <div className="tabs-container">
          {Object.values(caseStudies).map((c) => (
            <button 
              key={c.id} 
              className={`tab-btn ${activeTab === c.id ? 'active' : ''}`}
              onClick={() => handleTabChange(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className={`case-content-wrapper ${isAnimating ? 'fading' : ''}`}>
          <div className="case-card">
            
            <div className="case-card-header">
              <h3>{activeCase.title}</h3>
            </div>

            <div className="case-metrics">
              {activeCase.metrics.map((m, i) => (
                <div className="metric-box" key={i}>
                  {m.icon && <span className="metric-icon">{m.icon}</span>}
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="case-body">
              <div className="case-details">
                <div className="case-subtitle-box">
                  <h4>{activeCase.subtitle}</h4>
                  <p className="case-subtext">{activeCase.subtext}</p>
                </div>
                
                <ul className="case-bullets">
                  {activeCase.bullets.map((bullet, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`case-visuals ${activeCase.layout}`}>
                {/* Simulated placeholders based on layout */}
                {activeCase.id === 'simi' && (
                  <>
                    <div className="placeholder-image ph-simi-1">Espacio para campaña (Simi Space)</div>
                    <div className="placeholder-image ph-simi-2">Espacio para activación (BTL)</div>
                  </>
                )}
                {activeCase.id === 'sika' && (
                  <div className="placeholder-image ph-sika">Espacio para foto Club América x Sika</div>
                )}
                {activeCase.id === 'waldos' && (
                  <>
                    <div className="placeholder-image ph-waldos-1">Espacio para foto sucursal</div>
                    <div className="placeholder-image ph-waldos-2">Espacio para post (Redes Sociales)</div>
                  </>
                )}
              </div>
            </div>

            <div className="case-footer">
              <span className="arrows">»</span>
              <p>{activeCase.footer}</p>
              <span className="arrows">«</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default SuccessStories
