// Frontend JavaScript for Rujisaya Kuekool Portfolio
// Dynamic Data Integration from MongoDB Atlas API

let allCaseStudies = [...FALLBACK_CASE_STUDIES];

// Resilient Embedded Data Fallback (Ensures projects ALWAYS render immediately)
const FALLBACK_CASE_STUDIES = [
  {
    "id": "leave-wfh-management",
    "projectNum": 1,
    "displayTitle": "Leaya 🐾",
    "fullTitle": "Leaya - All-in-One Employee Management Platform",
    "shortSubtitle": "Empowering enterprise teams with interactive HR SaaS solutions.",
    "category": "enterprise saas & hr tech",
    "filterCategory": "enterprise",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Jan 2026",
    "summary": "ระบบบริหารจัดการวันลาและสลับวัน Work From Home (WFH) สไตล์ Modern SaaS Dashboard รองรับภาษาไทยสมบูรณ์แบบ ออกแบบตามหลัก Role-Based Access Control (RBAC) พร้อมระบบคำนวณสิทธิ์วันลาพักร้อนอัตโนมัติตามอายุงานและสูตร Pro-rate กฎหมายแรงงานไทย",
    "image": "/assets/portfolio/leaya_screenshot_full.png",
    "liveUrl": "https://leave-wfh-management.vercel.app/",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Enterprise SaaS",
      "HR Operations",
      "RBAC Simulation",
      "TypeScript",
      "Tailwind CSS",
      "React 18"
    ],
    "previewCards": [
      {
        "title": "Interactive Dashboard",
        "date": "Jan 2026",
        "image": "/assets/portfolio/leaya_screenshot_full.png",
        "type": "laptop"
      },
      {
        "title": "Attendance & RBAC Matrix",
        "date": "Oct 2025",
        "image": "/assets/portfolio/leave_wfh_screenshot.png",
        "type": "card"
      }
    ],
    "techStack": [
      {
        "name": "React 18",
        "type": "react"
      },
      {
        "name": "Figma",
        "type": "figma"
      },
      {
        "name": "Tailwind CSS",
        "type": "tailwind"
      },
      {
        "name": "TypeScript",
        "type": "typescript"
      }
    ],
    "pillars": [
      {
        "icon": "dashboard",
        "label": "Interactive Dashboard"
      },
      {
        "icon": "users",
        "label": "Seamless HR Flow"
      },
      {
        "icon": "analytics",
        "label": "Team Analytics"
      },
      {
        "icon": "workflows",
        "label": "Automated Workflows"
      }
    ],
    "highlights": [
      {
        "icon": "link",
        "label": "100% Custom Components"
      },
      {
        "icon": "analytics",
        "label": "Interactive Analytics"
      },
      {
        "icon": "database",
        "label": "Complex Data Handling"
      },
      {
        "icon": "uiux",
        "label": "Seamless UI/UX"
      },
      {
        "icon": "security",
        "label": "Secure Data Flow"
      },
      {
        "icon": "templates",
        "label": "30+ Screen Templates"
      }
    ],
    "styleGuide": {
      "headingFont": "Leaya Bold",
      "bodyFont": "Inter",
      "palette": [
        {
          "name": "Warm Cream",
          "hex": "#FAF7F2"
        },
        {
          "name": "Dark Espresso",
          "hex": "#231815"
        },
        {
          "name": "Emerald Green",
          "hex": "#10B981"
        },
        {
          "name": "Accent Blue",
          "hex": "#3B82F6"
        },
        {
          "name": "Muted Slate",
          "hex": "#64748B"
        }
      ]
    },
    "featureZoom": {
      "title": "Automated Pro-rata Thai Labor Vacation Engine",
      "description": "คำนวณโควตาวันลาพักร้อน Year 0 และ Year 1+ อัตโนมัติตามวันเริ่มงานและวันผ่านทดลองงาน พร้อมจำลองสิทธิ์ 3 บทบาท (Employee, Manager, HR Admin)",
      "tags": [
        {
          "label": "Role",
          "value": "End-to-End Product Designer"
        },
        {
          "label": "Target Users",
          "value": "HR, Managers & Hybrid Teams"
        },
        {
          "label": "Key Solution",
          "value": "Pro-rata Vacation & Weekly Matrix"
        }
      ],
      "image": "/assets/portfolio/leaya_screenshot_full.png"
    },
    "multiScreens": [
      {
        "title": "Dashboard Overview",
        "image": "/assets/portfolio/leaya_screenshot_full.png",
        "desc": "Real-time leave balances & attendance status"
      },
      {
        "title": "Team Attendance Matrix",
        "image": "/assets/portfolio/leave_wfh_screenshot.png",
        "desc": "Weekly in-office vs WFH headcount tracker"
      }
    ],
    "role": "End-to-End Product Designer & Front-End Architecture",
    "targetUsers": "พนักงานทั่วไป (ยื่นใบลา/ขอ WFH), หัวหน้าทีม/ผู้จัดการ (คิวอนุมัติ & Team Matrix), ฝ่ายบุคคล/HR (ทะเบียนพนักงาน & คำนวณโควตา)",
    "duration": "Enterprise Project (2025–2026)",
    "designGoal": "Design Goal: ปรับเปลี่ยนกระบวนการลางานและขอสลับวัน WFH ที่ซับซ้อนให้กลายเป็นระบบ 3-Role RBAC Portal ที่เข้าใจง่าย พร้อมคำนวณโควตาพักร้อน Pro-rate ตามกฎหมายแรงงานไทยแบบเรียลไทม์",
    "problem": "การจัดการวันลาและสลับวัน WFH ในองค์กรแบบไฮบริดมักติดปัญหาความคลุมเครือของสูตรคำนวณสิทธิ์พักร้อนตามวันเริ่มงานและวันผ่านโปร รวมถึงความเสี่ยงที่ทีมจะขาดคนในวันจันทร์หรือศุกร์เนื่องจากไม่มีตารางสรุป Headcount เข้าออฟฟิศจริง",
    "responsibilities": "ออกแบบสถาปัตยกรรมข้อมูล (IA), พัฒนาระบบ User Roles (Employee / Manager / HR Super Admin), ออกแบบ Weekly Attendance Matrix และพัฒนาระบบคำนวณสิทธิ์พักร้อนแบบ Pro-rata",
    "uxApproach": "ออกแบบให้มี \"RBAC Simulation Bar\" ด้านบน เพื่อให้ผู้มีส่วนได้ส่วนเสียและผู้ตรวจงานสามารถสลับทดลองสิทธิ์ได้ทันที พร้อม Live Vacation Calculator Preview ในฟอร์มเพิ่มพนักงานใหม่",
    "keyDecisions": "1) RBAC Simulation Switcher: ให้ทดสอบระบบได้ทั้ง 3 มุมมองโดยไม่ต้องล็อกอินหลายบัญชี\n2) Weekly Hybrid Attendance Matrix: สรุปยอดคนเข้าออฟฟิศจริงแต่ละวัน (Daily Headcount) เพื่อป้องกันคนไม่พอ\n3) Thai Labor Law Formula Engine: คำนวณวันลา Year 0 อัตโนมัติ (เช่น ผ่านโปรหลัง 1 ก.ย. ได้สิทธิ์ทันที)",
    "devCollaboration": "พัฒนาด้วย React 18, TypeScript, Tailwind CSS และ Lucide Icons โดยกำหนด Strict TypeScript Interfaces สำหรับสถานะคำขอ (Status Enums) และสูตรการคำนวณเพื่อรองรับการต่อยอดเป็นโปรดักชัน",
    "outcomeLearnings": "สร้างประสบการณ์ใช้งานที่ชัดเจน ลดความผิดพลาดในการคำนวณวันลาของฝ่ายบุคคล และช่วยให้หัวหน้างานตัดสินใจอนุมัติได้อย่างรวดเร็วผ่านข้อมูลที่โปร่งใส",
    "keyFeatures": [
      "ระบบจำลองสิทธิ์ 3 ระดับ (Employee, Manager, HR Admin) สลับมุมมองได้ทันที",
      "ตารางเมทริกซ์ทีมประจำสัปดาห์ (Team Weekly Attendance Matrix) พร้อมสรุปยอด Headcount รายวัน",
      "ระบบคำนวณวันลาพักร้อนอัตโนมัติตามสูตร Pro-rate กฎหมายแรงงานไทย",
      "รองรับการขอสลับวัน WFH แบบจับคู่วันชดเชยเข้าออฟฟิศ และยื่นใบลาป่วย/ลากิจ",
      "Interactive Preview Sandbox: ทดลองสร้างใบลาและทดสอบสิทธิ์ได้แบบ Session-only"
    ]
  },
  {
    "id": "ami-booth-planner",
    "projectNum": 2,
    "displayTitle": "Ami Booth Planner 🎨",
    "fullTitle": "Ami Booth Planner - All-in-One Creator Event Platform",
    "shortSubtitle": "Empowering indie creators & illustrators to organize events, detect date conflicts, and manage booth budgets seamlessly.",
    "category": "creator economy & events",
    "filterCategory": "creator",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Jan 2026",
    "summary": "เว็บแอปพลิเคชันสำหรับนักวาดการ์ตูน ภาพประกอบ ครีเอเตอร์สติกเกอร์ และแบรนด์คราฟต์ ช่วยจัดการทุกขั้นตอนของการออกบูธ ตั้งแต่ค้นพบงาน สมัครงาน ตรวจจับรอบเวลาชนกัน (Conflict Alert) คำนวณงบประมาณ และติดตามตารางงานที่ยืนยันแล้ว",
    "image": "/assets/portfolio/ami_booth_calendar.png",
    "liveUrl": "https://ami-booth-planner.vercel.app/",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Creator Economy",
      "Event Operations",
      "Material UI v6",
      "React 18",
      "MongoDB Atlas",
      "Date Conflict"
    ],
    "previewCards": [
      {
        "title": "Event Schedule & Calendar",
        "date": "Jan 2026",
        "image": "/assets/portfolio/ami_booth_calendar.png",
        "type": "laptop"
      },
      {
        "title": "Date Conflict & Budget Ledger",
        "date": "Oct 2025",
        "image": "/assets/portfolio/ami_booth_screenshot_full.png",
        "type": "card"
      }
    ],
    "techStack": [
      {
        "name": "React 18",
        "type": "react"
      },
      {
        "name": "Figma",
        "type": "figma"
      },
      {
        "name": "Material UI v6",
        "type": "mui"
      },
      {
        "name": "MongoDB Atlas",
        "type": "mongodb"
      }
    ],
    "pillars": [
      {
        "icon": "dashboard",
        "label": "Calendar Conflict Detection"
      },
      {
        "icon": "users",
        "label": "Partial Acceptance Flow"
      },
      {
        "icon": "analytics",
        "label": "Budget Separation"
      },
      {
        "icon": "workflows",
        "label": "Cloud & Demo Sync"
      }
    ],
    "highlights": [
      {
        "icon": "link",
        "label": "100% Custom Components"
      },
      {
        "icon": "analytics",
        "label": "Smart Conflict Alerts"
      },
      {
        "icon": "database",
        "label": "Partial Day Acceptance"
      },
      {
        "icon": "uiux",
        "label": "Pastel Pink Design System"
      },
      {
        "icon": "security",
        "label": "Secure Cloud & Sandbox"
      },
      {
        "icon": "templates",
        "label": "20+ Creator Workflows"
      }
    ],
    "styleGuide": {
      "headingFont": "Ami Display",
      "bodyFont": "Inter",
      "palette": [
        {
          "name": "Blush White",
          "hex": "#FFF0F5"
        },
        {
          "name": "Dark Espresso",
          "hex": "#231815"
        },
        {
          "name": "Pastel Rose",
          "hex": "#FF6B8B"
        },
        {
          "name": "Lilac Purple",
          "hex": "#8B5CF6"
        },
        {
          "name": "Golden Honey",
          "hex": "#F59E0B"
        }
      ]
    },
    "featureZoom": {
      "title": "Smart Date Conflict & Partial Acceptance Engine",
      "description": "ระบบตรวจจับวันสมัคร วันประกาศผล และวันจัดบูธที่ชนกันแบบเรียลไทม์ พร้อมรองรับงานหลายวันที่ได้รับการคัดเลือกเพียงบางวัน โดยคำนวณงบประมาณแยกตามวันที่ยืนยันจริง",
      "tags": [
        {
          "label": "Role",
          "value": "UX/UI Designer & Full-Stack Developer"
        },
        {
          "label": "Target Users",
          "value": "Illustrators, Comic Artists & Craft Brands"
        },
        {
          "label": "Key Solution",
          "value": "Conflict Detection & Budget Ledger"
        }
      ],
      "image": "/assets/portfolio/ami_booth_calendar.png"
    },
    "multiScreens": [
      {
        "title": "Month Grid Calendar",
        "image": "/assets/portfolio/ami_booth_calendar.png",
        "desc": "Visual monthly schedule with status badges"
      },
      {
        "title": "Applications & Conflict View",
        "image": "/assets/portfolio/ami_booth_screenshot_full.png",
        "desc": "Timeline list with overlapping date alerts and budget recalculation"
      }
    ],
    "role": "UX/UI Designer & Full-Stack Developer",
    "targetUsers": "นักวาดภาพประกอบ (Illustrators), นักเขียนการ์ตูน, ศิลปินทำของกุ๊กกิ๊ก/สติกเกอร์ และแบรนด์คราฟต์ขนาดเล็ก",
    "duration": "Creator SaaS Project (2025–2026)",
    "designGoal": "Design Goal: เปลี่ยนการจดตารางบูธในกระดาษและ Excel ที่กระจัดกระจาย ให้กลายเป็นระบบ Dashboard ธีม Pastel Pink ที่มีระบบเตือนรอบเวลาชนกันและคำนวณค่าบูธแยกรายวันได้อย่างแม่นยำ",
    "problem": "ครีเอเตอร์ต้องสมัครงานอีเวนต์หลายสิบงานต่อปี ซึ่งมีทั้งวันเปิดรับสมัคร วันประกาศผล และวันจัดงานที่คาบเกี่ยวกันบ่อยครั้ง โดยเฉพาะงานหลายวันที่อาจได้รับการคัดเลือกเพียง 1 วัน (Partial Acceptance) ทำให้คำนวณค่าใช้จ่ายและวางแผนวันไปออกบูธผิดพลาด",
    "responsibilities": "ทำ User Research กับกลุ่มครีเอเตอร์, ออกแบบ Design System ธีมสี Pastel Pink โดยอ้างอิง Component Patterns จาก Devias Kit Pro, ออกแบบระบบ Smart Date Conflict Algorithm และพัฒนาฟูลสแต็กเชื่อมต่อ MongoDB Atlas",
    "uxApproach": "ออกแบบมุมมองปฏิทิน 2 รูปแบบ (Month Grid & Agenda) แยกสีชัดเจนระหว่างวันสมัคร วันประกาศผล และวันจัดบูธจริง พร้อมแถบแจ้งเตือนเมื่อมีงานชนกัน (Date Conflict Detection)",
    "keyDecisions": "1) Partial Acceptance Support: รองรับผลการสมัครแยกรายวัน โดยระบบจะนับเฉพาะวันที่ได้บูธเข้าปฏิทินจริงและคำนวณค่าบูธตามวันที่ได้รับคัดเลือกเท่านั้น\n2) Budget Separation: แยกค่าบูธค้างชำระ ยอดที่ชำระแล้ว และค่าใช้จ่ายที่อาจเกิดขึ้นจากใบสมัครที่รอผลออกจากกัน ไม่นับซ้ำซ้อน\n3) Preview Demo vs Cloud Auth: ผู้เยี่ยมชมสามารถทดลองสร้างงานในโหมด Demo Sandbox ได้อย่างปลอดภัย โดยระบบจะซิงค์และบันทึกลง MongoDB Atlas เฉพาะเมื่อล็อกอินด้วยอีเมลผู้ดูแล",
    "devCollaboration": "พัฒนาด้วย React 18, Material UI (MUI v6), Emotion, Node.js REST API และ MongoDB Atlas พร้อมระบบ Offline Fallback ด้วย LocalStorage",
    "outcomeLearnings": "ช่วยให้ครีเอเตอร์วางแผนตารางออกบูธล่วงหน้าได้โดยไม่พลาดวันสำคัญ ประหยัดเวลาจัดการใบสมัครได้กว่า 70% และป้องกันปัญหาการจองบูธซ้อนในวันเดียวกัน",
    "keyFeatures": [
      "ระบบตรวจจับรอบเวลาจัดบูธชนกัน (Smart Date Conflict Detection)",
      "ปฏิทินตารางงานแบบ Month Grid และ Agenda แยกสีตามช่วงเวลาสำคัญ",
      "รองรับผลการสมัครแบบ Partial Acceptance แยกรายวันพร้อมคำนวณค่าบูธให้อัตโนมัติ",
      "ระบบบริหารงบประมาณ (Budget Summary) แยกยอดหนี้จริงและยอดที่อาจเกิดขึ้น",
      "ปลอดภัยด้วยระบบ Demo Mode สำหรับคนทั่วไป และ Cloud Sync สำหรับผู้ใช้อีเมลที่ยืนยันแล้ว"
    ]
  }
];

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

