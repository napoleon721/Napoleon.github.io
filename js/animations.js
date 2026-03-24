/* =============================================
   animations.js — GSAP + ScrollTrigger
   CLEMENT by Napoleon
   ============================================= */

export function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // ── Utilidad de reveal con ScrollTrigger ──
    const defaults = {
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        duration: 0.8
    };

    function reveal(selector, extra = {}) {
        gsap.utils.toArray(selector).forEach((el, i) => {
            gsap.to(el, {
                ...defaults,
                ...extra,
                delay: extra.stagger ? i * extra.stagger : (extra.delay || 0),
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // ── HERO — entrada directa sin ScrollTrigger ──
    gsap.to('.hero-tag', { opacity: 1, y: 0, duration: 0.8, delay: 0.3 });
    gsap.to('.hero-3d-label', { opacity: 1, y: 0, duration: 1.1, delay: 0.5, ease: 'power3.out' });
    gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1.0, delay: 0.6 });
    gsap.to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, delay: 1.0 });
    gsap.to('.hero-scroll', { opacity: 1, y: 0, duration: 0.8, delay: 1.4 });

    // ── LABELS Y TÍTULOS de sección ──
    reveal('.section-label');
    reveal('.section-title, .contact-title', { duration: 1 });

    // ── ABOUT ──
    reveal('.about-text p', { stagger: 0.1 });
    reveal('.about-details', { duration: 0.8 });

    // ── PROYECTOS ──
    reveal('.project-card', { stagger: 0.08, duration: 0.9 });

    // ── SKILLS — barras animadas al entrar en pantalla ──
    gsap.utils.toArray('.skill-group').forEach((group, i) => {
        gsap.to(group, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                toggleActions: 'play none none none',
                onEnter: () => {
                    group.querySelectorAll('.skill-fill').forEach(fill => {
                        fill.style.width = fill.dataset.width + '%';
                    });
                }
            }
        });
    });

    // ── CERTIFICACIONES ──
    reveal('.cert-row', { stagger: 0.12, duration: 0.9 });

    // ── CONTACTO ──
    reveal('.contact-sub', { delay: 0.1 });
    reveal('.contact-link', { stagger: 0.08 });
}
