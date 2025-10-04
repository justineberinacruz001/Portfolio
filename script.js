 // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX - 10 + 'px';
                follower.style.top = e.clientY - 10 + 'px';
            }, 100);
        });

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .contact-item');
        hoverElements.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                follower.style.transform = 'scale(1.5)';
            });
            elem.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                follower.style.transform = 'scale(1)';
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        // Parallax effect on hero section
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const orbs = document.querySelectorAll('.floating-orb');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${parallax}px)`;
            }
            
            orbs.forEach((orb, index) => {
                const speed = index === 0 ? 0.3 : 0.2;
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Dynamic background movement
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            }
        });

        // Project card tilt effect
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });

        // Typing animation for code window
        const codeLines = document.querySelectorAll('.code-line');
        const aboutSection = document.querySelector('.about');
        
        const codeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    codeLines.forEach((line, index) => {
                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, index * 200);
                    });
                    codeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (aboutSection) {
            codeObserver.observe(aboutSection);
        }

        // Glitch effect enhancement
        const glitchElements = document.querySelectorAll('.glitch');
        
        setInterval(() => {
            glitchElements.forEach(element => {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = '';
                }, 10);
            });
        }, 3000);

        // Dynamic skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = `scale(1.1) rotate(${Math.random() * 10 - 5}deg)`;
                item.style.background = `linear-gradient(135deg, rgba(123, 47, 247, 0.2), rgba(0, 255, 204, 0.2))`;
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) rotate(0deg)';
                item.style.background = 'var(--glass)';
            });
        });

        // Contact items hover animation
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.background = 'rgba(0, 255, 204, 0.5)';
                ripple.style.borderRadius = '50%';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.animation = 'rippleEffect 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                item.style.position = 'relative';
                item.style.overflow = 'hidden';
                item.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    width: 200px;
                    height: 200px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Performance optimization - Throttle scroll events
        let ticking = false;
        function updateOnScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Update animations based on scroll
                    ticking = false;
                });
                ticking = true;
            }
        }
        window.addEventListener('scroll', updateOnScroll);

        // Initialize animations on load
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            
            // Trigger initial animations
            const heroTitle = document.querySelector('.glitch');
            if (heroTitle) {
                heroTitle.style.opacity = '1';
            }
        });

        // Clean up cursor on mobile
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            follower.style.display = 'none';
            document.body.style.cursor = 'auto';
        }