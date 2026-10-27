const fs = require('fs');
const path = require('path');

const seedPath = path.join(__dirname, '../db/seedFallback.json');
const seed = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

const initialCMSData = {
  version: 1,
  lastUpdated: new Date().toISOString(),
  siteSettings: {
    published: {
      siteTitle: {
        en: "Rujisaya Kuekool — UX/UI Designer",
        th: "รุจิสยา เกื้อกูล — UX/UI Designer"
      },
      metaDescription: {
        en: "Designing intuitive enterprise experiences for complex systems, turning technical requirements and data-heavy workflows into clear, scalable interfaces.",
        th: "ผู้ออกแบบประสบการณ์การใช้งานระบบ Enterprise ที่มีความซับซ้อน เปลี่ยนข้อกำหนดทางเทคนิคและเวิร์กโฟลว์ข้อมูลขนาดใหญ่ ให้เป็นอินเทอร์เฟซที่ใช้งานง่าย ชัดเจน"
      },
      favicon: "/assets/avatar_square.png",
      ogImage: "/assets/portfolio/leaya_screenshot_full.png",
      primaryColor: "#231815",
      accentColor: "#4DA6FF",
      defaultLang: "en"
    },
    draft: {
      siteTitle: {
        en: "Rujisaya Kuekool — UX/UI Designer",
        th: "รุจิสยา เกื้อกูล — UX/UI Designer"
      },
      metaDescription: {
        en: "Designing intuitive enterprise experiences for complex systems, turning technical requirements and data-heavy workflows into clear, scalable interfaces.",
        th: "ผู้ออกแบบประสบการณ์การใช้งานระบบ Enterprise ที่มีความซับซ้อน เปลี่ยนข้อกำหนดทางเทคนิคและเวิร์กโฟลว์ข้อมูลขนาดใหญ่ ให้เป็นอินเทอร์เฟซที่ใช้งานง่าย ชัดเจน"
      },
      favicon: "/assets/avatar_square.png",
      ogImage: "/assets/portfolio/leaya_screenshot_full.png",
      primaryColor: "#231815",
      accentColor: "#4DA6FF",
      defaultLang: "en"
    }
  },
  hero: {
    published: {
      miniLinks: [
        { en: "enterprise ux", th: "ออกแบบระบบ enterprise" },
        { en: "portfolio", th: "พอร์ตโฟลิโอ" },
        { en: "developer handoff", th: "ส่งมอบงานนักพัฒนา" }
      ],
      cursiveScript: "UX UI",
      chunkyTitle: "portfolio",
      yearLabel: {
        en: "by Toeyruji",
        th: "โดย เตยรุจิ"
      },
      bioLead: {
        en: "Hi, I'm <strong>Rujisaya (Toey)</strong> — UX/UI Designer. I design intuitive enterprise experiences for complex systems, turning dense technical requirements and data-heavy workflows into clear, scalable interfaces.",
        th: "สวัสดีค่ะ ฉันชื่อ <strong>รุจิสยา (เตย)</strong> — UX/UI Designer ผู้ออกแบบประสบการณ์การใช้งานระบบ Enterprise ที่มีความซับซ้อน เปลี่ยนข้อกำหนดทางเทคนิคและเวิร์กโฟลว์ข้อมูลขนาดใหญ่ ให้เป็นอินเทอร์เฟซที่ใช้งานง่าย ชัดเจน และพร้อมขยายขีดความสามารถ"
      },
      stats: [
        { en: "⚡️ 2+ Years CyberSec UX", th: "⚡️ ประสบการณ์ CyberSec UX 2+ ปี" },
        { en: "🎓 3.73 First Class Honors (IT)", th: "🎓 เกียรตินิยมอันดับ 1 IT (3.73)" },
        { en: "🤝 End-to-End: UX Flows to Dev Handoff", th: "🤝 ครบวงจร: จาก UX Flows สู่ Dev Handoff" }
      ],
      ctaButtons: [
        { en: "explore projects", th: "สำรวจผลงาน", url: "#projects", type: "primary" },
        { en: "download resume (pdf)", th: "ดาวน์โหลดเรซูเม่ (PDF)", url: "/Rujisaya Resume.pdf", type: "secondary" }
      ]
    },
    draft: {
      miniLinks: [
        { en: "enterprise ux", th: "ออกแบบระบบ enterprise" },
        { en: "portfolio", th: "พอร์ตโฟลิโอ" },
        { en: "developer handoff", th: "ส่งมอบงานนักพัฒนา" }
      ],
      cursiveScript: "UX UI",
      chunkyTitle: "portfolio",
      yearLabel: {
        en: "by Toeyruji",
        th: "โดย เตยรุจิ"
      },
      bioLead: {
        en: "Hi, I'm <strong>Rujisaya (Toey)</strong> — UX/UI Designer. I design intuitive enterprise experiences for complex systems, turning dense technical requirements and data-heavy workflows into clear, scalable interfaces.",
        th: "สวัสดีค่ะ ฉันชื่อ <strong>รุจิสยา (เตย)</strong> — UX/UI Designer ผู้ออกแบบประสบการณ์การใช้งานระบบ Enterprise ที่มีความซับซ้อน เปลี่ยนข้อกำหนดทางเทคนิคและเวิร์กโฟลว์ข้อมูลขนาดใหญ่ ให้เป็นอินเทอร์เฟซที่ใช้งานง่าย ชัดเจน และพร้อมขยายขีดความสามารถ"
      },
      stats: [
        { en: "⚡️ 2+ Years CyberSec UX", th: "⚡️ ประสบการณ์ CyberSec UX 2+ ปี" },
        { en: "🎓 3.73 First Class Honors (IT)", th: "🎓 เกียรตินิยมอันดับ 1 IT (3.73)" },
        { en: "🤝 End-to-End: UX Flows to Dev Handoff", th: "🤝 ครบวงจร: จาก UX Flows สู่ Dev Handoff" }
      ],
      ctaButtons: [
        { en: "explore projects", th: "สำรวจผลงาน", url: "#projects", type: "primary" },
        { en: "download resume (pdf)", th: "ดาวน์โหลดเรซูเม่ (PDF)", url: "/Rujisaya Resume.pdf", type: "secondary" }
      ]
    }
  },
  about: {
    published: {
      greeting: {
        en: "Hi, I'm Toey!",
        th: "สวัสดีค่ะ เตยเองนะคะ!"
      },
      avatar: "/assets/avatar_square.png",
      bioParagraph: {
        en: "I design web interfaces for desktop and complex systems. In my work, I combine Adaptive and Responsive design techniques. I place a strong emphasis on usability and overall user experience.",
        th: "ฉันออกแบบอินเทอร์เฟซสำหรับเดสก์ท็อปและระบบงานที่มีความซับซ้อน โดยผสานเทคนิคการออกแบบทั้ง Adaptive และ Responsive เข้าด้วยกัน ให้ความสำคัญสูงสุดกับความง่ายในการใช้งานและประสบการณ์ที่ดีของผู้ใช้"
      },
      specialties: [
        {
          title: { en: "Enterprise & Cybersecurity UX", th: "Enterprise & Cybersecurity UX" },
          desc: {
            en: "creating complex software workflows (detection rule logic builders, threat portals, and SIEM monitoring dashboards).",
            th: "ออกแบบเวิร์กโฟลว์ซอฟต์แวร์ระดับองค์กร (ระบบสร้าง Detection Rule, พอร์ทัลจัดการภัยคุกคาม และแดชบอร์ดมอนิเตอร์ SIEM)"
          }
        },
        {
          title: { en: "Design Systems & Developer Handoff", th: "Design Systems & Developer Handoff" },
          desc: {
            en: "component tokens, detailed UI flow blueprints, validation & error state design, and API parameter alignment in Figma.",
            th: "วางระบบ Component Tokens, แผนผัง UI Flow อย่างละเอียด, ออกแบบ Error State และประสานค่าพารามิเตอร์ API ใน Figma"
          }
        },
        {
          title: { en: "Usability Evaluation & QA", th: "Usability Evaluation & QA" },
          desc: {
            en: "internal prototype testing, heuristic usability reviews, and beta feedback loops with backend engineers.",
            th: "ทดสอบ Prototype ภายใน, ตรวจสอบความยากง่ายตามหลัก Heuristic และรวบรวมข้อเสนอแนะช่วง Beta ร่วมกับนักพัฒนา"
          }
        }
      ],
      experience: [
        {
          period: { en: "2023 — Present", th: "2023 — ปัจจุบัน" },
          role: { en: "UX/UI Designer, Security Pitch Co., Ltd.", th: "UX/UI Designer, บริษัท ซีเคียวริตี้ พิทช์ จำกัด" }
        },
        {
          period: { en: "2023 (Jan — Apr)", th: "2023 (ม.ค. — เม.ย.)" },
          role: { en: "UX/UI Intern, Security Pitch Co., Ltd.", th: "นักศึกษาฝึกงาน UX/UI, บริษัท ซีเคียวริตี้ พิทช์ จำกัด" }
        },
        {
          period: { en: "2019 — 2023", th: "2019 — 2023" },
          role: { en: "B.Sc. Information Technology (GPA 3.73, First Class Honors)", th: "วท.บ. เทคโนโลยีสารสนเทศ (เกียรตินิยมอันดับ 1, GPA 3.73)" }
        }
      ],
      skills: [
        { en: "Product & System Design", th: "การออกแบบผลิตภัณฑ์ & สถาปัตยกรรมระบบ" },
        { en: "Design Systems & Component Tokens", th: "Design Systems & Component Tokens" },
        { en: "Backend UI Flow Documentation", th: "เอกสารผังการทำงานสำหรับทีม Backend" },
        { en: "Heuristic Usability Review & QA", th: "ตรวจสอบการใช้งาน Heuristic & QA" },
        { en: "Figma, Adobe XD, Photoshop, Illustrator", th: "Figma, Adobe XD, Photoshop, Illustrator" }
      ]
    },
    draft: {
      greeting: {
        en: "Hi, I'm Toey!",
        th: "สวัสดีค่ะ เตยเองนะคะ!"
      },
      avatar: "/assets/avatar_square.png",
      bioParagraph: {
        en: "I design web interfaces for desktop and complex systems. In my work, I combine Adaptive and Responsive design techniques. I place a strong emphasis on usability and overall user experience.",
        th: "ฉันออกแบบอินเทอร์เฟซสำหรับเดสก์ท็อปและระบบงานที่มีความซับซ้อน โดยผสานเทคนิคการออกแบบทั้ง Adaptive และ Responsive เข้าด้วยกัน ให้ความสำคัญสูงสุดกับความง่ายในการใช้งานและประสบการณ์ที่ดีของผู้ใช้"
      },
      specialties: [
        {
          title: { en: "Enterprise & Cybersecurity UX", th: "Enterprise & Cybersecurity UX" },
          desc: {
            en: "creating complex software workflows (detection rule logic builders, threat portals, and SIEM monitoring dashboards).",
            th: "ออกแบบเวิร์กโฟลว์ซอฟต์แวร์ระดับองค์กร (ระบบสร้าง Detection Rule, พอร์ทัลจัดการภัยคุกคาม และแดชบอร์ดมอนิเตอร์ SIEM)"
          }
        },
        {
          title: { en: "Design Systems & Developer Handoff", th: "Design Systems & Developer Handoff" },
          desc: {
            en: "component tokens, detailed UI flow blueprints, validation & error state design, and API parameter alignment in Figma.",
            th: "วางระบบ Component Tokens, แผนผัง UI Flow อย่างละเอียด, ออกแบบ Error State และประสานค่าพารามิเตอร์ API ใน Figma"
          }
        },
        {
          title: { en: "Usability Evaluation & QA", th: "Usability Evaluation & QA" },
          desc: {
            en: "internal prototype testing, heuristic usability reviews, and beta feedback loops with backend engineers.",
            th: "ทดสอบ Prototype ภายใน, ตรวจสอบความยากง่ายตามหลัก Heuristic และรวบรวมข้อเสนอแนะช่วง Beta ร่วมกับนักพัฒนา"
          }
        }
      ],
      experience: [
        {
          period: { en: "2023 — Present", th: "2023 — ปัจจุบัน" },
          role: { en: "UX/UI Designer, Security Pitch Co., Ltd.", th: "UX/UI Designer, บริษัท ซีเคียวริตี้ พิทช์ จำกัด" }
        },
        {
          period: { en: "2023 (Jan — Apr)", th: "2023 (ม.ค. — เม.ย.)" },
          role: { en: "UX/UI Intern, Security Pitch Co., Ltd.", th: "นักศึกษาฝึกงาน UX/UI, บริษัท ซีเคียวริตี้ พิทช์ จำกัด" }
        },
        {
          period: { en: "2019 — 2023", th: "2019 — 2023" },
          role: { en: "B.Sc. Information Technology (GPA 3.73, First Class Honors)", th: "วท.บ. เทคโนโลยีสารสนเทศ (เกียรตินิยมอันดับ 1, GPA 3.73)" }
        }
      ],
      skills: [
        { en: "Product & System Design", th: "การออกแบบผลิตภัณฑ์ & สถาปัตยกรรมระบบ" },
        { en: "Design Systems & Component Tokens", th: "Design Systems & Component Tokens" },
        { en: "Backend UI Flow Documentation", th: "เอกสารผังการทำงานสำหรับทีม Backend" },
        { en: "Heuristic Usability Review & QA", th: "ตรวจสอบการใช้งาน Heuristic & QA" },
        { en: "Figma, Adobe XD, Photoshop, Illustrator", th: "Figma, Adobe XD, Photoshop, Illustrator" }
      ]
    }
  },
  resume: {
    published: {
      pretitle: { en: "CREDENTIALS", th: "ประวัติและข้อมูลวิชาชีพ" },
      title: { en: "Resume & Portfolio Deck", th: "เอกสารเรซูเม่ & พอร์ตโฟลิโอฉบับเต็ม" },
      description: {
        en: "View the complete summary of my professional experience, education, skills, and design portfolio. Available for immediate download in PDF format.",
        th: "ดูสรุปประสบการณ์การทำงาน การศึกษา ทักษะ และผลงานออกแบบฉบับเต็ม พร้อมดาวน์โหลดในรูปแบบไฟล์ PDF ได้ทันที"
      },
      resumePdfUrl: "/Rujisaya Resume.pdf",
      portfolioPdfUrl: "/PortfolioRujisaya.pdf",
      previewImage: "/assets/resume_preview.png",
      checklists: [
        { en: "2+ Years Cybersecurity Dashboard Experience", th: "ประสบการณ์ออกแบบแดชบอร์ด Cybersecurity 2+ ปี" },
        { en: "First Class Honors in IT (Suan Dusit University)", th: "เกียรตินิยมอันดับ 1 สาขา IT (มหาวิทยาลัยสวนดุสิต)" },
        { en: "Proven Developer Handoff & UI Flow Documentation", th: "ความเชี่ยวชาญการทำเอกสารส่งมอบงาน (Developer Handoff) และ UI Flow" }
      ]
    },
    draft: {
      pretitle: { en: "CREDENTIALS", th: "ประวัติและข้อมูลวิชาชีพ" },
      title: { en: "Resume & Portfolio Deck", th: "เอกสารเรซูเม่ & พอร์ตโฟลิโอฉบับเต็ม" },
      description: {
        en: "View the complete summary of my professional experience, education, skills, and design portfolio. Available for immediate download in PDF format.",
        th: "ดูสรุปประสบการณ์การทำงาน การศึกษา ทักษะ และผลงานออกแบบฉบับเต็ม พร้อมดาวน์โหลดในรูปแบบไฟล์ PDF ได้ทันที"
      },
      resumePdfUrl: "/Rujisaya Resume.pdf",
      portfolioPdfUrl: "/PortfolioRujisaya.pdf",
      previewImage: "/assets/resume_preview.png",
      checklists: [
        { en: "2+ Years Cybersecurity Dashboard Experience", th: "ประสบการณ์ออกแบบแดชบอร์ด Cybersecurity 2+ ปี" },
        { en: "First Class Honors in IT (Suan Dusit University)", th: "เกียรตินิยมอันดับ 1 สาขา IT (มหาวิทยาลัยสวนดุสิต)" },
        { en: "Proven Developer Handoff & UI Flow Documentation", th: "ความเชี่ยวชาญการทำเอกสารส่งมอบงาน (Developer Handoff) และ UI Flow" }
      ]
    }
  },
  contact: {
    published: {
      pretitle: { en: "DIRECT INQUIRIES // GET IN TOUCH", th: "ติดต่อโดยตรง // สอบถามข้อมูล" },
      title: { en: "Let's Connect", th: "มาร่วมงานกัน" },
      subtitle: {
        en: "I am always open to discussing enterprise UX/UI roles, complex software challenges, and creative collaborations.",
        th: "ยินดีเปิดรับโอกาสการร่วมงานตำแหน่ง Enterprise UX/UI ความท้าทายในระบบซอฟต์แวร์ และโปรเจกต์สร้างสรรค์เสมอค่ะ"
      },
      email: "rujisaya1002@gmail.com",
      phone: "(+66) 85 472 2195",
      lineId: "baitoeyrujisaya",
      location: {
        en: "Bangkok, Thailand (On-site / Remote / Hybrid)",
        th: "กรุงเทพมหานคร, ประเทศไทย (On-site / Remote / Hybrid)"
      },
      socialLinks: [
        { label: "GitHub", url: "https://github.com/rujisayak" }
      ]
    },
    draft: {
      pretitle: { en: "DIRECT INQUIRIES // GET IN TOUCH", th: "ติดต่อโดยตรง // สอบถามข้อมูล" },
      title: { en: "Let's Connect", th: "มาร่วมงานกัน" },
      subtitle: {
        en: "I am always open to discussing enterprise UX/UI roles, complex software challenges, and creative collaborations.",
        th: "ยินดีเปิดรับโอกาสการร่วมงานตำแหน่ง Enterprise UX/UI ความท้าทายในระบบซอฟต์แวร์ และโปรเจกต์สร้างสรรค์เสมอค่ะ"
      },
      email: "rujisaya1002@gmail.com",
      phone: "(+66) 85 472 2195",
      lineId: "baitoeyrujisaya",
      location: {
        en: "Bangkok, Thailand (On-site / Remote / Hybrid)",
        th: "กรุงเทพมหานคร, ประเทศไทย (On-site / Remote / Hybrid)"
      },
      socialLinks: [
        { label: "GitHub", url: "https://github.com/rujisayak" }
      ]
    }
  },
  caseStudies: seed.caseStudies.map(cs => ({
    ...cs,
    status: 'published',
    draft: { ...cs }
  })),
  activities: seed.activities.map(act => ({
    ...act,
    status: 'published',
    draft: { ...act }
  })),
  mediaLibrary: [
    {
      id: "media-avatar",
      filename: "avatar_square.png",
      url: "/assets/avatar_square.png",
      mimeType: "image/png",
      size: 154000,
      altText: { en: "Rujisaya Portrait", th: "รูปโปรไฟล์ รุจิสยา" },
      uploadedAt: new Date().toISOString()
    },
    {
      id: "media-leaya-full",
      filename: "leaya_screenshot_full.png",
      url: "/assets/portfolio/leaya_screenshot_full.png",
      mimeType: "image/png",
      size: 420000,
      altText: { en: "Leaya Dashboard Overview", th: "ภาพรวมแดชบอร์ด Leaya" },
      uploadedAt: new Date().toISOString()
    },
    {
      id: "media-ami-dashboard",
      filename: "ami_screen_dashboard.png",
      url: "/assets/portfolio/ami_screen_dashboard.png",
      mimeType: "image/png",
      size: 380000,
      altText: { en: "Ami Booth Planner Dashboard", th: "แดชบอร์ดภาพรวม Ami Booth Planner" },
      uploadedAt: new Date().toISOString()
    }
  ],
  revisions: []
};

const outputPath = path.join(__dirname, '../db/cmsInitialData.json');
fs.writeFileSync(outputPath, JSON.stringify(initialCMSData, null, 2), 'utf8');
console.log('Successfully generated db/cmsInitialData.json');
