/* =============================================
   typewriter.js — Efecto typewriter del hero
   CLEMENT by Napoleon
   ============================================= */

export function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = [
        'Ingeniería Aeronáutica',
        "Napo's Developer",
        'Staff Software Engineer (Rust)',
        'Programador Junior'
    ];

    let pi = 0;        // phrase index
    let ci = 0;        // character index
    let deleting = false;

    function tick() {
        const phrase = phrases[pi];

        if (!deleting) {
            el.textContent = phrase.slice(0, ci + 1);
            ci++;
            if (ci === phrase.length) {
                deleting = true;
                setTimeout(tick, 1800); // pausa al completar frase
                return;
            }
        } else {
            el.textContent = phrase.slice(0, ci - 1);
            ci--;
            if (ci === 0) {
                deleting = false;
                pi = (pi + 1) % phrases.length;
            }
        }

        setTimeout(tick, deleting ? 55 : 90);
    }

    setTimeout(tick, 1200); // delay inicial
}
