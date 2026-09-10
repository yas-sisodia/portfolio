document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Network Canvas Background
  if (typeof initBackgroundAnimation === 'function') {
    initBackgroundAnimation();
  }

  // 2. Render UI Components from data.js
  if (typeof renderProjects === 'function') renderProjects();
  if (typeof renderSkills === 'function') renderSkills();
  if (typeof renderCertificatesAndLanguages === 'function') renderCertificatesAndLanguages();
  if (typeof initTypewriter === 'function') initTypewriter();
  if (typeof initContactForm === 'function') initContactForm();

  // 3. Active Nav Tab Switching (Click + Scroll)
  const navLinks = document.querySelectorAll('header nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${currentSectionId}`
        );
      });
    }
  });

  // 4. Update Footer Copyright Year
  const yearElem = document.getElementById('year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // 5. Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }
});
