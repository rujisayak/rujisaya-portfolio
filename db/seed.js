const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || "mongodb+srv://rujisayakuekool_db_user:VcbVghvpeAqk9Qtp@rujik.ctjp2ul.mongodb.net/?retryWrites=true&w=majority&appName=rujik";
const DB_NAME = process.env.DB_NAME || "portfolio_db";

const profileData = {
  name: "Rujisaya Kuekool",
  nickname: "Toey (ToeyR)",
  title: "UX/UI Designer",
  headline: "Designing intuitive enterprise experiences for complex systems, turning technical requirements and data-heavy workflows into clear, scalable interfaces.",
  intro: "Hi, I'm Rujisaya — UX/UI Designer.\n\nI design intuitive enterprise experiences for complex systems, turning technical requirements and data-heavy workflows into clear, scalable interfaces.\n\nWith 2+ years of experience in cybersecurity products, I bridge UX design and technical implementation to create solutions that work for both users and developers.",
  summary: "Mid-level UX/UI Designer with 2+ years of experience in enterprise cybersecurity platforms and data-driven dashboards. Specialized in responsive design, prototype testing, and design systems using Figma. Strong background in collaborating with backend developers by creating detailed UI flows and state specifications that streamline API development and improve workflow efficiency.",
  avatar: "/assets/avatar_square.png",
  resumeUrl: "/Rujisaya Resume.pdf",
  portfolioPdfUrl: "/PortfolioRujisaya.pdf",
  contact: {
    email: "rujisaya1002@gmail.com",
    phone: "(+66) 85 472 2195",
    lineId: "baitoeyrujisaya",
    location: "Bangkok, Thailand"
  },
  education: [
    {
      institution: "Suan Dusit University",
      degree: "Bachelor of Information Technology",
      period: "2019 - 2023",
      honors: "First Class Honors (GPA: 3.73/4.0)",
      description: "Comprehensive coursework in Human-Computer Interaction (HCI), database systems, data structures, and software engineering principles."
    }
  ],
  experience: [
    {
      company: "Security Pitch Company Limited",
      location: "Bangkok, TH",
      role: "UX/UI Designer",
      period: "May 2023 – Present (2+ years)",
      highlights: [
        "Designed end-to-end UX/UI for enterprise cybersecurity platforms (SIEM, Detection Rules, Incident Response, and Analytics).",
        "Built responsive, accessible interfaces and scalable design systems in Figma to ensure consistent components across modules.",
        "Created detailed UI interaction flows and state diagrams (loading, error, edge cases) to support backend API development.",
        "Reviewed frontend beta builds and provided structured usability feedback to developers, resolving interaction friction before releases."
      ]
    },
    {
      company: "Security Pitch Company Limited",
      location: "Bangkok, TH",
      role: "UX/UI Intern",
      period: "January 2023 - April 2023",
      highlights: [
        "Drafted wireframes and UI specs based on software requirements and English specifications from Business Analysts (BA).",
        "Adjusted and iterated UX flows to optimize user task completion and simplify dense backend configurations.",
        "Documented UI flows and data field requirements to assist backend developers with API contracts and data mapping."
      ]
    }
  ],
  skills: {
    productDesign: [
      "Information Architecture",
      "Interaction Design",
      "Design Systems & Component Design",
      "Responsive Web Design",
      "Wireframing & Flow Mapping",
      "High-Fidelity Prototyping"
    ],
    researchEvaluation: [
      "Internal Prototype Testing",
      "Heuristic Evaluation",
      "Usability Review & QA",
      "User Journey Mapping"
    ],
    devCollaboration: [
      "Backend UI Flow Documentation",
      "Validation & Error State Design",
      "API Parameter & Payload Alignment",
      "Developer Handoff Specifications"
    ],
    tools: [
      "Figma (Design Systems & Components)",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Premiere Pro"
    ]
  }
};

