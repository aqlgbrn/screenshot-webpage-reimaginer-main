/*
 * Centralized portfolio content — single source of truth.
 *
 * Fields marked EDITABLE are intentionally left empty because they have
 * not been confirmed by the owner. Fill them in and the UI renders them
 * automatically. Nothing is invented here.
 *
 * Project status accepts: "Completed" | "In Development" | "Prototype"
 * or "" (hidden) until the owner confirms it.
 */

export type ProjectStatus = "Completed" | "In Development" | "Prototype" | "";

/* ============ 1. PERSONAL IDENTITY ============ */

export const profile = {
  fullName: "M Aqeel Gibran",
  logoText: "AQEEL.GIBRAN",
  title: "Informatics Management Graduate | Aspiring IT Professional",
  degree: "Diploma III in Informatics Management",
  institution: "Universitas Sriwijaya",
  studyPeriod: "2023–2026",
  location: "Palembang, South Sumatra, Indonesia",
  interests: [
    "Web Development",
    "Information Systems",
    "Digital Solutions",
    "Project Coordination",
    "Technology and Leadership",
  ],
};

/* ============ 2. HERO ============ */

export const hero = {
  statusBadge: "SYSTEM INITIALIZATION COMPLETED",
  headline: "INFORMATION SYSTEMS & DIGITAL SOLUTIONS.",
  role: "Informatics Management Graduate",
  description:
    "I'm an Informatics Management graduate from Universitas Sriwijaya with a strong interest in web development and information systems. Experienced in developing digital solutions, corporate internship projects, and organizational leadership.",
  profileInfo: {
    education: "Informatics Management - Universitas Sriwijaya",
    gpa: "3.91 / 4.00",
    focus: ["Web Development", "Information Systems", "Organizational Leadership"],
    location: "Palembang, Indonesia",
  },
  primaryCta: "EXPLORE MY WORK",
  secondaryCta: "LET'S CONNECT",
  primaryCtaTarget: "#projects",
  secondaryCtaTarget: "#contact",
  // ADD YOUR PORTRAIT IMAGE HERE - Place your image in public/ folder and update this path
  portraitImage: "/Foto.png",
};

/* ============ 3. ABOUT ============ */

export const about = {
  label: "01 / ABOUT",
  headline: "TECHNOLOGY WITH PURPOSE.",
  paragraphs: [
    "I'm M Aqeel Gibran, a Diploma III graduate in Informatics Management from Universitas Sriwijaya with a strong interest in web development and information systems.",
    "I'm interested in building web applications and information systems that help simplify workflows, organize information, and support more efficient processes.",
    "Through academic projects, an internship at PT Pupuk Sriwidjaja Palembang, and organizational experience, I've developed an interest in combining technical problem-solving with teamwork, communication, and project coordination.",
    "I'm looking for opportunities to contribute to meaningful digital projects, strengthen my technical skills, and grow professionally in the information technology field.",
  ],
};

/* ============ 4. SELECTED PROJECTS ============ */

export const projects = {
  label: "02 / SELECTED WORK",
  headline: "TURNING IDEAS INTO DIGITAL SOLUTIONS.",
  items: [
    {
      id: "work-monitoring",
      number: "PROJECT 01",
      title: "Web-Based Work Monitoring Application",
      organization: "PT Pupuk Sriwidjaja Palembang",
      category: "Web Development / Productivity",
      description:
        "A web-based application designed to support work assignment, progress monitoring, task status tracking, and periodic reporting.",
      // EDITABLE — shown only when filled in.
      overview: "",
      problemStatement: "",
      proposedSolution: "",
      keyFeatures: [
        "Task Management",
        "Task Status Tracking",
        "Progress Dashboard",
        "Weekly and Monthly Reports",
        "Work Progress Monitoring",
      ],
      // EDITABLE — only technologies actually used. Left empty until confirmed.
      techStack: [] as string[],
      // EDITABLE — "Completed" | "In Development" | "Prototype" | "" (hidden)
      status: "" as ProjectStatus,
      // EDITABLE — add screenshot paths/URLs when available.
      screenshots: [] as { src: string; alt: string }[],
      // EDITABLE — add real URLs only after confirming them.
      liveDemoUrl: "",
      githubUrl: "",
    },
    {
      id: "inventory-system",
      number: "PROJECT 02",
      title: "Web-Based Inventory Management System",
      organization: "Kelurahan Plaju Ulu",
      category: "Web Development / Information Systems",
      description:
        "A web-based inventory management system concept designed to organize asset records, support QR Code identification, and monitor inventory status.",
      // EDITABLE — shown only when filled in.
      overview: "",
      problemStatement: "",
      proposedSolution: "",
      keyFeatures: [
        "Inventory Data Management",
        "QR Code Asset Identification",
        "Inventory Status Tracking",
        "Asset Information Search",
      ],
      // EDITABLE — only technologies actually used. Left empty until confirmed.
      techStack: [] as string[],
      // EDITABLE — "Completed" | "In Development" | "Prototype" | "" (hidden)
      status: "" as ProjectStatus,
      // EDITABLE — add screenshot paths/URLs when available.
      screenshots: [] as { src: string; alt: string }[],
      // EDITABLE — add real URLs only after confirming them.
      liveDemoUrl: "",
      githubUrl: "",
    },
  ],
};

