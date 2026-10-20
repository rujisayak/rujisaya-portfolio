// Frontend JavaScript for Rujisaya Kuekool Portfolio
// Dynamic Data Integration from MongoDB Atlas API

let allCaseStudies = [];
let allActivities = [];
let currentFilter = 'featured';
let currentActFilter = 'all';
let lastFocusedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCopyables();
  initContactForm();
  initModalA11y();
  loadPortfolioData();
  loadActivitiesData();
});

// Mobile Nav & Scroll Spy
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Fetch Profile & Case Studies from API
async function loadPortfolioData() {
  try {
    const res = await fetch('/api/case-studies');
    if (!res.ok) throw new Error('Failed to load case studies');
    allCaseStudies = await res.json();
    
    // By default, display the prioritized featured case studies
    const featuredStudies = allCaseStudies.filter(s => s.featured);
    renderCaseStudies(featuredStudies.length > 0 ? featuredStudies : allCaseStudies);
    initFilterTabs();
  } catch (err) {
    console.error("Error loading case studies:", err);
    const container = document.getElementById('caseStudiesContainer');
    if (container) {
      container.innerHTML = `<div class="loading-spinner">Could not load projects. Please refresh.</div>`;
    }
  }
}

// Render Case Studies Cards (Matching Behance Screenshot 4)
function renderCaseStudies(studies) {
  const container = document.getElementById('caseStudiesContainer');
  if (!container) return;

  if (!studies || studies.length === 0) {
    container.innerHTML = `<div class="loading-spinner">No projects found for this category.</div>`;
    return;
  }

  container.innerHTML = studies.map((study, idx) => {
    const projNum = idx + 1;
    const cleanGoal = study.designGoal ? study.designGoal.replace(/^Design Goal:\s*/i, '') : '';
    // Format chunky lowercase title
    const shortTitle = study.title.includes('&') 
      ? study.title.split('&')[0].trim().toLowerCase() 
      : study.title.toLowerCase();

    return `
      <article class="project-showcase-card" data-id="${study.id}">
        <!-- Top Meta Row -->
        <div class="project-card-header">
          <span class="project-num-label">project ${projNum}</span>
          <span class="project-category-label">${escapeHtml(study.category ? study.category.toLowerCase() : 'enterprise ux')}</span>
        </div>

        <div class="project-card-grid">
          <!-- Left Column: Typography & Narrative -->
          <div class="project-info-col">
            <div class="project-title-row">
              <h3 class="project-chunky-title">${escapeHtml(shortTitle)}</h3>
              <span class="project-flower-sticker" aria-hidden="true">
                <svg viewBox="0 0 50 50" class="flower-icon"><circle cx="25" cy="25" r="7"/><circle cx="25" cy="8" r="6"/><circle cx="25" cy="42" r="6"/><circle cx="8" cy="25" r="6"/><circle cx="42" cy="25" r="6"/><circle cx="13" cy="13" r="6"/><circle cx="37" cy="13" r="6"/><circle cx="13" cy="37" r="6"/><circle cx="37" cy="37" r="6"/></svg>
              </span>
            </div>

            <div class="project-desc-block">
              <p class="desc-p">
                <strong>About the project:</strong> ${escapeHtml(study.summary)}
              </p>
              ${cleanGoal ? `
                <p class="desc-p">
                  <strong>Result:</strong> ${escapeHtml(cleanGoal)}
                </p>
              ` : ''}
              ${study.devCollaboration ? `
                <p class="desc-p dev-spec-p">
                  <strong>Dev Synergy:</strong> ${escapeHtml(study.devCollaboration)}
                </p>
              ` : ''}
            </div>

            <div class="project-tags-row">
              ${(study.tags || []).map(t => `<span class="project-tag-pill">${escapeHtml(t)}</span>`).join('')}
            </div>

            <button class="project-action-btn" onclick="openCaseStudyModal('${study.id}')" aria-label="Open project details for ${escapeHtml(study.title)}">
              <span>View Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Right Column: Visual Mockup & Tilted Script Sticker -->
          <div class="project-visual-col" onclick="openCaseStudyModal('${study.id}')" role="button" tabindex="0" aria-label="Preview image for ${escapeHtml(study.title)}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openCaseStudyModal('${study.id}');}">
            <div class="project-image-bezel">
              <img src="${study.image}" alt="${escapeHtml(study.title)} preview" class="project-img" loading="lazy">
            </div>
            <div class="project-script-sticker">
              <span>project ${projNum}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filter Tabs Logic
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;

      if (filter === 'featured') {
        renderCaseStudies(allCaseStudies.filter(s => s.featured));
      } else if (filter === 'all') {
        renderCaseStudies(allCaseStudies);
      } else if (filter === 'rules') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('rule') || (s.category && s.category.toUpperCase().includes('LOGIC'))));
      } else if (filter === 'operations') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('case-management') || s.id.includes('risk') || (s.category && s.category.toUpperCase().includes('OPERATIONS'))));
      } else if (filter === 'handoff') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('handoff') || (s.tags && s.tags.includes('Developer Handoff'))));
      } else if (filter === 'analytics') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('analytics') || s.id.includes('risk') || (s.category && s.category.toUpperCase().includes('ANALYTICS'))));
      } else if (filter === 'threat') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('threat') || (s.category && s.category.toUpperCase().includes('THREAT'))));
      } else if (filter === 'branding') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('brand') || (s.category && s.category.toUpperCase().includes('BRAND')) || (s.tags && s.tags.includes('Logo Design'))));
      }
    });
  });
}

// Case Study Modal with 8-Point Storytelling Structure
function openCaseStudyModal(studyId) {
  const study = allCaseStudies.find(s => s.id === studyId);
  if (!study) return;

  lastFocusedElement = document.activeElement;

  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalBody');

  // Split multi-point decisions if structured as numbered strings
  const decisionsHtml = study.keyDecisions ? study.keyDecisions.split('\n').filter(Boolean).map(dec => `
    <li class="modal-decision-item">${escapeHtml(dec)}</li>
  `).join('') : '';

  modalBody.innerHTML = `
    <!-- 1. Header & Meta -->
    <div class="modal-header-meta">
      <div class="modal-dossier-tag">
        <span class="dossier-stamp-icon">📁</span>
        <span class="dossier-stamp-text">PROJECT DOSSIER // ${escapeHtml(study.id.toUpperCase())}</span>
      </div>
      <div class="modal-header-badges">
        <span class="case-category">${escapeHtml(study.category || 'PROJECT')}</span>
        ${study.badge ? `<span class="case-badge">${escapeHtml(study.badge)}</span>` : ''}
      </div>
    </div>

    <h2 class="modal-title" id="modalTitle">${escapeHtml(study.title)}</h2>

    <!-- Project Specifications Grid -->
    <div class="modal-grid">
      <div class="modal-col">
        <div class="modal-col-title">SPEC // ROLE</div>
        <div class="modal-col-value">${escapeHtml(study.role || 'UX/UI Designer')}</div>
      </div>
      <div class="modal-col">
        <div class="modal-col-title">SPEC // USERS</div>
        <div class="modal-col-value">${escapeHtml(study.targetUsers || 'Security Analysts & Dev Teams')}</div>
      </div>
      <div class="modal-col">
        <div class="modal-col-title">SPEC // CONTEXT</div>
        <div class="modal-col-value">${escapeHtml(study.duration || 'Security Pitch Co., Ltd.')}</div>
      </div>
      <div class="modal-col">
        <div class="modal-col-title">SPEC // TOOLKIT</div>
        <div class="modal-col-value">Figma &amp; Design System</div>
      </div>
    </div>

    <!-- Visual Artifacts -->
    <div class="modal-img-wrapper">
      <img src="${study.image}" alt="${escapeHtml(study.title)} - Primary UI Screen" class="modal-img">
      <div class="modal-img-caption">High-fidelity production interface designed in Figma with reusable components.</div>
    </div>

    ${study.secondaryImage ? `
      <div class="modal-img-wrapper">
        <img src="${study.secondaryImage}" alt="${escapeHtml(study.title)} - User Flow & Handoff Specs" class="modal-img">
        <div class="modal-img-caption">Comprehensive interaction flow blueprint and state specifications for developer implementation.</div>
      </div>
    ` : ''}

    <!-- 2. The Problem & Challenges -->
    <section class="modal-section">
      <h3 class="modal-section-title">
        <span class="modal-section-badge">SEC // 01</span> The Problem &amp; Operational Challenges
      </h3>
      <p class="modal-section-p">${escapeHtml(study.problem || study.challenge || study.summary)}</p>
    </section>

    <!-- 3. Responsibilities & Personal Scope -->
    ${study.responsibilities ? `
      <section class="modal-section">
        <h3 class="modal-section-title">
          <span class="modal-section-badge">SEC // 02</span> Designer Scope &amp; Responsibilities
        </h3>
        <div class="modal-callout">
          ${escapeHtml(study.responsibilities)}
        </div>
      </section>
    ` : ''}

    <!-- 4. UX Approach & Architecture -->
    ${study.uxApproach ? `
      <section class="modal-section">
        <h3 class="modal-section-title">
          <span class="modal-section-badge">SEC // 03</span> UX Approach &amp; Workflow Architecture
        </h3>
        <p class="modal-section-p">${escapeHtml(study.uxApproach)}</p>
      </section>
    ` : ''}

    <!-- 5. Key Design Decisions & Trade-Offs -->
    ${decisionsHtml ? `
      <section class="modal-section">
        <h3 class="modal-section-title">
          <span class="modal-section-badge">SEC // 04</span> Key Design Decisions &amp; Trade-Offs
        </h3>
        <ul class="modal-decisions-list">
          ${decisionsHtml}
        </ul>
      </section>
    ` : ''}

    <!-- 6. Key Interaction Features -->
    ${study.keyFeatures && study.keyFeatures.length > 0 ? `
      <section class="modal-section">
        <h3 class="modal-section-title">
          <span class="modal-section-badge">SEC // 05</span> Key Interaction Features
        </h3>
        <ul class="modal-features-list">
          ${study.keyFeatures.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
        </ul>
      </section>
    ` : ''}

    <!-- 7. Developer Collaboration & Specifications -->
    ${study.devCollaboration ? `
      <section class="modal-section">
        <h3 class="modal-section-title">
          <span class="modal-section-badge">SEC // 06</span> Developer Collaboration &amp; Implementation Alignment
        </h3>
        <div class="modal-callout dev-callout">
          <strong>Engineering Synergy:</strong> ${escapeHtml(study.devCollaboration)}
        </div>
      </section>
    ` : ''}

    <!-- 8. Outcome & Qualitative Learnings -->
    ${study.outcomeLearnings ? `
      <section class="modal-section">
        <h3 class="modal-section-title">
          <span class="modal-section-badge">SEC // 07</span> Qualitative Outcomes &amp; Learnings
        </h3>
        <p class="modal-section-p">${escapeHtml(study.outcomeLearnings)}</p>
      </section>
    ` : ''}

    <!-- Modal Footer Actions -->
    <div class="modal-footer-actions">
      <a href="/PortfolioRujisaya.pdf" target="_blank" class="btn btn-primary" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        View in Full Portfolio Deck (PDF)
      </a>
      <button class="btn btn-secondary" onclick="closeCaseStudyModal()">
        Close
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('modalClose');
  if (closeBtn) closeBtn.focus();
}

function closeCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// ==========================================================================
// Activities Section Logic
// ==========================================================================

async function loadActivitiesData() {
  try {
    const res = await fetch('/api/activities');
    if (!res.ok) throw new Error('Failed to load activities');
    allActivities = await res.json();
    renderActivities(allActivities);
    initActivityFilters();
  } catch (err) {
    console.error("Error loading activities:", err);
    const container = document.getElementById('activityContainer');
    if (container) {
      container.innerHTML = `<div class="loading-spinner">Could not load activities. Please refresh.</div>`;
    }
  }
}

function renderActivities(activities) {
  const container = document.getElementById('activityContainer');
  if (!container) return;

  if (!activities || activities.length === 0) {
    container.innerHTML = `<div class="loading-spinner">No moments found for this category.</div>`;
    return;
  }

  container.innerHTML = activities.map((act, idx) => {
    const frameNum = String(idx + 1).padStart(2, '0');
    return `
      <article class="activity-card archival-polaroid" onclick="openActivityModal('${act.id}')" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(act.title)}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openActivityModal('${act.id}');}">
        <div class="activity-img-frame">
          <img src="${act.image}" alt="${escapeHtml(act.title)}" class="activity-img" loading="lazy">
          <div class="activity-overlay">
            <span class="activity-zoom-btn">Inspect Frame ↗</span>
          </div>
        </div>
        <div class="activity-card-body">
          <div class="activity-meta-row">
            <span class="activity-frame-num">FRAME // ${frameNum}</span>
            <span class="activity-tag-pill">${escapeHtml(act.tag || act.categoryLabel || 'Moment')}</span>
            <span class="activity-date">${escapeHtml(act.date || '')}</span>
          </div>
          <h3 class="activity-title">${escapeHtml(act.title)}</h3>
          <p class="activity-caption">${escapeHtml(act.caption)}</p>
        </div>
      </article>
    `;
  }).join('');
}

function initActivityFilters() {
  const filterBtns = document.querySelectorAll('[data-act-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-act-filter');
      currentActFilter = filter;

      if (filter === 'all') {
        renderActivities(allActivities);
      } else {
        renderActivities(allActivities.filter(a => a.category === filter));
      }
    });
  });
}

