const frontendSkills = [
  {
    img: '/icons8-react.svg',
    name: 'React',
    desc: 'Building dynamic and interactive user interfaces with components.',
  },
  {
    img: '/icons8-nextjs.svg',
    name: 'Next.js',
    desc: 'Developing SEO-friendly and high-performance SSR apps.',
  },
  {
    img: '/icons8-typescript.svg',
    name: 'TypeScript',
    desc: 'Ensuring code reliability with robust static typing.',
  },
  {
    img: '/icons8-javascript.svg',
    name: 'JavaScript',
    desc: 'Creating logical and interactive web experiences.',
  },
  {
    img: '/icons8-redux.svg',
    name: 'Redux',
    desc: 'Managing complex application state efficiently.',
  },
  {
    img: '/icons8-html-5.svg',
    name: 'HTML5',
    desc: 'Structuring modern, semantic, and accessible content.',
  },
  {
    img: '/icons8-css3.svg',
    name: 'CSS3',
    desc: 'Designing beautiful and responsive layouts.',
  },
  {
    img: '/icons8-tailwind-css.svg',
    name: 'Tailwind',
    desc: 'Building rapid, utility-first, and custom designs.',
  },
  {
    img: '/icons8-sass.svg',
    name: 'Sass',
    desc: 'Writing scalable and maintainable CSS with power.',
  },
  {
    img: '/icons8-bootstrap.svg',
    name: 'Bootstrap',
    desc: 'Creating fast and responsive mobile-first designs.',
  },
  {
    img: '/icons8-jquery.svg',
    name: 'jQuery',
    desc: 'Simplifying DOM manipulation and event handling.',
  },
  {
    img: '/icons8-github-96.svg',
    name: 'GitHub',
    desc: 'Managing version control and collaborating on projects.',
  },
]

const softSkills = [
  {
    icon: 'fa-comments',
    name: 'Effective Communication',
    desc: 'Confident and clear interaction with stakeholders and teammates.',
  },
  {
    icon: 'fa-users-gear',
    name: 'Team Collaboration',
    desc: 'Contributing effectively within cross-functional and Agile teams.',
  },
  {
    icon: 'fa-lightbulb',
    name: 'Problem Solving',
    desc: 'Analytical thinking to resolve complex technical and UX challenges.',
  },
  {
    icon: 'fa-arrows-rotate',
    name: 'Adaptability',
    desc: 'Quickly pivoting to new tools, frameworks, and project requirements.',
  },
  {
    icon: 'fa-clock',
    name: 'Time Management',
    desc: 'Organizing tasks and meeting deadlines in high-pressure environments.',
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-code" style={{ marginRight: '12px' }}></i>
          Skills
        </div>
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="skills-subtitle">
              <i className="fa-solid fa-laptop-code" style={{ marginRight: '10px' }}></i>
              Frontend Skills
            </h3>
            <div className="skills-grid">
              {frontendSkills.map((skill) => (
                <div className="skill-tag" key={skill.name}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    width={40}
                    style={{ margin: '0 auto 10px', display: 'block' }}
                  />
                  <div className="skill-name">{skill.name}</div>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-subtitle">
              <i className="fa-solid fa-people-group" style={{ marginRight: '10px' }}></i>
              Communication Skills
            </h3>
            <div className="skills-grid">
              {softSkills.map((skill) => (
                <div className="skill-tag" key={skill.name}>
                  <i className={`fa-solid ${skill.icon} skill-icon-fa`}></i>
                  <div className="skill-name">{skill.name}</div>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

