/**
 * PORTFOLIO CMS — ADMIN DASHBOARD JAVASCRIPT
 * Full single-admin content management with Draft -> Preview -> Publish workflow
 */

let activeTab = 'siteSettings';
let currentLoadedData = {};
let allProjects = [];
let currentProject = null;
let allActivities = [];

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('cmsToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `cms-toast cms-toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// AUTHENTICATION & SESSION
// ==========================================================================
async function checkAuthSession() {
  try {
    const res = await fetch('/api/admin/me');
    if (res.ok) {
      const data = await res.json();
      if (data.authenticated) {
        showAdminApp(data.user);
        return;
      }
    }
  } catch (err) {
    console.warn("Auth check error:", err);
  }
  showLoginScreen();
}

function showLoginScreen() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminApp').style.display = 'none';
}

function showAdminApp(user) {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminApp').style.display = 'flex';
  if (user && user.username) {
    document.getElementById('cmsAdminUserLabel').textContent = user.username;
  }
  initTab(activeTab);
}

// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const errBox = document.getElementById('loginError');
  const btn = document.getElementById('loginSubmitBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnSpinner = btn.querySelector('.btn-spinner');

  errBox.style.display = 'none';
  btn.disabled = true;
  btnText.style.display = 'none';
  btnSpinner.style.display = 'inline';

  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      showToast('Authenticated successfully! Welcome Toey.', 'success');
      showAdminApp(data.user);
    } else {
      errBox.textContent = data.error || 'Authentication failed. Please check your credentials.';
      errBox.style.display = 'block';
    }
  } catch (err) {
    errBox.textContent = 'Server error during authentication: ' + err.message;
    errBox.style.display = 'block';
  } finally {
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnSpinner.style.display = 'none';
  }
});

// Logout handler
document.getElementById('cmsLogoutBtn')?.addEventListener('click', async () => {
  try {
    await fetch('/api/admin/logout', { method: 'POST' });
  } catch (e) {}
  showToast('Signed out of CMS.', 'info');
  showLoginScreen();
});

// ==========================================================================
// NAVIGATION TABS
// ==========================================================================
const tabTitles = {
  siteSettings: 'Site Settings & SEO',
  hero: 'Hero & Homepage',
  about: 'About & Credentials',
  projects: 'Projects & Showcase',
  resume: 'Resume Deck',
  activities: 'Activities (Corkboard)',
  contact: 'Contact Information',
  media: 'Media Library',
  revisions: 'Revision History',
  sync: 'Export & Sync Fallback'
};

document.querySelectorAll('.cms-nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    switchTab(tab);
  });
});

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.cms-nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  document.querySelectorAll('.cms-panel').forEach(p => {
    p.classList.toggle('active', p.id === `panel-${tab}`);
  });

  const titleHeader = document.getElementById('cmsCurrentTabTitle');
  if (titleHeader) titleHeader.textContent = tabTitles[tab] || 'Content Management';

  // Update preview link target based on tab
  const previewBtn = document.getElementById('cmsBtnPreview');
  if (previewBtn) {
    if (tab === 'projects' && currentProject) {
      previewBtn.href = `/projects/${currentProject.id}?preview=true`;
    } else {
      previewBtn.href = `/?preview=true`;
    }
  }

  // Toggle topbar action buttons visibility for non-content tabs
  const topbarActions = document.querySelector('.cms-topbar-actions');
  if (topbarActions) {
    const isContentSection = ['siteSettings', 'hero', 'about', 'projects', 'resume', 'contact'].includes(tab);
    topbarActions.style.display = isContentSection ? 'flex' : 'none';
  }

  initTab(tab);
}

async function initTab(tab) {
  if (['siteSettings', 'hero', 'about', 'resume', 'contact'].includes(tab)) {
    await loadSectionContent(tab);
  } else if (tab === 'projects') {
    await loadProjectsList();
  } else if (tab === 'activities') {
    await loadActivitiesList();
  } else if (tab === 'media') {
    await loadMediaLibrary();
  } else if (tab === 'revisions') {
    await loadRevisionsList();
  } else if (tab === 'sync') {
    await checkSystemSyncStatus();
  }
}

// Status badge helper
function setStatusBadge(isDirty) {
  const badge = document.getElementById('cmsDraftBadge');
  if (!badge) return;
  if (isDirty) {
    badge.className = 'cms-status-badge cms-status-dirty';
    badge.textContent = '● Draft Unsaved or Unpublished';
  } else {
    badge.className = 'cms-status-badge cms-status-clean';
    badge.textContent = '✓ In Sync with Published';
  }
}

