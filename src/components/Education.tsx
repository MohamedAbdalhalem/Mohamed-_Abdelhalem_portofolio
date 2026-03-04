const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-graduation-cap" style={{ marginRight: '12px' }}></i>
          Education
        </div>
        <div className="about-grid">
          <div>
            <div className="edu-item">
              <div className="edu-year">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
                2020 - 2024
              </div>
              <div className="edu-degree">Bachelor’s degree in Computer Science</div>
              <div className="edu-school">
                <i className="fa-solid fa-school" style={{ marginRight: '6px' }}></i>
                MET Academy, Mansoura
              </div>
              <p
                style={{
                  marginTop: '5px',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                General Grade: Good
              </p>
            </div>
            <div className="edu-item">
              <div className="edu-year">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
                09/2024 – 03/2025
              </div>
              <div className="edu-degree">
                <a
                  href="https://drive.google.com/file/d/1q5VCvPVTmwu_qTWMI9PN9KGLmbJ6D4L8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', transition: 'var(--transition)' }}
                >
                  <i className="fa-solid fa-certificate" style={{ marginRight: '6px' }}></i>
                  Front-End Development Diploma (React)
                </a>
              </div>
              <div className="edu-school">
                <i className="fa-solid fa-school" style={{ marginRight: '6px' }}></i>
                Route Academy
              </div>
              <ul
                style={{
                  marginTop: '10px',
                  paddingLeft: '20px',
                  listStyleType: 'disc',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9rem',
                }}
              >
                <li>
                  Learned React and TypeScript, with state management and reusable components, in an
                  E-commerce project.
                </li>
                <li>
                  Learned Next.js basics, including routing and when to use SSR or CSR in components.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

