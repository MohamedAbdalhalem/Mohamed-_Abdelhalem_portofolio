const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-comments" style={{ marginRight: '12px' }}></i>
          Testimonials
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-quote">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <p className="testimonial-text">
              &quot;Mohamed transformed our buggy MVP into a high-performance production app. His
              knowledge of Clean Architecture made scaling our codebase effortless. Truly a
              top-tier engineer.&quot;
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SJ</div>
              <div className="testimonial-info">
                <div className="testimonial-name">Sarah Johnson</div>
                <div className="testimonial-role">Product Manager, TechCorp</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-quote">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <p className="testimonial-text">
              &quot;Mohamed transformed our e-commerce platform with his expertise in React and
              TypeScript. The performance improvements were remarkable, and the codebase is now
              much more maintainable.&quot;
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MC</div>
              <div className="testimonial-info">
                <div className="testimonial-name">Michael Chen</div>
                <div className="testimonial-role">CTO, ShopHub</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-quote">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <p className="testimonial-text">
              &quot;Professional, responsive, and highly skilled. Mohamed converted our complex
              Figma designs into a beautiful, responsive web application. I highly recommend his
              services!&quot;
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">ER</div>
              <div className="testimonial-info">
                <div className="testimonial-name">Emily Rodriguez</div>
                <div className="testimonial-role">Design Lead, CreativeStudio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