// ==========================================================================
// SECTION CONTENT MANAGEMENT (Settings, Hero, About, Resume, Contact)
// ==========================================================================
async function loadSectionContent(section) {
  try {
    const res = await fetch(`/api/admin/content/${section}`);
    if (!res.ok) throw new Error('Failed to fetch section data');
    const data = await res.json();
    currentLoadedData[section] = data;

    // Use draft if present, else published
    const draft = data.draft || data.published || {};

    if (section === 'siteSettings') {
      populateSiteSettings(draft);
    } else if (section === 'hero') {
      populateHero(draft);
    } else if (section === 'about') {
      populateAbout(draft);
    } else if (section === 'resume') {
      populateResume(draft);
    } else if (section === 'contact') {
      populateContact(draft);
    }

    setStatusBadge(false);
  } catch (err) {
    showToast(`Error loading ${section}: ${err.message}`, 'error');
  }
}

function getVal(v, fallback = '') {
  if (v === null || v === undefined) return fallback;
  if (typeof v === 'string') return v;
  if (typeof v === 'object') return v.en || v.th || fallback;
  return String(v);
}

// 1. Site Settings Populate
function populateSiteSettings(d) {
  document.getElementById('settings-primaryColor').value = d.primaryColor || '#231815';
  document.getElementById('settings-primaryColorText').value = d.primaryColor || '#231815';
  document.getElementById('settings-title').value = getVal(d.siteTitle);
  document.getElementById('settings-desc').value = getVal(d.metaDescription);
  document.getElementById('settings-favicon').value = d.favicon || '';
  document.getElementById('settings-ogImage').value = d.ogImage || '';
}

function collectSiteSettings() {
  const title = document.getElementById('settings-title').value;
  const desc = document.getElementById('settings-desc').value;
  return {
    primaryColor: document.getElementById('settings-primaryColor').value,
    siteTitle: { en: title, th: title },
    metaDescription: { en: desc, th: desc },
    favicon: document.getElementById('settings-favicon').value,
    ogImage: document.getElementById('settings-ogImage').value
  };
}

// 2. Hero Populate
function populateHero(d) {
  document.getElementById('hero-cursiveScript').value = d.cursiveScript || 'UX UI';
  document.getElementById('hero-chunkyTitle').value = d.chunkyTitle || 'portfolio';
  document.getElementById('hero-year').value = getVal(d.yearLabel, 'by Toeyruji');
  document.getElementById('hero-bio').value = getVal(d.bioLead);

  // Stats
  const statsWrap = document.getElementById('heroStatsContainer');
  statsWrap.innerHTML = '';
  const stats = Array.isArray(d.stats) ? d.stats : [];
  stats.forEach((s) => {
    const row = document.createElement('div');
    row.className = 'mb-2';
    row.innerHTML = `<input type="text" class="cms-input hero-stat" value="${escapeHtml(getVal(s))}" placeholder="Stat highlight">`;
    statsWrap.appendChild(row);
  });

  // Mini links
  const linksWrap = document.getElementById('heroMiniLinksContainer');
  linksWrap.innerHTML = '';
  const links = Array.isArray(d.miniLinks) ? d.miniLinks : [];
  links.forEach((l) => {
    const row = document.createElement('div');
    row.className = 'mb-2';
    row.innerHTML = `<input type="text" class="cms-input hero-link" value="${escapeHtml(getVal(l))}" placeholder="Mini Link label">`;
    linksWrap.appendChild(row);
  });
}

function collectHero() {
  const stats = [];
  document.querySelectorAll('#heroStatsContainer .hero-stat').forEach(input => {
    const val = input.value;
    stats.push({ en: val, th: val });
  });

  const miniLinks = [];
  document.querySelectorAll('#heroMiniLinksContainer .hero-link').forEach(input => {
    const val = input.value;
    miniLinks.push({ en: val, th: val });
  });

  const year = document.getElementById('hero-year').value;
  const bio = document.getElementById('hero-bio').value;

  return {
    cursiveScript: document.getElementById('hero-cursiveScript').value,
    chunkyTitle: document.getElementById('hero-chunkyTitle').value,
    yearLabel: { en: year, th: year },
    bioLead: { en: bio, th: bio },
    stats,
    miniLinks,
    ctaButtons: currentLoadedData.hero?.draft?.ctaButtons || [
      { en: "explore projects", th: "สำรวจผลงาน", url: "#projects", type: "primary" },
      { en: "download resume (pdf)", th: "ดาวน์โหลดเรซูเม่ (PDF)", url: "/Rujisaya Resume.pdf", type: "secondary" }
    ]
  };
}

