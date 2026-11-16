type EducationItem = {
  year: string;
  degree: string;
  school: string;
  link?: string;
  certificate?: boolean;
  grade?: string;
  details?: string[];
};

const educationItems: EducationItem[] = [
  {
    year: "2020 - 2024",
    degree: "Bachelor’s degree in Computer Science",
    school: "MET Academy, Mansoura",
    grade: "General Grade: Good",
  },
  {
    year: "09/2024 – 03/2025",
    degree: "Front-End Development Diploma (React)",
    school: "Route Academy",
    link: "https://drive.google.com/file/d/1q5VCvPVTmwu_qTWMI9PN9KGLmbJ6D4L8/view?usp=sharing",
    certificate: true,
    details: [
      "Learned React and TypeScript, with state management and reusable components, in an E-commerce project.",
      "Learned Next.js basics, including routing and when to use SSR or CSR in components.",
    ],
  },
  {
    year: "11/2025 – 05/2026",
    degree: "Software Development - React Frontend Web Developer (DEPI)",
    school: "Digital Egypt Pioneers Initiative (DEPI)",
    certificate: true,
    details: [
      "Covered HTML5, CSS, JavaScript, TypeScript, Bootstrap, Git & GitHub, React, and code style best practices.",
      "Included containerization basics with functional documentation, unit testing, and a capstone project.",
    ],
  },
  {
    year: "02/2026 – 05/2026",
    degree: "React - The Complete Guide (incl. Next.js, Redux)",
    school: "Udemy - Academind by Maximilian Schwarzmüller",
    link: "https://drive.google.com/file/d/1oRKxsuT332POH4Lmpzoapwkfg7AI04Fi/view?usp=drive_link",
    certificate: true,
    details: [
      "Comprehensive coverage of React from scratch including Hooks, Redux, React Router, Next.js, and best practices.",
      "Hands-on coding exercises, assignments, and demo projects including a frontend app with Next.js.",
    ],
  },
  {
    year: "06/2026 – 09/2026",
    degree: "The Complete JavaScript Course 2025: From Zero to Expert!",
    school: "Udemy - Jonas Schmedtmann",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-35151c08-8882-44a6-946a-85b4802f3e80.jpg",
    certificate: true,
    details: [
      "Explored how JavaScript works behind the scenes, covering the JS engine and runtime, execution contexts and the call stack, scope chain, hoisting and the TDZ, the this keyword, and memory management (primitives vs. objects, garbage collection).",
      "Covered core JavaScript in depth: closures, prototypal inheritance, OOP, the event loop, and asynchronous programming (Promises, Fetch API, AJAX).",
    ],
  },
  {
    year: "06/2026 – 07/2026",
    degree: "C Programming From Basics to Mastery",
    school: "Mahara Tech",
    link: "https://maharatech.gov.eg/mod/customcert/view.php?id=16004&downloadown=1",
    certificate: true,
    details: [
      "Comprehensive coverage of C fundamentals including data types, operators, pointers, arrays, structures, and dynamic memory allocation.",
      "Hands-on coding exercises covering the full compilation process, memory management, and low-level programming concepts.",
    ],
  },
  {
    year: "07/2026 – 07/2026",
    degree: "TypeScript Fundamentals",
    school: "Mahara Tech",
    link: "https://maharatech.gov.eg/mod/customcert/view.php?id=8663&downloadown=1",
    certificate: true,
    details: [
      "Comprehensive coverage of TypeScript fundamentals including static typing, generics, enums, interfaces, and class inheritance.",
      "Hands-on coding exercises covering type aliases, object structuring, and function typing for safer, more maintainable code.",
    ],
  },
  {
    year: "10/2026 – 11/2026",
    degree: "Mastering Object-Oriented Programming (OOP) using C++",
    school: "Mahara Tech",
    link: "https://maharatech.gov.eg/mod/customcert/view.php?id=14866&downloadown=1",
    certificate: true,
    details: [
      "Learn key concepts of object-oriented programming paradigm.",
      "Apply OOP principles to implement C++ programs.",
    ],
  },
  {
    year: "10/2026 – 11/2026",
    degree: "Database Fundamentals",
    school: "Mahara Tech",
    link: "https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1",
    certificate: true,
    details: [
      "The main features of different DBMS in the market.",
      "Writing basic SQL statements, functions, queries and data manipulatio.",
    ],
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="section-title">
          <i
            className="fa-solid fa-graduation-cap"
            style={{ marginRight: "12px" }}
          ></i>
          Education
        </div>
        <div className="about-grid">
          <div>
            {educationItems.map((item) => (
              <div className="edu-item" key={item.degree}>
                <div className="edu-year">
                  <i
                    className="fa-solid fa-calendar-days"
                    style={{ marginRight: "6px" }}
                  ></i>
                  {item.year}
                </div>
                <div className="edu-degree">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        transition: "var(--transition)",
                      }}
                    >
                      <i
                        className="fa-solid fa-certificate"
                        style={{ marginRight: "6px" }}
                      ></i>
                      {item.degree}
                    </a>
                  ) : (
                    <>
                      {item.certificate && (
                        <i
                          className="fa-solid fa-certificate"
                          style={{ marginRight: "6px" }}
                        ></i>
                      )}
                      {item.degree}
                    </>
                  )}
                </div>
                <div className="edu-school">
                  <i
                    className="fa-solid fa-school"
                    style={{ marginRight: "6px" }}
                  ></i>
                  {item.school}
                </div>
                {item.grade && (
                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {item.grade}
                  </p>
                )}
                {item.details && (
                  <ul
                    style={{
                      marginTop: "10px",
                      paddingLeft: "20px",
                      listStyleType: "disc",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
