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
  initInteractivePreview();
  initCursorRoaming();
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

// Animated Retro Cursor Roaming over Desktop Folders
function initCursorRoaming() {
  const container = document.getElementById('desktopMainDisplay');
  const cursor = document.getElementById('desktopRoamingCursor');
  if (!container || !cursor) return;

  const targets = [
    '.center-folder-showcase',
    '.item-folder-projects',
    '.item-folder-about',
    '.item-folder-contact',
    '.item-folder-activity',
    '.item-folder-resume'
  ];
  let idx = 0;
  let isPaused = false;
  let tourTimer = null;
  let resumeTimer = null;

  function step() {
    if (isPaused) return;
    document.querySelectorAll('.desktop-anim-target').forEach(el => el.classList.remove('auto-hover'));

    const selector = targets[idx];
    const target = container.querySelector(selector);
    if (!target) return;

    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();

    const isCenter = selector === '.center-folder-showcase';
    const x = (tRect.left - cRect.left) + tRect.width * (isCenter ? 0.68 : 0.6);
    const y = (tRect.top - cRect.top) + tRect.height * (isCenter ? 0.65 : 0.55);

    cursor.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;

    setTimeout(() => {
      if (isPaused) return;
      target.classList.add('auto-hover');
      cursor.classList.add('is-clicking');
      setTimeout(() => cursor.classList.remove('is-clicking'), 180);

      tourTimer = setTimeout(() => {
        if (isPaused) return;
        target.classList.remove('auto-hover');
        idx = (idx + 1) % targets.length;
        step();
      }, 1300);
    }, 950);
  }

  // Initial delay before roaming starts
  setTimeout(step, 800);

  // Pause on real user mouse hover over canvas
  const canvas = document.querySelector('.desktop-canvas') || container;
  if (canvas) {
    canvas.addEventListener('mouseenter', () => {
      isPaused = true;
      cursor.style.opacity = '0';
      document.querySelectorAll('.desktop-anim-target').forEach(el => el.classList.remove('auto-hover'));
      if (tourTimer) clearTimeout(tourTimer);
      if (resumeTimer) clearTimeout(resumeTimer);
    });

    canvas.addEventListener('mouseleave', () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        isPaused = false;
        cursor.style.opacity = '1';
        step();
      }, 1500);
    });
  }
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

// Render Case Studies Cards (Matching Behance Screenshot 4 + Interactive Sandbox)
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
          <div class="project-num-badge">
            <span class="project-num-label">project ${projNum}</span>
            <span class="project-live-indicator"><span class="pulse-dot"></span> Live Interactive</span>
          </div>
          <span class="project-category-label">${escapeHtml(study.category ? study.category.toLowerCase() : 'enterprise saas')}</span>
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
                  <strong>Result / Goal:</strong> ${escapeHtml(cleanGoal)}
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

            <!-- Action Buttons Row -->
            <div class="project-actions-row">
              <button class="btn btn-primary project-play-btn" onclick="openInteractivePreview('${study.id}')" aria-label="Open Interactive Preview for ${escapeHtml(study.title)}">
                <span class="play-icon">▶</span>
                <span>Interactive Live Preview</span>
              </button>

              ${study.liveUrl ? `
                <a href="${study.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary project-external-btn" aria-label="Open live app in new tab">
                  <span>Launch App ↗</span>
                </a>
              ` : ''}

              <button class="project-details-link-btn" onclick="openCaseStudyModal('${study.id}')" aria-label="View design case study story">
                <span>Case Study Story</span>
              </button>
            </div>
          </div>

          <!-- Right Column: Visual Mockup & Interactive Click Trigger -->
          <div class="project-visual-col" onclick="openInteractivePreview('${study.id}')" role="button" tabindex="0" aria-label="Launch interactive preview for ${escapeHtml(study.title)}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openInteractivePreview('${study.id}');}">
            <div class="project-image-bezel">
              <img src="${study.image}" alt="${escapeHtml(study.title)} screenshot" class="project-img" loading="lazy">
              <div class="project-mockup-overlay">
                <div class="overlay-play-pill">
                  <span class="overlay-play-icon">▶</span>
                  <span>คลิกเพื่อทดลองเล่น Interactive Preview</span>
                </div>
              </div>
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

      if (filter === 'all' || filter === 'featured') {
        renderCaseStudies(allCaseStudies);
      } else if (filter === 'enterprise') {
        renderCaseStudies(allCaseStudies.filter(s => s.id === 'leave-wfh-management' || (s.category && s.category.toUpperCase().includes('ENTERPRISE'))));
      } else if (filter === 'creator') {
        renderCaseStudies(allCaseStudies.filter(s => s.id === 'ami-booth-planner' || (s.category && s.category.toUpperCase().includes('CREATOR'))));
      }
    });
  });
}

