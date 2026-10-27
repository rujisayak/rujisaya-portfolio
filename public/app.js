// Frontend JavaScript for Rujisaya Kuekool Portfolio
// Dynamic Data Integration from MongoDB Atlas API

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
    "liveUrl": "https://leave-wfh-management.vercel.app/?demo=true",
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
        "title": "Employee & Team Dashboard",
        "image": "/assets/portfolio/leaya_screen_dashboard.png",
        "desc": "Real-time leave balance, WFH quotas and monthly office tracking"
      },
      {
        "title": "Team Attendance Matrix",
        "image": "/assets/portfolio/leaya_screen_matrix.png",
        "desc": "Weekly in-office vs remote team schedule and headcount planning"
      },
      {
        "title": "Vacation Calculation Engine",
        "image": "/assets/portfolio/leaya_screen_rules.png",
        "desc": "Thai labor law pro-rata calculation rules and policy compliance"
      },
      {
        "title": "HR Master Data & Directory",
        "image": "/assets/portfolio/leaya_screen_masterdata.png",
        "desc": "Enterprise employee directory, role permissions and organizational units"
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
    ],
    "mobileImage": "/assets/portfolio/leaya_screen_mobile.png",
    "mobileScreen": "/assets/portfolio/leaya_screen_mobile.png",
    "demoUrl": "https://leave-wfh-management.vercel.app/?demo=true",
    "displayTitle_en": "Leaya 🐾",
    "displayTitle_th": "Leaya 🐾",
    "fullTitle_en": "Leaya - All-in-One Employee Management Platform",
    "fullTitle_th": "Leaya - ระบบบริหารจัดการวันลาและสลับวัน WFH ครบวงจร",
    "shortSubtitle_en": "Empowering enterprise teams with interactive HR SaaS solutions.",
    "shortSubtitle_th": "ยกระดับการทำงานขององค์กรด้วยโซลูชัน HR SaaS ที่ใช้งานง่ายและมีประสิทธิภาพ",
    "category_en": "enterprise saas & hr tech",
    "category_th": "ระบบ Enterprise SaaS & HR",
    "summary_th": "ระบบบริหารจัดการวันลาและสลับวัน Work From Home (WFH) สไตล์ Modern SaaS Dashboard รองรับภาษาไทยสมบูรณ์แบบ ออกแบบตามหลัก Role-Based Access Control (RBAC) พร้อมระบบคำนวณสิทธิ์วันลาพักร้อนอัตโนมัติตามอายุงานและสูตร Pro-rate กฎหมายแรงงานไทย",
    "summary_en": "Modern SaaS employee leave and WFH swap management dashboard supporting Thai labor regulations, designed with Role-Based Access Control (RBAC) and automated pro-rata vacation calculation engines.",
    "targetUsers_th": "พนักงานทั่วไป (ยื่นใบลา/ขอ WFH), หัวหน้าทีม/ผู้จัดการ (คิวอนุมัติ & Team Matrix), ฝ่ายบุคคล/HR (ทะเบียนพนักงาน & คำนวณโควตา)",
    "targetUsers_en": "Employees (submit leave/swap requests), Team Managers (approval queue & attendance matrix), HR Admins (employee directory & vacation quota calculation)",
    "designGoal_th": "Design Goal: ปรับเปลี่ยนกระบวนการลางานและขอสลับวัน WFH ที่ซับซ้อนให้กลายเป็นระบบ 3-Role RBAC Portal ที่เข้าใจง่าย พร้อมคำนวณโควตาพักร้อน Pro-rate ตามกฎหมายแรงงานไทยแบบเรียลไทม์",
    "designGoal_en": "Design Goal: Transform cumbersome manual leave and WFH swap workflows into an intuitive 3-role RBAC portal with real-time Thai labor law pro-rata vacation calculations.",
    "problem_th": "การจัดการวันลาและสลับวัน WFH ในองค์กรแบบไฮบริดมักติดปัญหาความคลุมเครือของสูตรคำนวณสิทธิ์พักร้อนตามวันเริ่มงานและวันผ่านโปร รวมถึงความเสี่ยงที่ทีมจะขาดคนในวันจันทร์หรือศุกร์เนื่องจากไม่มีตารางสรุป Headcount เข้าออฟฟิศจริง",
    "problem_en": "Managing leave and WFH swaps in hybrid organizations frequently suffers from ambiguous pro-rata formulas based on start dates/probation, coupled with headcount shortage risks on peak days (Mondays/Fridays) due to missing real-time office attendance visibility.",
    "responsibilities_th": "ออกแบบสถาปัตยกรรมข้อมูล (IA), พัฒนาระบบ User Roles (Employee / Manager / HR Super Admin), ออกแบบ Weekly Attendance Matrix และพัฒนาระบบคำนวณสิทธิ์พักร้อนแบบ Pro-rata",
    "responsibilities_en": "Designed Information Architecture (IA), developed Role-Based Access Control simulations (Employee / Manager / HR Super Admin), created the Weekly Attendance Matrix, and built the Thai labor law pro-rata calculation engine.",
    "uxApproach_th": "ออกแบบให้มี \"RBAC Simulation Bar\" ด้านบน เพื่อให้ผู้มีส่วนได้ส่วนเสียและผู้ตรวจงานสามารถสลับทดลองสิทธิ์ได้ทันที พร้อม Live Vacation Calculator Preview ในฟอร์มเพิ่มพนักงานใหม่",
    "uxApproach_en": "Integrated an interactive RBAC Simulation Bar at the top to let stakeholders switch permissions instantly, paired with a live vacation calculation preview inside the employee creation modal.",
    "keyDecisions_th": "1) RBAC Simulation Switcher: ให้ทดสอบระบบได้ทั้ง 3 มุมมองโดยไม่ต้องล็อกอินหลายบัญชี\n2) Weekly Hybrid Attendance Matrix: สรุปยอดคนเข้าออฟฟิศจริงแต่ละวัน (Daily Headcount) เพื่อป้องกันคนไม่พอ\n3) Thai Labor Law Formula Engine: คำนวณวันลา Year 0 อัตโนมัติ (เช่น ผ่านโปรหลัง 1 ก.ย. ได้สิทธิ์ทันที)",
    "keyDecisions_en": "1) RBAC Simulation Switcher: Instant testing across 3 roles without relogging.\n2) Weekly Hybrid Attendance Matrix: Daily office headcount summary preventing understaffing.\n3) Thai Labor Law Formula Engine: Automated Year 0 leave quotas based on probation dates.",
    "devCollaboration_th": "พัฒนาด้วย React 18, TypeScript, Tailwind CSS และ Lucide Icons โดยกำหนด Strict TypeScript Interfaces สำหรับสถานะคำขอ (Status Enums) และสูตรการคำนวณเพื่อรองรับการต่อยอดเป็นโปรดักชัน",
    "devCollaboration_en": "Engineered with React 18, TypeScript, Tailwind CSS, and Lucide Icons with strict TypeScript interfaces for request status enums and formula engines for rapid production integration.",
    "outcomeLearnings_th": "สร้างประสบการณ์ใช้งานที่ชัดเจน ลดความผิดพลาดในการคำนวณวันลาของฝ่ายบุคคล และช่วยให้หัวหน้างานตัดสินใจอนุมัติได้อย่างรวดเร็วผ่านข้อมูลที่โปร่งใส",
    "outcomeLearnings_en": "Delivered a frictionless user experience that eliminated manual HR vacation calculation errors and accelerated manager approval workflows through transparent data visualization.",
    "keyFeatures_th": [
      "ระบบจำลองสิทธิ์ 3 ระดับ (Employee, Manager, HR Admin) สลับมุมมองได้ทันที",
      "ตารางเมทริกซ์ทีมประจำสัปดาห์ (Team Weekly Attendance Matrix) พร้อมสรุปยอด Headcount รายวัน",
      "ระบบคำนวณวันลาพักร้อนอัตโนมัติตามสูตร Pro-rate กฎหมายแรงงานไทย",
      "รองรับการขอสลับวัน WFH แบบจับคู่วันชดเชยเข้าออฟฟิศ และยื่นใบลาป่วย/ลากิจ",
      "Interactive Preview Sandbox: ทดลองสร้างใบลาและทดสอบสิทธิ์ได้แบบ Session-only"
    ],
    "keyFeatures_en": [
      "3-Level RBAC simulation (Employee, Manager, HR Admin) with instant view switching",
      "Team Weekly Attendance Matrix with real-time daily headcount tracking",
      "Automated pro-rata vacation calculation engine compliant with Thai labor regulations",
      "WFH day swapping paired with mandatory office compensation day & sick leave requests",
      "Interactive Preview Sandbox: Test leave creation and role permissions safely in session"
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
    "liveUrl": "https://ami-booth-planner.vercel.app/?demo=true",
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
        "title": "Overview Dashboard",
        "image": "/assets/portfolio/ami_screen_dashboard.png",
        "desc": "Visual event dashboard with status badges and quick actions"
      },
      {
        "title": "Month Grid Calendar & Conflict Alerts",
        "image": "/assets/portfolio/ami_screen_calendar.png",
        "desc": "Visual monthly schedule with real-time conflict badges"
      },
      {
        "title": "Booth Applications & Partial Acceptance",
        "image": "/assets/portfolio/ami_screen_applications.png",
        "desc": "Application workflow with partial day acceptance tracking"
      },
      {
        "title": "Event Budget & Fee Ledger",
        "image": "/assets/portfolio/ami_screen_budget.png",
        "desc": "Outstanding booth fees, payment tracking and revenue calculations"
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
    ],
    "mobileImage": "/assets/portfolio/ami_screen_mobile.png",
    "mobileScreen": "/assets/portfolio/ami_screen_mobile.png",
    "demoUrl": "https://ami-booth-planner.vercel.app/?demo=true",
    "displayTitle_en": "Ami Booth Planner 🎨",
    "displayTitle_th": "Ami Booth Planner 🎨",
    "fullTitle_en": "Ami Booth Planner - All-in-One Creator Event Platform",
    "fullTitle_th": "Ami Booth Planner - เว็บแอปจัดการอีเวนต์และออกบูธสำหรับครีเอเตอร์",
    "shortSubtitle_en": "Empowering indie creators & illustrators to organize events, detect date conflicts, and manage booth budgets seamlessly.",
    "shortSubtitle_th": "ช่วยเหลือนักวาดและครีเอเตอร์อิสระในการจัดตารางออกบูธ ตรวจจับวันชน และบริหารงบประมาณอย่างเป็นระบบ",
    "category_en": "creator economy & events",
    "category_th": "ครีเอเตอร์ & การจัดการอีเวนต์",
    "summary_th": "เว็บแอปพลิเคชันสำหรับนักวาดการ์ตูน ภาพประกอบ ครีเอเตอร์สติกเกอร์ และแบรนด์คราฟต์ ช่วยจัดการทุกขั้นตอนของการออกบูธ ตั้งแต่ค้นพบงาน สมัครงาน ตรวจจับรอบเวลาชนกัน (Conflict Alert) คำนวณงบประมาณ และติดตามตารางงานที่ยืนยันแล้ว",
    "summary_en": "Web application for comic artists, illustrators, sticker creators, and craft brands to manage every step of event exhibitions — from event discovery and application tracking to smart conflict alerts and real-time ledger management.",
    "targetUsers_th": "นักวาดภาพประกอบ (Illustrators), นักเขียนการ์ตูน, ศิลปินทำของกุ๊กกิ๊ก/สติกเกอร์ และแบรนด์คราฟต์ขนาดเล็ก",
    "targetUsers_en": "Illustrators, Comic Artists, Sticker Creators, and Indie Craft Brands",
    "designGoal_th": "Design Goal: เปลี่ยนการจดตารางบูธในกระดาษและ Excel ที่กระจัดกระจาย ให้กลายเป็นระบบ Dashboard ธีม Pastel Pink ที่มีระบบเตือนรอบเวลาชนกันและคำนวณค่าบูธแยกรายวันได้อย่างแม่นยำ",
    "designGoal_en": "Design Goal: Transform scattered booth schedules from paper and spreadsheets into an intuitive Pastel Pink dashboard with smart date conflict detection and day-by-day fee calculations.",
    "problem_th": "ครีเอเตอร์ต้องสมัครงานอีเวนต์หลายสิบงานต่อปี ซึ่งมีทั้งวันเปิดรับสมัคร วันประกาศผล และวันจัดงานที่คาบเกี่ยวกันบ่อยครั้ง โดยเฉพาะงานหลายวันที่อาจได้รับการคัดเลือกเพียง 1 วัน (Partial Acceptance) ทำให้คำนวณค่าใช้จ่ายและวางแผนวันไปออกบูธผิดพลาด",
    "problem_en": "Independent artists often apply to multiple concurrent conventions across different organizers with overlapping dates, resulting in double bookings, forfeited non-refundable deposit fees, and scattered budget spreadsheets.",
    "responsibilities_th": "ทำ User Research กับกลุ่มครีเอเตอร์, ออกแบบ Design System ธีมสี Pastel Pink โดยอ้างอิง Component Patterns จาก Devias Kit Pro, ออกแบบระบบ Smart Date Conflict Algorithm และพัฒนาฟูลสแต็กเชื่อมต่อ MongoDB Atlas",
    "responsibilities_en": "Conducted user research with creators, designed Pastel Pink design system with Devias Kit Pro patterns, designed smart date conflict algorithm, and developed full-stack app with MongoDB Atlas.",
    "uxApproach_th": "ออกแบบมุมมองปฏิทิน 2 รูปแบบ (Month Grid & Agenda) แยกสีชัดเจนระหว่างวันสมัคร วันประกาศผล และวันจัดบูธจริง พร้อมแถบแจ้งเตือนเมื่อมีงานชนกัน (Date Conflict Detection)",
    "uxApproach_en": "Crafted Month Grid and Agenda calendar views with color-coded phases (application, result, booth dates) paired with active alert banners for overlapping dates.",
    "keyDecisions_th": "1) Partial Acceptance Support: รองรับผลการสมัครแยกรายวัน โดยระบบจะนับเฉพาะวันที่ได้บูธเข้าปฏิทินจริงและคำนวณค่าบูธตามวันที่ได้รับคัดเลือกเท่านั้น\n2) Budget Separation: แยกค่าบูธค้างชำระ ยอดที่ชำระแล้ว และค่าใช้จ่ายที่อาจเกิดขึ้นจากใบสมัครที่รอผลออกจากกัน ไม่นับซ้ำซ้อน\n3) Preview Demo vs Cloud Auth: ผู้เยี่ยมชมสามารถทดลองสร้างงานในโหมด Demo Sandbox ได้อย่างปลอดภัย โดยระบบจะซิงค์และบันทึกลง MongoDB Atlas เฉพาะเมื่อล็อกอินด้วยอีเมลผู้ดูแล",
    "keyDecisions_en": "1) Partial Acceptance Support: Independent tracking for multi-day events where only specific days are accepted.\n2) Budget Separation: Clear separation between projected application fees and confirmed operational booth expenses.\n3) Preview Demo vs Cloud Auth: Guests can explore the full sandbox safely without database mutations.",
    "devCollaboration_th": "พัฒนาด้วย React 18, Material UI (MUI v6), Emotion, Node.js REST API และ MongoDB Atlas พร้อมระบบ Offline Fallback ด้วย LocalStorage",
    "devCollaboration_en": "Built with React 18, Material UI (MUI v6), Emotion, Node.js REST API, and MongoDB Atlas with offline LocalStorage fallback.",
    "outcomeLearnings_th": "ช่วยให้ครีเอเตอร์วางแผนตารางออกบูธล่วงหน้าได้โดยไม่พลาดวันสำคัญ ประหยัดเวลาจัดการใบสมัครได้กว่า 70% และป้องกันปัญหาการจองบูธซ้อนในวันเดียวกัน",
    "outcomeLearnings_en": "Creators reduced scheduling conflicts to zero, saved over 70% of application planning time, and eliminated double-booking mistakes.",
    "keyFeatures_th": [
      "ระบบตรวจจับรอบเวลาจัดบูธชนกัน (Smart Date Conflict Detection)",
      "ปฏิทินตารางงานแบบ Month Grid และ Agenda แยกสีตามช่วงเวลาสำคัญ",
      "รองรับผลการสมัครแบบ Partial Acceptance แยกรายวันพร้อมคำนวณค่าบูธให้อัตโนมัติ",
      "ระบบบริหารงบประมาณ (Budget Summary) แยกยอดหนี้จริงและยอดที่อาจเกิดขึ้น",
      "ปลอดภัยด้วยระบบ Demo Mode สำหรับคนทั่วไป และ Cloud Sync สำหรับผู้ใช้อีเมลที่ยืนยันแล้ว"
    ],
    "keyFeatures_en": [
      "Smart Date Conflict Detection engine for overlapping convention dates",
      "Visual Month Grid and Agenda calendar color-coded by milestone phases",
      "Partial day acceptance handling with automated pro-rated booth cost calculation",
      "Comprehensive budget ledger separating confirmed debts from pending applications",
      "Sandbox demo mode for visitors with verified cloud sync for administrators"
    ]
  }
];