const caseStudiesData = [
  {
    "id": "leave-wfh-management",
    "projectNum": 1,
    "displayTitle": "Leaya 🐾",
    "fullTitle": "Leaya - All-in-One Leave & WFH Operations Platform",
    "shortSubtitle": "Empowering enterprise teams with intuitive leave management, balance deductions, and WFH scheduling.",
    "category": "enterprise saas & hr tech",
    "filterCategory": "enterprise",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Jan 2026",
    "summary": "ระบบบริหารจัดการวันลาและสลับวัน Work From Home (WFH) สไตล์ Modern SaaS Dashboard รองรับภาษาไทยสมบูรณ์แบบ ออกแบบตามหลัก Role-Based Access Control (RBAC) ให้พนักงานยื่นคำขอและตรวจสอบโควตาวันลาคงเหลือได้แบบเรียลไทม์",
    "image": "/assets/portfolio/leaya_screenshot_full.png",
    "liveUrl": "https://leave-wfh-management.vercel.app/",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Enterprise SaaS",
      "HR Operations",
      "RBAC Simulation",
      "React 18",
      "Tailwind CSS",
      "TypeScript"
    ],
    "previewCards": [
      {
        "title": "Employee Dashboard & Balances",
        "date": "Jan 2026",
        "image": "/assets/portfolio/leaya_screenshot_full.png",
        "type": "laptop"
      },
      {
        "title": "Interactive WFH Swap Drawer",
        "date": "Jan 2026",
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
        "label": "Live Quota Balances"
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
        "label": "Responsive SaaS Design"
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
      "title": "Role-Based Access Control (RBAC) & Real-time Quota Deduction",
      "description": "ระบบจำลองสิทธิ์ 3 บทบาท (Employee, Manager, HR Admin) พร้อมการหักลบยอดวันลาพักร้อน ลากิจ และลาป่วยแบบเรียลไทม์",
      "tags": [
        {
          "label": "Role",
          "value": "End-to-End Product Designer"
        },
        {
          "label": "Target Users",
          "value": "Enterprise Employees & HR"
        },
        {
          "label": "Key Solution",
          "value": "Live Quota Balances & WFH Swaps"
        }
      ],
      "image": "/assets/portfolio/leaya_screenshot_full.png"
    },
    "multiScreens": [
      {
        "title": "Employee Dashboard & Leave Cards",
        "image": "/assets/portfolio/leaya_screenshot_full.png",
        "desc": "Real-time vacation balance cards, WFH swap status, and submission logs"
      },
      {
        "title": "Manager & Admin Overview",
        "image": "/assets/portfolio/leave_wfh_screenshot.png",
        "desc": "Pending approval queue, team schedule breakdown, and policy alerts"
      }
    ],
    "role": "End-to-End Product Designer & Front-End Architecture",
    "targetUsers": "พนักงานทั่วไป (ยื่นใบลา/ขอ WFH), หัวหน้าทีม/ผู้จัดการ (คิวอนุมัติ & Team Matrix), ฝ่ายบุคคล/HR (ทะเบียนพนักงาน & คำนวณโควตา)",
    "duration": "Enterprise SaaS Project (2025–2026)",
    "designGoal": "สร้างระบบบริหารจัดการวันลาและสลับวัน WFH ที่ใช้งานง่าย ลดความผิดพลาดของฝ่ายบุคคล และแสดงผลแบบโปร่งใส",
    "problem": "การยื่นคำขอลางานและสลับวัน WFH ในองค์กรแบบไฮบริดมักสับสน ไม่มีจุดสรุปยอดคงเหลือแบบเรียลไทม์ ทำให้หัวหน้างานตัดสินใจยาก",
    "responsibilities": "ออกแบบ UX Flow การยื่นและอนุมัติคำขอ, วางระบบ Design System ด้วย Tailwind CSS, ออกแบบสถานะคำขอ (Pending, Approved, Rejected)",
    "uxApproach": "ออกแบบให้เห็นโควตาวันลาและสถานะคำขอตั้งแต่หน้าแรก พร้อมฟอร์มยื่นคำขอที่ตรวจสอบเงื่อนไขล่วงหน้าเพื่อลดข้อผิดพลาด",
    "keyDecisions": "1) Instant Balance Cards: แสดงยอดวันลาคงเหลือและวัน WFH สัปดาห์นี้อย่างชัดเจน\n2) RBAC Simulation Switcher: ให้ผู้ตรวจงานทดสอบสิทธิ์ 3 บทบาทได้ทันที\n3) Interactive Preview Sandbox: ให้ทดลองสร้างและอนุมัติคำขอได้ในเบราว์เซอร์",
    "devCollaboration": "ทำงานร่วมกับสถาปัตยกรรม React 18 และ TypeScript กำหนดโครงสร้างข้อมูลให้สอดคล้องกับ API และจัดการ Error State ครบถ้วน",
    "outcomeLearnings": "ช่วยลดเวลาการยื่นคำขอและตรวจสอบวันลาของพนักงานลงได้อย่างมีนัยสำคัญ พร้อม UI ที่สะอาดตาและเข้าใจง่าย",
    "keyFeatures": [
      "ระบบคำนวณวันลาคงเหลือแบบเรียลไทม์",
      "สลับมุมมองทดสอบสิทธิ์ 3 บทบาท (Employee / Manager / HR)",
      "ระบบขอสลับวัน WFH พร้อมจับคู่วันเข้าออฟฟิศชดเชย",
      "Interactive Live Sandbox สำหรับทดสอบฟังก์ชัน",
      "Clean Modern SaaS Dashboard Theme"
    ]
  },
  {
    "id": "leaya-matrix-engine",
    "projectNum": 2,
    "displayTitle": "Leaya Matrix 📊",
    "fullTitle": "Leaya - Team Matrix & Thai Labor Vacation Engine",
    "shortSubtitle": "Weekly attendance headcount management and automated pro-rata vacation calculation.",
    "category": "enterprise saas & hr tech",
    "filterCategory": "enterprise",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Jan 2026",
    "summary": "ระบบจัดการตารางเวลาทีมและเครื่องมือคำนวณวันลาพักร้อนอัตโนมัติตามกฎหมายแรงงานไทย (Thai Labor Law Pro-rata Engine) พร้อมตารางสรุป Headcount เข้าออฟฟิศจริงแต่ละวันเพื่อป้องกันปัญหาทีมขาดคน",
    "image": "/assets/portfolio/leave_wfh_screenshot.png",
    "liveUrl": "https://leave-wfh-management.vercel.app/",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Thai Labor Law",
      "Headcount Matrix",
      "Vacation Engine",
      "React 18",
      "Tailwind CSS",
      "TypeScript"
    ],
    "previewCards": [
      {
        "title": "Team Attendance Matrix",
        "date": "Jan 2026",
        "image": "/assets/portfolio/leave_wfh_screenshot.png",
        "type": "laptop"
      },
      {
        "title": "Pro-rata Vacation Engine",
        "date": "Jan 2026",
        "image": "/assets/portfolio/leaya_screenshot_full.png",
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
        "label": "Headcount Matrix"
      },
      {
        "icon": "users",
        "label": "Thai Labor Engine"
      },
      {
        "icon": "analytics",
        "label": "Weekly Rosters"
      },
      {
        "icon": "workflows",
        "label": "Pro-rata Quota"
      }
    ],
    "highlights": [
      {
        "icon": "link",
        "label": "Automated Calculations"
      },
      {
        "icon": "analytics",
        "label": "Daily Headcount Alerts"
      },
      {
        "icon": "database",
        "label": "Complex Policy Logic"
      },
      {
        "icon": "uiux",
        "label": "Manager Approvals"
      },
      {
        "icon": "security",
        "label": "Interactive Matrix View"
      },
      {
        "icon": "templates",
        "label": "Strict TypeScript Types"
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
      "description": "คำนวณโควตาวันลาพักร้อน Year 0 และ Year 1+ อัตโนมัติตามวันเริ่มงานและวันผ่านทดลองงาน พร้อมตาราง Attendance Matrix ประจำสัปดาห์",
      "tags": [
        {
          "label": "Role",
          "value": "UX/UI Designer & Logic Architect"
        },
        {
          "label": "Target Users",
          "value": "Team Managers & HR Admins"
        },
        {
          "label": "Key Solution",
          "value": "Pro-rata Vacation & Weekly Matrix"
        }
      ],
      "image": "/assets/portfolio/leave_wfh_screenshot.png"
    },
    "multiScreens": [
      {
        "title": "Weekly Headcount Matrix",
        "image": "/assets/portfolio/leave_wfh_screenshot.png",
        "desc": "Weekly in-office vs WFH headcount tracker by team"
      },
      {
        "title": "Employee Roster & Policies",
        "image": "/assets/portfolio/leaya_screenshot_full.png",
        "desc": "Employee database with vacation policy validation"
      }
    ],
    "role": "UX/UI Designer & Front-End Logic Architect",
    "targetUsers": "หัวหน้างาน (ตรวจเช็คยอดคนเข้าออฟฟิศ), ฝ่ายบุคคล/HR (คำนวณสิทธิ์พักร้อนตามกฎหมายแรงงาน)",
    "duration": "Enterprise SaaS Project (2025–2026)",
    "designGoal": "สร้างเครื่องมือคำนวณวันลาพักร้อนที่ตรงตามข้อกำหนดกฎหมายแรงงานไทย และตารางสรุปคนเข้าออฟฟิศที่เข้าใจง่ายในหน้าเดียว",
    "problem": "ฝ่ายบุคคลต้องใช้เวลานานในการคำนวณวันลาพักร้อนแบบ Pro-rate ให้กับพนักงานเข้าใหม่ตามเดือนที่เริ่มงาน และหัวหน้าทีมไม่สามารถเห็นภาพรวมว่าวันไหนคนเข้าออฟฟิศน้อยเกินไป",
    "responsibilities": "ออกแบบ User Flow การคำนวณวันลา, ออกแบบ Matrix Table ที่แสดงจำนวนคนในแต่ละวัน, วางรูปแบบการแจ้งเตือนเมื่อ Headcount ต่ำกว่าเกณฑ์",
    "uxApproach": "ออกแบบตารางเมทริกซ์ที่แยกสีระหว่าง In-Office และ WFH ชัดเจน พร้อมแถบสรุปยอดรายวันด้านบนเพื่อให้ผู้จัดการตัดสินใจอนุมัติได้อย่างมั่นใจ",
    "keyDecisions": "1) Daily Headcount Tracker: สรุปยอดคนเข้าออฟฟิศจริงแต่ละวันเพื่อป้องกันปัญหาทีมขาดคนในวันสำคัญ\n2) Thai Labor Law Formula: ใส่สูตร Pro-rate อัตโนมัติในฟอร์มรับพนักงานใหม่\n3) Interactive Preview Sandbox: ทดลองคำนวณโควตาและสลับดูตารางทีมได้ทันที",
    "devCollaboration": "สร้างแบบจำลองการคำนวณทางคณิตศาสตร์ให้ตรงกับเกณฑ์กฎหมายแรงงานไทย และกำหนด Component Token สำหรับสถานะการเข้างาน",
    "outcomeLearnings": "ลดข้อผิดพลาดในการคำนวณสิทธิ์วันลาของพนักงานใหม่ลงเหลือ 0 และช่วยให้ทีมจัดตารางการเข้าออฟฟิศได้อย่างสมดุล",
    "keyFeatures": [
      "ตารางเมทริกซ์ทีมประจำสัปดาห์ (Weekly Attendance Matrix)",
      "สูตรคำนวณวันลาพักร้อนแบบ Pro-rate ตามกฎหมายแรงงานไทย",
      "แถบสรุปยอด Headcount เข้าออฟฟิศรายวัน",
      "ระบบแจ้งเตือนเมื่อจำนวนคนในทีมเข้าออฟฟิศไม่ถึงเกณฑ์",
      "Interactive Sandbox ทดลองคำนวณได้ทันที"
    ]
  },
  {
    "id": "ami-booth-calendar",
    "projectNum": 3,
    "displayTitle": "Ami Booth Calendar 🎨",
    "fullTitle": "Ami Booth Planner - Smart Event Calendar & Conflict Alert",
    "shortSubtitle": "Visual creator schedule engine and real-time date conflict detection.",
    "category": "creator economy & events",
    "filterCategory": "creator",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Jan 2026",
    "summary": "ระบบปฏิทินตารางงานและตรวจจับรอบเวลาจัดบูธชนกัน (Smart Date Conflict Detection) สำหรับนักวาดภาพประกอบและครีเอเตอร์ รองรับทั้งมุมมอง Month Grid และ Agenda Timeline พร้อมแถบเตือนวันสมัครและวันประกาศผล",
    "image": "/assets/portfolio/ami_booth_calendar.png",
    "liveUrl": "https://ami-booth-planner.vercel.app/",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Creator Economy",
      "Conflict Detection",
      "Event Calendar",
      "React 18",
      "MUI v6",
      "MongoDB Atlas"
    ],
    "previewCards": [
      {
        "title": "Month Grid Calendar",
        "date": "Jan 2026",
        "image": "/assets/portfolio/ami_booth_calendar.png",
        "type": "laptop"
      },
      {
        "title": "Agenda & Conflict View",
        "date": "Jan 2026",
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
        "label": "Visual Month Grid"
      },
      {
        "icon": "analytics",
        "label": "Agenda Timeline"
      },
      {
        "icon": "workflows",
        "label": "Multi-Phase Dates"
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
        "label": "Pastel Pink Design System"
      },
      {
        "icon": "uiux",
        "label": "Interactive Calendar"
      },
      {
        "icon": "security",
        "label": "Demo Sandbox Mode"
      },
      {
        "icon": "templates",
        "label": "Mobile Responsive"
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
      "title": "Smart Date Conflict Detection Engine",
      "description": "ระบบตรวจจับวันสมัคร วันประกาศผล และวันจัดบูธที่ชนกันแบบเรียลไทม์ พร้อมแถบแจ้งเตือนสีส้มเตือนผู้ใช้ก่อนตัดสินใจลงสมัคร",
      "tags": [
        {
          "label": "Role",
          "value": "UX/UI Designer & Front-End Developer"
        },
        {
          "label": "Target Users",
          "value": "Illustrators, Comic Artists & Creators"
        },
        {
          "label": "Key Solution",
          "value": "Conflict Detection & Calendar Timeline"
        }
      ],
      "image": "/assets/portfolio/ami_booth_calendar.png"
    },
    "multiScreens": [
      {
        "title": "Month Grid Calendar",
        "image": "/assets/portfolio/ami_booth_calendar.png",
        "desc": "Visual monthly calendar with status badges and conflict pills"
      },
      {
        "title": "Applications & Conflict Agenda",
        "image": "/assets/portfolio/ami_booth_screenshot_full.png",
        "desc": "Timeline view with date collision alerts"
      }
    ],
    "role": "UX/UI Designer & Front-End Developer",
    "targetUsers": "นักวาดภาพประกอบ (Illustrators), ศิลปินทำของกุ๊กกิ๊ก/สติกเกอร์ และแบรนด์คราฟต์ขนาดเล็ก",
    "duration": "Creator SaaS Project (2025–2026)",
    "designGoal": "สร้างระบบปฏิทินที่ตอบโจทย์ชีวิตครีเอเตอร์โดยเฉพาะ เตือนวันที่งานชนกัน และแยกประเภทวันสำคัญได้อย่างชัดเจน",
    "problem": "ครีเอเตอร์ต้องสมัครงานอีเวนต์หลายสิบงานต่อปี ซึ่งมีทั้งวันเปิดรับสมัคร วันประกาศผล และวันจัดงานที่คาบเกี่ยวกันบ่อยครั้ง ทำให้จองบูธซ้ำซ้อนในวันเดียวกัน",
    "responsibilities": "ทำ User Research กับกลุ่มนักวาด, ออกแบบ Design System ธีมสี Pastel Pink, ออกแบบระบบ Smart Date Conflict Algorithm และพัฒนาด้วย React 18",
    "uxApproach": "ออกแบบมุมมองปฏิทิน Month Grid และ Agenda Timeline แยกสีชัดเจนระหว่างวันสมัคร วันประกาศผล และวันจัดบูธจริง พร้อมแถบแจ้งเตือน Conflict ชัดเจน",
    "keyDecisions": "1) Smart Date Conflict Detection: แจ้งเตือนทันทีเมื่อมีวันจัดบูธชนกันในตารางงาน\n2) Multi-Phase Color Coding: แยกสีวันสมัคร วันประกาศผล และวันจัดงานชัดเจน\n3) Interactive Preview Sandbox: ให้ทดลองสร้างอีเวนต์และทดสอบตรวจจับวันชนกันได้ทันที",
    "devCollaboration": "พัฒนาด้วย React 18, Material UI v6, Emotion และ LocalStorage fallback เพื่อให้ใช้งานได้อย่างราบรื่นทั้งโหมดออฟไลน์และออนไลน์",
    "outcomeLearnings": "ช่วยให้ครีเอเตอร์เห็นภาพรวมตารางงานตลอดทั้งปี ไม่พลาดวันสำคัญ และขจัดปัญหาการจองบูธชนกันได้อย่างสมบูรณ์",
    "keyFeatures": [
      "ระบบตรวจจับรอบเวลาจัดบูธชนกัน (Smart Date Conflict Detection)",
      "ปฏิทินตารางงานแบบ Month Grid และ Agenda Timeline",
      "แยกสีตามช่วงเวลาสำคัญ (วันสมัคร, วันประกาศผล, วันจัดงาน)",
      "ธีม Pastel Pink ออกแบบเพื่อครีเอเตอร์โดยเฉพาะ",
      "Interactive Demo Sandbox ทดลองใช้งานได้ทันที"
    ]
  },
  {
    "id": "ami-booth-planner",
    "projectNum": 4,
    "displayTitle": "Ami Booth Ledger 💰",
    "fullTitle": "Ami Booth Planner - Partial Acceptance & Budget Ledger",
    "shortSubtitle": "Multi-day booth acceptance recalibration, expense tracking, and cloud sync.",
    "category": "creator economy & events",
    "filterCategory": "creator",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Jan 2026",
    "summary": "ระบบบริหารจัดการใบสมัครและงบประมาณการออกบูธ รองรับผลการคัดเลือกแบบ Partial Acceptance แยกรายวัน พร้อมคำนวณค่าบูธที่ต้องชำระจริงและยอดรอผลอย่างโปร่งใส พร้อมระบบ Demo Sandbox และ Cloud Sync",
    "image": "/assets/portfolio/ami_booth_screenshot_full.png",
    "liveUrl": "https://ami-booth-planner.vercel.app/",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Partial Acceptance",
      "Budget Ledger",
      "Expense Analytics",
      "MongoDB Atlas",
      "React 18",
      "MUI v6"
    ],
    "previewCards": [
      {
        "title": "Applications & Expense Ledger",
        "date": "Jan 2026",
        "image": "/assets/portfolio/ami_booth_screenshot_full.png",
        "type": "laptop"
      },
      {
        "title": "Event Schedule & Calendar",
        "date": "Jan 2026",
        "image": "/assets/portfolio/ami_booth_calendar.png",
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
        "label": "Partial Day Acceptance"
      },
      {
        "icon": "users",
        "label": "Budget Separation"
      },
      {
        "icon": "analytics",
        "label": "Cloud & Demo Sync"
      },
      {
        "icon": "workflows",
        "label": "Application Ledger"
      }
    ],
    "highlights": [
      {
        "icon": "link",
        "label": "Partial Acceptance Support"
      },
      {
        "icon": "analytics",
        "label": "Paid vs Pending Breakdown"
      },
      {
        "icon": "database",
        "label": "Date & Category Filtering"
      },
      {
        "icon": "uiux",
        "label": "Expense Analytics"
      },
      {
        "icon": "security",
        "label": "Secure Cloud Sync"
      },
      {
        "icon": "templates",
        "label": "Demo Sandbox Mode"
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
      "title": "Partial Acceptance & Booth Fee Recalibration",
      "description": "รองรับงานหลายวันที่ได้รับการคัดเลือกเพียงบางวัน โดยระบบจะคำนวณงบประมาณค่าบูธใหม่เฉพาะวันที่ยืนยันจริง และอัปเดตตารางค่าใช้จ่ายอัตโนมัติ",
      "tags": [
        {
          "label": "Role",
          "value": "UX/UI Designer & Full-Stack Developer"
        },
        {
          "label": "Target Users",
          "value": "Creators & Indie Exhibitors"
        },
        {
          "label": "Key Solution",
          "value": "Partial Acceptance & Budget Separation"
        }
      ],
      "image": "/assets/portfolio/ami_booth_screenshot_full.png"
    },
    "multiScreens": [
      {
        "title": "Applications & Budget Ledger",
        "image": "/assets/portfolio/ami_booth_screenshot_full.png",
        "desc": "Filterable table of submitted events, fees, and confirmed booth costs"
      },
      {
        "title": "Event Calendar Schedule",
        "image": "/assets/portfolio/ami_booth_calendar.png",
        "desc": "Monthly calendar showing confirmed days and conflict checks"
      }
    ],
    "role": "UX/UI Designer & Full-Stack Developer",
    "targetUsers": "นักวาดภาพประกอบ, ครีเอเตอร์, ผู้จัดบูธสินค้าคราฟต์ที่ต้องการควบคุมงบประมาณค่าบูธ",
    "duration": "Creator SaaS Project (2025–2026)",
    "designGoal": "เปลี่ยนการบันทึกค่าใช้จ่ายบูธในสมุดหรือ Excel ให้กลายเป็นระบบบัญชีค่าบูธที่คำนวณยอดเงินจริง ยอดค้างชำระ และยอดรอผลได้อย่างถูกต้อง",
    "problem": "งานอีเวนต์ขนาดใหญ่มักจัดหลายวัน (เสาร์-อาทิตย์) แต่ผู้จัดอาจให้สิทธิ์ออกบูธเพียงวันเดียว ทำให้ค่าใช้จ่ายในระบบเดิมที่คิดเหมาเต็มจำนวนคลาดเคลื่อน",
    "responsibilities": "ออกแบบ User Flow การยืนยันผลแบบแยกวัน (Partial Day Confirmation), ออกแบบตารางสรุปงบประมาณ (Budget Summary), พัฒนา REST API และเชื่อมต่อ MongoDB Atlas",
    "uxApproach": "ออกแบบ Modal ยืนยันสิทธิ์ที่มี Checkbox ให้เลือกเฉพาะวันที่ได้บูธจริง พร้อมแสดงยอดค่าบูธที่ปรับคำนวณใหม่ทันทีแบบเรียลไทม์",
    "keyDecisions": "1) Partial Acceptance Support: นับเฉพาะวันที่ได้บูธเข้าตารางจริงและคำนวณค่าบูธตามสัดส่วนวันที่ได้รับคัดเลือก\n2) Budget Separation: แยกค่าบูธที่ชำระแล้ว ค่าบูธค้างชำระ และงบประมาณที่อาจเกิดขึ้นจากงานที่รอผลออกจากกันอย่างชัดเจน\n3) Demo vs Cloud Auth: รองรับโหมด Demo สำหรับผู้เยี่ยมชมทั่วไป และ Cloud Sync สำหรับผู้ใช้อีเมลที่ลงทะเบียน",
    "devCollaboration": "พัฒนาฟูลสแต็กด้วย React 18, Material UI v6, Node.js REST API และ MongoDB Atlas พร้อมระบบ Offline Fallback ด้วย LocalStorage",
    "outcomeLearnings": "ช่วยให้ครีเอเตอร์ควบคุมงบประมาณค่าบูธได้อย่างแม่นยำ ประหยัดเวลาสรุปยอดค่าใช้จ่ายได้มากกว่า 70%",
    "keyFeatures": [
      "รองรับผลการสมัครแบบ Partial Acceptance แยกรายวันพร้อมคำนวณค่าบูธให้อัตโนมัติ",
      "ระบบบริหารงบประมาณ (Budget Ledger) แยกยอดจ่ายแล้วและยอดค้างชำระ",
      "ตารางใบสมัครพร้อมระบบกรองวันที่ เดือน ปี และสลับมุมมอง List/Column",
      "โหมด Demo Sandbox สำหรับผู้เยี่ยมชม และ Cloud Sync สำหรับสมาชิก",
      "Pastel Pink Design System"
    ]
  }
];

