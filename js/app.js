// =============================================
// js/app.js — Interactividad Landing iPhone
// =============================================
 
// ===== 1. MENÚ HAMBURGUESA RESPONSIVE =====
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');
 
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
 
// Cerrar menú al hacer clic en cualquier enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});
 
// ===== 2. SCROLL SUAVE ENTRE SECCIONES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const destino = document.querySelector(anchor.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
 
// ===== 3. NAVBAR CAMBIA AL HACER SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(0,0,0,0.97)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.85)';
  }
});
 
// ===== 4. BOTÓN CTA CON EVENTO INTERACTIVO =====
const ctaBtn = document.getElementById('cta-btn');
 
ctaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  ctaBtn.textContent = '¡Agregado al carrito! 🎉';
  ctaBtn.style.background = '#34c759';
  ctaBtn.style.transform   = 'scale(1.05)';
 
  setTimeout(() => {
    ctaBtn.textContent       = 'Comprar ahora';
    ctaBtn.style.background  = '';
    ctaBtn.style.transform   = '';
  }, 2500);
});
 
// ===== 5. VALIDACIÓN DEL FORMULARIO =====
const form = document.getElementById('contact-form');
 
function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}
 
function limpiarErrores() {
  ['error-nombre', 'error-email', 'error-mensaje'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
  document.getElementById('form-success').textContent = '';
}
 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  limpiarErrores();
 
  const nombre  = document.getElementById('nombre').value.trim();
  const email   = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valido = true;
 
  if (!nombre) {
    mostrarError('error-nombre', 'El nombre es obligatorio.');
    valido = false;
  }
 
  if (!email) {
    mostrarError('error-email', 'El correo es obligatorio.');
    valido = false;
  } else if (!emailRegex.test(email)) {
    mostrarError('error-email', 'Ingresa un correo electrónico válido.');
    valido = false;
  }
 
  if (!mensaje) {
    mostrarError('error-mensaje', 'El mensaje no puede estar vacío.');
    valido = false;
  }
 
  if (valido) {
    document.getElementById('form-success').textContent =
      '¡Mensaje enviado correctamente! Te contactaremos pronto. ✅';
    form.reset();
  }
});
 
// ===== 6. ANIMACIONES ACTIVADAS POR SCROLL =====
const elementosAnimados = document.querySelectorAll(
  '.beneficio-card, .caract-item, .testimonio-card'
);
 
// Agregar clase fade-in a cada elemento
elementosAnimados.forEach(el => el.classList.add('fade-in'));
 
// Observar cuándo entran en pantalla
const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
 
elementosAnimados.forEach(el => observador.observe(el));
 