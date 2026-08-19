// =====================================================
// 1. MOBILE NAV TOGGLE
// =====================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =====================================================
// 2. SCROLL REVEAL — sections fade/slide in as you scroll
// =====================================================
const sections = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => revealObserver.observe(section));

// =====================================================
// 3. ACTIVE NAV LINK — highlights the current section
// =====================================================
const navItems = document.querySelectorAll('[data-nav]');
const allSections = document.querySelectorAll('main section[id], main [id="hero"]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

document.querySelectorAll('main section[id]').forEach(sec => navObserver.observe(sec));

// =====================================================
// 4. TRACE PULSE — moves the glowing dot down the side
//    trace line based on scroll position
// =====================================================
const tracePulse = document.getElementById('tracePulse');

function updateTracePulse() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;
  const viewportHeight = window.innerHeight;
  tracePulse.style.top = `${progress * viewportHeight}px`;
}

window.addEventListener('scroll', updateTracePulse, { passive: true });
updateTracePulse();

// =====================================================
// 5. COPY EMAIL BUTTON
// =====================================================
const copyBtn = document.getElementById('copyBtn');
const emailLink = document.getElementById('emailLink');

if (copyBtn && emailLink) {
  copyBtn.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = 'copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'copy';
        copyBtn.classList.remove('copied');
      }, 1800);
    } catch (err) {
      copyBtn.textContent = 'failed';
    }
  });
}

// =====================================================
// 6. FOOTER YEAR
// =====================================================
document.getElementById('year').textContent = new Date().getFullYear();