// 3. About Populate
function populateAbout(d) {
  document.getElementById('about-avatar').value = d.avatar || '/assets/avatar_square.png';
  document.getElementById('aboutAvatarPreview').src = d.avatar || '/assets/avatar_square.png';
  document.getElementById('about-greeting').value = getVal(d.greeting, "Hi, I'm Toey!");
  document.getElementById('about-bio').value = getVal(d.bioParagraph);

  // Specialties
  const specWrap = document.getElementById('aboutSpecialtiesContainer');
  specWrap.innerHTML = '';
  (d.specialties || []).forEach(s => {
    const box = document.createElement('div');
    box.className = 'cms-bilingual-box mb-2';
    box.innerHTML = `
      <div class="mb-2">
        <input type="text" class="cms-input spec-title font-bold" value="${escapeHtml(getVal(s.title))}" placeholder="Specialty Title">
      </div>
      <div>
        <textarea class="cms-textarea spec-desc" rows="2" placeholder="Specialty Description">${escapeHtml(getVal(s.desc))}</textarea>
      </div>
    `;
    specWrap.appendChild(box);
  });

  // Experience
  renderAboutExperience(d.experience || []);

  // Skills
  const skillsWrap = document.getElementById('aboutSkillsContainer');
  skillsWrap.innerHTML = '';
  (d.skills || []).forEach(sk => {
    const row = document.createElement('div');
    row.className = 'mb-2';
    row.innerHTML = `<input type="text" class="cms-input skill-item" value="${escapeHtml(getVal(sk))}" placeholder="Skill">`;
    skillsWrap.appendChild(row);
  });
}

function renderAboutExperience(expList) {
  const expWrap = document.getElementById('aboutExperienceContainer');
  expWrap.innerHTML = '';
  expList.forEach((e) => {
    const row = document.createElement('div');
    row.className = 'cms-bilingual-box exp-row mb-2';
    row.innerHTML = `
      <div class="cms-grid-2 mb-2">
        <input type="text" class="cms-input exp-period" value="${escapeHtml(getVal(e.period))}" placeholder="Period (e.g. 2023 — Present)">
        <input type="text" class="cms-input exp-role font-bold" value="${escapeHtml(getVal(e.role))}" placeholder="Role & Company">
      </div>
      <button type="button" class="cms-btn-xs cms-btn-danger mt-1" onclick="this.closest('.exp-row').remove()">Remove</button>
    `;
    expWrap.appendChild(row);
  });
}

document.getElementById('aboutBtnAddExp')?.addEventListener('click', () => {
  const expWrap = document.getElementById('aboutExperienceContainer');
  const row = document.createElement('div');
  row.className = 'cms-bilingual-box exp-row mb-2';
  row.innerHTML = `
    <div class="cms-grid-2 mb-2">
      <input type="text" class="cms-input exp-period" placeholder="Period (e.g. 2024 — Present)">
      <input type="text" class="cms-input exp-role font-bold" placeholder="Role & Company">
    </div>
    <button type="button" class="cms-btn-xs cms-btn-danger mt-1" onclick="this.closest('.exp-row').remove()">Remove</button>
  `;
  expWrap.appendChild(row);
});

function collectAbout() {
  const specialties = [];
  document.querySelectorAll('#aboutSpecialtiesContainer .cms-bilingual-box').forEach(box => {
    const title = box.querySelector('.spec-title').value;
    const desc = box.querySelector('.spec-desc').value;
    specialties.push({
      title: { en: title, th: title },
      desc: { en: desc, th: desc }
    });
  });

  const experience = [];
  document.querySelectorAll('#aboutExperienceContainer .exp-row').forEach(row => {
    const period = row.querySelector('.exp-period').value;
    const role = row.querySelector('.exp-role').value;
    experience.push({
      period: { en: period, th: period },
      role: { en: role, th: role }
    });
  });

  const skills = [];
  document.querySelectorAll('#aboutSkillsContainer .skill-item').forEach(input => {
    const val = input.value;
    skills.push({ en: val, th: val });
  });

  const greeting = document.getElementById('about-greeting').value;
  const bio = document.getElementById('about-bio').value;

  return {
    avatar: document.getElementById('about-avatar').value,
    greeting: { en: greeting, th: greeting },
    bioParagraph: { en: bio, th: bio },
    specialties,
    experience,
    skills
  };
}

