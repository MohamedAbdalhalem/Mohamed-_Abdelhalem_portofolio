const Achievements = () => {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-trophy" style={{ marginRight: '12px' }}></i>
          Achievements
        </div>
        <div className="achievements-grid">
          <div className="achievement-card-modern">
            <div className="achievement-icon-circle">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>BSc Computer Science</h3>
            <div className="school-info">MET Academy — 2024</div>
            <p className="achievement-desc">
              Successfully earned a Bachelor’s degree in Computer Science and Information with
              specialization in Information Systems.
            </p>
          </div>

          <a href="https://drive.google.com/file/d/1q5VCvPVTmwu_qTWMI9PN9KGLmbJ6D4L8/view?usp=sharing" target="_blank" rel="noreferrer" className="achievement-card-modern">
            <div className="achievement-icon-circle">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <h3>Front-End Development Diploma</h3>
            <div className="school-info">Route Academy — 2025</div>
            <p className="achievement-desc">
              Completed an intensive professional program specializing in modern Front-End
              technologies including React and Next.js.
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Achievements

