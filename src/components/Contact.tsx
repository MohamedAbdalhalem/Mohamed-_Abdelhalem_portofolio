import { FormEvent, useState } from 'react'

type ContactErrors = {
  name?: string
  email?: string
  message?: string
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newErrors: ContactErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Please enter your name'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!isValidEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!message.trim()) {
      newErrors.message = 'Please enter your message'
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    const subject = `Portfolio Contact from ${name.trim()}`
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamed3ab7alem@gmail.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')

    setTimeout(() => {
      setSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-envelope-circle-check" style={{ marginRight: '12px' }}></i>
          Get in Touch
        </div>
        <div className="contact-layout">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              <i className="fa-solid fa-handshake" style={{ marginRight: '12px' }}></i>
              Let&apos;s work together.
            </h2>
            <p
              style={{
                marginBottom: '40px',
                color: 'var(--color-text-muted)',
              }}
            >
              Have a project in mind? Reach out and let&apos;s discuss how we can bring your vision
              to life.
            </p>

            <div className="contact-info-item">
              <div className="contact-label">
                <i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i>
                Email
              </div>
              <div className="contact-value-wrapper">
                <div className="contact-value">mohamed3ab7alem@gmail.com</div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamed3ab7alem@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-icon-btn"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-label">
                <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i>
                Phone
              </div>
              <div className="contact-value-wrapper">
                <div className="contact-value">+20 101 362 5625</div>
                <a href="tel:+201013625625" className="contact-icon-btn" title="Call">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a
                  href="https://wa.me/201013625625"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-icon-btn"
                  title="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  <i className="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  <i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="What's your email?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  <i className="fa-solid fa-message" style={{ marginRight: '8px' }}></i>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', border: 'none', padding: '16px' }}
                disabled={submitting}
              >
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
                {submitting ? 'Opening Gmail...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

