const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-header">
          <div className="section-title">
            <i className="fa-solid fa-user" style={{ marginRight: '12px' }}></i>
            About Me
          </div>
        </div>

        <div className="about-layout">
          <div className="about-info">
            <h2 className="about-greeting">
              Hello, I&apos;m Mohamed Abdelhalem <span className="wave">👋</span>
            </h2>
            <p className="about-description">
              I&apos;m a front-end specialist. I deliver a unique digital experience that blends
              creativity and high performance, turning your website visitors into loyal customers.
            </p>
            <p className="about-description">
              I specialize in building modern, efficient web applications using cutting-edge
              technologies. I have a genuine passion for developing innovative technical solutions
              that solve real-world problems.
            </p>

            {/* <div className="stats-grid">
              <div className="stat-card">
                <i className="fa-solid fa-folder-open" style={{ fontSize: '1.5rem', marginBottom: '8px', opacity: 0.9 }}></i>
                <div className="stat-num">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <i className="fa-solid fa-users" style={{ fontSize: '1.5rem', marginBottom: '8px', opacity: 0.9 }}></i>
                <div className="stat-num">15+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
              <div className="stat-card">
                <i className="fa-solid fa-calendar-check" style={{ fontSize: '1.5rem', marginBottom: '8px', opacity: 0.9 }}></i>
                <div className="stat-num">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div> */}
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>High Performance</h3>
              <p>Fast and efficient applications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-paintbrush"></i>
              </div>
              <h3>Beautiful Design</h3>
              <p>Modern user interfaces</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>High Security</h3>
              <p>Complete data protection</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3>Responsive</h3>
              <p>Works on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

