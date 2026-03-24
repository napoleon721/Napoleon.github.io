/* =============================================
   navbar.js — Comportamiento scroll del navbar
   CLEMENT by Napoleon
   ============================================= */

export function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    // Añade/quita la clase 'scrolled' según posición
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Smooth scroll en los links internos
    nav.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Cierra el menú mobile si está abierto
            hamburger?.classList.remove('open');
            navLinks?.classList.remove('mobile-open');
        });
    });

    // Hamburger toggle
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('mobile-open');
    });
}