function openActivityModal(actId) {
  const act = allActivities.find(a => a.id === actId);
  if (!act) return;

  lastFocusedElement = document.activeElement;

  const modal = document.getElementById('activityModal');
  const modalBody = document.getElementById('actModalBody');

  modalBody.innerHTML = `
    <div class="act-modal-img-wrap">
      <img src="${act.image}" alt="${escapeHtml(act.title)}" class="act-modal-img">
    </div>
    <div class="act-modal-info">
      <div class="activity-meta-row">
        <span class="activity-tag-pill">${escapeHtml(act.tag || act.categoryLabel || 'Moment')}</span>
        <span class="activity-date">${escapeHtml(act.date || '')}</span>
      </div>
      <h2 class="act-modal-title" id="actModalTitle">${escapeHtml(act.title)}</h2>
      <p class="act-modal-caption">${escapeHtml(act.caption)}</p>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('actModalClose');
  if (closeBtn) closeBtn.focus();
}

function closeActivityModal() {
  const modal = document.getElementById('activityModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// Modal Listeners & Focus Trapping
function initModalA11y() {
  const csModal = document.getElementById('caseStudyModal');
  const csCloseBtn = document.getElementById('modalClose');
  const actModal = document.getElementById('activityModal');
  const actCloseBtn = document.getElementById('actModalClose');

  if (csCloseBtn) csCloseBtn.addEventListener('click', closeCaseStudyModal);
  if (actCloseBtn) actCloseBtn.addEventListener('click', closeActivityModal);

  [csModal, actModal].forEach(modal => {
    if (!modal) return;
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (modal === csModal) closeCaseStudyModal();
        if (modal === actModal) closeActivityModal();
      }
    });

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal === csModal) closeCaseStudyModal();
        if (modal === actModal) closeActivityModal();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  });
}

// Copy to Clipboard with Accessible Toast
function initCopyables() {
  const copyCards = document.querySelectorAll('.copyable');
  copyCards.forEach(card => {
    card.addEventListener('click', () => {
      const textToCopy = card.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          showToast(`Selected: ${textToCopy}`);
        });
      }
    });

    // Keyboard support for copyable cards
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Copy ${card.querySelector('.channel-label')?.textContent || 'contact info'}`);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Contact Form Submission to MongoDB API
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    alertBox.className = 'form-alert hidden';

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alertBox.textContent = `✓ ${data.message || 'Message sent and stored in database successfully!'}`;
        alertBox.className = 'form-alert success';
        form.reset();
      } else {
        alertBox.textContent = `⚠ ${data.error || 'Failed to send message.'}`;
        alertBox.className = 'form-alert error';
      }
    } catch (err) {
      console.error("Submission error:", err);
      alertBox.textContent = '⚠ Network error. Please try again.';
      alertBox.className = 'form-alert error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
    }
  });
}

// Helper utility
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
