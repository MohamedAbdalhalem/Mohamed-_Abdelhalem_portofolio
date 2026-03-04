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
                2024 – Present
              </div>
              <div className="work-exp-title">
                <i className="fa-solid fa-code" style={{ marginRight: '8px' }}></i>
                Frontend Developer
              </div>
              <div className="work-exp-company">
                <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i>
                TechVision Solutions, Remote
              </div>
              <p className="work-exp-desc">
                Building responsive web applications with React and Next.js. Collaborating with
                designers and backend teams to deliver high-performance, user-friendly interfaces.
                Implemented state management with Redux and integrated REST APIs for several client
                projects.
              </p>
            </div>
            <div className="work-exp-item">
              <div className="work-exp-year">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
                2022 – 2024
              </div>
              <div className="work-exp-title">
                <i className="fa-solid fa-code" style={{ marginRight: '8px' }}></i>
                Junior Frontend Developer
              </div>
              <div className="work-exp-company">
                <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i>
                Digital Creations Agency, Cairo
              </div>
              <p className="work-exp-desc">
                Developed and maintained client websites using HTML, CSS, JavaScript, and React.
                Translated Figma designs into pixel-perfect interfaces. Participated in Agile
                ceremonies and code reviews. Contributed to improving page load times by 40% on key
                projects.
              </p>
            </div>
            <div className="work-exp-item">
              <div className="work-exp-year">
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
                2021 – 2022
              </div>
              <div className="work-exp-title">
                <i className="fa-solid fa-code" style={{ marginRight: '8px' }}></i>
                Web Development Intern
              </div>
              <div className="work-exp-company">
                <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i>
                StartupHub Egypt, Mansoura
              </div>
              <p className="work-exp-desc">
                Gained hands-on experience with modern web technologies. Built landing pages and
                internal dashboards. Assisted with bug fixes and UI improvements. Learned version
                control with Git and collaborative workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