const activitiesData = [
  {
    id: "act-01",
    order: 1,
    title: "Portrait & Daily Vibes",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "Jan 2025",
    image: "/assets/activity/act_06_rujisaya_portrait.jpg",
    caption: "Bringing good energy, curiosity, and smiles to work and everyday life.",
    tag: "Personal"
  },
  {
    id: "act-02",
    order: 2,
    title: "Stadium Concert Night",
    category: "concerts",
    categoryLabel: "Live Music",
    date: "2026",
    image: "/assets/activity/act_16_stadium_concert.jpg",
    caption: "Electric atmosphere with an ocean of glowing lightsticks across the stadium arena.",
    tag: "Concert"
  },
  {
    id: "act-03",
    order: 3,
    title: "Art & Neon Spatial Exhibition",
    category: "creative",
    categoryLabel: "Art & Design",
    date: "Mar 2025",
    image: "/assets/activity/act_12_art_exhibition.jpg",
    caption: "Exploring immersive light installations, spatial design, and sensory color palettes.",
    tag: "Exhibition"
  },
  {
    id: "act-04",
    order: 4,
    title: "Fluffy Mood Booster",
    category: "pets",
    categoryLabel: "Life & Pets",
    date: "Dec 2024",
    image: "/assets/activity/act_04_dog_pet.jpg",
    caption: "A sweet puppy holding a flower to deliver warmth and joy.",
    tag: "Companion"
  },
  {
    id: "act-05",
    order: 5,
    title: "Concert Glow & Lightsticks",
    category: "concerts",
    categoryLabel: "Live Music",
    date: "Feb 2025",
    image: "/assets/activity/act_10_concert_lights.jpg",
    caption: "Singing along with fellow fans under vibrant neon lightstick waves.",
    tag: "Concert"
  },
  {
    id: "act-06",
    order: 6,
    title: "Weekend Cafe Hopping",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "Feb 2025",
    image: "/assets/activity/act_08_cafe_food.jpg",
    caption: "Discovering aesthetic cafes, delicious dishes, and relaxed weekend conversations.",
    tag: "Food & Cafe"
  },
  {
    id: "act-07",
    order: 7,
    title: "Stickers & Character Collectibles",
    category: "creative",
    categoryLabel: "Art & Design",
    date: "2026",
    image: "/assets/activity/act_17_design_collectibles.jpg",
    caption: "Collecting playful character art, custom stickers, and graphic illustrations.",
    tag: "Design Inspo"
  },
  {
    id: "act-08",
    order: 8,
    title: "Afternoon Cozy Cat Nap",
    category: "pets",
    categoryLabel: "Life & Pets",
    date: "Jan 2025",
    image: "/assets/activity/act_18_cat.jpg",
    caption: "The most peaceful furry companion taking a sweet afternoon nap.",
    tag: "Companion"
  },
  {
    id: "act-09",
    order: 9,
    title: "Weekend Moments & Explorations",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "Dec 2024",
    image: "/assets/activity/act_03_rujisaya_selfie.jpg",
    caption: "Exploring local creative spots and capturing everyday positive memories.",
    tag: "Lifestyle"
  },
  {
    id: "act-10",
    order: 10,
    title: "Concert Tickets & Photocards",
    category: "concerts",
    categoryLabel: "Live Music",
    date: "Mar 2025",
    image: "/assets/activity/act_11_concert_tickets.jpg",
    caption: "Cherished keepsake ticket stubs and special edition artist photocards.",
    tag: "Collectibles"
  },
  {
    id: "act-11",
    order: 11,
    title: "Design Pop-ups & Creative Booths",
    category: "creative",
    categoryLabel: "Art & Design",
    date: "2024",
    image: "/assets/activity/act_01_event.jpg",
    caption: "Observing creative retail layouts, interactive installations, and brand pop-ups.",
    tag: "Events"
  },
  {
    id: "act-12",
    order: 12,
    title: "Floral Color Inspiration",
    category: "creative",
    categoryLabel: "Art & Design",
    date: "2026",
    image: "/assets/activity/act_15_flower_bouquet.jpg",
    caption: "Fresh bouquets and rich natural color gradients that inspire UI palettes.",
    tag: "Color Inspo"
  },
  {
    id: "act-13",
    order: 13,
    title: "Street Style & City Walks",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "Feb 2025",
    image: "/assets/activity/act_09_street_sneakers.jpg",
    caption: "Comfortable sneakers on for long city walks and finding new architectural details.",
    tag: "Streetwear"
  },
  {
    id: "act-14",
    order: 14,
    title: "Theater & Cheering Banners",
    category: "concerts",
    categoryLabel: "Live Music",
    date: "Mar 2025",
    image: "/assets/activity/act_13_fan_cheering.jpg",
    caption: "Holding hand banners high together in the theater for our favorite performers.",
    tag: "Live Music"
  },
  {
    id: "act-15",
    order: 15,
    title: "Casual Mirror Fit Check",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "Dec 2024",
    image: "/assets/activity/act_05_rujisaya_mirror.jpg",
    caption: "Everyday casual style and good vibes before heading out into the city.",
    tag: "Personal"
  },
  {
    id: "act-16",
    order: 16,
    title: "Stadium Venue Arrival",
    category: "concerts",
    categoryLabel: "Live Music",
    date: "Aug 2025",
    image: "/assets/activity/act_14_tickets_venue.jpg",
    caption: "The tingling excitement outside the stadium gates right before the show.",
    tag: "Live Music"
  },
  {
    id: "act-17",
    order: 17,
    title: "Desk Setup & Sketch Notes",
    category: "creative",
    categoryLabel: "Art & Design",
    date: "Dec 2024",
    image: "/assets/activity/act_02_workshop.jpg",
    caption: "Favorite stationery, notebook sketches, and cute desk toys where ideas begin.",
    tag: "Desk Setup"
  }
];

async function seed() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB for seeding...");
    const db = client.db(DB_NAME);

    // Profile collection
    const profileCol = db.collection("profile");
    await profileCol.deleteMany({});
    await profileCol.insertOne({ ...profileData, updatedAt: new Date() });
    console.log("Seeded profile collection.");

    // Case studies collection
    const caseStudiesCol = db.collection("case_studies");
    await caseStudiesCol.deleteMany({});
    await caseStudiesCol.insertMany(caseStudiesData.map(c => ({ ...c, createdAt: new Date() })));
    console.log(`Seeded ${caseStudiesData.length} case studies.`);

    // Activities collection
    const activitiesCol = db.collection("activities");
    await activitiesCol.deleteMany({});
    await activitiesCol.insertMany(activitiesData.map(a => ({ ...a, createdAt: new Date() })));
    console.log(`Seeded ${activitiesData.length} activity items.`);

    console.log("Database seeding completed successfully!");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  seed();
}

module.exports = { profileData, caseStudiesData, activitiesData };