// Interactive Live Preview Modal Controller
function initInteractivePreview() {
  const modal = document.getElementById('interactivePreviewModal');
  const closeBtn = document.getElementById('previewModalClose');
  const reloadBtn = document.getElementById('previewReloadBtn');
  const iframe = document.getElementById('previewIframe');
  const loading = document.getElementById('previewIframeLoading');
  const wrapper = document.getElementById('previewIframeWrapper');
  const viewportBtns = document.querySelectorAll('.viewport-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeInteractivePreview);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeInteractivePreview();
      }
    });
  }

  if (reloadBtn && iframe) {
    reloadBtn.addEventListener('click', () => {
      if (loading) loading.style.display = 'flex';
      const curSrc = iframe.src;
      iframe.src = 'about:blank';
      setTimeout(() => {
        iframe.src = curSrc;
      }, 120);
    });
  }

  if (iframe && loading) {
    iframe.addEventListener('load', () => {
      if (iframe.src && iframe.src !== 'about:blank') {
        loading.style.display = 'none';
      }
    });
  }

  // Viewport switchers (Desktop, Tablet, Mobile)
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vp = btn.getAttribute('data-viewport');
      if (wrapper) {
        wrapper.className = `preview-iframe-wrapper viewport-${vp}`;
      }
    });
  });

  // ESC key listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const prevModal = document.getElementById('interactivePreviewModal');
      if (prevModal && prevModal.classList.contains('active')) {
        closeInteractivePreview();
      }
    }
  });
}

function openInteractivePreview(projectId) {
  const project = allCaseStudies.find(p => p.id === projectId);
  if (!project || !project.liveUrl) return;

  const modal = document.getElementById('interactivePreviewModal');
  const iframe = document.getElementById('previewIframe');
  const loading = document.getElementById('previewIframeLoading');
  const urlDisplay = document.getElementById('previewUrlDisplay');
  const externalLink = document.getElementById('previewExternalLink');
  const wrapper = document.getElementById('previewIframeWrapper');

  if (urlDisplay) urlDisplay.textContent = project.liveUrl;
  if (externalLink) externalLink.href = project.liveUrl;
  
  if (wrapper) {
    wrapper.className = 'preview-iframe-wrapper viewport-desktop';
  }
  document.querySelectorAll('.viewport-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-viewport') === 'desktop');
  });

  if (loading) loading.style.display = 'flex';

  if (iframe) {
    iframe.src = project.liveUrl;
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeInteractivePreview() {
  const modal = document.getElementById('interactivePreviewModal');
  const iframe = document.getElementById('previewIframe');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (iframe) {
    iframe.src = 'about:blank';
  }
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
      ${study.liveUrl ? `
        <button class="btn btn-primary" onclick="closeCaseStudyModal(); openInteractivePreview('${study.id}');">
          <span>🎮 Launch Interactive Sandbox</span>
        </button>
        <a href="${study.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>Launch App ↗</span>
        </a>
      ` : ''}
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
