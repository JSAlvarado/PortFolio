// Every block checks that its elements exist first,
// so one missing element can't stop the rest of the script.

// 1. MOBILE MENU
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  const setMenu = (open) => {
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
}

// 2. HIGHLIGHT THE NAV LINK FOR THE SECTION ON SCREEN
const links = navLinks ? [...navLinks.querySelectorAll('a[href^="#"]')] : [];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => {
        const on = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', on);
        on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

// 3. HIDE THE "DOWNLOAD CV" BUTTON UNTIL resume.pdf IS UPLOADED
const cvLink = document.getElementById('cvLink');
if (cvLink) {
  fetch(cvLink.getAttribute('href'), { method: 'HEAD' })
    .then(res => { if (!res.ok) cvLink.remove(); })
    .catch(() => cvLink.remove());
}

// 4. COPY EMAIL
const copyBtn = document.getElementById('copyBtn');
const emailLink = document.getElementById('emailLink');
const copyStatus = document.getElementById('copyStatus');

if (copyBtn && emailLink) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailLink.textContent.trim());
      copyBtn.textContent = 'Copied';
      if (copyStatus) copyStatus.textContent = 'Email copied to clipboard.';
    } catch {
      if (copyStatus) copyStatus.textContent = 'Couldn’t copy. Select the address and copy it manually.';
    }
    setTimeout(() => {
      copyBtn.textContent = 'Copy email';
      if (copyStatus) copyStatus.textContent = '';
    }, 2000);
  });
}

// 5. PHOTO VIEWER — click any photo to see it full size
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox && typeof lightbox.showModal === 'function') {
  document.querySelectorAll('a.zoom').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const img = link.querySelector('img');
      const caption = link.closest('figure')?.querySelector('figcaption');
      lightboxImg.src = link.href;
      lightboxImg.alt = img ? img.alt : '';
      lightboxCaption.textContent = caption ? caption.textContent.trim() : (img ? img.alt : '');
      lightbox.showModal();
    });
  });
  lightboxClose.addEventListener('click', () => lightbox.close());
  // Close when clicking the dark area around the photo
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => { lightboxImg.src = ''; });
}
// If the browser has no <dialog> support, the links simply open the image itself.

// 6. FOOTER YEAR
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
