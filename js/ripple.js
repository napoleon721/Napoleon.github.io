/* =============================================
   ripple.js — Efecto ripple global en clicks
   CLEMENT by Napoleon
   ============================================= */

/**
 * Crea un elemento ripple en las coordenadas del click
 * sobre el elemento dado.
 */
export function ripple(event, element) {
    const span = document.createElement('span');
    span.className = 'ripple';

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.left = (event.clientX - rect.left - size / 2) + 'px';
    span.style.top = (event.clientY - rect.top - size / 2) + 'px';

    element.appendChild(span);
    setTimeout(() => span.remove(), 700);
}

/**
 * Adjunta el efecto ripple a todos los elementos
 * que tengan el atributo data-ripple.
 */
export function attachRipples() {
    document.querySelectorAll('[data-ripple]').forEach(el => {
        // Necesario para que el span se posicione correctamente
        if (getComputedStyle(el).position === 'static') {
            el.style.position = 'relative';
        }
        el.addEventListener('click', e => ripple(e, el));
    });
}