// 4. Resume Populate
function populateResume(d) {
  document.getElementById('resume-pdf-url').value = d.resumePdfUrl || '/Rujisaya Resume.pdf';
  document.getElementById('resume-deck-url').value = d.portfolioPdfUrl || '/PortfolioRujisaya.pdf';
  document.getElementById('resume-title').value = getVal(d.title, 'Resume & Portfolio Deck');
  document.getElementById('resume-desc').value = getVal(d.description);

  const checkWrap = document.getElementById('resumeChecklistContainer');
  checkWrap.innerHTML = '';
  (d.checklists || []).forEach(c => {
    const row = document.createElement('div');
    row.className = 'mb-2';
    row.innerHTML = `<input type="text" class="cms-input check-item" value="${escapeHtml(getVal(c))}" placeholder="Credential point">`;
    checkWrap.appendChild(row);
  });
}

function collectResume() {
  const checklists = [];
  document.querySelectorAll('#resumeChecklistContainer .check-item').forEach(input => {
    const val = input.value;
    checklists.push({ en: val, th: val });
  });

  const title = document.getElementById('resume-title').value;
  const desc = document.getElementById('resume-desc').value;

  return {
    pretitle: { en: "CREDENTIALS", th: "CREDENTIALS" },
    title: { en: title, th: title },
    description: { en: desc, th: desc },
    resumePdfUrl: document.getElementById('resume-pdf-url').value,
    portfolioPdfUrl: document.getElementById('resume-deck-url').value,
    previewImage: "/assets/resume_preview.png",
    checklists
  };
}

// 5. Contact Populate
function populateContact(d) {
  document.getElementById('contact-email').value = d.email || 'rujisaya1002@gmail.com';
  document.getElementById('contact-phone').value = d.phone || '(+66) 85 472 2195';
  document.getElementById('contact-line').value = d.lineId || 'baitoeyrujisaya';
  document.getElementById('contact-loc').value = getVal(d.location, 'Bangkok, Thailand (On-site / Remote / Hybrid)');
  document.getElementById('contact-sub').value = getVal(d.subtitle);
}

function collectContact() {
  const loc = document.getElementById('contact-loc').value;
  const sub = document.getElementById('contact-sub').value;
  return {
    pretitle: { en: "DIRECT INQUIRIES // GET IN TOUCH", th: "DIRECT INQUIRIES // GET IN TOUCH" },
    title: { en: "Let's Connect", th: "Let's Connect" },
    subtitle: { en: sub, th: sub },
    email: document.getElementById('contact-email').value,
    phone: document.getElementById('contact-phone').value,
    lineId: document.getElementById('contact-line').value,
    location: { en: loc, th: loc },
    socialLinks: [
      { label: "GitHub", url: "https://github.com/rujisayak" }
    ]
  };
}

// ==========================================================================
// SAVE DRAFT & PUBLISH (Top Action Bar)
// ==========================================================================
document.getElementById('cmsBtnSaveDraft')?.addEventListener('click', async () => {
  if (['siteSettings', 'hero', 'about', 'resume', 'contact'].includes(activeTab)) {
    await saveSectionDraft(activeTab);
  } else if (activeTab === 'projects') {
    await saveCurrentProjectDraft();
  }
});

document.getElementById('cmsBtnPublish')?.addEventListener('click', async () => {
  const btn = document.getElementById('cmsBtnPublish');
  const origText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = 'Publishing...';
  try {
    if (['siteSettings', 'hero', 'about', 'resume', 'contact'].includes(activeTab)) {
      const saved = await saveSectionDraft(activeTab, true);
      if (saved) {
        await publishSection(activeTab);
      }
    } else if (activeTab === 'projects') {
      const saved = await saveCurrentProjectDraft(true);
      if (saved) {
        await publishCurrentProject();
      }
    }
  } finally {
    btn.disabled = false;
    btn.innerHTML = origText;
  }
});

async function saveSectionDraft(section, silent = false) {
  let draftData = null;
  if (section === 'siteSettings') draftData = collectSiteSettings();
  else if (section === 'hero') draftData = collectHero();
  else if (section === 'about') draftData = collectAbout();
  else if (section === 'resume') draftData = collectResume();
  else if (section === 'contact') draftData = collectContact();

  if (!draftData) return false;

  try {
    const res = await fetch(`/api/admin/content/${section}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(draftData)
    });
    const data = await res.json();
    if (res.ok && data.success) {
      if (!silent) showToast(`Draft for ${tabTitles[section]} saved!`, 'success');
      setStatusBadge(true);
      return true;
    } else {
      showToast(data.error || 'Failed to save draft', 'error');
      return false;
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
    return false;
  }
}

async function publishSection(section) {
  const note = `Update ${tabTitles[section] || section} content`;
  try {
    const res = await fetch(`/api/admin/content/${section}/publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(`Successfully published ${tabTitles[section]} (v${data.version})! Changes are now live.`, 'success');
      setStatusBadge(false);
      await loadSectionContent(section);
    } else {
      showToast(data.error || 'Failed to publish section', 'error');
    }
  } catch (err) {
    showToast(`Publish error: ${err.message}`, 'error');
  }
}

