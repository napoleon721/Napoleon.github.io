/* =============================================
   three-scene.js — Escena 3D del hero
   CLEMENT by Napoleon
   ============================================= */

export function initThreeScene() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.z = 5;

  // ── Icosaedro wireframe ──
  const icoGeo = new THREE.IcosahedronGeometry(1.8, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x3D3D3D,
    wireframe: true,
    transparent: true,
    opacity: 0.75
  });
  const ico = new THREE.Mesh(icoGeo, icoMat);
  scene.add(ico);

  // ── Partículas flotantes ──
  const pGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(400 * 3);
  for (let i = 0; i < 1200; i++) {
    positions[i] = (Math.random() - 0.5) * 18;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0xADADAD,
    size: 0.025,
    transparent: true,
    opacity: 0.5
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ── Anillo ultrafino ──
  const ringGeo = new THREE.TorusGeometry(2.4, 0.004, 2, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x888888,
    transparent: true,
    opacity: 0.55
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 5;
  scene.add(ring);

  // ── Resize handler ──
  function resize() {
    const hero = document.getElementById('hero');
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // ── Seguimiento del mouse ──
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Loop de animación ──
  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.004;
    ico.rotation.x = mouseY * 0.3 + t * 0.15;
    ico.rotation.y = mouseX * 0.3 + t * 0.20;
    ring.rotation.z = t * 0.08;
    particles.rotation.y = t * 0.03;
    renderer.render(scene, camera);
  })();
}