/* ============ 5. PROFESSIONAL EXPERIENCE ============ */

export const experience = {
  label: "03 / PROFESSIONAL EXPERIENCE",
  headline: "LEARNING THROUGH REAL-WORLD EXPERIENCE.",
  items: [
    {
      organization: "PT Pupuk Sriwidjaja Palembang (PUSRI)",
      department: "Corporate Communications & Administration",
      type: "Internship",
      period: "July–August 2025",
      location: "Palembang, South Sumatra, Indonesia",
      description:
        "Completed an internship in the Corporate Communications & Administration Department at PT Pupuk Sriwidjaja Palembang. This experience provided exposure to a professional corporate environment, administrative processes, corporate communications, and workplace collaboration.",
    },
  ],
};

/* ============ 6. TECHNICAL SKILLS ============ */

export const skills = {
  label: "04 / TECHNICAL SKILLS",
  headline: "TOOLS, SYSTEMS & PROBLEM-SOLVING.",
  categories: [
    {
      name: "WEB DEVELOPMENT",
      items: [
        "Web Application Development",
        "Responsive Interface Development",
        "Frontend Development",
      ],
    },
    {
      name: "INFORMATION SYSTEMS",
      items: [
        "Information Systems Analysis",
        "Database Management",
        "Workflow Understanding",
        "Inventory Management Systems",
      ],
    },
    {
      name: "PROFESSIONAL SKILLS",
      items: [
        "Project Coordination",
        "Team Collaboration",
        "Problem-Solving",
        "Public Speaking",
        "Communication",
      ],
    },
  ],
  // EDITABLE — only tools/languages the owner has actually used.
  // Example: ["React.js", "JavaScript", "HTML", "CSS", "MySQL"]
  tools: [] as string[],
};

/* ============ 7. LEADERSHIP & COLLABORATION ============ */