// ==========================================================================
// PROJECTS & CASE STUDIES MANAGEMENT
// ==========================================================================
async function loadProjectsList() {
  try {
    const res = await fetch('/api/admin/projects');
    if (!res.ok) throw new Error('Failed to load projects');
    allProjects = await res.json();

    const selector = document.getElementById('projectSelector');
    selector.innerHTML = '';
    allProjects.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${getVal(p.displayTitle, p.id)} [${p.status || 'published'}]`;
      selector.appendChild(opt);
    });

    if (allProjects.length > 0) {
      currentProject = allProjects[0];
      populateProjectForm(currentProject);
    }

    selector.onchange = () => {
      const selId = selector.value;
      currentProject = allProjects.find(p => p.id === selId);
      if (currentProject) populateProjectForm(currentProject);
    };
  } catch (err) {
    showToast(`Projects load error: ${err.message}`, 'error');
  }
}

function populateProjectForm(p) {
  const d = p.draft || p;
  document.getElementById('currentProjectTitleHeader').textContent = getVal(d.displayTitle, d.id);
  document.getElementById('projectStatusBadge').textContent = `● Status: ${(p.status || 'published').toUpperCase()}`;
  document.getElementById('projectStatusBadge').className = p.status === 'draft' ? 'cms-status-badge cms-status-dirty' : 'cms-status-badge cms-status-clean';

  document.getElementById('proj-id').value = d.id || '';
  document.getElementById('proj-num').value = d.projectNum || 1;
  document.getElementById('proj-featured').value = d.featured ? 'true' : 'false';
  document.getElementById('proj-liveUrl').value = d.liveUrl || '';
  document.getElementById('proj-githubUrl').value = d.githubUrl || '';
  document.getElementById('proj-image').value = d.image || '';
  document.getElementById('proj-mobileImage').value = d.mobileImage || d.mobileScreen || '';
  document.getElementById('proj-tags').value = Array.isArray(d.tags) ? d.tags.join(', ') : '';
  document.getElementById('proj-summary').value = getVal(d.summary);

  // Bento Card Config
  const bentoScreens = d.multiScreens || [];
  document.getElementById('proj-bento-screen0-img').value = bentoScreens[0]?.image || '';
  document.getElementById('proj-bento-screen1-img').value = bentoScreens[1]?.image || '';
  document.getElementById('proj-bento-screen2-img').value = bentoScreens[2]?.image || '';
  document.getElementById('proj-bento-watermark').value = d.featureZoom?.watermark || 'SMART ENGINE';
  document.getElementById('proj-bento-zoom-img').value = d.featureZoom?.image || '';
  document.getElementById('proj-bento-brandColor').value = d.brandColor || '#4DA6FF';

  // 5-part narrative (Prefer English)
  document.getElementById('proj-summary').value = d.summary_en || getVal(d.summary) || d.summary_th || '';
  document.getElementById('proj-narrative-problem').value = d.problem_en || getVal(d.problem) || d.problem_th || '';
  document.getElementById('proj-narrative-resp').value = d.responsibilities_en || getVal(d.responsibilities) || d.responsibilities_th || '';
  document.getElementById('proj-narrative-approach').value = d.uxApproach_en || getVal(d.uxApproach) || d.uxApproach_th || '';
  document.getElementById('proj-narrative-decisions').value = d.keyDecisions_en || getVal(d.keyDecisions) || d.keyDecisions_th || '';
  document.getElementById('proj-narrative-collab').value = d.devCollaboration_en || getVal(d.devCollaboration) || d.devCollaboration_th || '';

  // Update preview button URL
  const previewBtn = document.getElementById('cmsBtnPreview');
  if (previewBtn) previewBtn.href = `/projects/${d.id}?preview=true`;
}

function collectProjectForm() {
  const tagsStr = document.getElementById('proj-tags').value;
  const tags = tagsStr.split(',').map(s => s.trim()).filter(Boolean);
  const existing = currentProject ? (currentProject.draft || currentProject) : {};

  const summary = document.getElementById('proj-summary').value;
  const problem = document.getElementById('proj-narrative-problem').value;
  const resp = document.getElementById('proj-narrative-resp').value;
  const approach = document.getElementById('proj-narrative-approach').value;
  const decisions = document.getElementById('proj-narrative-decisions').value;
  const collab = document.getElementById('proj-narrative-collab').value;

  return {
    ...existing,
    id: document.getElementById('proj-id').value.trim(),
    projectNum: Number(document.getElementById('proj-num').value) || 1,
    featured: document.getElementById('proj-featured').value === 'true',
    liveUrl: document.getElementById('proj-liveUrl').value,
    githubUrl: document.getElementById('proj-githubUrl').value,
    image: document.getElementById('proj-image').value,
    mobileImage: document.getElementById('proj-mobileImage').value,
    mobileScreen: document.getElementById('proj-mobileImage').value,
    tags,
    summary,
    summary_th: summary,
    summary_en: summary,
    multiScreens: [
      { title: "Screen 1", image: document.getElementById('proj-bento-screen0-img').value },
      { title: "Screen 2", image: document.getElementById('proj-bento-screen1-img').value },
      { title: "Screen 3", image: document.getElementById('proj-bento-screen2-img').value }
    ],
    featureZoom: {
      watermark: document.getElementById('proj-bento-watermark').value,
      image: document.getElementById('proj-bento-zoom-img').value
    },
    brandColor: document.getElementById('proj-bento-brandColor').value,
    problem,
    problem_th: problem,
    problem_en: problem,
    responsibilities: resp,
    responsibilities_th: resp,
    responsibilities_en: resp,
    uxApproach: approach,
    uxApproach_th: approach,
    uxApproach_en: approach,
    keyDecisions: decisions,
    keyDecisions_th: decisions,
    keyDecisions_en: decisions,
    devCollaboration: collab,
    devCollaboration_th: collab,
    devCollaboration_en: collab
  };
}

async function saveCurrentProjectDraft(silent = false) {
  if (!currentProject) return false;
  const draftData = collectProjectForm();

  try {
    const res = await fetch(`/api/admin/projects/${currentProject.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(draftData)
    });
    const data = await res.json();
    if (res.ok && data.success) {
      if (!silent) showToast(`Draft for project "${currentProject.id}" saved!`, 'success');
      currentProject.draft = draftData;
      return true;
    } else {
      showToast(data.error || 'Failed to save project draft', 'error');
      return false;
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
    return false;
  }
}

