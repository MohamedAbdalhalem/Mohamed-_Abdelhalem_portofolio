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
                Frontend Developer Intern
              </div>
              <div className="work-exp-company">
                <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i>
                Omnicore AI — Remote
              </div>
              <p className="work-exp-desc">
                Built hands-on experience with React state management (Zustand, TanStack Query), Next.js (App Router, Server Components), form validation (React Hook Form + Zod), and TypeScript, alongside animation libraries and performance optimization (ISR/SSG).
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

