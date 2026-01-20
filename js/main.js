document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-up animation class to sections and cards
    const animElements = document.querySelectorAll('.section-title, .about-text, .service-card, .project-card, .skill-tag, .achievement-card');

    // Add CSS for the animation dynamically if not present
    if (!document.getElementById('anim-styles')) {
        const style = document.createElement('style');
        style.id = 'anim-styles';
        style.textContent = `
            .section-title, .about-text, .service-card, .project-card, .skill-tag, .achievement-card {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .visible {
                opacity: 1;
                transform: translateY(0);
            }
            .skill-tag { transition-delay: 0.1s; }
            .service-card:nth-child(2) { transition-delay: 0.1s; }
            .service-card:nth-child(3) { transition-delay: 0.2s; }
        `;
        document.head.appendChild(style);
    }

    animElements.forEach(el => observer.observe(el));

    // Contact Form Handling (JS Mailto Fallback)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Visual feedback for the user
            alert("Opening your email client to send the message...");

            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

            window.location.href = `mailto:mohamed3ab7alem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            } else {
                localStorage.setItem('theme', 'dark');
                if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // Modal Logic for Project Features
    const modal = document.getElementById('features-modal');
    const modalTitle = document.getElementById('modal-title');
    const featuresList = document.getElementById('features-list');
    const featureButtons = document.querySelectorAll('.btn-features');
    const closeModal = document.querySelector('.close-modal');

    if (modal && featureButtons) {
        featureButtons.forEach(button => {
            button.addEventListener('click', () => {
                const project = button.getAttribute('data-project');
                const features = button.getAttribute('data-features').split(',');

                modalTitle.textContent = `${project} Features`;
                featuresList.innerHTML = '';

                features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature.trim();
                    featuresList.appendChild(li);
                });

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        const closeFunc = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        if (closeModal) {
            closeModal.addEventListener('click', closeFunc);
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeFunc();
            }
        });
    }
});