async function publishCurrentProject() {
  if (!currentProject) return;
  const note = `Publish ${currentProject.id}`;

  try {
    const res = await fetch(`/api/admin/projects/${currentProject.id}/publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(`Project "${currentProject.id}" published successfully! Changes are now live.`, 'success');
      await loadProjectsList();
    } else {
      showToast(data.error || 'Failed to publish project', 'error');
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  }
}

document.getElementById('btnNewProject')?.addEventListener('click', async () => {
  const newSlug = prompt('Enter unique project ID/slug (e.g. smart-threat-portal):');
  if (!newSlug) return;
  const cleanSlug = newSlug.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-');

  const newProj = {
    id: cleanSlug,
    slug: cleanSlug,
    projectNum: allProjects.length + 1,
    displayTitle_en: 'New Project Title',
    displayTitle_th: 'ชื่อโปรเจกต์ใหม่',
    status: 'draft'
  };

  try {
    const res = await fetch('/api/admin/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProj)
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(`Created draft project: ${cleanSlug}`, 'success');
      await loadProjectsList();
      document.getElementById('projectSelector').value = cleanSlug;
      currentProject = allProjects.find(p => p.id === cleanSlug);
      if (currentProject) populateProjectForm(currentProject);
    } else {
      showToast(data.error || 'Failed to create project', 'error');
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  }
});

document.getElementById('btnDeleteProject')?.addEventListener('click', async () => {
  if (!currentProject) return;
  if (!confirm(`Are you sure you want to delete project "${currentProject.id}"? This cannot be undone.`)) return;

  try {
    const res = await fetch(`/api/admin/projects/${currentProject.id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(`Project "${currentProject.id}" removed.`, 'info');
      await loadProjectsList();
    } else {
      showToast(data.error || 'Failed to delete project', 'error');
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  }
});

// ==========================================================================
// ACTIVITIES (16 CORKBOARD MOMENTS)
// ==========================================================================
async function loadActivitiesList() {
  try {
    const res = await fetch('/api/admin/activities');
    allActivities = await res.json();
    const wrap = document.getElementById('activitiesListContainer');
    wrap.innerHTML = '';

    allActivities.forEach(act => {
      const d = act.draft || act;
      const card = document.createElement('div');
      card.className = 'cms-bilingual-box';
      card.innerHTML = `
        <div class="cms-grid-2 mb-2">
          <input type="text" class="cms-input font-bold act-title-en" value="${escapeHtml(d.title_en || d.title || '')}" placeholder="Title EN">
          <input type="text" class="cms-input font-bold act-title-th" value="${escapeHtml(d.title_th || d.title || '')}" placeholder="Title TH">
        </div>
        <div class="cms-grid-2 mb-2">
          <input type="text" class="cms-input act-date" value="${escapeHtml(d.date || '')}" placeholder="Date">
          <input type="text" class="cms-input act-img" value="${escapeHtml(d.image || '')}" placeholder="Image URL">
        </div>
        <div class="cms-grid-2">
          <textarea class="cms-textarea act-desc-en" rows="2" placeholder="Caption EN">${escapeHtml(d.description_en || d.description || '')}</textarea>
          <textarea class="cms-textarea act-desc-th" rows="2" placeholder="Caption TH">${escapeHtml(d.description_th || d.description || '')}</textarea>
        </div>
      `;
      wrap.appendChild(card);
    });
  } catch (err) {
    showToast(`Activities load error: ${err.message}`, 'error');
  }
}

document.getElementById('btnPublishActivities')?.addEventListener('click', async () => {
  const btn = document.getElementById('btnPublishActivities');
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Publishing...';
  try {
    const cards = document.querySelectorAll('#activitiesListContainer .cms-bilingual-box');
    const updatedActivities = [];
    cards.forEach((card, idx) => {
      const existing = allActivities[idx] || {};
      updatedActivities.push({
        ...existing,
        id: existing.id || `act-${idx + 1}`,
        title_en: card.querySelector('.act-title-en').value,
        title_th: card.querySelector('.act-title-th').value,
        date: card.querySelector('.act-date').value,
        image: card.querySelector('.act-img').value,
        description_en: card.querySelector('.act-desc-en').value,
        description_th: card.querySelector('.act-desc-th').value
      });
    });

    await fetch('/api/admin/activities', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedActivities)
    });

    const res = await fetch('/api/admin/activities/publish', { method: 'POST' });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast('All 16 activities published successfully! Changes are now live.', 'success');
      await loadActivitiesList();
    } else {
      showToast(data.error || 'Failed to publish activities', 'error');
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = origText;
  }
});

