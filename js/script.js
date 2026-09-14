const views = [...document.querySelectorAll('[data-view]')];
const viewLinks = [...document.querySelectorAll('[data-view-link]')];
const bottomNav = document.getElementById('bottomNav');
const menuButton = document.getElementById('menuButton');
const themeToggle = document.getElementById('themeToggle');
const themeToggleIcon = themeToggle?.querySelector('.theme-toggle-icon');

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
  if (!themeToggle) return;
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  if (themeToggleIcon) themeToggleIcon.textContent = isLight ? '☀' : '☾';
}

let savedTheme = 'dark';
try {
  savedTheme = window.localStorage.getItem('portfolio-theme') || 'dark';
} catch (error) {
  savedTheme = 'dark';
}
applyTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
  try {
    window.localStorage.setItem('portfolio-theme', nextTheme);
  } catch (error) {
    // Theme still applies for the current session when storage is unavailable.
  }
});

function showView(viewName, updateHash = true) {
  const nextView = views.some((view) => view.dataset.view === viewName) ? viewName : 'home';
  views.forEach((view) => view.classList.toggle('is-active', view.dataset.view === nextView));
  viewLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.viewLink === nextView));
  if (updateHash && window.location.hash !== `#${nextView}`) history.pushState(null, '', `#${nextView}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
  if (bottomNav) bottomNav.classList.remove('is-open');
  requestAnimationFrame(observeReveals);
}

function routeFromHash() {
  showView(window.location.hash.slice(1) || 'home', false);
}

viewLinks.forEach((link) => link.addEventListener('click', (event) => {
  const viewName = link.dataset.viewLink;
  if (!viewName) return;
  event.preventDefault();
  showView(viewName);
}));
window.addEventListener('hashchange', routeFromHash);
window.addEventListener('popstate', routeFromHash);

if (menuButton && bottomNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = bottomNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-selected', item === button));
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
    });
  });
});

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.project-carousel-track');
  const slides = carousel.querySelectorAll('.project-carousel-slide');
  const status = carousel.querySelector('[data-carousel-status]');
  if (!track || !slides.length || !status) return;

  let currentIndex = 0;
  let carouselTimer;
  let isPaused = false;

  const updateCarousel = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    status.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    slides.forEach((slide, index) => slide.setAttribute('aria-hidden', String(index !== currentIndex)));
  };

  const startCarousel = () => {
    if (carouselTimer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    carouselTimer = window.setInterval(() => {
      if (!isPaused) updateCarousel();
    }, 4000);
  };

  const stopCarousel = () => {
    window.clearInterval(carouselTimer);
    carouselTimer = undefined;
  };

  carousel.addEventListener('mouseenter', () => { isPaused = true; });
  carousel.addEventListener('mouseleave', () => { isPaused = false; });
  carousel.addEventListener('focusin', () => { isPaused = true; });
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) isPaused = false;
  });
  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);
  carousel.addEventListener('focusin', stopCarousel);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) startCarousel();
  });

  startCarousel();
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const messageInput = document.getElementById('message');
const characterCount = document.getElementById('characterCount');
if (messageInput && characterCount) messageInput.addEventListener('input', () => { characterCount.textContent = messageInput.value.length; });

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = messageInput.value.trim();
    if (!name || !email || !message) return setFormStatus('Please complete every field.', 'error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setFormStatus('Please enter a valid email address.', 'error');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    setFormStatus('Opening your mail client...', 'success');
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  });
}

function setFormStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

let revealObserver;
function observeReveals() {
  const revealItems = document.querySelectorAll('.view.is-active .reveal:not(.is-visible)');
  if ('IntersectionObserver' in window) {
    if (!revealObserver) revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: .1 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else revealItems.forEach((item) => item.classList.add('is-visible'));
}

routeFromHash();
observeReveals();