// Resilient Embedded Activities Data (Ensures Corkboard ALWAYS renders instantly with 0 failure)
const FALLBACK_ACTIVITIES = [
  {
    "id": "act-live-photobooth-strip",
    "order": 1,
    "type": "photobooth-strip",
    "category": "concerts",
    "categoryLabel": "01 // Live Music",
    "title": "Live Stadium Moments",
    "caption": "Electric atmosphere, sea of lightsticks & unforgettable concert memories.",
    "date": "'25 - '26 Tour",
    "accent": "washi-tape",
    "tapeColor": "tape-kraft",
    "rotation": -2,
    "images": [
      "/images/activity/20250222_165920.jpg",
      "/images/activity/20250222_214416.jpg",
      "/images/activity/20260606_231053.jpg"
    ],
    "image": "/images/activity/20250222_214416.jpg",
    "stripLabel": "LIVE STADIUM MOMENTS ● 2025-2026",
    "tag": "Photobooth Strip",
    "posAll": {
      "top": "9%",
      "left": "3%",
      "rotate": -2.5,
      "zIndex": 4
    },
    "posFiltered": {
      "top": "16%",
      "left": "18%",
      "rotate": -2.5,
      "zIndex": 5
    },
    "title_th": "ช่วงเวลาคอนเสิร์ตสดในสเตเดียม",
    "caption_th": "บรรยากาศเปี่ยมพลัง ทะเลแท่งไฟ และความทรงจำคอนเสิร์ตที่ไม่เคยลืม",
    "title_en": "Live Stadium Moments",
    "caption_en": "Electric atmosphere, sea of lightsticks & unforgettable concert memories."
  },
  {
    "id": "act-live-photobooth-print",
    "order": 2,
    "type": "polaroid",
    "category": "concerts",
    "categoryLabel": "01 // Live Music",
    "title": "Concert Photobooth Memories",
    "caption": "Preserved photobooth strip with favorite stage companions 📸",
    "date": "Mar 2025",
    "image": "/images/activity/20250303_193800.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-mint",
    "rotation": 2.5,
    "tag": "Photobooth Print",
    "posAll": {
      "top": "12%",
      "left": "16%",
      "rotate": 4.5,
      "zIndex": 6
    },
    "posFiltered": {
      "top": "14%",
      "left": "38%",
      "rotate": 4,
      "zIndex": 6
    },
    "title_th": "ความทรงจำโฟโต้บูธคอนเสิร์ต",
    "caption_th": "ภาพถ่ายสตริปโฟโต้บูธพร้อมเพื่อนร่วมเชียร์บนสเตจคนโปรด 📸",
    "title_en": "Concert Photobooth Memories",
    "caption_en": "Preserved photobooth strip with favorite stage companions 📸"
  },
  {
    "id": "act-live-merch-seats",
    "order": 3,
    "type": "polaroid",
    "category": "concerts",
    "categoryLabel": "01 // Live Music",
    "title": "Arena Seats & Official Merch",
    "caption": "Cheering slogans, lightsticks & ready for the stage lights 🎫",
    "date": "Mar 2025",
    "image": "/images/activity/20250309_214202.jpg",
    "accent": "red-pushpin",
    "rotation": -1.8,
    "tag": "Concert",
    "posAll": {
      "top": "60%",
      "left": "2%",
      "rotate": -4,
      "zIndex": 8
    },
    "posFiltered": {
      "top": "22%",
      "left": "58%",
      "rotate": -3.5,
      "zIndex": 7
    },
    "title_th": "ที่นั่งอารีน่า & สินค้าออฟฟิเชียล",
    "caption_th": "สโลแกนเชียร์ แท่งไฟ และความพร้อมสู่แสงสปอตไลต์บนเวที 🎫",
    "title_en": "Arena Seats & Official Merch",
    "caption_en": "Cheering slogans, lightsticks & ready for the stage lights 🎫"
  },
  {
    "id": "act-live-tickets",
    "order": 4,
    "type": "polaroid",
    "category": "concerts",
    "categoryLabel": "01 // Live Music",
    "title": "Keepsake Tickets & Wristband",
    "caption": "Physical concert passes, wristbands & artist photocards collected 🎟️",
    "date": "Aug 2025",
    "image": "/images/activity/20250816_171251.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-gold",
    "rotation": 2,
    "tag": "Ticket Stub",
    "posAll": {
      "top": "46%",
      "left": "12%",
      "rotate": 5.5,
      "zIndex": 7
    },
    "posFiltered": {
      "top": "50%",
      "left": "42%",
      "rotate": 3,
      "zIndex": 8
    },
    "title_th": "บัตรคอนเสิร์ต & สายรัดข้อมือของสะสม",
    "caption_th": "บัตรกระดาษของแท้ สายรัดข้อมือ และโฟโต้การ์ดศิลปินที่สะสมไว้ 🎟️",
    "title_en": "Keepsake Tickets & Wristband",
    "caption_en": "Physical concert passes, wristbands & artist photocards collected 🎟️"
  },
  {
    "id": "act-art-desk-setup",
    "order": 5,
    "type": "polaroid",
    "category": "creative",
    "categoryLabel": "02 // Art & Design",
    "title": "Miniature Workspace Art",
    "caption": "Creative workspace, miniature architecture & daily inspiration ✨",
    "date": "Oct 2024",
    "image": "/images/activity/12c8b489-167f-484f-b7aa-6974858e6e99.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-kraft",
    "rotation": 1.8,
    "tag": "Desk Setup",
    "posAll": {
      "top": "65%",
      "left": "20%",
      "rotate": -2,
      "zIndex": 10
    },
    "posFiltered": {
      "top": "48%",
      "left": "30%",
      "rotate": 2.5,
      "zIndex": 7
    },
    "title_th": "ศิลปะโต๊ะทำงานมุมจำลอง",
    "caption_th": "พื้นที่สร้างสรรค์ สถาปัตยกรรมจิ๋ว และแรงบันดาลใจในทุกวัน ✨",
    "title_en": "Miniature Workspace Art",
    "caption_en": "Creative workspace, miniature architecture & daily inspiration ✨"
  },
  {
    "id": "act-art-journal-stickers",
    "order": 6,
    "type": "polaroid",
    "category": "creative",
    "categoryLabel": "02 // Art & Design",
    "title": "Art Journal & Sticker Stash",
    "caption": "Curating colorful sticker sheets, typography & sketch notes 🎨",
    "date": "Dec 2024",
    "image": "/images/activity/20241218_091403.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-rose",
    "rotation": -2.8,
    "tag": "Art Journal",
    "posAll": {
      "top": "9%",
      "left": "28%",
      "rotate": -3.5,
      "zIndex": 5
    },
    "posFiltered": {
      "top": "16%",
      "left": "28%",
      "rotate": -3.5,
      "zIndex": 5
    },
    "title_th": "สมุดบันทึกศิลปะ & คอลเลกชันสติกเกอร์",
    "caption_th": "สะสมแผ่นสติกเกอร์สีสัน งานไทโปกราฟี และภาพสเก็ตช์ไอเดีย 🎨",
    "title_en": "Art Journal & Sticker Stash",
    "caption_en": "Curating colorful sticker sheets, typography & sketch notes 🎨"
  },
  {
    "id": "act-art-neon-exhibition",
    "order": 7,
    "type": "polaroid",
    "category": "creative",
    "categoryLabel": "02 // Art & Design",
    "title": "Immersive Neon Exhibition",
    "caption": "Spatial light installations, sensory gradients & modern visuals 💜",
    "date": "Mar 2025",
    "image": "/images/activity/20250304_231241.jpg",
    "accent": "date-stamp",
    "dateStamp": "'25 03 04",
    "pinType": "silver-pushpin",
    "rotation": 1.5,
    "tag": "Exhibition",
    "posAll": {
      "top": "38%",
      "left": "24%",
      "rotate": 3.5,
      "zIndex": 9
    },
    "posFiltered": {
      "top": "14%",
      "left": "52%",
      "rotate": 3.5,
      "zIndex": 6
    },
    "title_th": "นิทรรศการแสงนีออนเสมือนจริง",
    "caption_th": "งานจัดแสดงแสงไฟ กราเดียนต์ความรู้สึก และมุมมองภาพสมัยใหม่ 💜",
    "title_en": "Immersive Neon Exhibition",
    "caption_en": "Spatial light installations, sensory gradients & modern visuals 💜"
  },
  {
    "id": "act-art-collectibles",
    "order": 8,
    "type": "polaroid",
    "category": "creative",
    "categoryLabel": "02 // Art & Design",
    "title": "Character Toys & Collectibles",
    "caption": "Playful character figurines, blind boxes & stationery haul 🧸",
    "date": "Jun 2026",
    "image": "/images/activity/20260613_103655.jpg",
    "accent": "paperclip",
    "rotation": -2.2,
    "tag": "Collectibles",
    "posAll": {
      "top": "52%",
      "left": "34%",
      "rotate": -4.5,
      "zIndex": 6
    },
    "posFiltered": {
      "top": "46%",
      "left": "50%",
      "rotate": -4,
      "zIndex": 8
    },
    "title_th": "ของเล่นคาแรกเตอร์ & ฟิกเกอร์สะสม",
    "caption_th": "ฟิกเกอร์คาแรกเตอร์สดใส กล่องสุ่ม และเครื่องเขียนน่ารัก 🧸",
    "title_en": "Character Toys & Collectibles",
    "caption_en": "Playful character figurines, blind boxes & stationery haul 🧸"
  },
  {
    "id": "act-life-mirror-fit",
    "order": 9,
    "type": "polaroid",
    "category": "lifestyle",
    "categoryLabel": "03 // Lifestyle & Cafes",
    "title": "Casual Fit Check",
    "caption": "Everyday casual style & city walk mood 🪞",
    "date": "Dec 2024",
    "image": "/images/activity/20241218_124441.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-kraft",
    "rotation": 2.6,
    "tag": "Fit Check",
    "posAll": {
      "top": "10%",
      "left": "42%",
      "rotate": 3,
      "zIndex": 4
    },
    "posFiltered": {
      "top": "14%",
      "left": "20%",
      "rotate": 3,
      "zIndex": 5
    },
    "title_th": "เช็กความพร้อมลุคลำลอง",
    "caption_th": "สไตล์สบายๆ ในวันปกติและบรรยากาศเดินเล่นในเมือง 🪞",
    "title_en": "Casual Fit Check",
    "caption_en": "Everyday casual style & city walk mood 🪞"
  },
  {
    "id": "act-life-cafe-mirror",
    "order": 10,
    "type": "polaroid",
    "category": "lifestyle",
    "categoryLabel": "03 // Lifestyle & Cafes",
    "title": "Afternoon Cafe Hopping",
    "caption": "Finding calm neighborhood corners, warm espresso & friendly air ☕",
    "date": "Dec 2024",
    "image": "/images/activity/20241230_164035.jpg",
    "accent": "yellow-pushpin",
    "rotation": -1.8,
    "tag": "Cafe",
    "posAll": {
      "top": "36%",
      "left": "46%",
      "rotate": -3,
      "zIndex": 8
    },
    "posFiltered": {
      "top": "48%",
      "left": "24%",
      "rotate": -2.5,
      "zIndex": 8
    },
    "title_th": "ฮอปปิ้งคาเฟ่ยามบ่าย",
    "caption_th": "หามุมสงบในย่านโปรด กาแฟเอสเปรสโซ่อุ่นๆ และบรรยากาศเป็นมิตร ☕",
    "title_en": "Afternoon Cafe Hopping",
    "caption_en": "Finding calm neighborhood corners, warm espresso & friendly air ☕"
  },
  {
    "id": "act-life-peace-portrait",
    "order": 11,
    "type": "polaroid",
    "category": "lifestyle",
    "categoryLabel": "03 // Lifestyle & Cafes",
    "title": "Always High Spirits",
    "caption": "Always bringing positive energy, smiles & endless curiosity ✌️",
    "date": "Jan 2025",
    "image": "/images/activity/20250107_114103.jpg",
    "accent": "sticky-note",
    "rotation": 1.2,
    "tag": "Portrait",
    "posAll": {
      "top": "34%",
      "left": "58%",
      "rotate": 5,
      "zIndex": 5
    },
    "posFiltered": {
      "top": "14%",
      "left": "62%",
      "rotate": 4,
      "zIndex": 7
    },
    "title_th": "พลังบวกและรอยยิ้มเสมอ",
    "caption_th": "ส่งต่อพลังงานด้านบวก รอยยิ้ม และความกระตือรือร้นที่ไม่สิ้นสุด ✌️",
    "title_en": "Always High Spirits",
    "caption_en": "Always bringing positive energy, smiles & endless curiosity ✌️"
  },
  {
    "id": "act-life-weekend-smile",
    "order": 12,
    "type": "polaroid",
    "category": "lifestyle",
    "categoryLabel": "03 // Lifestyle & Cafes",
    "title": "Weekend Warmth & Smiles",
    "caption": "Clear weekend sunshine & recharging creative design energy ✨",
    "date": "Feb 2025",
    "image": "/images/activity/20250201_120421.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-mint",
    "rotation": -2.4,
    "tag": "Lifestyle",
    "posAll": {
      "top": "8%",
      "left": "55%",
      "rotate": -4,
      "zIndex": 3
    },
    "posFiltered": {
      "top": "12%",
      "left": "42%",
      "rotate": -3.5,
      "zIndex": 6
    },
    "title_th": "ความอบอุ่นและรอยยิ้มวันหยุด",
    "caption_th": "แสงแดดสดใสในวันหยุดสุดสัปดาห์ เติมพลังให้งานออกแบบ ✨",
    "title_en": "Weekend Warmth & Smiles",
    "caption_en": "Clear weekend sunshine & recharging creative design energy ✨"
  },
  {
    "id": "act-life-japanese-table",
    "order": 13,
    "type": "polaroid",
    "category": "lifestyle",
    "categoryLabel": "03 // Lifestyle & Cafes",
    "title": "Delicious Warm Dinner Spread",
    "caption": "Hearty meal with good friends after a productive week 🍱",
    "date": "Feb 2025",
    "image": "/images/activity/20250221_194859.jpg",
    "accent": "date-stamp",
    "dateStamp": "'25 02 21",
    "pinType": "red-pushpin",
    "rotation": 2.2,
    "tag": "Food & Cafe",
    "posAll": {
      "top": "62%",
      "left": "44%",
      "rotate": 4.5,
      "zIndex": 7
    },
    "posFiltered": {
      "top": "46%",
      "left": "44%",
      "rotate": 3.5,
      "zIndex": 9
    },
    "title_th": "มื้อเย็นแสนอบอุ่นและอร่อย",
    "caption_th": "มื้ออาหารแสนอร่อยร่วมกับเพื่อนสนิทหลังสัปดาห์ทำงานที่เต็มที่ 🍱",
    "title_en": "Delicious Warm Dinner Spread",
    "caption_en": "Hearty meal with good friends after a productive week 🍱"
  },
  {
    "id": "act-life-flower-bouquet",
    "order": 14,
    "type": "polaroid",
    "category": "lifestyle",
    "categoryLabel": "03 // Lifestyle & Cafes",
    "title": "Pastel Bloom Palette",
    "caption": "Fresh flower bouquet & natural color gradient inspiration 💐",
    "date": "Mar 2026",
    "image": "/images/activity/20260319_194927.jpg",
    "accent": "rose-washi-tape",
    "tapeColor": "tape-rose",
    "rotation": -1.6,
    "tag": "Color Inspo",
    "posAll": {
      "top": "62%",
      "left": "56%",
      "rotate": -3,
      "zIndex": 9
    },
    "posFiltered": {
      "top": "48%",
      "left": "60%",
      "rotate": -3,
      "zIndex": 10
    },
    "title_th": "พาเลทสีพาสเทลดอกไม้สด",
    "caption_th": "ช่อดอกไม้สดและแรงบันดาลใจเฉดสีกราเดียนต์จากธรรมชาติ 💐",
    "title_en": "Pastel Bloom Palette",
    "caption_en": "Fresh flower bouquet & natural color gradient inspiration 💐"
  },
  {
    "id": "act-pet-festive-supervisor",
    "order": 15,
    "type": "polaroid",
    "category": "pets",
    "categoryLabel": "04 // Companions",
    "title": "Festive Supervisor 🐾",
    "caption": "Festive supervisor 🐾 Keeping watch over every design pixel.",
    "date": "Dec 2024",
    "image": "/images/activity/20241220_203058.jpg",
    "accent": "yellow-pushpin",
    "rotation": -2.6,
    "tag": "Cat Companion",
    "posAll": {
      "top": "12%",
      "left": "70%",
      "rotate": 5.5,
      "zIndex": 4
    },
    "posFiltered": {
      "top": "28%",
      "left": "32%",
      "rotate": -3.5,
      "zIndex": 5
    },
    "title_th": "หัวหน้างานตัวจริงช่วงเทศกาล 🐾",
    "caption_th": "หัวหน้างานขนฟู 🐾 คอยจับตาดูทุกพิกเซลของงานออกแบบอย่างใกล้ชิด",
    "title_en": "Festive Supervisor 🐾",
    "caption_en": "Festive supervisor 🐾 Keeping watch over every design pixel."
  },
  {
    "id": "act-pet-design-assistant",
    "order": 16,
    "type": "polaroid",
    "category": "pets",
    "categoryLabel": "04 // Companions",
    "title": "My Little Design Assistant 🐱",
    "caption": "My little design assistant 🐱 taking an essential power nap.",
    "date": "Jan 2025",
    "image": "/images/activity/1736163183500.jpg",
    "accent": "washi-tape",
    "tapeColor": "tape-mint",
    "rotation": 2.2,
    "tag": "Cat Companion",
    "posAll": {
      "top": "48%",
      "left": "72%",
      "rotate": -3.5,
      "zIndex": 8
    },
    "posFiltered": {
      "top": "26%",
      "left": "52%",
      "rotate": 4,
      "zIndex": 6
    },
    "title_th": "ผู้ช่วยดีไซเนอร์ตัวน้อย 🐱",
    "caption_th": "ผู้ช่วยดีไซเนอร์ตัวจิ๋ว 🐱 กำลังพักสายตาและนอนชาร์จพลังคนเก่ง",
    "title_en": "My Little Design Assistant 🐱",
    "caption_en": "My little design assistant 🐱 taking an essential power nap."
  }
];

