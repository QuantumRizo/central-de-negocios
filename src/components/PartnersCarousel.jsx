import './PartnersCarousel.css'

const partnerLogos = [
  { name: 'Farmacias Similares', src: '/partners/farmacias-similares-color.png', sizeClass: 'logo-simi' },
  { name: 'Sika', src: '/partners/sika.png', sizeClass: 'logo-sika' },
  { name: "Waldo's", src: '/partners/waldos-logo.webp' },
  { name: 'Dongfeng', src: '/partners/dongfeng.png' },
  { name: 'Sansui', src: '/partners/sansui.png', sizeClass: 'logo-xlarge' },
  { name: 'Senosiain', src: '/partners/senosiain logo.webp', sizeClass: 'logo-large-extra' },
  { name: 'Heraldo Media Group', src: '/partners/heraldo media group logo.webp', sizeClass: 'logo-xlarge' },
  { name: 'D Uñas', src: '/partners/d-unas.png' },
  { name: 'AAM', src: '/partners/aam.png' },
  { name: 'AVE', src: '/partners/ave.png' },
  { name: 'CIM', src: '/partners/cim.png' },
  { name: 'IAB México', src: '/partners/iab-mexico.png' },
  { name: 'Club América', src: '/partners/club-america.png' },
  { name: 'Televisa', src: '/partners/televisa.webp' },
  { name: 'TV Azteca', src: '/partners/tv-azteca.png' }
]

const PartnersCarousel = () => {
  const midpoint = Math.ceil(partnerLogos.length / 2)
  const logoRows = [
    partnerLogos.slice(0, midpoint),
    partnerLogos.slice(midpoint)
  ]

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <div className="partners-header text-center">
          <h3 className="partners-title">BRANDS & STRATEGIC PARTNERS</h3>
        </div>
      </div>

      <div className="partners-marquees">
        {logoRows.map((row, rowIndex) => {
          // Duplicate each row so its loop remains seamless in either direction.
          const marqueeLogos = [...row, ...row]

          return (
            <div
              className={`marquee-container ${rowIndex === 1 ? 'marquee-container-reverse' : ''}`}
              key={`row-${rowIndex}`}
            >
              <div className="marquee-track">
                {marqueeLogos.map((partner, index) => (
                  <div className="partner-logo-card" key={`${partner.name}-${index}`}>
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className={`partner-logo-img ${partner.sizeClass || ''}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PartnersCarousel
