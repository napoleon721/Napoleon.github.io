/* =============================================
   main.js — Entry point, coordina todo
   CLEMENT by Napoleon
   ============================================= */

import { initThreeScene } from './three-scene.js';
import { initTypewriter } from './typewriter.js';
import { initNavbar } from './navbar.js';
import { attachRipples } from './ripple.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initThreeScene();
    initTypewriter();
    initAnimations();
    attachRipples();
});