let allCaseStudies = [...FALLBACK_CASE_STUDIES];
let allActivities = [...FALLBACK_ACTIVITIES];
let currentFilter = 'featured';
let currentActFilter = 'all';
let lastFocusedElement = null;
let currentProjectDetailStudy = null;

// ==========================================================================
// Field & CMS Content Helpers (Strict English Mode)
// ==========================================================================
const currentLang = 'en';

function getField(obj, fieldName) {
  if (!obj) return '';
  if (obj[fieldName + '_en']) return obj[fieldName + '_en'];
  if (typeof obj[fieldName] === 'object' && obj[fieldName]) {
    return obj[fieldName].en || obj[fieldName].th || '';
  }
  if (typeof obj[fieldName] === 'string' && obj[fieldName]) return obj[fieldName];
  return obj[fieldName + '_th'] || '';
}

function getVal(item, fallback = '') {
  if (item === null || item === undefined) return fallback;
  if (typeof item === 'string') return item;
  if (typeof item === 'object') return item.en || item.th || fallback;
  return String(item);
}

function t(key, params) {
  return key;
}

// Global Progress & Refresh Toast Helpers
function setTopProgress(pct) {
  if (typeof window.__setTopProgress === 'function') {
    window.__setTopProgress(pct);
  }
}

function showRefreshStatus(text) {
  const pill = document.getElementById('pageRefreshStatus');
  if (!pill) return;
  const label = pill.querySelector('.refresh-pill-text');
  if (label && text) label.textContent = text;
  pill.classList.add('is-active');
}

