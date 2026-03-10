import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#work-experience', label: 'Work Experience' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#testimonials', label: 'Testimonials' },
]

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    if (theme === 'light') {
      document.body.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev)
  }

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <header>
      <div className="container header-content">
        <a href="#cover" className="logo">
          MA.
        </a>
        <nav className={mobileOpen ? 'active' : ''}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button
            id="mobile-menu-toggle"
            className="btn-mobile-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
          <button
            id="theme-toggle"
            className="btn-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} />
          </button>
          <a href="#contact" className="btn btn-white nav-btn">
            <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

