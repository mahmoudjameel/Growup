// GrowUp Landing Page Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .why-item, .hero-content, .hero-image');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-in');
            }
        });
    }

    // Enhanced CSS animations and interactions
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced Animation System */
        .feature-card, .why-item, .hero-content, .hero-image {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card.animate-in, .why-item.animate-in, 
        .hero-content.animate-in, .hero-image.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-content.animate-in {
            animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .hero-image.animate-in {
            animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Enhanced Hover Effects */
        .feature-card:hover .feature-icon {
            animation: enhanced-bounce 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes enhanced-bounce {
            0%, 100% { transform: translateY(0) scale(1); }
            25% { transform: translateY(-8px) scale(1.05); }
            50% { transform: translateY(-15px) scale(1.1); }
            75% { transform: translateY(-5px) scale(1.02); }
        }
        
        /* Enhanced Phone Animation */
        .phone-mockup {
            animation: enhanced-float 4s ease-in-out infinite;
        }
        
        @keyframes enhanced-float {
            0%, 100% { 
                transform: translateY(0px) rotateY(0deg) rotateX(0deg);
            }
            25% { 
                transform: translateY(-8px) rotateY(2deg) rotateX(1deg);
            }
            50% { 
                transform: translateY(-15px) rotateY(0deg) rotateX(0deg);
            }
            75% { 
                transform: translateY(-8px) rotateY(-2deg) rotateX(-1deg);
            }
        }
        
        /* Magnetic Button Effect */
        .btn-download, .btn-cta {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-download:hover, .btn-cta:hover {
            transform: translateY(-4px) scale(1.02);
        }
        
        /* Enhanced Ripple Effect */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, 
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.1) 70%,
                transparent 100%);
            transform: scale(0);
            animation: enhanced-ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        }
        
        @keyframes enhanced-ripple {
            0% {
                transform: scale(0);
                opacity: 0.8;
            }
            50% {
                opacity: 0.4;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* Staggered Animation System */
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }
        .feature-card:nth-child(7) { animation-delay: 0.7s; }
        
        .why-item:nth-child(1) { animation-delay: 0.2s; }
        .why-item:nth-child(2) { animation-delay: 0.4s; }
        .why-item:nth-child(3) { animation-delay: 0.6s; }
        .why-item:nth-child(4) { animation-delay: 0.8s; }
        
        /* Scroll-triggered Particle Effect */
        .particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(76, 175, 80, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: particle-float 3s ease-out forwards;
            z-index: 1000;
        }
        
        @keyframes particle-float {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0);
            }
        }
        
        /* Enhanced Loading States */
        .loading {
            position: relative;
            overflow: hidden;
        }
        
        .loading::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent);
            animation: loading-shimmer 1.5s infinite;
        }
        
        @keyframes loading-shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(style);

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('.btn-download, .btn-cta');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Counter animation for statistics (if needed in future)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Add scroll progress indicator
    function updateScrollProgress() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #4CAF50, #45a049);
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrollProgress + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Add loading animation
    function hideLoader() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    }

    // Add intersection observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for animation
    const observeElements = document.querySelectorAll('.feature-card, .why-item');
    observeElements.forEach(el => observer.observe(el));

    // Mobile menu toggle (if needed)
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('active');
        }
    }

    // Add click tracking for analytics (placeholder)
    function trackClick(element, action) {
        // This would integrate with analytics service
        console.log(`Tracked: ${action} on ${element}`);
    }

    // Track download button clicks
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const store = this.classList.contains('app-store') ? 'App Store' : 'Google Play';
            const href = this.getAttribute('href');
            
            // Track the click
            trackClick('Download Button', `${store} Click`);
            
            // If it's the App Store link, make sure it opens correctly
            if (store === 'App Store' && href && href !== '#') {
                // Additional tracking or analytics can be added here
                console.log('User clicked App Store download link:', href);
            }
            
            // If it's Google Play and no link yet, prevent default
            if (store === 'Google Play' && (!href || href === '#')) {
                e.preventDefault();
                alert('التطبيق متوفر حالياً على App Store فقط. Google Play قريباً!');
            }
        });
    });

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackClick('CTA Button', 'Start Journey Click');
        });
    });

    // Enhanced initial animations with improved timing
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.classList.add('animate-in');
            createParticles(heroContent);
        }
        
        setTimeout(() => {
            if (heroImage) {
                heroImage.classList.add('animate-in');
            }
        }, 400);
    }, 300);
    
    // Particle creation function
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                particle.style.top = (rect.bottom - 20) + 'px';
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 3000);
            }, i * 200);
        }
    }
    
    // Enhanced magnetic effect for buttons
    function addMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        });
    }
    
    // Apply magnetic effect to main buttons
    const magneticButtons = document.querySelectorAll('.btn-cta, .btn-download');
    magneticButtons.forEach(addMagneticEffect);
    
    // Enhanced scroll progress with color transition
    function updateEnhancedScrollProgress() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #4CAF50, #45a049, #66BB6A);
                z-index: 9999;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrollProgress + '%';
        
        // Change color based on scroll position
        if (scrollProgress < 33) {
            progressBar.style.background = 'linear-gradient(90deg, #4CAF50, #66BB6A)';
        } else if (scrollProgress < 66) {
            progressBar.style.background = 'linear-gradient(90deg, #66BB6A, #81C784)';
        } else {
            progressBar.style.background = 'linear-gradient(90deg, #81C784, #A5D6A7)';
        }
    }
    
    window.removeEventListener('scroll', updateScrollProgress);
    window.addEventListener('scroll', debounce(updateEnhancedScrollProgress, 10));

});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations go here
}, 10));

// Add smooth reveal animations for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 100;
        
        if (sectionTop < window.innerHeight - sectionVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize section reveals
window.addEventListener('load', revealSections);
window.addEventListener('scroll', debounce(revealSections, 100));