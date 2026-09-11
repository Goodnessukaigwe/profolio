const views = [...document.querySelectorAll('[data-view]')];
const viewLinks = [...document.querySelectorAll('[data-view-link]')];
const bottomNav = document.getElementById('bottomNav');
const menuButton = document.getElementById('menuButton');

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