// ==========================================================================
// MEDIA LIBRARY
// ==========================================================================
async function loadMediaLibrary() {
  try {
    const res = await fetch('/api/admin/media');
    const items = await res.json();
    const gallery = document.getElementById('mediaGalleryContainer');
    gallery.innerHTML = '';

    if (!items || items.length === 0) {
      gallery.innerHTML = '<p class="cms-sub-text">No media files uploaded yet.</p>';
      return;
    }

    items.forEach(m => {
      const card = document.createElement('div');
      card.className = 'cms-media-card';
      card.innerHTML = `
        <div class="cms-media-thumb-wrap">
          <img src="${m.url}" alt="${escapeHtml(m.altText?.en || m.filename)}" class="cms-media-thumb" onerror="this.src='/assets/avatar_square.png'">
        </div>
        <div class="cms-media-details">
          <div class="cms-media-name">${escapeHtml(m.originalName || m.filename)}</div>
          <div class="cms-media-meta">${(m.size / 1024).toFixed(1)} KB • ${m.mimeType || 'image'}</div>
          <input type="text" class="cms-media-alt-input" value="${escapeHtml(m.altText?.en || '')}" placeholder="Alt text EN">
          <input type="text" class="cms-media-alt-input" value="${escapeHtml(m.altText?.th || '')}" placeholder="Alt text TH">
          <div class="cms-media-actions">
            <button class="cms-btn-xs" onclick="navigator.clipboard.writeText('${m.url}'); showToast('Copied URL: ${m.url}', 'success');">Copy URL</button>
            <button class="cms-btn-xs cms-btn-danger" onclick="deleteMedia('${m.id}')">Delete</button>
          </div>
        </div>
      `;
      gallery.appendChild(card);
    });
  } catch (err) {
    showToast(`Media error: ${err.message}`, 'error');
  }
}

// Media Dropzone
const dropzone = document.getElementById('mediaDropzone');
const fileInput = document.getElementById('mediaFileInput');

dropzone?.addEventListener('click', () => fileInput?.click());
dropzone?.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});
dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone?.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  if (e.dataTransfer.files?.length > 0) {
    uploadMediaFile(e.dataTransfer.files[0]);
  }
});

fileInput?.addEventListener('change', () => {
  if (fileInput.files?.length > 0) {
    uploadMediaFile(fileInput.files[0]);
  }
});

