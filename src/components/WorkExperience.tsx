const WorkExperience = () => {
  return (
    <section id="work-experience">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-briefcase" style={{ marginRight: '12px' }}></i>
          Work Experience
        </div>
        <div className="about-grid">
          <div>
            <div className="work-exp-item">
              <div className="work-exp-year">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
                08/2026 – 10/2026
              </div>
              <div className="work-exp-title">
                <i className="fa-solid fa-code" style={{ marginRight: '8px' }}></i>
                Frontend Developer
              </div>
              <div className="work-exp-company">
                <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i>
                Internship, Remote
              </div>
              <p className="work-exp-desc">
                Building responsive web applications with React and Next.js. Collaborating with
                designers and backend teams to deliver high-performance, user-friendly interfaces.
                Implemented state management with Redux and integrated REST APIs for several client
                projects.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