// Fetch Profile & Case Studies from API with bulletproof instant render
async function loadPortfolioData() {
  // Always render immediately from initial/fallback data first so the page is NEVER empty!
  if (!allCaseStudies || allCaseStudies.length === 0) {
    allCaseStudies = [...FALLBACK_CASE_STUDIES];
  }
  const featuredStudies = allCaseStudies.filter(s => s.featured);
  renderCaseStudies(featuredStudies.length > 0 ? featuredStudies : allCaseStudies);
  initFilterTabs();
  initProjectsSearch();

  try {
    const res = await fetch('/api/case-studies');
    if (res.ok) {
      const liveData = await res.json();
      if (Array.isArray(liveData) && liveData.length > 0) {
        allCaseStudies = liveData;
        const updatedFeatured = allCaseStudies.filter(s => s.featured);
        renderCaseStudies(updatedFeatured.length > 0 ? updatedFeatured : allCaseStudies);
      }
    }
  } catch (err) {
    console.warn("Could not fetch remote case studies, using embedded data:", err);
  }
}

// Inline SVG Icon Helpers for Bento Grid
function getTechSvg(type) {
  const t = (type || '').toLowerCase();
  if (t.includes('react')) {
    return `<svg class="tech-icon-svg" viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>`;
  }
  if (t.includes('figma')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 38 57" width="18" height="22">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>`;
  }
  if (t.includes('tailwind')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="22" height="22" fill="#06B6D4">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
    </svg>`;
  }
  if (t.includes('typescript') || t.includes('next')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="22" height="22">
      <rect width="24" height="24" rx="4" fill="#3178C6"/>
      <path d="M14.7 18h2.3V8.8h-2.3V18zm-4.4-6.9h-2.7V18H5.3v-6.9H2.6V9.1h7.7v2z" fill="#FFF"/>
    </svg>`;
  }
  if (t.includes('mui') || t.includes('material')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="22" height="22" fill="#007FFF">
      <path d="M0 2.475v10.39l3 1.718V7.32l9.043 5.21v6.945l-3.043-1.743v-3.486L0 20.81V24l12-6.953 12 6.953v-3.19l-9-5.244v3.486l-3 1.743v-6.945L21 7.32v7.263l3-1.718V2.475L12 9.42 0 2.475z"/>
    </svg>`;
  }
  if (t.includes('mongo')) {
    return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="22" height="22">
      <path d="M12.003 0s-.462.454-.787 1.096C9.206 5.093 5.5 8.995 5.5 13.985c0 4.167 3.018 7.64 6.503 8.015.422.046.85.068 1.28.068.51 0 1.018-.031 1.516-.09 3.256-.39 5.701-3.69 5.701-7.993 0-5.185-3.876-9.141-5.787-12.889-.325-.642-.713-1.096-.713-1.096z" fill="#47A248"/>
      <path d="M12.003 1.5v19.5c.34-.05.67-.13.99-.25 2.87-.99 4.51-4.04 4.51-7.25 0-4.66-3.37-8.15-5.5-12z" fill="#499D4A"/>
    </svg>`;
  }
  return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#231815" stroke-width="2">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>`;
}