async function uploadMediaFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('altText_en', file.name);
  formData.append('altText_th', file.name);

  showToast(`Uploading ${file.name}...`, 'info');

  try {
    const res = await fetch('/api/admin/media/upload', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(`Uploaded ${data.media.filename}!`, 'success');
      await loadMediaLibrary();
    } else {
      showToast(data.error || 'Upload failed', 'error');
    }
  } catch (err) {
    showToast(`Upload error: ${err.message}`, 'error');
  }
}

async function deleteMedia(id) {
  if (!confirm(`Delete this media item?`)) return;
  try {
    const res = await fetch(`/api/admin/media/${id}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Media item removed.', 'info');
      await loadMediaLibrary();
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  }
}

// ==========================================================================
// REVISION HISTORY & ROLLBACK
// ==========================================================================
const revFilter = document.getElementById('revisionSectionFilter');
revFilter?.addEventListener('change', () => loadRevisionsList());

async function loadRevisionsList() {
  const section = revFilter?.value || 'hero';
  const tableWrap = document.getElementById('revisionsTableContainer');
  tableWrap.innerHTML = '<p>Loading revision snapshots...</p>';

  try {
    const res = await fetch(`/api/admin/revisions/${section}`);
    const revs = await res.json();

    if (!revs || revs.length === 0) {
      tableWrap.innerHTML = '<p class="cms-sub-text">No previous revisions recorded for this section yet.</p>';
      return;
    }

    let html = `
      <table class="cms-table">
        <thead>
          <tr>
            <th>Version / ID</th>
            <th>Section</th>
            <th>Author</th>
            <th>Release Note</th>
            <th>Published Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    `;

    revs.forEach(r => {
      const dateStr = r.publishedAt ? new Date(r.publishedAt).toLocaleString() : 'N/A';
      html += `
        <tr>
          <td><strong>v${r.version || 1}</strong> <span style="font-size: 0.75rem; color: #888;">(${r.id || ''})</span></td>
          <td>${r.section}</td>
          <td>${r.author || 'admin'}</td>
          <td>${escapeHtml(r.note || 'Published')}</td>
          <td>${dateStr}</td>
          <td>
            <button class="cms-btn cms-btn-outline" style="padding: 4px 10px; font-size: 0.78rem;" onclick="rollbackRevision('${r.section}', '${r.id}')">
              ↩ Rollback to this
            </button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    tableWrap.innerHTML = html;
  } catch (err) {
    tableWrap.innerHTML = `<p class="cms-alert-danger">Error: ${err.message}</p>`;
  }
}

async function rollbackRevision(section, revId) {
  if (!confirm(`Are you sure you want to rollback "${section}" to revision "${revId}"? Current draft and published content will be restored to that snapshot.`)) return;

  try {
    const res = await fetch(`/api/admin/content/${section}/rollback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ revisionId: revId })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(data.message || 'Rollback successful!', 'success');
      await loadRevisionsList();
    } else {
      showToast(data.error || 'Rollback failed', 'error');
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  }
}

// ==========================================================================
// SYSTEM STATUS & STATIC FALLBACK EXPORT
// ==========================================================================
async function checkSystemSyncStatus() {
  try {
    const res = await fetch('/api/health');
    const health = await res.json();
    const statusText = document.getElementById('syncDbStatusText');
    if (statusText) {
      statusText.textContent = health.database === 'connected' ? 'System Status: Connected to MongoDB Atlas' : 'System Status: Resilient Static Fallback Mode (Validated)';
    }
  } catch (e) {}
}

document.getElementById('btnExportFallback')?.addEventListener('click', async () => {
  try {
    showToast('Synchronizing fallback seed files...', 'info');
    const res = await fetch('/api/admin/export-fallback', { method: 'POST' });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast('Static seed files (cmsInitialData.json & seedFallback.json) synchronized successfully!', 'success');
    } else {
      showToast(data.error || 'Sync failed', 'error');
    }
  } catch (err) {
    showToast(`Sync error: ${err.message}`, 'error');
  }
});

document.getElementById('btnDownloadBackupJson')?.addEventListener('click', async () => {
  try {
    const res = await fetch('/api/admin/content/hero');
    // Fetch fallback data
    const resFallback = await fetch('/api/case-studies');
    const projects = await resFallback.json();
    const backupObj = {
      exportedAt: new Date().toISOString(),
      projects,
      system: 'Rujisaya Portfolio CMS Backup'
    };
    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `cms-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('Backup JSON downloaded!', 'success');
  } catch (err) {
    showToast(`Download error: ${err.message}`, 'error');
  }
});

// Helper: Escape HTML strings to prevent XSS
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial Boot
checkAuthSession();
