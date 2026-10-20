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
    id: "detection-rule-engine",
    title: "Detection Rule Engine & Anomaly Logic Builder",
    category: "BACKEND WORKFLOW & LOGIC BUILDER",
    badge: "Featured Enterprise Case Study",
    featured: true,
    summary: "A backend interface for configuring detection rules that define abnormal behavior, event threshold logic, scan frequencies, and automated risk scoring in an enterprise SIEM platform.",
    image: "/assets/portfolio/page_5.png",
    tags: ["Enterprise SIEM", "Workflow Design", "Condition Builder", "API Flow", "Figma"],
    role: "UX/UI Designer (Sole Designer for Module)",
    targetUsers: "Security Operations Center (SOC) Engineers & System Administrators",
    duration: "Security Pitch Co., Ltd. (Enterprise Platform)",
    designGoal: "Design Goal: Simplify complex multi-variable logic into a progressive, error-preventing workflow.",
    problem: "Configuring detection rules required security analysts to construct nested AND/OR condition queries, evaluate trigger thresholds (number of occurrences within a time window), and set automatic risk scores. Without a clear visual model, operators struggled with logic ambiguity and syntax errors, risking missed security threats.",
    responsibilities: "Owned end-to-end interface and workflow design: mapped user journey from rule creation to testing, built visual node condition wireframes in Figma, and created detailed UI flows with validation rules for developer implementation.",
    uxApproach: "Adopted a progressive disclosure wizard (General Info → Query & Condition → Detection Time → Feedback & Escalation → Integration). Used visual tree cards for AND/OR branches with immediate grouping indicators, paired with Lucene query templates for expert users.",
    keyDecisions: "1) Visual Node vs Plain Code: Provided dual-mode flexibility—visual tree builder for intuitive rule construction and query history templates for power users.\n2) Real-Time Validation: Highlighted missing threshold inputs before submission to prevent malformed rule payloads.",
    devCollaboration: "Annotated field validation constraints, step-by-step state changes, and API parameter relationships (e.g. how threshold frequency and time-window variables map to backend scan cron jobs).",
    outcomeLearnings: "Transformed an intimidating configuration process into a guided, structured experience. Verified through internal team walkthroughs that rule setup became significantly clearer with fewer misconfigured conditions.",
    keyFeatures: [
      "Step-by-step guided workflow (General, Conditions, Timing, Actions)",
      "Visual node-based condition builder with explicit AND/OR logic branching",
      "Dynamic threshold sliders (occurrence counts vs. evaluation time windows)",
      "Automated risk scoring calculator based on severity criteria"
    ]
  },
  {
    id: "case-management-system",
    title: "Collaborative Incident Case Management Workspace",
    category: "INCIDENT RESPONSE & OPERATIONS",
    badge: "Featured Enterprise Case Study",
    featured: true,
    summary: "A collaborative case management workspace for handling security incidents triggered by detection rules—enabling analyst assignments, priority setting, activity audit trails, and evidence attachments.",
    image: "/assets/portfolio/page_6.png",
    tags: ["Case Management", "Incident Response", "Dual View UI", "Team Collaboration", "SaaS"],
    role: "UX/UI Designer",
    targetUsers: "Tier-1/Tier-2 SOC Analysts, Incident Responders & SecOps Leads",
    duration: "Security Pitch Co., Ltd. (Enterprise Platform)",
    designGoal: "Design Goal: Unify incident triage, investigation history, and team handoffs into one low-friction workspace.",
    problem: "When detection rules triggered alerts, analysts often tracked investigations across disconnected spreadsheets and chat tools. This caused fragmented incident context, duplicate investigations, and lost evidentiary audit trails during critical security events.",
    responsibilities: "Conducted workflow analysis with product teams, designed dual-mode views (Kanban board and dense table), and created the flyout incident inspection drawer with comprehensive comment and file attachment flows.",
    uxApproach: "Structured the workspace to support two distinct mental models: a macro Kanban view for team leads tracking overall status (Open, In Progress, Closed, Done) and a high-density tabular list view for analysts processing batch triage.",
    keyDecisions: "1) Flyout Inspector Panel: Allowed analysts to view full case details, history, and add attachments without losing their place in the main table.\n2) Chronological Audit History: Positioned comments and system logs in a unified vertical timeline so handoffs between shifts maintain complete forensic context.",
    devCollaboration: "Specified interaction behavior for real-time status transitions, multi-format file upload restrictions, tag autocompletion, and assignee assignment states.",
    outcomeLearnings: "Delivered a centralized operational hub that eliminated spreadsheet tracking. Highlighted the importance of preserving analyst working context during high-pressure triage tasks.",
    keyFeatures: [
      "Dual-view flexibility: Visual Kanban board & high-density data table",
      "Context-preserving flyout detail panel for rapid incident inspection",
      "Threaded analyst comments, colleague tagging, and chronological activity history",
      "Forensic attachment management supporting multi-format evidence files"
    ]
  },
  {
    id: "ux-developer-handoff-case-studies",
    title: "Backend UI Flow Documentation & Developer Handoff",
    category: "UX ARCHITECTURE & API INTEGRATION",
    badge: "Featured Methodology Case Study",
    featured: true,
    summary: "Detailed UI flow blueprints with step-by-step state logic, error boundaries, input validation criteria, and API payload contracts that bridge design and engineering.",
    image: "/assets/portfolio/page_9.png",
    secondaryImage: "/assets/portfolio/page_10.png",
    tags: ["Developer Handoff", "UI Flow Blueprints", "API Contracts", "System Architecture"],
    role: "UX/UI Designer & Technical Bridge",
    targetUsers: "Frontend Developers, Backend API Engineers, QA Teams & Product Owners",
    duration: "Security Pitch Co., Ltd. (Ongoing Practice)",
    designGoal: "Design Goal: Eliminate ambiguity in design-to-engineering handoff through explicit validation states and data contracts.",
    problem: "Standard high-fidelity design mockups often leave critical engineering questions unanswered: What happens when an API call fails? How are dynamic fields validated? What is the payload structure? These gaps cause back-and-forth delays, rework, and inconsistent UI behavior in production.",
    responsibilities: "Pioneered a standardized UI flow documentation methodology in Figma across two flagship modules: 1) Detection Rules Setup Flow, and 2) Data Source Creation & Auto-Schema Workflow.",
    uxApproach: "Embedded explicit technical annotations alongside user interaction screens: documenting field-level validation rules, conditional branch triggers, auto-schema generation states, and API payload parameters directly in Figma.",
    keyDecisions: "1) Visual State Connectors: Used directional callouts explaining exact step prerequisites (e.g. file upload requirement before auto-schema parsing can occur).\n2) Error Boundary Documentation: Created explicit designs for empty, loading, partial failure, and success states rather than only ideal 'happy paths'.",
    devCollaboration: "Directly collaborated with backend engineers to align form input names with database entity schemas, significantly accelerating API readiness and reducing implementation discrepancies.",
    outcomeLearnings: "Demonstrated that UX design is not finished at visual mockups—clear interaction logic and developer empathy ensure designs are implemented accurately and efficiently.",
    keyFeatures: [
      "Step-by-step user interaction flows with clear branching logic",
      "Explicit field validation, error state, and empty state specifications",
      "Auto-schema generation workflow mapping file inputs to database indices",
      "Standardized annotation tokens connecting UI elements to backend endpoints"
    ]
  },
  {
    id: "risk-management-dashboard",
    title: "Executive Risk Management & Security Posture Dashboard",
    category: "DATA VISUALIZATION & ANALYTICS",
    badge: "Featured Analytics Case Study",
    featured: true,
    summary: "A visual executive dashboard summarizing risk scores, hourly threat heatmaps, severity timelines, and team resolution velocity across customizable time intervals.",
    image: "/assets/portfolio/page_7.png",
    tags: ["Executive Dashboard", "Risk Heatmaps", "Analytics", "Data-Driven UI"],
    role: "UX/UI Designer",
    targetUsers: "CISOs, Security Operations Managers & Risk Assessment Officers",
    duration: "Security Pitch Co., Ltd. (Enterprise Platform)",
    designGoal: "Design Goal: Transform dense multi-factor log data into high-signal posture visualizations and actionable recommendations.",
    problem: "Security executives were overwhelmed by raw telemetry logs and struggled to quickly identify whether their organization's risk was escalating or improving, which teams had resolution bottlenecks, and which vulnerabilities required immediate remediation.",
    responsibilities: "Designed the complete dashboard layout, information hierarchy, chart visual styling, and progressive filter controls in Figma.",
    uxApproach: "Organized metrics hierarchically: high-level KPI cards at the top (Active Risk, Rate Critical, Comparison to Yesterday), followed by multi-dimensional visualizations (hourly factor heatmap and severity breakdown timeline), ending with prioritized mitigation recommendations.",
    keyDecisions: "1) Factor Heatmap: Visualized 4 risk vectors (Threat, Vulnerability, Impact, Likelihood) over 24-hour intervals using intuitive green-to-red color grading for instant pattern recognition.\n2) Comparative Filtering: Provided quick-switch intervals (3 days, 5 days, 1 week, 1 month) to allow comparative analysis against previous periods.",
    devCollaboration: "Defined chart rendering breakpoints, responsive grid collapsing, color token mappings for severity levels, and empty state visualizations for periods with zero incident data.",
    outcomeLearnings: "Showcased how thoughtful visual hierarchy turns abstract risk scores into clear operational priorities, helping leaders make data-backed security decisions.",
    keyFeatures: [
      "Executive KPI summary cards with daily delta indicators",
      "Hourly risk factor heatmap (Threat, Vulnerability, Impact, Likelihood)",
      "Severity breakdown timeline visualizing incident volume over time",
      "Prioritized recommendation feed ranked by criticality"
    ]
  },
  {
    id: "cybersecurity-threat-intelligence",
    title: "Cybersecurity Threat Intelligence News Aggregator",
    category: "CYBERSECURITY & THREAT INTEL",
    badge: "Enterprise Platform",
    featured: false,
    summary: "A multilingual backend dashboard that aggregates global cybersecurity news into one streamlined interface, helping security teams monitor threats in real time across regions and languages.",
    image: "/assets/portfolio/page_4.png",
    tags: ["Threat Intelligence", "Multilingual", "Content Architecture", "Figma"],
    role: "UX/UI Designer",
    targetUsers: "Security Analysts & Threat Intelligence Researchers",
    duration: "Security Pitch Co., Ltd. (Enterprise Platform)",
    designGoal: "Design Goal: Consolidate fragmented global threat feeds into a clean, scannable intelligence portal.",
    problem: "Security analysts had to manually browse disparate international threat feeds and news sources, dealing with language barriers and delayed threat detection across regional incidents.",
    responsibilities: "Designed the responsive feed architecture, card components, language toggle mechanisms, and detailed article reading modal in Figma.",
    uxApproach: "Created a consistent card grid with scannable threat tags (Phishing, DDoS, Ransomware), source attribution, reading estimates, and a clean reading view with integrated language translation toggles.",
    keyDecisions: "Prioritized typography legibility and metadata hierarchy so analysts can scan 20+ threat reports in minutes without cognitive fatigue.",
    devCollaboration: "Specified responsive card layout reflow, tag color coding standards, and language switching behavior.",
    outcomeLearnings: "Reinforced the value of structured metadata in news and telemetry feeds to facilitate rapid threat identification.",
    keyFeatures: [
      "Multilingual threat feed with one-click language toggle",
      "Categorical security tags (Phishing, DDoS, Attack Chain)",
      "Source verification and reading time indicators",
      "Clean, distraction-free article inspection view"
    ]
  },
  {
    id: "data-analytics-dashboard-builder",
    title: "Interactive Custom Dataset & Dashboard Builder",
    category: "PRODUCT DESIGN & BUILDER TOOLS",
    badge: "Self-Service Analytics",
    featured: false,
    summary: "A self-service visualization engine allowing analysts to upload custom datasets, configure dynamic charts, map data dimensions, and assemble custom dashboards.",
    image: "/assets/portfolio/page_8.png",
    tags: ["Dashboard Builder", "Chart Mapping", "Self-Service", "Figma", "Data UX"],
    role: "UX/UI Designer",
    targetUsers: "Business Analysts, Data Analysts & Security Researchers",
    duration: "Security Pitch Co., Ltd. (Enterprise Platform)",
    designGoal: "Design Goal: Empower analysts to configure bespoke charts and dashboards without requesting custom engineering work.",
    problem: "When analysts required non-standard reports or custom data visualizations, they depended on backend engineers to write custom database queries and generate one-off charts manually.",
    responsibilities: "Mapped user flow for dataset creation and designed the drag-and-drop visualization builder interface in Figma.",
    uxApproach: "Designed an intuitive field-mapping workspace: selecting data source, mapping columns to axes and metrics, and receiving intelligent chart recommendations (Bar, Line, Number, Pie, Table) based on data types.",
    keyDecisions: "Incorporated live chart preview alongside configuration controls so users receive immediate feedback as they adjust field selections.",
    devCollaboration: "Documented supported data types, axis mapping constraints, and error states for incompatible column selections.",
    outcomeLearnings: "Demonstrated how self-service builder tools can eliminate repetitive engineering requests while empowering end users.",
    keyFeatures: [
      "Field mapping interface for rows, columns, and metrics",
      "Intelligent chart type recommendations based on selected dimensions",
      "Real-time interactive chart preview",
      "Executive Darkweb dashboard integration showcasing multi-tier chart layouts"
    ]
  },
  {
    id: "brand-identity-logo-design",
    title: "Brand Identity & Client Logo Design Portfolio",
    category: "BRAND IDENTITY & GRAPHIC DESIGN",
    badge: "Client Projects",
    featured: false,
    summary: "A collection of distinct brand marks and visual identities created for clients across diverse industries—including apparel, craft brewing, outdoor lifestyle, artisan bakery, entertainment, and pottery.",
    image: "/assets/portfolio/logo_showcase.png",
    tags: ["Branding", "Logo Design", "Illustrator", "Visual Identity", "Vector Art"],
    role: "Brand & Visual Designer",
    targetUsers: "Small Business Owners & Brand Stakeholders",
    duration: "Client Projects",
    designGoal: "Design Goal: Craft versatile, memorable brand marks that communicate each client's unique essence across digital and physical media.",
    problem: "Each client operated in a contrasting market segment, requiring distinctive visual positioning, bespoke typography, and scalable vector marks that adapt across web, social media, signage, and packaging.",
    responsibilities: "Led brand discovery, visual exploration, concept sketching, and vector finalization in Adobe Illustrator.",
    uxApproach: "Emphasized minimalist vector geometry, balanced negative space, and timeless typographic pairing to ensure instant recognizability at all scales.",
    keyDecisions: "Focused primarily on high-contrast monochrome marks first to guarantee visual strength before applying color palettes.",
    devCollaboration: "Exported production-ready vector assets (SVG, PNG) with clear clearspace and scaling guidelines for web and print implementation.",
    outcomeLearnings: "Enhanced versatility in visual craft, graphic storytelling, and client brand alignment alongside UI/UX systems.",
    keyFeatures: [
      "Simple Cloth: Modern geometric sewing needle emblem for minimalist fashion",
      "Hook & Fish Brew Pub: Nautical anchor and laurel crest with vintage collegiate typography",
      "Northern Est. 2007: Textured mountain ridge silhouette for outdoor lifestyle",
      "The Bakery: Steaming bread loaf mark paired with classic editorial serif typography",
      "Light Filmstrip: Creative fusion of film reel, lightbulb idea, and film negative",
      "Serpent Handcrafts: Mystical serpent coiled around artisan ceramic vessel"
    ]
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

module.exports = { profileData, caseStudiesData };