function getPillarSvg(icon) {
  const i = (icon || '').toLowerCase();
  if (i.includes('dash') || i.includes('folder')) {
    return `<svg class="pillar-svg" viewBox="0 0 100 82" width="24" height="20" fill="none">
      <path d="M6 14C6 9.58 9.58 6 14 6H38C42 6 45 9 48 13L51 17H86C90.42 17 94 20.58 94 25V35H6V14Z" fill="#589ed9"/>
      <rect x="6" y="24" width="88" height="52" rx="8" fill="#6db4ef"/>
    </svg>`;
  }
  if (i.includes('user') || i.includes('flow') || i.includes('team')) {
    return `<svg class="pillar-svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4DA6FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`;
  }
  if (i.includes('analytic') || i.includes('chart') || i.includes('budget')) {
    return `<svg class="pillar-svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4DA6FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>`;
  }
  return `<svg class="pillar-svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4DA6FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>`;
}

function getHighlightSvg(icon) {
  const i = (icon || '').toLowerCase();
  if (i.includes('link') || i.includes('comp')) {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>`;
  }
  if (i.includes('check') || i.includes('analytic') || i.includes('alert')) {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>`;
  }
  if (i.includes('layer') || i.includes('data')) {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>`;
  }
  if (i.includes('sparkle') || i.includes('ui') || i.includes('design')) {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>`;
  }
  if (i.includes('lock') || i.includes('sec')) {
    return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>`;
}

// Render Projects Showcase Cards (View 1: Bento Grid Product Showcase Directory matching Image 2)
function renderCaseStudies(studies) {
  const container = document.getElementById('caseStudiesContainer');
  if (!container) return;

  const countMeta = document.getElementById('projectsCountMeta');
  if (countMeta) {
    countMeta.textContent = `showing ${studies ? studies.length : 0} of ${allCaseStudies.length} projects`;
  }

  if (!studies || studies.length === 0) {
    container.innerHTML = `<div class="loading-spinner">No projects found for this category.</div>`;
    return;
  }

  container.innerHTML = studies.map((study, idx) => {
    const projNum = study.projectNum || (idx + 1);
    const displayTitle = study.displayTitle || study.title;
    const categoryText = study.category || (study.id === 'ami-booth-planner' ? 'creator economy & events' : 'enterprise saas & hr tech');
    const badgeText = study.badge || 'live interactive';
    const isLive = (study.badgeType === 'live') || badgeText.toLowerCase().includes('live');

    const preview1 = (study.previewCards && study.previewCards[0]) ? study.previewCards[0] : {
      title: "Interactive Dashboard",
      date: study.date || "Jan 2026",
      image: study.image
    };

    const preview2 = (study.previewCards && study.previewCards[1]) ? study.previewCards[1] : {
      title: "System Matrix",
      date: "Oct 2025",
      image: (study.multiScreens && study.multiScreens[1] ? study.multiScreens[1].image : study.image)
    };

    return `
      <article class="bento-project-card" data-id="${study.id}" onclick="openProjectDetail('${study.id}')" role="button" tabindex="0" aria-label="Open ${escapeHtml(study.fullTitle || study.title)} Bento Showcase" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProjectDetail('${study.id}');}">
        <!-- Top Meta Row -->
        <div class="bento-card-top-bar">
          <div class="bento-meta-left">
            <span class="bento-proj-index">project ${projNum}</span>
            <span class="bento-status-pill ${isLive ? 'status-pill-live' : 'status-pill-case'}">
              <span class="status-dot ${isLive ? 'green' : 'purple'}"></span>
              <span>${escapeHtml(badgeText)}</span>
            </span>
          </div>
          <div class="bento-meta-right">
            <span class="bento-category-tag">${escapeHtml(categoryText.toLowerCase())}</span>
          </div>
        </div>

        <!-- Project Title Row -->
        <div class="bento-card-title-row">
          <h3 class="bento-card-title">${escapeHtml(displayTitle)}</h3>
          <span class="bento-open-hint">
            <span>view showcase</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </span>
        </div>

        <!-- Inner Mockup Preview Boxes (2-Column Grid inside the card) -->
        <div class="bento-preview-grid">
          <!-- Box 1: Primary Dashboard Laptop Mockup -->
          <div class="bento-preview-box">
            <div class="mockup-laptop-wrap">
              <div class="mockup-laptop-lid">
                <div class="mockup-laptop-camera"></div>
                <div class="mockup-laptop-screen">
                  <img src="${preview1.image}" alt="${escapeHtml(displayTitle)} Preview 1" loading="lazy">
                </div>
              </div>
              <div class="mockup-laptop-deck">
                <div class="mockup-laptop-notch"></div>
              </div>
            </div>
            <div class="preview-date-badge">${escapeHtml(preview1.date || 'Jan 2026')}</div>
          </div>

          <!-- Box 2: Secondary Perspective Card Mockup -->
          <div class="bento-preview-box">
            <div class="mockup-card-wrap">
              <div class="mockup-floating-window">
                <div class="mockup-window-header">
                  <span class="w-dot red"></span>
                  <span class="w-dot yellow"></span>
                  <span class="w-dot green"></span>
                  <span class="mockup-window-title">${escapeHtml(preview2.title || 'Interactive Screen')}</span>
                </div>
                <div class="mockup-window-body">
                  <img src="${preview2.image}" alt="${escapeHtml(displayTitle)} Preview 2" loading="lazy">
                </div>
              </div>
            </div>
            <div class="preview-date-badge">${escapeHtml(preview2.date || 'Oct 2025')}</div>
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
      applyCurrentFilter();
    });
  });
}