function hideRefreshStatus(doneText) {
  const pill = document.getElementById('pageRefreshStatus');
  if (!pill) return;
  if (doneText) {
    const label = pill.querySelector('.refresh-pill-text');
    if (label) label.textContent = doneText;
    const spinner = pill.querySelector('.refresh-spinner-icon');
    if (spinner) spinner.classList.add('is-done');
  }
  setTimeout(() => {
    pill.classList.remove('is-active');
    setTimeout(() => {
      const spinner = pill.querySelector('.refresh-spinner-icon');
      if (spinner) spinner.classList.remove('is-done');
      const label = pill.querySelector('.refresh-pill-text');
      if (label) label.textContent = 'Refreshing portfolio...';
    }, 300);
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  setTopProgress(65);
  initNavigation();
  initCopyables();
  initContactForm();
  initModalA11y();
  initInteractivePreview();
  initCursorRoaming();
  initProjectDetailPage();
  
  Promise.allSettled([loadPortfolioData(), loadActivitiesData(), syncCMSContent()]).then(() => {
    setTopProgress(100);
    hideRefreshStatus('✓ Ready');
  });
});

async function syncCMSContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const isPreview = urlParams.get('preview') === 'true' || urlParams.get('draft') === 'true';
  const previewQuery = isPreview ? '?preview=true' : '';

  if (isPreview) {
    renderPreviewBanner();
  }

  try {
    const sections = ['siteSettings', 'hero', 'about', 'resume', 'contact'];
    await Promise.all(sections.map(async (sec) => {
      try {
        const res = await fetch(`/api/content/${sec}${previewQuery}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        if (!res.ok) return;
        const data = await res.json();
        const content = data.content;
        if (!content) return;

        if (sec === 'siteSettings') {
          const siteTitle = getVal(content.siteTitle);
          if (siteTitle) document.title = siteTitle;
          const metaDesc = getVal(content.metaDescription);
          if (metaDesc) {
            document.querySelector('meta[name="description"]')?.setAttribute('content', metaDesc);
          }
          if (content.favicon) {
            document.querySelector('link[rel="icon"]')?.setAttribute('href', content.favicon);
          }
        } else if (sec === 'hero') {
          if (content.cursiveScript) {
            document.querySelectorAll('.hero-cursive-script').forEach(el => el.textContent = getVal(content.cursiveScript));
          }
          if (content.chunkyTitle) {
            document.querySelectorAll('.hero-chunky-title').forEach(el => el.textContent = getVal(content.chunkyTitle));
          }
          if (content.yearLabel) {
            document.querySelectorAll('.hero-year-label').forEach(el => el.textContent = getVal(content.yearLabel));
          }
          if (content.bioLead) {
            document.querySelectorAll('.hero-bio-lead').forEach(el => el.innerHTML = getVal(content.bioLead));
          }
          if (Array.isArray(content.stats)) {
            const statPills = document.querySelectorAll('.hero-stats-row .stat-pill');
            content.stats.forEach((s, idx) => {
              if (statPills[idx]) statPills[idx].textContent = getVal(s);
            });
          }
          if (Array.isArray(content.miniLinks)) {
            const miniEls = document.querySelectorAll('.desktop-mini-link');
            content.miniLinks.forEach((m, idx) => {
              if (miniEls[idx]) miniEls[idx].textContent = getVal(m);
            });
          }
        } else if (sec === 'about') {
          if (content.greeting) {
            document.querySelectorAll('.about-cursive-greeting').forEach(el => el.textContent = getVal(content.greeting));
          }
          if (content.bioParagraph) {
            document.querySelectorAll('.about-main-p').forEach(el => el.innerHTML = getVal(content.bioParagraph));
          }
          if (content.avatar) {
            document.querySelectorAll('img[src*="avatar_square.png"], .about-portrait-img').forEach(img => {
              img.src = content.avatar;
            });
          }
          if (Array.isArray(content.specialties)) {
            const specList = document.querySelector('.spec-list');
            if (specList) {
              specList.innerHTML = content.specialties.map(s => `
                <li>
                  <span class="spec-sparkle">✦</span>
                  <strong>${getVal(s.title)}</strong> — ${getVal(s.desc)}
                </li>
              `).join('');
            }
          }
          if (Array.isArray(content.experience)) {
            const expCol = document.querySelector('.about-bottom-tri-row .about-col:nth-child(1)');
            if (expCol) {
              const heading = expCol.querySelector('.about-col-heading')?.outerHTML || '<h4 class="about-col-heading">Experience</h4>';
              expCol.innerHTML = heading + content.experience.map(e => `
                <div class="col-item">
                  <span class="col-period">${getVal(e.period)}</span>
                  <span class="col-role">${getVal(e.role)}</span>
                </div>
              `).join('');
            }
          }
          if (Array.isArray(content.skills)) {
            const skillCol = document.querySelector('.about-bottom-tri-row .about-col:nth-child(2)');
            if (skillCol) {
              const heading = skillCol.querySelector('.about-col-heading')?.outerHTML || '<h4 class="about-col-heading">Skills</h4>';
              skillCol.innerHTML = heading + content.skills.map(sk => `
                <div class="col-item-text">${getVal(sk)}</div>
              `).join('');
            }
          }
        } else if (sec === 'resume') {
          if (content.title) {
            const el = document.querySelector('#resume .section-title');
            if (el) el.textContent = getVal(content.title);
          }
          if (content.description) {
            const el = document.querySelector('#resume .resume-text');
            if (el) el.textContent = getVal(content.description);
          }
          if (Array.isArray(content.checklists)) {
            const checkContainer = document.querySelector('#resume .resume-checklist');
            if (checkContainer) {
              checkContainer.innerHTML = content.checklists.map(c => `
                <div class="check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>${getVal(c)}</span>
                </div>
              `).join('');
            }
          }
          if (content.resumePdfUrl) {
            document.querySelectorAll('a[href*="Resume.pdf"]').forEach(a => a.href = content.resumePdfUrl);
          }
          if (content.portfolioPdfUrl) {
            document.querySelectorAll('a[href*="PortfolioRujisaya.pdf"]').forEach(a => a.href = content.portfolioPdfUrl);
          }
        } else if (sec === 'contact') {
          if (content.title) {
            const el = document.querySelector('.contact-headline');
            if (el) el.textContent = getVal(content.title);
          }
          if (content.subtitle) {
            const el = document.querySelector('.contact-subheadline');
            if (el) el.textContent = getVal(content.subtitle);
          }
          if (content.location) {
            document.querySelectorAll('.contact-location-text').forEach(el => el.textContent = getVal(content.location));
          }
          if (content.email) {
            document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
              a.href = `mailto:${content.email}`;
              a.textContent = content.email;
            });
            document.querySelectorAll('.contact-email-text').forEach(el => el.textContent = content.email);
            document.querySelectorAll('[data-copy*="@"]').forEach(el => el.setAttribute('data-copy', content.email));
          }
          if (content.phone) {
            document.querySelectorAll('a[href^="tel:"]').forEach(a => {
              a.href = `tel:${content.phone.replace(/[^0-9+]/g, '')}`;
              a.textContent = content.phone;
            });
            document.querySelectorAll('.contact-phone-text').forEach(el => el.textContent = content.phone);
          }
          if (content.lineId) {
            document.querySelectorAll('.contact-line-text').forEach(el => el.textContent = content.lineId);
          }
        }
      } catch (secErr) {
        console.warn(`Could not sync ${sec}:`, secErr);
      }
    }));
  } catch (e) {
    console.warn("CMS content sync failed:", e);
  }
}

function renderPreviewBanner() {
  if (document.getElementById('cmsPreviewBanner')) return;
  const banner = document.createElement('div');
  banner.id = 'cmsPreviewBanner';
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#D97706;color:#FFFFFF;font-family:Plus Jakarta Sans,sans-serif;font-size:0.85rem;font-weight:600;padding:8px 16px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 2px 10px rgba(0,0,0,0.15);';
  banner.innerHTML = `
    <span>👁️ <strong>Draft Preview Mode</strong> — You are viewing unreleased draft content.</span>
    <a href="/admin" style="color:#FFF;background:rgba(0,0,0,0.25);padding:3px 10px;border-radius:4px;text-decoration:none;font-size:0.78rem;">Return to CMS ↗</a>
  `;
  document.body.appendChild(banner);
  document.body.style.paddingTop = '38px';
}

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
    if (!target) {
      idx = (idx + 1) % targets.length;
      tourTimer = setTimeout(step, 300);
      return;
    }

    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();

    if (tRect.width === 0 || tRect.height === 0) {
      idx = (idx + 1) % targets.length;
      tourTimer = setTimeout(step, 300);
      return;
    }

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

  // Initial delay before roaming starts - quick start
  setTimeout(step, 350);

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
      }, 700);
    });
  }

  // Handle visibility changes so roaming doesn't get stuck when switching tabs
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isPaused = true;
      if (tourTimer) clearTimeout(tourTimer);
      if (resumeTimer) clearTimeout(resumeTimer);
    } else {
      isPaused = false;
      cursor.style.opacity = '1';
      tourTimer = setTimeout(step, 300);
    }
  });

  // Re-run step smoothly on window resize
  window.addEventListener('resize', () => {
    if (!isPaused) {
      if (tourTimer) clearTimeout(tourTimer);
      tourTimer = setTimeout(step, 200);
    }
  });
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
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.get('preview') === 'true' || urlParams.get('draft') === 'true';
    const previewQuery = isPreview ? '?preview=true' : '';
    const res = await fetch(`/api/case-studies${previewQuery}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
    });
    if (res.ok) {
      const liveData = await res.json();
      if (Array.isArray(liveData) && liveData.length > 0) {
        allCaseStudies = liveData;
        const updatedFeatured = allCaseStudies.filter(s => s.featured);
        renderCaseStudies(updatedFeatured.length > 0 ? updatedFeatured : allCaseStudies);

        // Re-hydrate project detail page if on a project detail view
        if (typeof hydrateProjectDetailView === 'function') {
          const pathParts = window.location.pathname.split('/').filter(Boolean);
          let detailSlug = pathParts[pathParts.length - 1];
          const queryId = new URLSearchParams(window.location.search).get('id');
          if (queryId) detailSlug = queryId;
          if (detailSlug && detailSlug !== 'projects' && detailSlug !== 'project-detail.html') {
            const fresh = findProjectBySlug(detailSlug);
            if (fresh) {
              currentProjectDetailStudy = fresh;
              hydrateProjectDetailView(fresh);
            }
          }
        }
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

// Render Projects Showcase Cards (Compact Card Grid Layout for Home and /projects)
function renderCaseStudies(studies) {
  const container = document.getElementById('caseStudiesContainer');
  if (!container) return;

  const countMeta = document.getElementById('projectsCountMeta');
  if (countMeta) {
    countMeta.textContent = t('projects.showingProjects', { count: studies ? studies.length : 0, total: allCaseStudies.length });
  }

  if (!studies || studies.length === 0) {
    container.innerHTML = `<div class="loading-spinner">${escapeHtml(t('projects.noResults'))}</div>`;
    return;
  }

  const isHomePage = !document.body.classList.contains('page-projects-archive') && !document.getElementById('projectSearchInput');
  const displayList = isHomePage ? studies.slice(0, 4) : studies;

  container.innerHTML = displayList.map(study => {
    const displayTitle = getField(study, 'displayTitle') || study.displayTitle || study.title;
    const rawCategory = getField(study, 'category') || study.category || (study.id === 'ami-booth-planner' ? (currentLang === 'th' ? 'ครีเอเตอร์ & การจัดการอีเวนต์' : 'creator economy & events') : (currentLang === 'th' ? 'ระบบ Enterprise SaaS & HR' : 'enterprise saas & hr tech'));
    const isLive = (study.badgeType === 'live') || (study.badge && study.badge.toLowerCase().includes('live'));
    const badgeText = isLive ? (study.badge && study.badge.toLowerCase().includes('interactive') ? t('projects.statusLiveInteractive') : t('projects.statusLive')) : (study.badge || 'live');
    const dateText = study.date || 'Jan 2026';
    const slug = study.slug || study.id;
    const coverImage = study.image || (study.previewCards && study.previewCards[0] ? study.previewCards[0].image : '/assets/portfolio/leaya_screenshot_full.png');
    const viewArrow = t('projects.viewProject');

    return `
      <a href="/projects/${encodeURIComponent(slug)}" class="compact-project-card" data-category="${study.filterCategory || 'all'}" aria-label="View ${escapeHtml(getField(study, 'fullTitle') || study.fullTitle || study.title)}">
        <div class="compact-card-thumb">
          <img src="${coverImage}" alt="${escapeHtml(displayTitle)} Preview" loading="lazy" class="compact-thumb-img">
          <span class="compact-date-badge">${escapeHtml(dateText)}</span>
        </div>
        <div class="compact-card-footer">
          <div class="compact-footer-row-main">
            <h3 class="compact-card-title">${escapeHtml(displayTitle)}</h3>
            <span class="compact-status-pill">
              <span class="status-dot ${isLive ? 'green' : 'purple'}"></span>
              <span class="compact-status-text">${escapeHtml(badgeText)}</span>
            </span>
          </div>
          <div class="compact-footer-row-sub">
            <span class="compact-category-tag">${escapeHtml(rawCategory.toLowerCase())}</span>
            <span class="compact-view-arrow">${escapeHtml(viewArrow)}</span>
          </div>
        </div>
      </a>
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
      const matchTitle = (getField(s, 'displayTitle') || s.title || '').toLowerCase().includes(q) ||
        (s.displayTitle_en || '').toLowerCase().includes(q) ||
        (s.displayTitle_th || '').toLowerCase().includes(q);
      const matchCat = (getField(s, 'category') || '').toLowerCase().includes(q) ||
        (s.category || '').toLowerCase().includes(q);
      const matchSummary = (getField(s, 'summary') || '').toLowerCase().includes(q) ||
        (s.summary_en || '').toLowerCase().includes(q) ||
        (s.summary_th || '').toLowerCase().includes(q);
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

function ensureDemoParam(url) {
  if (!url) return '';
  try {
    const base = window.location.origin && window.location.origin !== 'null' ? window.location.origin : 'http://localhost';
    const u = new URL(url, base);
    if (!u.searchParams.has('demo')) {
      u.searchParams.set('demo', 'true');
    }
    return u.toString();
  } catch (e) {
    if (url.includes('?demo=true') || url.includes('&demo=true')) return url;
    return url.includes('?') ? `${url}&demo=true` : `${url}?demo=true`;
  }
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

  const liveDemoUrl = ensureDemoParam(project.demoUrl || project.liveUrl);

  if (urlDisplay) urlDisplay.textContent = liveDemoUrl;
  if (externalLink) {
    externalLink.href = liveDemoUrl;
    externalLink.target = '_blank';
    externalLink.rel = 'noopener noreferrer';
  }
  
  if (wrapper) {
    wrapper.className = 'preview-iframe-wrapper viewport-desktop';
  }
  document.querySelectorAll('.viewport-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-viewport') === 'desktop');
  });

  if (loading) loading.style.display = 'flex';

  if (iframe) {
    iframe.src = liveDemoUrl;
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

// ==========================================================================
// View 3: Dedicated Standalone Project Detail Page (/projects/[slug])
// ==========================================================================

function findProjectBySlug(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase().trim();
  return allCaseStudies.find(item => {
    if (item.id === s || (item.slug && item.slug === s)) return true;
    if (s === 'leaya' && item.id === 'leave-wfh-management') return true;
    if (s === 'ami' && item.id === 'ami-booth-planner') return true;
    return item.id.includes(s) || (item.slug && item.slug.includes(s));
  });
}

function initProjectDetailPage() {
  const root = document.getElementById('projectDetailRoot');
  if (!root) return; // Not on project detail page

  const path = window.location.pathname;
  const pathParts = path.split('/').filter(Boolean);
  let slug = pathParts[pathParts.length - 1];

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('id')) {
    slug = urlParams.get('id');
  }

  if (!slug || slug === 'projects' || slug === 'project-detail.html') {
    slug = 'leave-wfh-management';
  }

  const study = findProjectBySlug(slug) || allCaseStudies[0];
  if (study) {
    currentProjectDetailStudy = study;
    hydrateProjectDetailView(study);
  }

  const isPreview = urlParams.get('preview') === 'true' || urlParams.get('draft') === 'true';
  if (isPreview) {
    renderPreviewBanner();
    fetch(`/api/case-studies/${slug}?preview=true`)
      .then(res => res.ok ? res.json() : null)
      .then(draftStudy => {
        if (draftStudy) {
          currentProjectDetailStudy = draftStudy;
          hydrateProjectDetailView(draftStudy);
        }
      })
      .catch(e => console.warn("Could not fetch draft project detail:", e));
  }
}

// Universal Showcase Data Resolver (Enforces 4 Distinct Screen Views Across All Projects)
function getProjectShowcaseData(study) {
  if (!study) return null;

  const isAmi = (study.id === 'ami-booth-planner' || (study.slug && study.slug.includes('ami')));
  const isLeaya = (study.id === 'leave-wfh-management' || (study.slug && (study.slug.includes('leave') || study.slug.includes('leaya'))));

  // 1. Accent Theme Glow
  const themeGlow = isAmi ? 'theme-glow-ami' : (isLeaya ? 'theme-glow-leaya' : 'theme-glow-default');

  // 2. Multi-Menu Screens (Strictly 4 Distinct Views)
  let s0, s1, s2, s3;

  if (isAmi) {
    s0 = { title: currentLang === 'th' ? "แดชบอร์ดภาพรวม" : "Dashboard Overview", image: "/assets/portfolio/ami_screen_dashboard.png", desc: "Overview & Quick Actions" };
    s1 = { title: currentLang === 'th' ? "ปฏิทินวางแผนอีเวนต์" : "Calendar Planner", image: "/assets/portfolio/ami_screen_calendar.png", desc: "Month Grid Schedule & Date Conflicts" };
    s2 = { title: currentLang === 'th' ? "ระบบติดตามการสมัคร" : "Applications View", image: "/assets/portfolio/ami_screen_applications.png", desc: "Conflict Detection & Partial Acceptance" };
    s3 = { title: currentLang === 'th' ? "บัญชีค่าบูธ & งบประมาณ" : "Budget & Fee Ledger", image: "/assets/portfolio/ami_screen_budget.png", desc: "Real-time Expense Breakdown & Liabilities" };
  } else if (isLeaya) {
    s0 = { title: currentLang === 'th' ? "แดชบอร์ดพนักงาน" : "Employee Dashboard", image: "/assets/portfolio/leaya_screen_dashboard.png", desc: "Leave Balances & WFH Monthly Tracking" };
    s1 = { title: currentLang === 'th' ? "เมทริกซ์การเข้างานของทีม" : "Team Attendance Matrix", image: "/assets/portfolio/leaya_screen_matrix.png", desc: "Weekly In-Office vs Remote Team Schedule" };
    s2 = { title: currentLang === 'th' ? "ระบบคำนวณวันลา Pro-rata" : "Vacation Engine", image: "/assets/portfolio/leaya_screen_rules.png", desc: "Thai Labor Law Pro-rata Calculation Rules" };
    s3 = { title: currentLang === 'th' ? "ทะเบียนข้อมูลฝ่ายบุคคล" : "HR Master Data", image: "/assets/portfolio/leaya_screen_masterdata.png", desc: "Enterprise Org Directory & Employee Permissions" };
  } else {
    // Universal fallback for any custom or future project
    const available = [];
    if (study.screens && Array.isArray(study.screens)) {
      study.screens.forEach(s => available.push(typeof s === 'string' ? { title: "View", image: s } : s));
    }
    if (study.multiScreens && Array.isArray(study.multiScreens)) {
      study.multiScreens.forEach(m => available.push(m));
    }
    if (study.galleryImages && Array.isArray(study.galleryImages)) {
      study.galleryImages.forEach(g => available.push({ title: "Screen", image: g }));
    }
    if (study.image) {
      available.unshift({ title: "Overview", image: study.image });
    }

    // Ensure 4 distinct screens without repeating the first one 4 times
    const pool = available.filter((v, i, a) => a.findIndex(t => t.image === v.image) === i);
    s0 = pool[0] || { title: currentLang === 'th' ? "แดชบอร์ดภาพรวม" : "Dashboard Overview", image: "/assets/portfolio/ami_screen_dashboard.png" };
    s1 = pool[1] || { title: currentLang === 'th' ? "หน้ารายการ / ฟีเจอร์" : "Feature / List View", image: "/assets/portfolio/leaya_screen_matrix.png" };
    s2 = pool[2] || { title: currentLang === 'th' ? "โมดูลเจาะลึก" : "Deep-Dive Module", image: "/assets/portfolio/ami_screen_applications.png" };
    s3 = pool[3] || { title: currentLang === 'th' ? "วิเคราะห์ & ตั้งค่า" : "Analytics & Settings", image: "/assets/portfolio/leaya_screen_rules.png" };
  }

  // 3. Card 1 Config
  const card1Title = isAmi
    ? (currentLang === 'th' ? "เหมาะเป็นพิเศษสำหรับนักวาดและคนจัดอีเวนต์" : "Perfect Solution For Indie Creators & Event Planners")
    : (isLeaya ? (currentLang === 'th' ? "เหมาะเป็นพิเศษสำหรับทีมองค์กรและฝ่ายบุคคล" : "Perfect Solution For Enterprise Teams & HR Operations") : (currentLang === 'th' ? `เหมาะเป็นพิเศษสำหรับ ${(getField(study, 'targetUsers') || 'ทีมสมัยใหม่').split(/[,&]/)[0].trim()}` : `Perfect Solution For ${(getField(study, 'targetUsers') || 'Modern Teams').split(/[,&]/)[0].trim()}`));
  
  const card1Tags = isAmi
    ? (currentLang === 'th' ? ["ตารางปฏิทิน", "ตรวจจับวันชน", "รับผลแบบแยกวัน", "งบประมาณค่าบูธ", "& อื่นๆ อีกมากมาย..."] : ["Calendar Grid", "Conflict Alerts", "Partial Acceptance", "Booth Budget", "& Many more..."])
    : (isLeaya 
        ? (currentLang === 'th' ? ["สูตร Pro-rata", "RBAC Matrix", "ยอดเข้าออฟฟิศ", "ประวัติการลา", "& อื่นๆ อีกมากมาย..."] : ["Pro-rata Engine", "RBAC Matrix", "Weekly Attendance", "Leave Ledger", "& Many more..."])
        : (study.tags && study.tags.length ? [...study.tags.slice(0, 4), (currentLang === 'th' ? "& อื่นๆ อีกมากมาย..." : "& Many more...")] : (currentLang === 'th' ? ["ผังเวิร์กโฟลว์", "ระบบปรับแต่งได้", "ซิงค์คลาวด์", "& อื่นๆ อีกมากมาย..."] : ["Workflow UI", "Custom System", "Cloud Sync", "& Many more..."])));

  // 4. Card 2 Config
  const card2Watermark = isAmi 
    ? (currentLang === 'th' ? "ตรวจจับวันชน" : "DATE CONFLICT") 
    : (isLeaya ? (currentLang === 'th' ? "ระบบคำนวณวันลา" : "VACATION ENGINE") : (getField(study, 'displayTitle') || study.title || "SMART ENGINE").toUpperCase().slice(0, 16));

  const cleanDomain = (study.liveUrl || '')
    .replace(/^https?:\/\//, '')
    .split('?')[0]
    .replace(/\/$/, '');
  const card2Url = cleanDomain 
    ? cleanDomain + (isAmi ? '/calendar' : '/vacation-engine')
    : 'app.internal/features';

  const card2WidgetTitle = isAmi ? (currentLang === 'th' ? "ตรวจจับวันชน" : "Conflict Detection") : (isLeaya ? (currentLang === 'th' ? "เมทริกซ์การเข้างาน" : "Attendance Matrix") : (currentLang === 'th' ? "โมดูลหลัก" : "Core Module"));

  // 5. Card 3 Config
  let card3Tags = isAmi 
    ? (currentLang === 'th' ? ["นักวาดภาพประกอบ", "นักเขียนการ์ตูน", "แบรนด์คราฟต์", "ผู้จัดงานอีเวนต์"] : ["Illustrators", "Comic Creators", "Craft Brands", "Event Organizers"]) 
    : (isLeaya ? (currentLang === 'th' ? ["ฝ่ายบุคคล & HR", "หัวหน้าทีม", "พนักงานไฮบริด", "ทีมองค์กร"] : ["HR & People Ops", "Team Managers", "Hybrid Employees", "Enterprise Teams"]) : []);

  if (!card3Tags.length && study.targetUsers) {
    const rawTarget = getField(study, 'targetUsers');
    card3Tags = rawTarget
      .split(',')
      .map(t => t.replace(/\(.*?\)/g, '').trim())
      .filter(t => t.length > 0 && t.length < 28)
      .slice(0, 4);
  }
  if (!card3Tags.length) {
    card3Tags = currentLang === 'th' ? ["ทีมองค์กร", "หัวหน้าทีม", "ผู้จัดการผลิตภัณฑ์", "ฝ่ายปฏิบัติการ"] : ["Enterprise Teams", "Team Leads", "Product Managers", "Operations"];
  }

  // 6. Card 4 Config
  const brandLogo = isAmi ? "🎨" : (isLeaya ? "🐾" : "⚡");
  const brandName = isAmi ? "Ami Booth Planner" : (isLeaya ? "Leaya HR Portal" : (getField(study, 'displayTitle') || study.title || "Interactive App"));
  const toolBadge = (study.techStack && study.techStack.length >= 2)
    ? `${study.techStack[0].name} / ${study.techStack[1].name} • ${currentLang === 'th' ? "ระบบงานครบวงจร" : "Full System"}`
    : (isAmi ? (currentLang === 'th' ? "React / MUI • ระบบงานอีเวนต์ครบวงจร" : "React / MUI • Full Event System") : (currentLang === 'th' ? "Next.js / React • ระบบงาน HR ครบวงจร" : "Next.js / React • Full HR System"));

  return {
    themeGlow,
    s0, s1, s2, s3,
    card1: {
      title: card1Title,
      tags: card1Tags,
      screenLeft: s1.image,
      screenRight: s0.image
    },
    card2: {
      watermark: card2Watermark,
      coreScreen: s2.image,
      url: card2Url,
      widgetTitle: card2WidgetTitle,
      widgetScreen: s1.image
    },
    card3: {
      title: t('detail.suitableForTitle'),
      tags: card3Tags,
      screen1: s0,
      screen2: s1,
      screen3: s2,
      screen4: s3,
      badgeText: t('detail.multiMenuBadge')
    },
    card4: {
      brandLogo,
      brandName,
      heading: t('detail.summaryHeading'),
      specs: currentLang === 'th' ? [
        "หน้าจอ Responsive",
        "ระบบปรับแต่งได้ 100%",
        "ละเอียดระดับพิกเซล",
        "จำลองสถานะสมบูรณ์"
      ] : [
        "Responsive UI",
        "100% Custom System",
        "Pixel Perfect",
        "Interactive State"
      ],
      toolBadge,
      laptopScreen: s0.image
    }
  };
}

function renderProjectShowcaseGrid(study) {
  const data = getProjectShowcaseData(study);
  if (!data) return;

  const gridContainer = document.getElementById('visualShowcaseGrid');
  if (gridContainer) {
    gridContainer.classList.remove('theme-glow-ami', 'theme-glow-leaya');
    gridContainer.classList.add(data.themeGlow);
  }

  // --- CARD 1 (Top-Left): Angled Laptop Split-Screen + Tags ---
  setElementSrc('sc1Laptop1Img', data.card1.screenRight);
  setElementSrc('sc1Laptop2Img', data.card1.screenLeft);
  setElementText('sc1Title', data.card1.title);
  const sc1TagsEl = document.getElementById('sc1Tags');
  if (sc1TagsEl) {
    sc1TagsEl.innerHTML = data.card1.tags.map(t => `<span class="dark-pill-tag">${escapeHtml(t)}</span>`).join('');
  }

  // --- CARD 2 (Top-Right): Watermark + Core Feature Deep-Dive Window ---
  setElementText('sc2Watermark', data.card2.watermark);
  setElementSrc('sc2BrowserImg', data.card2.coreScreen);
  setElementText('sc2BrowserUrl', data.card2.url);
  setElementText('sc2WidgetTitle', data.card2.widgetTitle);
  setElementSrc('sc2WidgetImg', data.card2.widgetScreen);

  // --- CARD 3 (Bottom-Left): 2x2 Multi-Menu Screen Grid (4 DISTINCT MENUS) ---
  setElementText('sc3Title', data.card3.title);
  const sc3TagsEl = document.getElementById('sc3Tags');
  if (sc3TagsEl) {
    sc3TagsEl.innerHTML = data.card3.tags.map(t => `<span class="dark-pill-tag">${escapeHtml(t)}</span>`).join('');
  }
  setElementSrc('sc3Screen1', data.card3.screen1.image);
  setElementText('sc3ScreenTitle1', data.card3.screen1.title);

  setElementSrc('sc3Screen2', data.card3.screen2.image);
  setElementText('sc3ScreenTitle2', data.card3.screen2.title);

  setElementSrc('sc3Screen3', data.card3.screen3.image);
  setElementText('sc3ScreenTitle3', data.card3.screen3.title);

  setElementSrc('sc3Screen4', data.card3.screen4.image);
  setElementText('sc3ScreenTitle4', data.card3.screen4.title);

  setElementText('sc3BadgeText', data.card3.badgeText);

  // --- CARD 4 (Bottom-Right): Project Summary & Tech Specs + Tilted Laptop ---
  setElementText('sc4BrandLogo', data.card4.brandLogo);
  setElementText('sc4BrandName', data.card4.brandName);
  setElementText('sc4Heading', data.card4.heading);

  setElementText('sc4Spec1', data.card4.specs[0] || 'Responsive UI');
  setElementText('sc4Spec2', data.card4.specs[1] || '100% Custom System');
  setElementText('sc4Spec3', data.card4.specs[2] || 'Pixel Perfect');
  setElementText('sc4Spec4', data.card4.specs[3] || 'Interactive State');

  setElementText('sc4ToolText', data.card4.toolBadge);
  setElementSrc('sc4LaptopImg', data.card4.laptopScreen);
}

function hydrateProjectDetailView(study) {
  if (!study) return;
  currentProjectDetailStudy = study;

  const fullTitle = getField(study, 'fullTitle') || study.fullTitle || study.title;
  const shortSubtitle = getField(study, 'shortSubtitle') || study.shortSubtitle || getField(study, 'summary') || study.summary;
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

  // Update Page Title & Breadcrumb
  document.title = `${fullTitle} — Rujisaya Kuekool | UX/UI Designer`;
  const crumbIndex = document.getElementById('crumbIndex');
  if (crumbIndex) crumbIndex.textContent = `${t('detail.projectPrefix')} ${study.projectNum || 1}`;
  const crumbCat = document.getElementById('crumbCat');
  if (crumbCat) crumbCat.textContent = (getField(study, 'category') || study.category || 'enterprise saas & hr tech').toLowerCase();

  // Header Title & Subtitle
  const titleEl = document.getElementById('detailHeaderTitle');
  if (titleEl) titleEl.textContent = fullTitle;
  const subtitleEl = document.getElementById('detailHeaderSubtitle');
  if (subtitleEl) subtitleEl.textContent = shortSubtitle;

  // CTA Links
  const targetLiveUrl = ensureDemoParam(study.demoUrl || study.liveUrl);
  const ctaLive = document.getElementById('detailCtaLive');
  if (ctaLive && targetLiveUrl) {
    ctaLive.href = targetLiveUrl;
    ctaLive.target = '_blank';
    ctaLive.rel = 'noopener noreferrer';
  }
  const ctaGithub = document.getElementById('detailCtaGithub');
  if (ctaGithub && study.githubUrl) {
    ctaGithub.href = study.githubUrl;
    ctaGithub.target = '_blank';
    ctaGithub.rel = 'noopener noreferrer';
  }

  // Hero Mockup
  const heroMockup = document.getElementById('detailHeroMockup');
  if (heroMockup) {
    heroMockup.src = study.image;
    heroMockup.alt = `${fullTitle} Main Dashboard`;
  }
  const mobileMockup = document.getElementById('detailMobileMockup');
  if (mobileMockup) {
    const isAmi = (study.id && study.id.includes('ami')) || (study.slug && study.slug.includes('ami'));
    const isLeaya = (study.id && (study.id.includes('leave') || study.id.includes('leaya'))) || (study.slug && (study.slug.includes('leave') || study.slug.includes('leaya')));

    let mobileSrc = study.mobileImage || study.mobileScreen || study.mobilePreview;
    if (!mobileSrc) {
      if (isAmi) {
        mobileSrc = '/assets/portfolio/ami_screen_mobile.png';
      } else if (isLeaya) {
        mobileSrc = '/assets/portfolio/leaya_screen_mobile.png';
      }
    }
    if (!mobileSrc) {
      mobileSrc = study.image;
    }

    mobileMockup.src = mobileSrc;
    mobileMockup.alt = `${fullTitle} Mobile Experience`;
  }

  // Pillars Grid
  const pillarsGrid = document.getElementById('detailPillarsGrid');
  if (pillarsGrid) {
    pillarsGrid.innerHTML = pillars.map(p => `
      <div class="bento-pillar-item">
        <span class="pillar-icon-box">${getPillarSvg(p.icon)}</span>
        <span class="pillar-label">${escapeHtml(p.label)}</span>
      </div>
    `).join('');
  }

  // Highlights Grid
  const highlightsGrid = document.getElementById('detailHighlightsGrid');
  if (highlightsGrid) {
    highlightsGrid.innerHTML = highlights.map(h => `
      <div class="dark-bento-box">
        <div class="dark-box-icon">${getHighlightSvg(h.icon)}</div>
        <div class="dark-box-label">${escapeHtml(h.label)}</div>
      </div>
    `).join('');
  }

  // Style Guide
  const headingFontEl = document.getElementById('detailHeadingFont');
  if (headingFontEl) headingFontEl.textContent = styleGuide.headingFont || 'Display Bold';
  const bodyFontEl = document.getElementById('detailBodyFont');
  if (bodyFontEl) bodyFontEl.textContent = styleGuide.bodyFont || 'Inter';
  const paletteCountEl = document.getElementById('detailPaletteCount');
  if (paletteCountEl) paletteCountEl.textContent = `${styleGuide.palette.length} Palette Swatches`;
  const swatchesRow = document.getElementById('detailSwatchesRow');
  if (swatchesRow) {
    swatchesRow.innerHTML = styleGuide.palette.map(c => `
      <div class="color-swatch-box" title="${escapeHtml(c.name)} (${c.hex})">
        <div class="color-swatch-circle" style="background-color: ${c.hex}; ${c.hex === '#FFFFFF' || c.hex === '#FAF7F2' || c.hex === '#FFF0F5' ? 'border: 1px solid #E5DEC9;' : ''}"></div>
        <span class="color-hex-label">${escapeHtml(c.hex)}</span>
        <span class="color-name-label">${escapeHtml(c.name)}</span>
      </div>
    `).join('');
  }

  // Update 3-Column Info Strip
  const isAmi = (study.id === 'ami-booth-planner' || (study.slug && study.slug.includes('ami')));

  const infoRole = document.getElementById('infoStripRole');
  if (infoRole) {
    infoRole.textContent = currentLang === 'th' ? "นักออกแบบ UX/UI & นักพัฒนา Full-Stack" : "UX/UI Designer & Full-Stack Developer";
  }
  const infoUsers = document.getElementById('infoStripUsers');
  if (infoUsers) {
    infoUsers.textContent = isAmi 
      ? (currentLang === 'th' ? "นักวาดภาพประกอบ, นักเขียนการ์ตูน & แบรนด์คราฟต์" : "Illustrators, Comic Artists & Craft Brands") 
      : (currentLang === 'th' ? "ฝ่ายบุคคล, ผู้จัดการ & ทีมทำงานไฮบริด" : "HR, Managers & Hybrid Teams");
  }
  const infoSolution = document.getElementById('infoStripSolution');
  if (infoSolution) {
    infoSolution.textContent = isAmi 
      ? (currentLang === 'th' ? "ระบบตรวจจับวันชน & จัดการงบประมาณรายวัน" : "Smart Date Conflict & Partial Acceptance Engine") 
      : (currentLang === 'th' ? "ระบบคำนวณวันลา Pro-rata & เมทริกซ์การเข้างาน" : "Pro-rata Vacation Engine & Weekly Attendance Matrix");
  }

  // Render 4-Card Bento Visual Showcase Grid (PlanIQ 2x2 Composition)
  renderProjectShowcaseGrid(study);

  // Backward compatibility fallback for any legacy elements if present
  const zoomTitle = document.getElementById('detailZoomTitle');
  if (zoomTitle) zoomTitle.textContent = featureZoom.title;
  const zoomDesc = document.getElementById('detailZoomDesc');
  if (zoomDesc) zoomDesc.textContent = featureZoom.description;
  const zoomImg = document.getElementById('detailZoomImg');
  if (zoomImg) {
    zoomImg.src = featureZoom.image || study.image;
    zoomImg.alt = featureZoom.title;
  }
  const zoomAddress = document.getElementById('detailWindowAddress');
  if (zoomAddress && study.liveUrl) {
    zoomAddress.textContent = (study.liveUrl || '').replace(/^https?:\/\//, '').split('?')[0].replace(/\/$/, '');
  }
  const screensGrid = document.getElementById('detailScreensGrid');
  if (screensGrid && multiScreens) {
    screensGrid.innerHTML = multiScreens.map((screen, sIdx) => `
      <div class="screen-item-card">
        <div class="screen-img-box">
          <img src="${screen.image}" alt="${escapeHtml(screen.title)}" loading="lazy">
        </div>
        <div class="screen-meta-row">
          <span class="screen-index-badge">0${sIdx + 1}</span>
          <span class="screen-title-text">${escapeHtml(screen.title)}</span>
        </div>
      </div>
    `).join('');
  }

  // UX Narrative
  const probEl = document.getElementById('detailProblemText');
  if (probEl) probEl.textContent = getField(study, 'problem') || getField(study, 'summary');
  const respEl = document.getElementById('detailRespText');
  if (respEl) respEl.textContent = getField(study, 'responsibilities') || '';
  const devEl = document.getElementById('detailDevText');
  if (devEl) devEl.innerHTML = `<strong>${t('detail.engineeringSynergy')}</strong> ${escapeHtml(getField(study, 'devCollaboration') || '')}`;
  const outcomeEl = document.getElementById('detailOutcomeText');
  if (outcomeEl) outcomeEl.textContent = getField(study, 'outcomeLearnings') || '';
  const decisionsList = document.getElementById('detailDecisionsList');
  const decisionsText = getField(study, 'keyDecisions');
  if (decisionsList && decisionsText) {
    decisionsList.innerHTML = decisionsText.split('\n').filter(Boolean).map(dec => `
      <li class="bento-decision-item">${escapeHtml(dec)}</li>
    `).join('');
  }

  // Hook details accordion toggle
  const detailsEl = document.querySelector('.bento-ux-deepdive-details');
  const toggleBtn = document.getElementById('uxAccordionToggleBtn') || document.querySelector('.summary-toggle-btn');
  if (detailsEl && toggleBtn) {
    if (!detailsEl.__toggleBound) {
      detailsEl.__toggleBound = true;
      detailsEl.addEventListener('toggle', () => {
        toggleBtn.textContent = detailsEl.open ? t('detail.hideStory') : t('detail.readStory');
      });
    }
    toggleBtn.textContent = detailsEl.open ? t('detail.hideStory') : t('detail.readStory');
  }

  // Bottom Action Links
  const bottomLive = document.getElementById('detailBottomLive');
  if (bottomLive && targetLiveUrl) {
    bottomLive.href = targetLiveUrl;
    bottomLive.target = '_blank';
    bottomLive.rel = 'noopener noreferrer';
  }
  // Next Project Section Navigation
  const currentIdx = allCaseStudies.findIndex(s => s.id === study.id || (s.slug && s.slug === study.slug));
  const nextIdx = currentIdx >= 0 ? (currentIdx + 1) % allCaseStudies.length : 0;
  const nextStudy = allCaseStudies[nextIdx];
  if (nextStudy) {
    const nextLink = document.getElementById('nextProjectLink');
    if (nextLink) nextLink.href = `/projects/${nextStudy.slug || nextStudy.id}`;
    const nextImg = document.getElementById('nextProjectImg');
    if (nextImg) {
      nextImg.src = nextStudy.image;
      nextImg.alt = nextStudy.displayTitle || nextStudy.title;
    }
    const nextCat = document.getElementById('nextProjectCat');
    if (nextCat) nextCat.textContent = (getField(nextStudy, 'category') || nextStudy.category || 'creator economy & events').toLowerCase();
    const nextTitle = document.getElementById('nextProjectTitle');
    if (nextTitle) nextTitle.textContent = getField(nextStudy, 'displayTitle') || nextStudy.displayTitle || nextStudy.title;
    const nextDesc = document.getElementById('nextProjectDesc');
    if (nextDesc) nextDesc.textContent = getField(nextStudy, 'summary') || getField(nextStudy, 'shortSubtitle') || '';
  }
}

// True multi-page navigation handlers
function openProjectDetail(studyId) {
  if (!studyId) return;
  const study = findProjectBySlug(studyId);
  const targetSlug = study ? (study.slug || study.id) : studyId;
  window.location.href = `/projects/${encodeURIComponent(targetSlug)}`;
}

function closeProjectDetail() {
  window.location.href = '/projects';
}

function openCaseStudyModal(studyId) {
  openProjectDetail(studyId);
}

function closeCaseStudyModal() {
  closeProjectDetail();
}

// ==========================================================================
// Activities Section Logic (Modern Tactile Corkboard / Freeform Collage)
// ==========================================================================

// Organic Absolute Positions for All 16 Moments (1140px × 760px canvas)
const CORK_POSITIONS = {
  // 01 // Live Music
  'act-live-photobooth-strip': {
    all: { top: '9%', left: '3%', rotate: -2.5, zIndex: 4 },
    filtered: { top: '16%', left: '18%', rotate: -2.5, zIndex: 5 }
  },
  'act-live-photobooth-print': {
    all: { top: '12%', left: '16%', rotate: 4.5, zIndex: 6 },
    filtered: { top: '14%', left: '38%', rotate: 4.0, zIndex: 6 }
  },
  'act-live-merch-seats': {
    all: { top: '60%', left: '2%', rotate: -4.0, zIndex: 8 },
    filtered: { top: '22%', left: '58%', rotate: -3.5, zIndex: 7 }
  },
  'act-live-tickets': {
    all: { top: '46%', left: '12%', rotate: 5.5, zIndex: 7 },
    filtered: { top: '50%', left: '42%', rotate: 3.0, zIndex: 8 }
  },

  // 02 // Art & Design
  'act-art-journal-stickers': {
    all: { top: '9%', left: '28%', rotate: -3.5, zIndex: 5 },
    filtered: { top: '16%', left: '28%', rotate: -3.5, zIndex: 5 }
  },
  'act-art-neon-exhibition': {
    all: { top: '38%', left: '24%', rotate: 3.5, zIndex: 9 },
    filtered: { top: '14%', left: '52%', rotate: 3.5, zIndex: 6 }
  },
  'act-art-desk-setup': {
    all: { top: '65%', left: '20%', rotate: -2.0, zIndex: 10 },
    filtered: { top: '48%', left: '30%', rotate: 2.5, zIndex: 7 }
  },
  'act-art-collectibles': {
    all: { top: '52%', left: '34%', rotate: -4.5, zIndex: 6 },
    filtered: { top: '46%', left: '50%', rotate: -4.0, zIndex: 8 }
  },

  // 03 // Lifestyle & Cafes
  'act-life-mirror-fit': {
    all: { top: '10%', left: '42%', rotate: 3.0, zIndex: 4 },
    filtered: { top: '14%', left: '20%', rotate: 3.0, zIndex: 5 }
  },
  'act-life-weekend-smile': {
    all: { top: '8%', left: '55%', rotate: -4.0, zIndex: 3 },
    filtered: { top: '12%', left: '42%', rotate: -3.5, zIndex: 6 }
  },
  'act-life-peace-portrait': {
    all: { top: '34%', left: '58%', rotate: 5.0, zIndex: 5 },
    filtered: { top: '14%', left: '62%', rotate: 4.0, zIndex: 7 }
  },
  'act-life-cafe-mirror': {
    all: { top: '36%', left: '46%', rotate: -3.0, zIndex: 8 },
    filtered: { top: '48%', left: '24%', rotate: -2.5, zIndex: 8 }
  },
  'act-life-japanese-table': {
    all: { top: '62%', left: '44%', rotate: 4.5, zIndex: 7 },
    filtered: { top: '46%', left: '44%', rotate: 3.5, zIndex: 9 }
  },
  'act-life-flower-bouquet': {
    all: { top: '62%', left: '56%', rotate: -3.0, zIndex: 9 },
    filtered: { top: '48%', left: '60%', rotate: -3.0, zIndex: 10 }
  },

  // 04 // Companions
  'act-pet-festive-supervisor': {
    all: { top: '12%', left: '70%', rotate: 5.5, zIndex: 4 },
    filtered: { top: '28%', left: '32%', rotate: -3.5, zIndex: 5 }
  },
  'act-pet-design-assistant': {
    all: { top: '48%', left: '72%', rotate: -3.5, zIndex: 8 },
    filtered: { top: '26%', left: '52%', rotate: 4.0, zIndex: 6 }
  }
};

let highestCorkZIndex = 30;

function getActPosition(act, isFiltered) {
  const defaults = CORK_POSITIONS[act.id] || {
    all: { top: '20%', left: '20%', rotate: 0, zIndex: 5 },
    filtered: { top: '25%', left: '35%', rotate: 0, zIndex: 5 }
  };
  return isFiltered ? (act.posFiltered || defaults.filtered) : (act.posAll || defaults.all);
}

async function loadActivitiesData() {
  // Always render immediately from initial/fallback data first so the page is NEVER empty or erroring!
  if (!allActivities || allActivities.length === 0) {
    allActivities = [...FALLBACK_ACTIVITIES];
  }
  renderActivities(allActivities);
  initActivityFilters();

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.get('preview') === 'true' || urlParams.get('draft') === 'true';
    const previewQuery = isPreview ? '?preview=true' : '';
    const res = await fetch(`/api/activities${previewQuery}`);
    if (res.ok) {
      const liveData = await res.json();
      if (Array.isArray(liveData) && liveData.length > 0) {
        allActivities = liveData;
        renderActivities(allActivities);
        applyActivityFilter(currentActFilter);
      }
    }
  } catch (err) {
    console.warn("Using resilient embedded activities data:", err);
  }
}

function renderActivities(activities) {
  const container = document.getElementById('activityContainer');
  if (!container) return;

  const itemsToRender = allActivities && allActivities.length > 0 ? allActivities : activities;
  if (!itemsToRender || itemsToRender.length === 0) {
    container.innerHTML = `<div class="loading-spinner">No moments found.</div>`;
    return;
  }

  container.innerHTML = itemsToRender.map((act) => {
    const isMatching = currentActFilter === 'all' || act.category === currentActFilter;
    const pos = getActPosition(act, currentActFilter !== 'all');
    const rot = pos.rotate !== undefined ? pos.rotate : (act.rotation || 0);
    const hoverRot = Math.abs(rot) > 2 ? (rot * 0.35) : 0;
    const hiddenClass = isMatching ? '' : 'is-hidden';

    // Check if photobooth strip
    if (act.type === 'photobooth-strip' && Array.isArray(act.images)) {
      return `
        <article class="cork-card photobooth-strip-frame ${hiddenClass}" 
                 data-act-id="${act.id}" 
                 data-act-cat="${act.category}"
                 data-rot="${rot}" 
                 style="top: ${pos.top}; left: ${pos.left}; z-index: ${pos.zIndex}; --item-rot: ${rot}deg; --hover-rot: ${hoverRot}deg; transform: rotate(${rot}deg);"
                 role="button" 
                 tabindex="0" 
                 aria-label="View photobooth strip: ${escapeHtml(act.title)}">
          
          <!-- Top Washi Tape Accent -->
          <div class="cork-washi-tape ${act.tapeColor || 'tape-kraft'}" style="--tape-rot: ${rot > 0 ? -2 : 2}deg;"></div>

          <div class="photobooth-cells-column">
            ${act.images.map((imgSrc, fIdx) => `
              <div class="photobooth-cell" data-sub-img="${imgSrc}" title="Click to view full photo">
                <img src="${imgSrc}" alt="${escapeHtml(act.title)} - Frame ${fIdx + 1}" loading="eager">
                <div class="cork-img-overlay">
                  <span class="cork-inspect-btn">${escapeHtml(t('activities.zoom'))}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="photobooth-footer">
            <div class="photobooth-title">${escapeHtml(currentLang === 'th' ? "ช่วงเวลาแห่งความทรงจำ ● 2025-2026" : (act.stripLabel || 'LIVE STADIUM MOMENTS'))}</div>
            <div class="photobooth-caption">${escapeHtml(getField(act, 'caption') || act.caption)}</div>
          </div>
        </article>
      `;
    }

    // Classic Polaroid Frame
    let accentHtml = '';
    if (act.accent === 'washi-tape' || act.accent === 'rose-washi-tape') {
      accentHtml = `<div class="cork-washi-tape ${act.tapeColor || 'tape-kraft'}" style="--tape-rot: ${rot > 0 ? -2.5 : 2}deg;"></div>`;
    } else if (act.accent === 'red-pushpin') {
      accentHtml = `<div class="cork-pushpin pin-red"></div>`;
    } else if (act.accent === 'yellow-pushpin') {
      accentHtml = `<div class="cork-pushpin pin-yellow"></div>`;
    } else if (act.accent === 'silver-pushpin' || act.pinType === 'silver-pushpin') {
      accentHtml = `<div class="cork-pushpin pin-silver"></div>`;
    } else if (act.accent === 'paperclip') {
      accentHtml = `<div class="cork-paperclip"></div>`;
    } else if (act.accent === 'sticky-note') {
      accentHtml = `<div class="cork-sticky-tab">${escapeHtml(t('activities.note'))}</div>`;
    } else if (act.accent === 'date-stamp') {
      const pin = act.pinType === 'silver-pushpin' ? 'pin-silver' : 'pin-red';
      accentHtml = `<div class="cork-pushpin ${pin}"></div>`;
    }

    const dateStampHtml = act.dateStamp 
      ? `<span class="film-date-stamp">${escapeHtml(act.dateStamp)}</span>` 
      : '';

    return `
      <article class="cork-card polaroid-frame ${hiddenClass}" 
               data-act-id="${act.id}" 
               data-act-cat="${act.category}"
               data-rot="${rot}" 
               style="top: ${pos.top}; left: ${pos.left}; z-index: ${pos.zIndex}; --item-rot: ${rot}deg; --hover-rot: ${hoverRot}deg; transform: rotate(${rot}deg);"
               role="button" 
               tabindex="0" 
               aria-label="View photo: ${escapeHtml(act.title)}">
        
        ${accentHtml}

        <div class="polaroid-photo-box">
          <img src="${act.image}" alt="${escapeHtml(act.title)}" class="polaroid-img" loading="eager">
          ${dateStampHtml}
          <div class="cork-img-overlay">
            <span class="cork-inspect-btn">${escapeHtml(t('activities.zoom'))}</span>
          </div>
        </div>

        <div class="polaroid-chin">
          <p class="polaroid-caption">${escapeHtml(getField(act, 'caption') || getField(act, 'title'))}</p>
          <div class="polaroid-meta-row">
            <span class="polaroid-tag-badge">${escapeHtml(getField(act, 'tag') || act.categoryLabel || 'Moment')}</span>
            <span class="polaroid-date-text">${escapeHtml(act.date || '')}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-bind tactile dragging interactions
  initCorkboardInteractions();
}

function applyActivityFilter(filter) {
  const cards = document.querySelectorAll('.cork-card');
  const isFiltered = filter !== 'all';

  cards.forEach(card => {
    const actId = card.getAttribute('data-act-id');
    const cat = card.getAttribute('data-act-cat');
    const act = allActivities.find(a => a.id === actId);
    if (!act) return;

    const isMatch = (filter === 'all' || cat === filter);
    if (isMatch) {
      card.classList.remove('is-hidden');
      const pos = getActPosition(act, isFiltered);
      const rot = pos.rotate !== undefined ? pos.rotate : (act.rotation || 0);
      const hoverRot = Math.abs(rot) > 2 ? (rot * 0.35) : 0;

      card.setAttribute('data-rot', rot);
      card.style.top = pos.top;
      card.style.left = pos.left;
      card.style.zIndex = pos.zIndex;
      card.style.setProperty('--item-rot', `${rot}deg`);
      card.style.setProperty('--hover-rot', `${hoverRot}deg`);
      card.style.transform = `rotate(${rot}deg)`;
    } else {
      card.classList.add('is-hidden');
    }
  });
}

// Buttery Smooth Tactile Dragging & Drop Interaction
function initCorkboardInteractions() {
  const cards = document.querySelectorAll('.cork-card');
  const board = document.getElementById('corkboardCanvas');
  const container = document.getElementById('activityContainer');
  if (!board || !container) return;

  cards.forEach(card => {
    // Elevate on mouseenter
    card.addEventListener('mouseenter', () => {
      if (!card.classList.contains('is-dragging')) {
        card.style.zIndex = ++highestCorkZIndex;
      }
    });

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startLeftPx = 0;
    let startTopPx = 0;
    let moved = false;

    // Handle clicking on individual photobooth sub-cells
    const subCells = card.querySelectorAll('.photobooth-cell');
    subCells.forEach(cell => {
      cell.addEventListener('click', (e) => {
        if (moved) return;
        e.stopPropagation();
        const imgSrc = cell.getAttribute('data-sub-img');
        const actId = card.getAttribute('data-act-id');
        openActivityModal(actId, imgSrc);
      });
    });

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        moved = true;
        card.classList.add('is-dragging');
        card.style.left = `${startLeftPx + dx}px`;
        card.style.top = `${startTopPx + dy}px`;
        card.style.transform = `scale(1.06) rotate(0deg)`;
      }
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);

      setTimeout(() => {
        card.classList.remove('is-dragging');
      }, 50);

      const rot = card.getAttribute('data-rot') || 0;
      card.style.transform = `rotate(${rot}deg)`;

      if (!moved) {
        // Normal click -> open modal
        const actId = card.getAttribute('data-act-id');
        if (actId) openActivityModal(actId);
      }
    };

    const onStart = (e) => {
      if (e.target.closest('button, a')) return;
      if (e.button !== undefined && e.button !== 0) return; // Only main left click

      isDragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;

      // Bring to top
      card.style.zIndex = ++highestCorkZIndex;

      // Calculate initial position relative to container
      const cardRect = card.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      startLeftPx = cardRect.left - contRect.left + container.scrollLeft;
      startTopPx = cardRect.top - contRect.top + container.scrollTop;

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);
    };

    card.addEventListener('pointerdown', onStart);
    card.addEventListener('mousedown', onStart);

    // Keyboard Accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const actId = card.getAttribute('data-act-id');
        if (actId) openActivityModal(actId);
      }
    });
  });
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
      applyActivityFilter(filter);
    });
  });
}

function openActivityModal(actId, customImage) {
  const act = allActivities.find(a => a.id === actId);
  if (!act) return;

  lastFocusedElement = document.activeElement;

  const modal = document.getElementById('activityModal');
  const modalBody = document.getElementById('actModalBody');
  const displayImg = customImage || act.image || (Array.isArray(act.images) ? act.images[0] : '');

  modalBody.innerHTML = `
    <div class="act-modal-img-wrap">
      <img src="${displayImg}" alt="${escapeHtml(act.title)}" class="act-modal-img">
    </div>
    <div class="act-modal-info">
      <div class="activity-meta-row">
        <span class="activity-tag-pill">${escapeHtml(act.tag || act.categoryLabel || 'Moment')}</span>
        <span class="activity-date">${escapeHtml(act.date || '')}</span>
      </div>
      <h2 class="act-modal-title" id="actModalTitle">${escapeHtml(getField(act, 'title'))}</h2>
      <p class="act-modal-caption">${escapeHtml(getField(act, 'caption'))}</p>
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
          showToast(currentLang === 'th' ? `คัดลอก "${textToCopy}" ลงคลิปบอร์ดแล้ว!` : `Copied "${textToCopy}" to clipboard!`);
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
    submitBtn.querySelector('span').textContent = t('contact.btnSending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alertBox.textContent = `✓ ${t('contact.successMsg')}`;
        alertBox.className = 'form-alert success';
        form.reset();
      } else {
        alertBox.textContent = `⚠ ${data.error || 'Failed to send message.'}`;
        alertBox.className = 'form-alert error';
      }
    } catch (err) {
      console.error("Submission error:", err);
      alertBox.textContent = `⚠ ${t('contact.errorMsg')}`;
      alertBox.className = 'form-alert error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = t('contact.btnSend');
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

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElementSrc(id, src) {
  const el = document.getElementById(id);
  if (el) {
    el.loading = 'eager';
    el.src = src;
  }
}
