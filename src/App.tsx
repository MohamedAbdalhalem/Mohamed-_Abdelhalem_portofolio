

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
// import WorkExperience from './components/WorkExperience'
import Services from './components/Services'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll<HTMLElement>(
      '.section-title, .about-text, .service-card, .project-card, .skill-tag, .achievement-card-modern, .testimonial-card',
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      {/* <WorkExperience /> */}
      <Services />
      <Projects />
      <Achievements />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App