export const leadership = {
  label: "05 / LEADERSHIP & COLLABORATION",
  headline: "LEADERSHIP BEYOND THE SCREEN.",
  experiences: [
    {
      id: "vice-president",
      year: "2026",
      position: "Vice President",
      organization: "BEM KM Fasilkom UNSRI",
      indonesianTitle: "Wakil Ketua BEM KM Fasilkom UNSRI",
      category: "Organizational Leadership",
      logo: "/logo bem.png",
      description:
        "As Vice President of BEM KM Fasilkom UNSRI, I support the President in leading the student organization. My role involves assisting in coordinating departments and administrators, overseeing the implementation of work programs, maintaining internal coordination and organizational effectiveness, and helping ensure the organization's vision and mission are executed effectively. This position requires strong communication skills, strategic thinking, and the ability to collaborate with various stakeholders to achieve organizational goals.",
      achievements: [],
      instagram: "https://www.instagram.com/p/DWZY3kriZbs/?utm_source=ig_web_copy_link&fqnt=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
      certificate: "",
    },
    {
      id: "pmb-chairperson",
      year: "2025",
      position: "Event Chairperson",
      organization: "PMB Fasilkom UNSRI 2025",
      indonesianTitle: "Ketua Panitia PMB Fasilkom UNSRI 2025",
      category: "Project Leadership / Event Management",
      logo: "/Unsri.png",
      description:
        "Led the planning and execution of the 2025 Fasilkom UNSRI New Student Admission activities, with a focus on team coordination, preparation, and event delivery. Managed cross-functional teams and ensured smooth execution of all admission-related activities.",
      achievements: [],
      instagram: "https://www.instagram.com/p/DJ559L6TYTV/?utm_source=ig_web_copy_link&hvrq=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
      certificate: "",
    },
    {
      id: "pkkmb-deputy",
      year: "May–August 2025",
      position: "Deputy Chairperson for Operations and Logistics",
      organization: "PKKMB Fasilkom UNSRI 2025",
      indonesianTitle: "Wakil Ketua Panitia Operasional dan Logistik PKKMB Fasilkom UNSRI 2025",
      category: "Operations / Logistics / Event Management",
      logo: "/Unsri.png",
      description:
        "Supported operational and logistics coordination, including activity preparation, resource planning, and technical readiness throughout the event. Collaborated with various departments to ensure efficient resource allocation and seamless execution of all operational aspects.",
      achievements: [],
      instagram: "https://www.instagram.com/reel/DMcgT35z09i/?utm_source=ig_web_copy_link&avpt=MzRlODBiNWFlZA==",
      certificate: "",
    },
    {
      id: "sinergi-vpo",
      year: "May–October 2025",
      position: "Vice Project Officer I",
      organization: "Sinergi Fest 2025",
      indonesianTitle: "Wakil Ketua Pelaksana I Sinergi Fest 2025",
      category: "Project Coordination / Event Operations",
      logo: "/logo sinergi.png",
      description:
        "Contributed to project coordination, team communication, and the preparation and execution of event activities. Assisted in managing timelines, coordinating with vendors and partners, and ensuring all project deliverables were met on schedule.",
      achievements: [],
      instagram: "https://www.instagram.com/sinergi.fest?utm_source=ig_web_button_share_sheet&bqrl=ZDNlZDc0MzIxNw==",
      certificate: "",
    },
    {
      id: "hunter-head",
      year: "February 2025 – Present",
      position: "Head of Hunter Department",
      organization: "BEM KM Fasilkom UNSRI",
      indonesianTitle: "Kepala Departemen Hunter BEM KM Fasilkom UNSRI",
      category: "Organizational Leadership",
      logo: "/logo hunter.jpeg",
      description:
        "Contributed to student organization activities through departmental responsibilities, internal coordination, and organizational initiatives. Led departmental activities and coordinated with other departments to achieve organizational objectives.",
      achievements: [],
      instagram: "https://www.instagram.com/p/DHyZSJSpiUq/?utm_source=ig_web_copy_link&fqnt=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
      certificate: "",
    },
  ],
};

/* ============ 8. EDUCATION & TRAINING ============ */

export const education = {
  label: "06 / EDUCATION & TRAINING",
  education: [
    {
      degree: "Diploma III in Informatics Management",
      institution: "Universitas Sriwijaya",
      period: "2023–2026",
      type: "EDUCATION",
    },
  ],
  training: [
    {
      program:
        "Information and Communication Technology — Machine Learning & Deep Learning Bootcamp",
      institution: "Universitas Sriwijaya",
      period: "September 2026",
      // EDITABLE — optional certificate image or verification URL.
      certificateImageUrl: "",
      verificationUrl: "",
    },
  ],
};

/* ============ 9. CONTACT ============ */

export const contact = {
  label: "07 / CONTACT",
  headline: "LET'S BUILD SOMETHING MEANINGFUL.",
  text: "I'm open to opportunities to learn, collaborate, and contribute to projects in information technology and digital solutions.",
  buttons: [
    // EDITABLE — every link must have a valid destination before publishing.
    { label: "EMAIL ME", href: "" },
    { label: "LINKEDIN", href: "" },
    { label: "GITHUB", href: "" },
    { label: "DOWNLOAD CV", href: "" },
  ],
};

/* ============ 10. FOOTER ============ */

export const footer = {
  name: "M AQEEL GIBRAN",
  closingStatement: "DESIGNED WITH INTENTION. BUILT TO KEEP EVOLVING.",
  location: "Palembang, Indonesia",
};

/* ============ NAVIGATION ============ */

export const navItems = [
  { label: "ABOUT", target: "#about" },
  { label: "WORK", target: "#projects" },
  { label: "EXPERIENCE", target: "#experience" },
  { label: "SKILLS", target: "#skills" },
  { label: "CONTACT", target: "#contact" },
];
