const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-screwdriver-wrench" style={{ marginRight: '12px' }}></i>
          Services
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="service-title">Front-End Development</h3>
            <p className="service-desc">
              Building dynamic, responsive, and high-performance user interfaces using modern
              frontend technologies.
            </p>
            <ul className="service-list">
              <li className="service-item">React &amp; Next.js Apps</li>
              <li className="service-item">TypeScript Integration</li>
              <li className="service-item">State Management (Redux/Context)</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3 className="service-title">UI to Code Conversion</h3>
            <p className="service-desc">
              Converting UI/UX designs into pixel-perfect, responsive, and fully functional web
              interfaces.
            </p>
            <ul className="service-list">
              <li className="service-item">Figma to React/HTML</li>
              <li className="service-item">Pixel-Perfect Implementation</li>
              <li className="service-item">Design System Alignment</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h3 className="service-title">Responsive UI Design</h3>
            <p className="service-desc">
              Creating responsive layouts that work smoothly across all devices using modern CSS
              frameworks.
            </p>
            <ul className="service-list">
              <li className="service-item">Mobile-First Approach</li>
              <li className="service-item">Tailwind CSS &amp; SASS</li>
              <li className="service-item">Cross-Browser Compatibility</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <h3 className="service-title">E-commerce Solutions</h3>
            <p className="service-desc">
              Developing clean, fast, and scalable e-commerce interfaces focused on user
              experience.
            </p>
            <ul className="service-list">
              <li className="service-item">Cart &amp; Checkout Logic</li>
              <li className="service-item">Product Filtering Systems</li>
              <li className="service-item">Payment Gateway UI</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-gauge-high"></i>
            </div>
            <h3 className="service-title">Performance Tuning</h3>
            <p className="service-desc">
              Improving website speed and rendering performance through optimization best
              practices.
            </p>
            <ul className="service-list">
              <li className="service-item">Code Splitting &amp; Lazy Loading</li>
              <li className="service-item">Image &amp; Asset Optimization</li>
              <li className="service-item">Core Web Vitals Improvement</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-plug"></i>
            </div>
            <h3 className="service-title">API Integration</h3>
            <p className="service-desc">
              Integrating REST APIs and handling dynamic data efficiently within web applications.
            </p>
            <ul className="service-list">
              <li className="service-item">Real-time Data Fetching</li>
              <li className="service-item">TanStack Query Hooks</li>
              <li className="service-item">Secure Data Handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

