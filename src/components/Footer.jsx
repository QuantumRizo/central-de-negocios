import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="footer brand-texture">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-title">Hablemos.</h2>
            <p className="footer-lede">Cuéntanos sobre tu marca y diseñemos juntos la estrategia.</p>
            <a href="mailto:hola@centraldenegociosmx.com" className="btn footer-cta">Escríbenos</a>
          </div>
          <dl className="footer-contact">
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:hola@centraldenegociosmx.com">hola@centraldenegociosmx.com</a></dd>
            </div>
            <div>
              <dt>Teléfono</dt>
              <dd><a href="tel:+525552030107">55 5203 0107</a></dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>Lope de Vega 132, Piso 2, Chapultepec Morales, Polanco V Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX</dd>
            </div>
          </dl>
        </div>
        <div className="footer-bottom">
          <img src="/Logo_CN_2025_Negro.webp" alt="Central MX" className="footer-logo" />
          <p>&copy; {new Date().getFullYear()} Central MX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