function applyCurrentFilter() {
  const searchInput = document.getElementById('projectSearchInput');
  const q = searchInput ? (searchInput.value || '').toLowerCase().trim() : '';

  let pool = allCaseStudies;
  if (currentFilter === 'enterprise') {
    pool = allCaseStudies.filter(s => s.filterCategory === 'enterprise' || s.id.includes('leave') || s.id.includes('leaya') || (s.category && s.category.toLowerCase().includes('enterprise')));
  } else if (currentFilter === 'creator') {
    pool = allCaseStudies.filter(s => s.filterCategory === 'creator' || s.id.includes('ami') || (s.category && s.category.toLowerCase().includes('creator')));
  }

  if (q) {
    pool = pool.filter(s => {
      const matchTitle = (s.displayTitle || s.title || '').toLowerCase().includes(q);
      const matchCat = (s.category || '').toLowerCase().includes(q);
      const matchSummary = (s.summary || '').toLowerCase().includes(q);
      const matchTags = (s.tags || []).some(t => t.toLowerCase().includes(q));
      return matchTitle || matchCat || matchSummary || matchTags;
    });
  }

  renderCaseStudies(pool);
}

// Real-time Search Box for /projects page
function initProjectsSearch() {
  const searchInput = document.getElementById('projectSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    applyCurrentFilter();
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

// View 2: Project Detail / Showcase View (Bento Grid Layout)
function openProjectDetail(studyId) {
  const study = allCaseStudies.find(s => s.id === studyId);
  if (!study) return;

  lastFocusedElement = document.activeElement;

  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const fullTitle = study.fullTitle || study.title;
  const shortSubtitle = study.shortSubtitle || study.summary;
  const techStack = study.techStack || [
    { name: "React 18", type: "react" },
    { name: "Figma", type: "figma" },
    { name: "Tailwind CSS", type: "tailwind" },
    { name: "TypeScript", type: "typescript" }
  ];

  const pillars = study.pillars || [
    { icon: "dashboard", label: "Interactive Dashboard" },
    { icon: "users", label: "Seamless HR Flow" },
    { icon: "analytics", label: "Team Analytics" },
    { icon: "workflows", label: "Automated Workflows" }
  ];

  const highlights = study.highlights || [
    { icon: "link", label: "100% Custom Components" },
    { icon: "analytics", label: "Interactive Analytics" },
    { icon: "database", label: "Complex Data Handling" },
    { icon: "uiux", label: "Seamless UI/UX" },
    { icon: "security", label: "Secure Data Flow" },
    { icon: "templates", label: "30+ Screen Templates" }
  ];

  const styleGuide = study.styleGuide || {
    headingFont: "Leaya Bold",
    bodyFont: "Inter",
    palette: [
      { name: "Warm Cream", hex: "#FAF7F2" },
      { name: "Dark Espresso", hex: "#231815" },
      { name: "Emerald Green", hex: "#10B981" },
      { name: "Accent Blue", hex: "#3B82F6" },
      { name: "Muted Slate", hex: "#64748B" }
    ]
  };

  const featureZoom = study.featureZoom || {
    title: "Core Feature Spotlight",
    description: study.summary,
    tags: [
      { label: "Role", value: study.role || "End-to-End Product Designer" },
      { label: "Target Users", value: study.targetUsers || "Enterprise Teams" },
      { label: "Key Solution", value: "Workflow Automation & Clear Ergonomics" }
    ],
    image: study.image
  };

  const multiScreens = study.multiScreens || [
    { title: "Dashboard Overview", image: study.image, desc: "Primary interface" },
    { title: "Detail Flow", image: study.image, desc: "Secondary view" }
  ];

  const decisionsHtml = study.keyDecisions ? study.keyDecisions.split('\n').filter(Boolean).map(dec => `
    <li class="bento-decision-item">${escapeHtml(dec)}</li>
  `).join('') : '';

  modalBody.innerHTML = `
    <!-- Top Modal Nav Bar -->
    <div class="bento-top-nav-bar">
      <button class="bento-back-pill" onclick="closeProjectDetail()">
        <span class="back-arrow">←</span>
        <span>Back to Projects</span>
      </button>
      <div class="bento-top-meta-crumb">
        <span>project ${study.projectNum || 1}</span>
        <span class="crumb-divider">•</span>
        <span class="crumb-cat">${escapeHtml(study.category || 'enterprise saas')}</span>
      </div>
      <button class="bento-close-circle" onclick="closeProjectDetail()" aria-label="Close Project Detail">&times;</button>
    </div>

    <!-- Section A: Project Detail Header -->
    <header class="bento-detail-header">
      <div class="bento-header-left">
        <h1 class="bento-detail-title" id="modalTitle">${escapeHtml(fullTitle)}</h1>
        <p class="bento-detail-subtitle">${escapeHtml(shortSubtitle)}</p>
      </div>

      <div class="bento-header-right">
        <!-- Tech Stack Icons (40x40px rounded squares) -->
        <div class="bento-tech-badges-row" aria-label="Technologies used">
          ${techStack.map(t => `
            <div class="tech-icon-badge" title="${escapeHtml(t.name)}">
              ${getTechSvg(t.type || t.name)}
            </div>
          `).join('')}
        </div>

        <!-- CTA Pill Buttons -->
        <div class="bento-cta-pills-row">
          <button class="bento-cta-pill cta-live" onclick="closeProjectDetail(); openInteractivePreview('${study.id}');" aria-label="Open Live Interactive Demo">
            <span class="pill-play-icon">▶</span>
            <span>Live Demo</span>
          </button>
          <a href="${study.githubUrl || 'https://github.com/rujisayak'}" target="_blank" rel="noopener noreferrer" class="bento-cta-pill cta-github" aria-label="View on GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Section B: Row 1: Hero Overview (60%) + Project Highlights (40%) -->
    <div class="bento-row bento-row-hero">
      <!-- Left Card (60% width) - Hero Mockup & Core Features -->
      <div class="bento-card bento-card-hero">
        <div class="bento-hero-mockup-scene">
          <!-- 3D Angled Laptop -->
          <div class="hero-laptop-3d">
            <div class="hero-laptop-lid">
              <div class="hero-laptop-camera"></div>
              <div class="hero-laptop-screen">
                <img src="${study.image}" alt="${escapeHtml(fullTitle)} Main Dashboard" loading="lazy">
              </div>
            </div>
            <div class="hero-laptop-deck">
              <div class="hero-laptop-notch"></div>
            </div>
          </div>

          <!-- 3D Mobile Phone Floating in front -->
          <div class="hero-mobile-3d">
            <div class="hero-mobile-island"></div>
            <div class="hero-mobile-screen">
              <img src="${multiScreens[1] ? multiScreens[1].image : study.image}" alt="${escapeHtml(fullTitle)} Mobile Experience" loading="lazy">
            </div>
            <div class="hero-mobile-bar"></div>
          </div>
        </div>

        <!-- Bottom 2x2 Mini Grid of Key Pillars -->
        <div class="bento-pillars-grid">
          ${pillars.map(p => `
            <div class="bento-pillar-item">
              <span class="pillar-icon-box">${getPillarSvg(p.icon)}</span>
              <span class="pillar-label">${escapeHtml(p.label)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Right Card (40% width) - Project Highlights (6-Box Dark Bento) -->
      <div class="bento-card bento-card-highlights">
        <h3 class="bento-card-title-center">Project Highlights</h3>
        <div class="bento-dark-grid">
          ${highlights.map(h => `
            <div class="dark-bento-box">
              <div class="dark-box-icon">${getHighlightSvg(h.icon)}</div>
              <div class="dark-box-label">${escapeHtml(h.label)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Section C: Row 2: CI / Style Guide & Design System Card (Full Width) -->
    <div class="bento-row bento-row-styleguide">
      <div class="bento-card bento-card-styleguide">
        <div class="styleguide-left">
          <span class="bento-sublabel">Style Guide</span>
          <h2 class="styleguide-font-hero">${escapeHtml(styleGuide.headingFont)}</h2>
          <div class="styleguide-font-body-specimen">
            <span class="body-font-tag">${escapeHtml(styleGuide.bodyFont)}</span>
            <span class="body-font-alphabet">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890</span>
          </div>
        </div>

        <div class="styleguide-right">
          <div class="styleguide-palette-meta">
            <span class="bento-sublabel">Typography &amp; Color System</span>
            <span class="palette-count-tag">${styleGuide.palette.length} Palette Swatches</span>
          </div>
          <div class="bento-color-swatches-row">
            ${styleGuide.palette.map(c => `
              <div class="color-swatch-box" title="${escapeHtml(c.name)} (${c.hex})">
                <div class="color-swatch-circle" style="background-color: ${c.hex}; ${c.hex === '#FFFFFF' || c.hex === '#FAF7F2' || c.hex === '#FFF0F5' ? 'border: 1px solid #E5DEC9;' : ''}"></div>
                <span class="color-hex-label">${escapeHtml(c.hex)}</span>
                <span class="color-name-label">${escapeHtml(c.name)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Section D: Row 3: Deep-Dive Feature Showcase & All Screens Grid -->
    <div class="bento-row bento-row-deepdive">
      <!-- Left Card: Standout Feature Zoom-in -->
      <div class="bento-card bento-card-feature-zoom">
        <div class="zoom-header-block">
          <span class="bento-sublabel">Feature Spotlight</span>
          <h3 class="zoom-feature-title">${escapeHtml(featureZoom.title)}</h3>
          <p class="zoom-feature-desc">${escapeHtml(featureZoom.description)}</p>
        </div>

        <!-- Floating Feature Tags/Pills -->
        <div class="zoom-meta-tags-list">
          ${(featureZoom.tags || []).map(t => `
            <div class="zoom-meta-pill">
              <span class="pill-key">${escapeHtml(t.label)}:</span>
              <span class="pill-value">${escapeHtml(t.value)}</span>
            </div>
          `).join('')}
        </div>

        <!-- UI Window Mockup -->
        <div class="zoom-ui-window">
          <div class="window-nav-bar">
            <div class="window-traffic-dots">
              <span class="w-dot red"></span>
              <span class="w-dot yellow"></span>
              <span class="w-dot green"></span>
            </div>
            <div class="window-address-pill">${escapeHtml(study.liveUrl ? study.liveUrl.replace('https://', '') : 'production.app')}</div>
          </div>
          <div class="window-viewport-wrap">
            <img src="${featureZoom.image || study.image}" alt="${escapeHtml(featureZoom.title)}" loading="lazy">
          </div>
        </div>
      </div>

      <!-- Right Card: Multi-Screen Grid -->
      <div class="bento-card bento-card-screens-grid">
        <div class="screens-header-block">
          <span class="bento-sublabel">Screen Ecosystem</span>
          <h3 class="screens-grid-title">Comprehensive UI Workflows</h3>
          <p class="screens-grid-desc">Consistent component patterns across ${multiScreens.length} responsive interfaces.</p>
        </div>

        <div class="bento-screens-cards-grid">
          ${multiScreens.map((screen, sIdx) => `
            <div class="screen-item-card">
              <div class="screen-img-box">
                <img src="${screen.image}" alt="${escapeHtml(screen.title)}" loading="lazy">
              </div>
              <div class="screen-meta-row">
                <span class="screen-index-badge">0${sIdx + 1}</span>
                <span class="screen-title-text">${escapeHtml(screen.title)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Deep UX Research & Engineering Synergy Accordion -->
    <details class="bento-ux-deepdive-details">
      <summary class="bento-ux-summary">
        <span class="summary-left">
          <span class="summary-icon">📖</span>
          <span class="summary-title">Deep UX Research &amp; Developer Handoff Narrative</span>
        </span>
        <span class="summary-toggle-btn">Read Case Study Story ↓</span>
      </summary>

      <div class="bento-ux-content">
        <!-- Problem -->
        <div class="ux-narrative-block">
          <h4 class="ux-narrative-heading">01 // Problem &amp; Operational Challenges</h4>
          <p class="ux-narrative-text">${escapeHtml(study.problem || study.summary)}</p>
        </div>

        <!-- Responsibilities -->
        ${study.responsibilities ? `
          <div class="ux-narrative-block">
            <h4 class="ux-narrative-heading">02 // Personal Scope &amp; Responsibilities</h4>
            <div class="ux-narrative-callout">${escapeHtml(study.responsibilities)}</div>
          </div>
        ` : ''}

        <!-- Key Decisions -->
        ${decisionsHtml ? `
          <div class="ux-narrative-block">
            <h4 class="ux-narrative-heading">03 // Key UX Decisions &amp; Trade-offs</h4>
            <ul class="ux-decisions-list">${decisionsHtml}</ul>
          </div>
        ` : ''}

        <!-- Dev Collaboration -->
        ${study.devCollaboration ? `
          <div class="ux-narrative-block">
            <h4 class="ux-narrative-heading">04 // Developer Collaboration &amp; State Specifications</h4>
            <div class="ux-narrative-callout dev-callout">
              <strong>Engineering Synergy:</strong> ${escapeHtml(study.devCollaboration)}
            </div>
          </div>
        ` : ''}

        <!-- Outcome -->
        ${study.outcomeLearnings ? `
          <div class="ux-narrative-block">
            <h4 class="ux-narrative-heading">05 // Qualitative Outcomes &amp; Impact</h4>
            <p class="ux-narrative-text">${escapeHtml(study.outcomeLearnings)}</p>
          </div>
        ` : ''}
      </div>
    </details>

    <!-- Bottom Action Bar -->
    <div class="bento-bottom-actions">
      <button class="btn btn-primary" onclick="closeProjectDetail(); openInteractivePreview('${study.id}');">
        <span>▶ Launch Live Interactive Sandbox</span>
      </button>
      ${study.liveUrl ? `
        <a href="${study.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>Open Live Production App ↗</span>
        </a>
      ` : ''}
      <button class="btn btn-secondary" onclick="closeProjectDetail()">
        <span>← Back to All Projects</span>
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const modalContainer = modal.querySelector('.modal-container');
  if (modalContainer) {
    modalContainer.scrollTop = 0;
  }
}

// Alias for backwards compatibility
function openCaseStudyModal(studyId) {
  openProjectDetail(studyId);
}

function closeProjectDetail() {
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

function closeCaseStudyModal() {
  closeProjectDetail();
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
