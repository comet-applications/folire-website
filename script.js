const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu]');
const navLinks = document.querySelector('#nav-links');
const previewImage = document.querySelector('[data-preview-image]');
const previewPhone = document.querySelector('.phone-showcase');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  navLinks?.classList.toggle('open', !open);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-preview]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!previewImage) return;
    document.querySelectorAll('[data-preview]').forEach((tab) => tab.setAttribute('aria-selected', 'false'));
    button.setAttribute('aria-selected', 'true');
    previewPhone?.classList.add('changing');
    window.setTimeout(() => {
      previewImage.src = `assets/${button.dataset.preview}`;
      previewImage.alt = button.dataset.alt || '';
      previewPhone?.classList.remove('changing');
    }, 160);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
