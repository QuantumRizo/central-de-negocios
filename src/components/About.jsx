import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-card about-layout">
        
        {/* Left Column: Text and Stats */}
        <div className="about-left animate-fade-in-up">
          <h2 className="about-title">
            YOUR<br/>TEAM
          </h2>
          <p className="about-description">
            Un equipo multidisciplinario de más de 20 especialistas que integra décadas de experiencia con talento joven, creativo y data-driven para resolver retos reales de negocio.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h4>+35 años</h4>
                <p>Experiencia en Medios</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.584 8 0 8 5.606 0 7.644-8 12.74-8z"></path></svg>
              </div>
              <div>
                <h4>+8 años</h4>
                <p>Construyendo soluciones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: CEO */}
        <div className="ceo-section animate-fade-in-up delay-100">
          <div className="team-member ceo-member">
            <div className="member-photo-placeholder ceo-photo"></div>
            <h3>CEO</h3>
            <p>Fanny García</p>
          </div>
        </div>

        {/* Right Column: Departments Grid */}
        <div className="departments-section">
          
          {/* Dept 1 */}
          <div className="dept-row animate-fade-in-up delay-200">
            <div className="dept-header">
              STRATEGY & DATA ANALYTICS
            </div>
            <div className="dept-members-grid">
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Jose Miranda</p>
              </div>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Félix Rizo</p>
              </div>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Sebastián Morales</p>
              </div>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Jorge Rodríguez</p>
              </div>
            </div>
          </div>

          {/* Dept 2 */}
          <div className="dept-row animate-fade-in-up delay-300">
            <div className="dept-header">
              INNOVATIVE MEDIA SOLUTIONS
            </div>
            <div className="dept-members-grid">
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Patricia Martínez</p>
              </div>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Juan Pablo Millán</p>
              </div>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Maricela García</p>
              </div>
            </div>
          </div>

          {/* Dept 3 */}
          <div className="dept-row animate-fade-in-up delay-400">
            <div className="dept-header">
              DIGITAL & CREATIVE MEDIA
            </div>
            <div className="dept-members-grid" style={{justifyContent: 'center'}}>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Carolina Anaya</p>
              </div>
              <div className="team-member">
                <div className="member-photo-placeholder"></div>
                <p>Eugenio Lamadrid</p>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default About
