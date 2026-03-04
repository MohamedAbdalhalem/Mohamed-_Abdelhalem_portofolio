const Hero = () => {
  return (
    <section id="cover">
      <div className="noise-overlay"></div>
      <div className="hero-visual"></div>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <div className="container hero-content">
        <div className="hero-layout">
          <div className="hero-left">
            <span className="hero-greeting">Hi, I&apos;m</span>
            <h1>
              Mohamed <span className="gradient-text">Abdelhalem.</span>
            </h1>
            <p className="hero-subtitle">Frontend Developer</p>
            <p className="hero-title">I help Businesses avoid future technical</p>
            <div className="hero-cta">
              <a
                href="Mohamed_Abdalhalim_Ali_CV .pdf"
                download
                className="btn btn-primary"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
              <a href="#projects" className="btn btn-outline">
                <i className="fa-solid fa-folder-open" style={{ marginRight: '8px' }}></i>
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="social-vertical">
              <div className="social-line"></div>
              <a
                href="https://www.linkedin.com/in/mohamed-abdelhalem-a158922a6/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/MohamedAbdalhalem"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamed3ab7alem@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

