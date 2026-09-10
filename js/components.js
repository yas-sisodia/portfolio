// Component Rendering Functions

function renderProjects() {
  const projectsContainer = document.getElementById('projects-grid');
  if (projectsContainer && PORTFOLIO_CONFIG.projects) {
    projectsContainer.innerHTML = PORTFOLIO_CONFIG.projects.map((proj, idx) => `
      <div class="project-card" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
        <div class="project-header">
          <i class="fa-solid ${proj.icon}"></i>
        </div>
        <div class="project-body">
          <div class="pill-tags">
            ${proj.tags.map(t => `<span class="pill">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-links">
            <a href="${proj.github}" target="_blank"><i class="fa-brands fa-github"></i> Source</a>
            <a href="${proj.demo}"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderSkills() {
  const skillsContainer = document.getElementById('skills-grid');
  if (skillsContainer && PORTFOLIO_CONFIG.skills) {
    skillsContainer.innerHTML = PORTFOLIO_CONFIG.skills.map((skill, idx) => `
      <div class="skill-card" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
        <h3><i class="fa-solid ${skill.icon}"></i> ${skill.category}</h3>
        <div class="skill-tags">
          ${skill.items.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

function renderCertificatesAndLanguages() {
  const certContainer = document.getElementById('cert-grid');
  if (certContainer && PORTFOLIO_CONFIG.certificates) {
    certContainer.innerHTML = PORTFOLIO_CONFIG.certificates.map((cert, idx) => `
      <div class="cert-card" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
        <div class="cert-icon"><i class="fa-solid ${cert.icon}"></i></div>
        <div class="cert-body">
          <div class="cert-meta">
            <h3>${cert.title}</h3>
            <span class="cert-badge">${cert.issuer} • ${cert.date}</span>
          </div>
          <ul>
            ${cert.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  const langContainer = document.getElementById('lang-grid');
  if (langContainer && PORTFOLIO_CONFIG.languages) {
    langContainer.innerHTML = PORTFOLIO_CONFIG.languages.map((lang, idx) => `
      <div class="lang-card" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
        <i class="fa-solid ${lang.icon}"></i>
        <div>
          <h4>${lang.name}</h4>
          <span>${lang.level}</span>
        </div>
      </div>
    `).join('');
  }
}

function initTypewriter() {
  let phraseIdx = 0, charIdx = 0, isDeleting = false;
  const target = document.getElementById('typing');
  if (!target || !PORTFOLIO_CONFIG.profile.typingPhrases) return;

  function typeLoop() {
    const current = PORTFOLIO_CONFIG.profile.typingPhrases[phraseIdx];
    target.textContent = isDeleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
    charIdx += isDeleting ? -1 : 1;

    let speed = isDeleting ? 35 : 85;
    if (!isDeleting && charIdx === current.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % PORTFOLIO_CONFIG.profile.typingPhrases.length;
      speed = 400;
    }
    setTimeout(typeLoop, speed);
  }
  typeLoop();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.style.display = 'block';
    feedback.style.color = 'var(--orange-bright)';
    feedback.textContent = 'Transmitting message...';

    setTimeout(() => {
      feedback.style.color = '#ffffff';
      feedback.textContent = "Message sent! I'll get back to you shortly.";
      form.reset();
    }, 1000);
  });
}
