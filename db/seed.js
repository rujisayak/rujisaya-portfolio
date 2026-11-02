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
    "mobileImage": "/assets/portfolio/leaya_screen_mobile.png",
    "mobileScreen": "/assets/portfolio/leaya_screen_mobile.png",
    "liveUrl": "https://leave-wfh-management.vercel.app/?demo=true",
    "demoUrl": "https://leave-wfh-management.vercel.app/?demo=true",
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
    "mobileImage": "/assets/portfolio/ami_screen_mobile.png",
    "mobileScreen": "/assets/portfolio/ami_screen_mobile.png",
    "liveUrl": "https://ami-booth-planner.vercel.app/?demo=true",
    "demoUrl": "https://ami-booth-planner.vercel.app/?demo=true",
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
,
  {
    "id": "ami-pos",
    "projectNum": 3,
    "displayTitle": "Ami POS ⚡️",
    "fullTitle": "Ami POS - Event-Driven Inventory & Overhead Cost Allocation",
    "shortSubtitle": "Event-driven creator POS with multi-booth inventory allocation, barcode generator, and automated overhead cost calculation.",
    "category": "creator economy & pos",
    "filterCategory": "creator",
    "badge": "live interactive",
    "badgeType": "live",
    "featured": true,
    "date": "Feb 2026",
    "summary": "ระบบ Point of Sale และบริหารจัดการงานออกบูธสำหรับครีเอเตอร์ รองรับการจัดสรรสต็อกแยกตามงาน (Event-Driven Inventory Allocation) คำนวณกระจายต้นทุนแฝงของงานบูธลงในสินค้าแต่ละชิ้นแบบเรียลไทม์ (Overhead Cost Allocation) พร้อมระบบแคชเชียร์คิดเงินความเร็วสูง ระบบโปรโมชั่นบันเดิล และเครื่องมือสร้างบาร์โค้ดสั่งพิมพ์สติกเกอร์ติดหน้าซองสินค้า",
    "image": "/assets/portfolio/ami_pos_screenshot_full.png",
    "mobileImage": "/assets/portfolio/ami_pos_screen_mobile.png",
    "mobileScreen": "/assets/portfolio/ami_pos_screen_mobile.png",
    "liveUrl": "https://ami-pos.vercel.app/?demo=true",
    "demoUrl": "https://ami-pos.vercel.app/?demo=true",
    "githubUrl": "https://github.com/rujisayak",
    "tags": [
      "Creator Economy",
      "Event-Driven POS",
      "Inventory Allocation",
      "React 18",
      "Material UI v6",
      "Cost Analysis"
    ],
    "previewCards": [
      {
        "title": "Interactive POS Dashboard",
        "date": "Feb 2026",
        "image": "/assets/portfolio/ami_pos_screenshot_full.png",
        "type": "laptop"
      },
      {
        "title": "Cashier & Inventory Management",
        "date": "Jan 2026",
        "image": "/assets/portfolio/ami_pos_screen_mobile.png",
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
        "name": "TypeScript",
        "type": "typescript"
      }
    ],
    "pillars": [
      {
        "icon": "dashboard",
        "label": "Overhead Cost Allocation"
      },
      {
        "icon": "users",
        "label": "High-Speed Cashier Flow"
      },
      {
        "icon": "analytics",
        "label": "Real-time Sales & Margins"
      },
      {
        "icon": "workflows",
        "label": "Multi-Booth Stock Sync"
      }
    ],
    "highlights": [
      {
        "icon": "link",
        "label": "100% Custom Components"
      },
      {
        "icon": "analytics",
        "label": "Amortized Overhead Engine"
      },
      {
        "icon": "database",
        "label": "Event-Driven Stock Deduction"
      },
      {
        "icon": "uiux",
        "label": "Modern Slate & Violet UI"
      },
      {
        "icon": "security",
        "label": "Instant Barcode Printing"
      },
      {
        "icon": "templates",
        "label": "Dynamic Promotion Bundles"
      }
    ],
    "styleGuide": {
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "palette": [
        {
          "name": "Royal Violet",
          "hex": "#7C3AED"
        },
        {
          "name": "Deep Slate",
          "hex": "#0F172A"
        },
        {
          "name": "Soft Lavender",
          "hex": "#EDE9FE"
        },
        {
          "name": "Emerald Profit",
          "hex": "#10B981"
        },
        {
          "name": "Surface White",
          "hex": "#FFFFFF"
        }
      ]
    },
    "featureZoom": {
      "title": "Amortized Overhead Cost & Event-Driven Inventory Engine",
      "description": "คำนวณและกระจายต้นทุนแฝงของงานบูธ (ค่าเช่าที่พัก ค่าเดินทาง ค่าจองบูธ) เฉลี่ยลงในสินค้าแต่ละชิ้นแบบอัตโนมัติ เพื่อให้ครีเอเตอร์ทราบกำไรสุทธิที่แท้จริง พร้อมระบบตัดสต็อกแยกรายบูธ",
      "tags": [
        {
          "label": "Role",
          "value": "End-to-End Product Designer & Architect"
        },
        {
          "label": "Target Users",
          "value": "Indie Creators, Illustrators & Event Sellers"
        },
        {
          "label": "Key Solution",
          "value": "Overhead Allocation & High-Speed POS"
        }
      ],
      "image": "/assets/portfolio/ami_pos_screenshot_full.png"
    },
    "multiScreens": [
      {
        "title": "Performance Dashboard & Analytics",
        "image": "/assets/portfolio/ami_pos_screenshot_full.png",
        "desc": "Real-time revenue, gross vs net profits, AOV and overhead absorption breakdown"
      },
      {
        "title": "Mobile Cashier & Quick POS View",
        "image": "/assets/portfolio/ami_pos_screen_mobile.png",
        "desc": "Responsive touch-friendly mobile POS terminal for on-the-go festival transactions"
      },
      {
        "title": "Products & Automated Barcode Generator",
        "image": "/assets/portfolio/ami_pos_screenshot_full.png",
        "desc": "SKU catalog management with standard 50x30mm thermal label sticker printing"
      },
      {
        "title": "Booth Planner & Inventory Sync",
        "image": "/assets/portfolio/ami_pos_screenshot_full.png",
        "desc": "Event-driven stock allocation with automated amortized expense per item"
      }
    ],
    "role": "End-to-End Product Designer & Front-End Architecture",
    "targetUsers": "นักวาดภาพประกอบ (Illustrators), ศิลปินทำของกุ๊กกิ๊ก/สติกเกอร์, แบรนด์คราฟต์ และครีเอเตอร์ที่ออกบูธขายสินค้าตามงานอีเวนต์",
    "duration": "Creator SaaS Project (2025–2026)",
    "designGoal": "Design Goal: พัฒนาระบบ POS สำหรับครีเอเตอร์ออกบูธที่เชื่อมโยงการบริหารสต็อกและการจัดสรรต้นทุนแฝง (Overhead Cost Allocation) เข้ากับระบบแคชเชียร์ขายหน้าร้าน พร้อมรองรับโปรโมชั่นบันเดิลและการยิงบาร์โค้ด",
    "problem": "การออกบูธของครีเอเตอร์มักประสบปัญหาไม่ทราบกำไรสุทธิที่แท้จริง เนื่องจากมีต้นทุนแฝงสูง (ค่าเดินทาง, ค่าที่พัก, ค่าธรรมเนียมบูธ) ที่ไม่ได้ถูกนำมาคำนวณต่อชิ้น และการจัดการสต็อกที่ปะปนกันระหว่างสต็อกหลักกับสต็อกที่แบ่งไปขายตามงานอีเวนต์ต่างๆ ทำให้สินค้าขาดหรือนับสต็อกผิดพลาด",
    "responsibilities": "วิเคราะห์ปัญหาเวิร์กโฟลว์การขายหน้าบูธของกลุ่มศิลปิน, ออกแบบสถาปัตยกรรมข้อมูล (Information Architecture) สำหรับการกระจายต้นทุนแฝง, ออกแบบ UI สไตล์ Modern Slate & Violet Dashboard ด้วย Material UI และพัฒนาฟูลฟังก์ชัน Sandbox Demo Mode",
    "uxApproach": "ออกแบบอินเทอร์เฟซ 2 โหมดหลัก: หน้า Dashboard แสดงภาพรวมการเงินและอัตราการซึมซับต้นทุนแฝง (Overhead Absorption) และหน้า POS Register ที่เน้นความเร็วในการคิดเงิน เพิ่มสินค้าเข้าตะกร้าอย่างรวดเร็ว รองรับคีย์ลัดและโปรโมชั่นบันเดิลอัตโนมัติ",
    "keyDecisions": "1) Event-Driven Overhead Allocation: ระบบเฉลี่ยค่าใช้จ่ายรวมของงานบูธกระจายลงในต้นทุนสินค้าแต่ละชิ้นที่นำมาจัดสรรโดยอัตโนมัติ\n2) Smart Bundle Discounts: รองรับโปรโมชั่น ซื้อ X แถม Y โดยคำนวณหักส่วนลดเป็นมูลค่าของชิ้นที่แถม พร้อมตัดสต็อกจริงครบทุกหน่วย\n3) Interactive In-Memory Sandbox: ผู้ใช้งานสามารถทดลองยิงบาร์โค้ด จำลองการขาย และปรับสต็อกได้ทันทีในโหมด Demo โดยไม่ต้องเชื่อมต่อฐานข้อมูลจริง",
    "devCollaboration": "พัฒนาด้วย React 18, Vite, Material UI (MUI v6), Emotion, TypeScript และ Lucide Icons พร้อมระบบจำลองแคชเชียร์และ Local Data Layer",
    "outcomeLearnings": "ช่วยให้ครีเอเตอร์ทราบต้นทุนต่อหน่วยที่แท้จริง ตัดสต็อกสินค้าแยกรายบูธได้อย่างแม่นยำ 100% และลดเวลาในการคิดเงินหน้าบูธช่วงเวลาพีคได้กว่า 65%",
    "keyFeatures": [
      "ระบบจัดสรรต้นทุนแฝงของงานบูธกระจายลงในสินค้าแต่ละชิ้นอัตโนมัติ (Overhead Cost Allocation)",
      "ระบบตัดสต็อกสินค้าแยกรายบูธตามคำสั่งซื้อ (Event-Driven Inventory Deduction)",
      "หน้าจอแคชเชียร์ POS ความเร็วสูง รองรับการค้นหาด่วนและเครื่องยิงบาร์โค้ด",
      "ระบบโปรโมชั่นและส่วนลดบันเดิลอัจฉริยะ (ซื้อ X แถม Y, ขั้นต่ำ)",
      "เครื่องมือสร้างบาร์โค้ดและคำสั่งพิมพ์สติกเกอร์ 50x30 มม. ติดหน้าซองสินค้า",
      "โหมด Sandbox Demo สำหรับทดลองใช้งานโดยไม่กระทบฐานข้อมูลจริง"
    ],
    "displayTitle_en": "Ami POS ⚡️",
    "displayTitle_th": "Ami POS ⚡️",
    "fullTitle_en": "Ami POS - Event-Driven Inventory & Overhead Cost Allocation",
    "fullTitle_th": "Ami POS - ระบบจัดการสต็อกและต้นทุนแฝงงานอีเวนต์สำหรับครีเอเตอร์",
    "shortSubtitle_en": "Event-driven creator POS with multi-booth inventory allocation, barcode generator, and automated overhead cost calculation.",
    "shortSubtitle_th": "ระบบ POS และคลังสินค้าสำหรับครีเอเตอร์ออกบูธ พร้อมคำนวณต้นทุนแฝงและตัดสต็อกแยกรายบูธอัตโนมัติ",
    "category_en": "creator economy & pos",
    "category_th": "ครีเอเตอร์ & ระบบ POS งานอีเวนต์",
    "summary_th": "ระบบ Point of Sale และบริหารจัดการงานออกบูธสำหรับครีเอเตอร์ รองรับการจัดสรรสต็อกแยกตามงาน (Event-Driven Inventory Allocation) คำนวณกระจายต้นทุนแฝงของงานบูธลงในสินค้าแต่ละชิ้นแบบเรียลไทม์ (Overhead Cost Allocation) พร้อมระบบแคชเชียร์คิดเงินความเร็วสูง ระบบโปรโมชั่นบันเดิล และเครื่องมือสร้างบาร์โค้ดสั่งพิมพ์สติกเกอร์ติดหน้าซองสินค้า",
    "summary_en": "An event-driven creator Point of Sale & booth inventory platform designed to automate overhead expense amortization per item, manage decentralized multi-event stock pools, and streamline rapid checkout with dynamic bundle discounts.",
    "targetUsers_th": "นักวาดภาพประกอบ (Illustrators), ศิลปินทำของกุ๊กกิ๊ก/สติกเกอร์, แบรนด์คราฟต์ และครีเอเตอร์ที่ออกบูธขายสินค้าตามงานอีเวนต์",
    "targetUsers_en": "Illustrators, Comic Artists, Indie Merch Creators, and Pop-up Event Sellers",
    "designGoal_th": "Design Goal: พัฒนาระบบ POS สำหรับครีเอเตอร์ออกบูธที่เชื่อมโยงการบริหารสต็อกและการจัดสรรต้นทุนแฝง (Overhead Cost Allocation) เข้ากับระบบแคชเชียร์ขายหน้าร้าน พร้อมรองรับโปรโมชั่นบันเดิลและการยิงบาร์โค้ด",
    "designGoal_en": "Design Goal: Build an end-to-end POS system tailored for pop-up creator events that ties event overhead expenses directly into unit costs, protects master stock pools, and speeds up festival checkout.",
    "problem_th": "การออกบูธของครีเอเตอร์มักประสบปัญหาไม่ทราบกำไรสุทธิที่แท้จริง เนื่องจากมีต้นทุนแฝงสูง (ค่าเดินทาง, ค่าที่พัก, ค่าธรรมเนียมบูธ) ที่ไม่ได้ถูกนำมาคำนวณต่อชิ้น และการจัดการสต็อกที่ปะปนกันระหว่างสต็อกหลักกับสต็อกที่แบ่งไปขายตามงานอีเวนต์ต่างๆ ทำให้สินค้าขาดหรือนับสต็อกผิดพลาด",
    "problem_en": "Independent artists and event sellers face massive hidden overheads (booth rent, hotel, transport) that are rarely factored into per-unit profitability, coupled with inventory shrinkage caused by mingling main stock with event batches.",
    "responsibilities_th": "วิเคราะห์ปัญหาเวิร์กโฟลว์การขายหน้าบูธของกลุ่มศิลปิน, ออกแบบสถาปัตยกรรมข้อมูล (Information Architecture) สำหรับการกระจายต้นทุนแฝง, ออกแบบ UI สไตล์ Modern Slate & Violet Dashboard ด้วย Material UI และพัฒนาฟูลฟังก์ชัน Sandbox Demo Mode",
    "responsibilities_en": "Conducted workflow discovery with convention sellers, designed overhead amortization IA, built a high-density Slate & Violet dashboard with Material UI, and engineered an interactive in-memory demo sandbox.",
    "uxApproach_th": "ออกแบบอินเทอร์เฟซ 2 โหมดหลัก: หน้า Dashboard แสดงภาพรวมการเงินและอัตราการซึมซับต้นทุนแฝง (Overhead Absorption) และหน้า POS Register ที่เน้นความเร็วในการคิดเงิน เพิ่มสินค้าเข้าตะกร้าอย่างรวดเร็ว รองรับคีย์ลัดและโปรโมชั่นบันเดิลอัตโนมัติ",
    "uxApproach_en": "Structured two primary focal modes: an executive Dashboard visualizing absorbed overhead vs net profit, and a rapid POS Register prioritizing sub-second item addition, barcode scanner inputs, and automatic bundle discount triggers.",
    "keyDecisions_th": "1) Event-Driven Overhead Allocation: ระบบเฉลี่ยค่าใช้จ่ายรวมของงานบูธกระจายลงในต้นทุนสินค้าแต่ละชิ้นที่นำมาจัดสรรโดยอัตโนมัติ\n2) Smart Bundle Discounts: รองรับโปรโมชั่น ซื้อ X แถม Y โดยคำนวณหักส่วนลดเป็นมูลค่าของชิ้นที่แถม พร้อมตัดสต็อกจริงครบทุกหน่วย\n3) Interactive In-Memory Sandbox: ผู้ใช้งานสามารถทดลองยิงบาร์โค้ด จำลองการขาย และปรับสต็อกได้ทันทีในโหมด Demo โดยไม่ต้องเชื่อมต่อฐานข้อมูลจริง",
    "keyDecisions_en": "1) Event-Driven Overhead Allocation: Automatically calculate total event overhead (booth fee + travel) divided by allocated units to compute true net margin.\n2) Smart Bundle Logic: Dynamic Buy X Get Y Free discounts that accurately deduct free item values on receipts while depleting true inventory quantities.\n3) Zero-Barrier Sandbox Mode: Instant in-memory demo allowing recruiters and visitors to simulate full cashier sales without database credentials.",
    "devCollaboration_th": "พัฒนาด้วย React 18, Vite, Material UI (MUI v6), Emotion, TypeScript และ Lucide Icons พร้อมระบบจำลองแคชเชียร์และ Local Data Layer",
    "devCollaboration_en": "Engineered with React 18, Vite, Material UI v6, Emotion, TypeScript, and Lucide Icons with in-memory cashier simulation.",
    "outcomeLearnings_th": "ช่วยให้ครีเอเตอร์ทราบต้นทุนต่อหน่วยที่แท้จริง ตัดสต็อกสินค้าแยกรายบูธได้อย่างแม่นยำ 100% และลดเวลาในการคิดเงินหน้าบูธช่วงเวลาพีคได้กว่า 65%",
    "outcomeLearnings_en": "Empowered creators with crystal-clear per-item net profit visibility, 100% accurate multi-event stock reconciliation, and over 65% faster festival checkout speeds during peak hours.",
    "keyFeatures_th": [
      "ระบบจัดสรรต้นทุนแฝงของงานบูธกระจายลงในสินค้าแต่ละชิ้นอัตโนมัติ (Overhead Cost Allocation)",
      "ระบบตัดสต็อกสินค้าแยกรายบูธตามคำสั่งซื้อ (Event-Driven Inventory Deduction)",
      "หน้าจอแคชเชียร์ POS ความเร็วสูง รองรับการค้นหาด่วนและเครื่องยิงบาร์โค้ด",
      "ระบบโปรโมชั่นและส่วนลดบันเดิลอัจฉริยะ (ซื้อ X แถม Y, ขั้นต่ำ)",
      "เครื่องมือสร้างบาร์โค้ดและคำสั่งพิมพ์สติกเกอร์ 50x30 มม. ติดหน้าซองสินค้า",
      "โหมด Sandbox Demo สำหรับทดลองใช้งานโดยไม่กระทบฐานข้อมูลจริง"
    ],
    "keyFeatures_en": [
      "Automated per-item event overhead cost allocation & amortization engine",
      "Event-driven inventory allocation preventing main stock de-synchronization",
      "High-speed POS cashier register with instant search and barcode scanner support",
      "Intelligent promotional bundle discount calculations (Buy X Get Y, spend tiers)",
      "Built-in barcode generator with thermal label sticker printing (50x30mm)",
      "Full interactive sandbox demo mode for friction-free visitor testing"
    ],
    "status": "published",
    "draft": {
      "displayTitle": "Ami POS ⚡️",
      "fullTitle": "Ami POS - Event-Driven Inventory & Overhead Cost Allocation",
      "shortSubtitle": "Event-driven creator POS with multi-booth inventory allocation, barcode generator, and automated overhead cost calculation.",
      "category": "creator economy & pos",
      "summary": "ระบบ Point of Sale และบริหารจัดการงานออกบูธสำหรับครีเอเตอร์ รองรับการจัดสรรสต็อกแยกตามงาน (Event-Driven Inventory Allocation) คำนวณกระจายต้นทุนแฝงของงานบูธลงในสินค้าแต่ละชิ้นแบบเรียลไทม์ (Overhead Cost Allocation) พร้อมระบบแคชเชียร์คิดเงินความเร็วสูง ระบบโปรโมชั่นบันเดิล และเครื่องมือสร้างบาร์โค้ดสั่งพิมพ์สติกเกอร์ติดหน้าซองสินค้า",
      "liveUrl": "https://ami-pos.vercel.app/?demo=true",
      "demoUrl": "https://ami-pos.vercel.app/?demo=true"
    }
  }];

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
