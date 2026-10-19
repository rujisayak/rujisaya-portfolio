// Frontend JavaScript for Rujisaya Kuekool Portfolio
// Dynamic Data Integration from MongoDB Atlas API

let allCaseStudies = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCopyables();
  initContactForm();
  checkDBStatus();
  loadPortfolioData();
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
    renderCaseStudies(allCaseStudies);
    initFilterTabs();
  } catch (err) {
    console.error("Error loading case studies:", err);
    const container = document.getElementById('caseStudiesContainer');
    if (container) {
      container.innerHTML = `<div class="loading-spinner">Could not load case studies. Please refresh.</div>`;
    }
  }
}

// Render Case Studies Cards
function renderCaseStudies(studies) {
  const container = document.getElementById('caseStudiesContainer');
  if (!container) return;

  if (!studies || studies.length === 0) {
    container.innerHTML = `<div class="loading-spinner">No case studies found for this category.</div>`;
    return;
  }

  container.innerHTML = studies.map(study => `
    <article class="case-card" data-id="${study.id}">
      <div class="case-content">
        <div class="case-top-meta">
          <span class="case-category">${escapeHtml(study.category || 'CASE STUDY')}</span>
          ${study.badge ? `<span class="case-badge">${escapeHtml(study.badge)}</span>` : ''}
        </div>

        <h3 class="case-title">${escapeHtml(study.title)}</h3>
        <p class="case-summary">${escapeHtml(study.summary)}</p>

        ${study.impact ? `
          <div class="case-impact-pill">
            <span>⚡️ ${escapeHtml(study.impact)}</span>
          </div>
        ` : ''}

        <div class="case-tags">
          ${(study.tags || []).map(t => `<span class="case-tag">${escapeHtml(t)}</span>`).join('')}
        </div>

        <button class="case-cta-btn" onclick="openCaseStudyModal('${study.id}')">
          View Case Study 
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div class="case-visual-wrapper" onclick="openCaseStudyModal('${study.id}')">
        <div class="case-mockup-header">
          <span class="mockup-dot"></span>
          <span class="mockup-dot"></span>
          <span class="mockup-dot"></span>
        </div>
        <img src="${study.image}" alt="${escapeHtml(study.title)}" class="case-img" loading="lazy">
      </div>
    </article>
  `).join('');
}

// Filter Tabs Logic
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;

      if (filter === 'all') {
        renderCaseStudies(allCaseStudies);
      } else if (filter === 'threat') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('threat') || s.category.includes('THREAT')));
      } else if (filter === 'rules') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('rule') || s.category.includes('LOGIC')));
      } else if (filter === 'operations') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('case-management') || s.id.includes('risk')));
      } else if (filter === 'analytics') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('analytics') || s.id.includes('risk')));
      } else if (filter === 'handoff') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('handoff') || s.tags.includes('Developer Handoff')));
      } else if (filter === 'branding') {
        renderCaseStudies(allCaseStudies.filter(s => s.id.includes('brand') || s.category.includes('BRAND') || (s.tags && s.tags.includes('Logo Design'))));
      }
    });
  });
}

// Case Study Modal
function openCaseStudyModal(studyId) {
  const study = allCaseStudies.find(s => s.id === studyId);
  if (!study) return;

  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <div class="modal-header-meta">
      <span class="case-category">${escapeHtml(study.category || 'CASE STUDY')}</span>
      ${study.badge ? `<span class="case-badge">${escapeHtml(study.badge)}</span>` : ''}
    </div>

    <h2 class="modal-title">${escapeHtml(study.title)}</h2>

    <div class="modal-grid">
      <div class="modal-col">
        <div class="modal-col-title">Role</div>
        <div class="modal-col-value">${escapeHtml(study.role || 'UX/UI Designer')}</div>
      </div>
      <div class="modal-col">
        <div class="modal-col-title">Company / Platform</div>
        <div class="modal-col-value">Security Pitch Co., Ltd.</div>
      </div>
      <div class="modal-col">
        <div class="modal-col-title">Primary Tool</div>
        <div class="modal-col-value">Figma & Design System</div>
      </div>
    </div>

    <div class="modal-img-wrapper">
      <img src="${study.image}" alt="${escapeHtml(study.title)}" class="modal-img">
    </div>

    ${study.secondaryImage ? `
      <div class="modal-img-wrapper">
        <img src="${study.secondaryImage}" alt="${escapeHtml(study.title)} - Flow" class="modal-img">
      </div>
    ` : ''}

    <h3 class="modal-section-title">The Challenge</h3>
    <p class="modal-section-p">${escapeHtml(study.challenge || study.summary)}</p>

    <h3 class="modal-section-title">The UX & Design Solution</h3>
    <p class="modal-section-p">${escapeHtml(study.solution || 'Designed intuitive, responsive user flows that empower analysts to make rapid, informed decisions.')}</p>

    ${study.keyFeatures && study.keyFeatures.length > 0 ? `
      <h3 class="modal-section-title">Key Interaction Features</h3>
      <ul class="modal-features-list">
        ${study.keyFeatures.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
      </ul>
    ` : ''}

    ${study.impact ? `
      <h3 class="modal-section-title">Impact & Outcome</h3>
      <div class="case-impact-pill" style="margin-top: 0.5rem; margin-bottom: 2rem;">
        <span>⚡️ ${escapeHtml(study.impact)}</span>
      </div>
    ` : ''}

    <div style="border-top: 1px solid var(--border-light); padding-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="/PortfolioRujisaya.pdf" target="_blank" class="btn btn-primary">
        View in Full Portfolio Deck (PDF)
      </a>
      <button class="btn btn-secondary" onclick="closeCaseStudyModal()">
        Close
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Modal Listeners
document.getElementById('modalClose')?.addEventListener('click', closeCaseStudyModal);
document.getElementById('caseStudyModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'caseStudyModal') closeCaseStudyModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCaseStudyModal();
});

// Copy to Clipboard with Toast
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
        alertBox.textContent = `✓ ${data.message || 'Message sent and stored in MongoDB successfully!'}`;
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

// Live DB Status Check
async function checkDBStatus() {
  const statusText = document.getElementById('dbStatusText');
  if (!statusText) return;
  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    if (data.database === 'connected') {
      statusText.textContent = 'MongoDB Atlas: Connected (rujik)';
    } else {
      statusText.textContent = 'Offline Mode';
    }
  } catch {
    statusText.textContent = 'MongoDB: Standby';
  }
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
