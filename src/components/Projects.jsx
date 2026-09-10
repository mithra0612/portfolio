import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link, Github, SquareArrowOutUpRight } from "lucide-react";

// 
const projects = [
  {
    title: "AI-Based Financial Services Platform for India Post",
    tech: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Selenium WebDriver",
      "BeautifulSoup4",
      "Python",
      "Pandas",
      "NumPy",
      "LightGBM",
    ],
    live: "",
    github: "https://github.com/mithra0612/postal-service",
    thumbnail: "/financial-services.png",
    year: "2024",
    event: "Smart India Hackathon, Finalist",

    overview:
      "An AI-powered platform designed to improve financial and insurance service delivery for the Department of Posts. By analyzing demographic patterns, agricultural cycles, and regional economic activity, the system helps postal officials identify the most relevant financial services for different communities and plan targeted outreach programs.",

    coreCapabilities: [
      "Demographic intelligence dashboard providing population insights from state level down to village and branch post office levels",
      "Scheme recommendation timeline that suggests the most relevant financial products to promote throughout the year based on regional demographics and economic cycles",
      "Public financial profiles displaying eligibility insights and the top financial schemes suitable for individuals",
      "Individual financial dashboards summarizing engagement with postal financial products and eligibility status",
    ],

    operationalIntelligence: [
      "Automated event discovery using Selenium and BeautifulSoup to identify local gatherings suitable for financial promotion campaigns",
      "Google Calendar integration for scheduling financial service Melas aligned with regional activities and seasonal needs",
      "Task assignment system for Sub-Post Offices and Branch Post Offices to track outreach activities",
      "Gamified leaderboard with points, badges, and geo-tagged proof uploads to motivate field staff",
      "Post-event analytics measuring outreach effectiveness and participation across postal branches",
    ],

    aiCapabilities: [
      "AI-driven farmer risk analysis using agricultural cycles and crop patterns to recommend suitable insurance and savings products",
      "Machine learning–based financial scheme recommendation engine tailored to demographic and seasonal data",
      "Retrieval-Augmented Generation (RAG) assistant that answers queries about financial schemes, eligibility, procedures, and local events",
    ],

    outcome:
      "Developed as part of the Smart India Hackathon, the platform demonstrates how AI, demographic intelligence, and operational analytics can significantly improve targeted financial service promotion and strengthen financial inclusion across rural and semi-urban communities.",
  },

  {
    title: "VanAdhikar – AI-Powered WebGIS & Decision Support System",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL + PostGIS",
      "GeoJSON",
      "QGIS",
      "Google Earth Engine",
      "Tesseract OCR",
      "spaCy NER",
      "PyTorch",
      "scikit-learn",
      "TensorFlow Lite",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "OpenCV",
      "WebGL",
      "Map APIs",
    ],
    live: "https://dev-proto-1.vercel.app/",
    github: "https://github.com/mithra0612/vanAdhikar",
    thumbnail: "/fra.png",
    year: "2025",
    event: "Smart India Hackathon 2025",

    overview:
      "VanAdhikar is an AI-driven WebGIS platform designed to modernize the implementation of the Forest Rights Act (FRA) in India. The system digitizes legacy land claims, visualizes rights and assets through geospatial mapping, and provides intelligent decision support to connect tribal communities with the most relevant government schemes.",

    rightsDigitization: [
      "AI-powered OCR and Named Entity Recognition pipeline to extract structured data from handwritten pattas, legacy claims, and verification records",
      "Human-in-the-loop validation workflow to ensure accuracy of critical land ownership data",
      "Creation of a centralized digital archive of FRA claims, titles, and decisions accessible to authorized administrators",
    ],

    geospatialPlatform: [
      "Interactive WebGIS atlas visualizing geofenced FRA boundaries with automatically generated shapefiles",
      "Satellite imagery overlays enabling visual validation of forest regions and land use",
      "Hierarchical navigation from state → district → village → individual claim parcels",
      "Real-time dashboards displaying claim status, approvals, and rejections with audit trails",
    ],

    assetIntelligence: [
      "Custom CNN models analyzing satellite imagery to detect forest assets such as ponds, farms, vegetation cover, and water bodies",
      "Automated asset inventory generation for Community Forest Resource (CFR) and Individual Forest Rights (IFR) areas",
      "Temporal satellite analysis for monitoring environmental changes and resource conditions over time",
    ],

    decisionSupport: [
      "AI-powered Decision Support System that maps tribal households to relevant government schemes such as PM-KISAN, PMAY, and MGNREGA",
      "Eligibility scoring using geospatial assets, water indices, agricultural patterns, and socio-economic indicators",
      "Automated recommendation engine that ranks schemes by relevance and potential benefit",
    ],

    communityEngagement: [
      "Multilingual IVR-based feedback system enabling tribal communities to share experiences with claim processing and welfare schemes",
      "Automated voice calls in regional languages for inclusive participation",
      "AI-driven sentiment analysis to identify challenges and improve policy implementation",
    ],

    aiQuerySystem: [
      "RAG-based AI assistant capable of answering natural language queries about claims, beneficiaries, and schemes",
      "Instant report generation with exportable outputs such as PDFs, Excel files, and GIS shapefiles",
      "Context-aware responses grounded in the centralized FRA data repository",
    ],

    analytics: [
      "Interactive analytics dashboards tracking claim processing rates, title recognition, and scheme distribution",
      "Comparative analytics across states, districts, and time periods",
      "Role-based dashboards for tribal users, district officers, state administrators, and central monitoring agencies",
    ],

    outcome:
      "VanAdhikar demonstrates how AI, geospatial intelligence, and data-driven governance can improve transparency, accelerate FRA claim processing, and enable more effective delivery of welfare schemes to tribal communities.",
  },

  {
    title: "Wellcare – AI-Based Women's Health & Wellness Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firestore",
      "Google Cloud Platform",
      "Hugging Face Transformers",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
    ],
    live: "https://women-app.vercel.app/",
    github: "https://github.com/mithra0612/women-app",
    thumbnail: "/wellcare.png",
    year: "2025",
    event: "TNWISE Hackathon 2025, Finalist",

    overview:
      "Wellcare is a digital platform designed to improve access to women’s health education and personalized wellness support. The system combines health tracking tools, AI-powered recommendations, educational content, and community engagement features to help women better understand and manage their health.",

    healthTracking: [
      "Menstrual cycle tracking with ovulation prediction and personalized cycle insights",
      "Symptoms tracker allowing users to log and monitor recurring health patterns",
      "Visual health analytics dashboards helping users understand trends in their cycle and symptoms",
    ],

    personalizedWellness: [
      "AI-powered diet recommendation engine that generates personalized meal plans based on health history and dietary preferences",
      "Natural home remedies library covering common women’s health concerns such as menstrual cramps, PCOS symptoms, hormonal imbalance, and pregnancy nausea",
      "Sanitary product guidance including safe usage and eco-friendly disposal practices",
    ],

    interactiveLearning: [
      "Gamified myth-busting activities including spin wheels, scratch cards, and fact cards that educate users about women’s health topics",
      "Reward-based engagement system encouraging users to learn health facts and dispel common misconceptions",
    ],

    supportAndCommunity: [
      "AI-powered health chatbot that answers women’s health queries and provides quick guidance",
      "Discord-based community forum where users can share experiences and discuss health concerns in a supportive environment",
    ],

    healthResources: [
      "Library of video articles and blogs covering topics such as reproductive health, maternal health, hormonal disorders, mental health, and cancer awareness",
      "Directory of government schemes supporting women’s welfare, financial assistance, and skill development",
      "Access to helplines and nearby hospitals for medical and mental health support",
    ],

    outcome:
      "The platform demonstrates how AI-driven personalization, accessible health education, and community support can empower women to make informed decisions about their health and wellness.",
  },

  {
    title:
      "Growth Guardian – AI-Driven Financial Literacy & Scam Protection Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Hugging Face Model",
      "Scikit-learn",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MongoDB",
      "LangChain",
    ],
    live: "https://growth-guardian.vercel.app/",
    github: "https://github.com/mithra0612/growth-guardian",
    thumbnail: "/growth-guardian.png",
    year: "2025",
    event: "HackIt Winner",

    overview:
      "Growth Guardian is an AI-powered financial literacy and safety platform designed to help individuals and families make smarter financial decisions while protecting themselves from scams. The platform combines interactive education, financial planning tools, investment simulations, and AI-driven forecasting to guide users toward long-term financial stability.",

    financialEducation: [
      "Family-centric financial literacy modules designed separately for adults and children",
      "Structured lessons covering saving, investing, budgeting, and scam awareness",
      "Interactive quizzes after each topic and final assessments for every module to reinforce learning and track progress",
    ],

    financialPlanning: [
      "Investment simulator that allows users to practice investment strategies in a risk-free virtual environment",
      "Budget planner for setting monthly or yearly budgets and tracking expenses",
      "Savings goal management enabling families to collaboratively plan and monitor financial objectives",
      "Retirement planning tool that estimates long-term savings requirements and simulates different strategies",
      "Invest vs Debt decision tool helping users determine whether to prioritize debt repayment or investment",
    ],

    aiFinancialIntelligence: [
      "Machine learning–based asset return forecasting system that predicts potential returns for assets such as stocks, bonds, and real estate",
      "Forecast models account for inflation, interest rates, and investment duration to generate realistic financial projections",
      "Projection outputs include both nominal returns and inflation-adjusted purchasing power insights",
    ],

    scamProtection: [
      "AI-powered chatbot that analyzes suspicious financial messages and identifies potential scam patterns",
      "Real-time guidance helping users verify investment offers or suspicious communications",
      "Educational scam awareness resources based on research from trusted organizations such as AARP",
    ],

    familyFinanceManagement: [
      "Unified family dashboard providing an overview of budgeting, expenses, financial goals, and learning progress",
      "Collaborative financial management system allowing families to plan and track finances together",
      "Centralized interface that integrates financial tools, education modules, and investment simulations",
    ],

    outcome:
      "Growth Guardian demonstrates how AI-driven forecasting, financial education, and scam detection can empower families to make safer financial decisions and build long-term financial resilience.",
  },

  {
    title: "Civic Lens – Transparent Governance Through Data",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Open Data APIs",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "Machine Learning",
    ],
    live: "https://civic-lens-app.vercel.app/",
    github: "https://github.com/adhavan13/Hack25-Frontend",
    thumbnail: "/civic-lens.png",
    year: "2025",
    event: "Hack'25 Finalist",

    overview:
      "Civic Lens is a citizen-centric governance platform designed to make government data accessible, understandable, and actionable. Focused on Kerala, the platform transforms large volumes of public data into ward-level dashboards, real-time project monitoring tools, and AI-assisted information access to strengthen transparency, accountability, and civic participation.",

    dataTransparency: [
      "Interactive ward-level dashboards consolidating over 1200 government datasets into clear visual insights",
      "Bilingual data access in Malayalam and English to improve accessibility for local communities",
      "Simplified visualization of budgets, schemes, and public development initiatives",
    ],

    publicServiceMonitoring: [
      "Tracking system for over 500 government initiatives, displaying progress, completion status, and outcomes",
      "Personalized scheme discovery helping citizens identify relevant welfare programs",
      "Data-driven insights enabling communities to better understand public service delivery",
    ],

    civicParticipation: [
      "Geo-tagged civic reporting allowing citizens to report local infrastructure and governance issues",
      "Location-based reports that help authorities identify and address problems efficiently",
      "Direct citizen engagement mechanism improving accountability at the ward and district levels",
    ],

    aiInformationAccess: [
      "AI-powered RTI assistant that automates Right to Information submissions",
      "Retrieval-Augmented Generation (RAG) system that provides accurate responses based on Kerala Open Data APIs",
      "Reduces traditional RTI processing time from weeks to minutes through automated data retrieval",
    ],

    outcome:
      "Civic Lens demonstrates how open data platforms and AI-assisted information systems can strengthen democratic participation by enabling citizens to access government information, track public projects, and actively engage with governance processes.",
  },
];

const SECTION_LABELS = {
  overview: "Overview",
  coreCapabilities: "Core Capabilities",
  operationalIntelligence: "Operational Intelligence",
  aiCapabilities: "AI & Decision Support",
  rightsDigitization: "Rights Digitization",
  geospatialPlatform: "Geospatial Platform",
  assetIntelligence: "Asset Intelligence",
  decisionSupport: "Decision Support",
  communityEngagement: "Community Engagement",
  aiQuerySystem: "AI Query System",
  analytics: "Analytics",
  healthTracking: "Health Tracking",
  personalizedWellness: "Personalized Wellness",
  interactiveLearning: "Interactive Learning",
  supportAndCommunity: "Support & Community",
  healthResources: "Health Resources",
  financialEducation: "Financial Education",
  financialPlanning: "Financial Planning",
  aiFinancialIntelligence: "AI Financial Intelligence",
  scamProtection: "Scam Protection",
  familyFinanceManagement: "Family Finance Management",
  dataTransparency: "Data Transparency",
  publicServiceMonitoring: "Public Service Monitoring",
  civicParticipation: "Civic Participation",
  aiInformationAccess: "AI-Powered Information Access",
  outcome: "Impact",
};

const DETAIL_SECTION_ORDER = [
  "overview",
  "coreCapabilities",
  "operationalIntelligence",
  "aiCapabilities",
  "rightsDigitization",
  "geospatialPlatform",
  "assetIntelligence",
  "decisionSupport",
  "communityEngagement",
  "aiQuerySystem",
  "analytics",
  "healthTracking",
  "personalizedWellness",
  "interactiveLearning",
  "supportAndCommunity",
  "healthResources",
  "financialEducation",
  "financialPlanning",
  "aiFinancialIntelligence",
  "scamProtection",
  "familyFinanceManagement",
  "dataTransparency",
  "publicServiceMonitoring",
  "civicParticipation",
  "aiInformationAccess",
  "outcome",
];

const HorizontalScrollProjects = () => {
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  const projectProgress = useTransform(
    smoothProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  useEffect(() => {
    const unsubscribe = projectProgress.onChange((latest) => {
      const index = Math.round(latest);
      const clampedIndex = Math.max(0, Math.min(index, projects.length - 1));
      if (clampedIndex !== currentProject) {
        setCurrentProject(clampedIndex);
      }
    });
    return unsubscribe;
  }, [projectProgress, currentProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 300);
  };

  const containerHeight = Math.max(projects.length * 100 - 50, 100);

  const scrollToIndex = useCallback((index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const target = containerTop + index * window.innerHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (isModalOpen) return;

      if (e.key === "ArrowRight") {
        const next = Math.min(projects.length - 1, currentProject + 1);
        scrollToIndex(next);
      } else if (e.key === "ArrowLeft") {
        const prev = Math.max(0, currentProject - 1);
        scrollToIndex(prev);
      } else if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentProject, scrollToIndex, isModalOpen]);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 3rem 2rem' }}>
        <motion.p
          className="label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          — Selected Work
        </motion.p>
      </div>

      <div className="hidden md:block" ref={containerRef} style={{ height: `${containerHeight}vh`, scrollBehavior: "smooth" }}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem' }}>
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: i === currentProject ? 'var(--accent)' : 'var(--text-muted)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'background 0.2s ease',
                    transform: i === currentProject ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            <div className="relative flex h-full w-full items-center justify-center">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  currentProject={currentProject}
                  projectProgress={smoothProgress}
                  onCardClick={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div
                style={{ padding: '1.75rem 0', cursor: 'pointer' }}
                onClick={() => openModal(project)}
              >
                <div style={{ height: '200px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                    {project.year} · {project.event}
                  </p>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', lineHeight: 1.3, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {project.title}
                </h3>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label"
                      style={{ color: 'var(--text-secondary)', transition: 'color 0.15s ease' }}
                      onClick={e => e.stopPropagation()}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label"
                      style={{ color: 'var(--text-secondary)', transition: 'color 0.15s ease' }}
                      onClick={e => e.stopPropagation()}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <ProjectDetailPage
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
  currentProject,
  projectProgress,
  onCardClick,
}) => {
  const isActive = index === currentProject;

  const adjustedProgress = useTransform(
    projectProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  const cardX = useTransform(
    adjustedProgress,
    [
      index - 1.5,
      index - 1,
      index - 0.5,
      index,
      index + 0.5,
      index + 1,
      index + 1.5,
    ],
    ["150%", "100%", "50%", "0%", "-50%", "-100%", "-150%"]
  );

  const cardOpacity = useTransform(
    adjustedProgress,
    [
      index - 1.2,
      index - 0.8,
      index - 0.3,
      index,
      index + 0.3,
      index + 0.8,
      index + 1.2,
    ],
    [0, 0.2, 0.6, 1, 0.6, 0.2, 0]
  );

  const cardScale = useTransform(
    adjustedProgress,
    [index - 1, index - 0.5, index, index + 0.5, index + 1],
    [0.88, 0.95, 1, 0.95, 0.88]
  );

  const cardBlur = useTransform(
    adjustedProgress,
    [index - 0.8, index - 0.3, index, index + 0.3, index + 0.8],
    [6, 2, 0, 2, 6]
  );

  return (
    <motion.div
      style={{
        x: cardX,
        opacity: cardOpacity,
        scale: cardScale,
        zIndex: isActive ? 20 : 1,
      }}
      className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4"
    >
      <div
        onClick={() => onCardClick(project)}
        style={{
          width: '100%',
          cursor: 'pointer',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-raised)',
          border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
          transition: 'border-color 0.2s ease',
        }}
      >
        <div style={{ position: 'relative', height: '260px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--bg-surface)' }}>
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        <div style={{ padding: '1.5rem 2rem' }}>
          <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>
            {project.year} · {project.event}
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.375rem', lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {project.title}
          </h3>
          <p className="label" style={{ color: 'var(--text-muted)' }}>View details →</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetailPage = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const detailSections = DETAIL_SECTION_ORDER.filter(
    (key) => project[key] && key !== "outcome"
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.95,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ backgroundColor: 'var(--bg-base)' }}
      className="fixed inset-0 z-[100]"
    >
      <div style={{ height: '100%', width: '100%', overflowY: 'auto' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 20, backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.25rem 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <button
                onClick={onClose}
                className="label"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.15s ease', padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                ← Back
              </button>

              <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                {project.year} · {project.event}
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 3rem 8rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '3rem', height: '320px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--bg-surface)' }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }} className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {project.title}
                </h1>

                <div className="md:hidden">
                  <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                    {project.event}
                  </p>
                </div>
              </motion.div>

              {detailSections.map((sectionKey, sectionIndex) => {
                const value = project[sectionKey];
                const label = SECTION_LABELS[sectionKey] || sectionKey;

                if (!value) return null;

                return (
                  <motion.section
                    key={sectionKey}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + sectionIndex * 0.04 }}
                    style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}
                  >
                    <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
                      {label}
                    </p>

                    {typeof value === "string" ? (
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                        {value}
                      </p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {value.map((item, index) => (
                          <p key={index} style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-secondary)', paddingLeft: '1rem', borderLeft: '1px solid var(--border)' }}>
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.section>
                );
              })}

              {project.outcome && (
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}
                >
                  <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
                    {SECTION_LABELS.outcome}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {project.outcome}
                  </p>
                </motion.section>
              )}

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}
              >
                <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
                  Stack
                </p>
                <p className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {project.tech.join(' · ')}
                </p>
              </motion.section>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ position: 'sticky', top: '6rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Links</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.15s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.15s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >
                        Source Code ↗
                      </a>
                    )}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <p className="label" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Info</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>Year</p>
                      <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>{project.year}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>Status</p>
                      <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.08em' }}>{project.live ? 'Live' : 'Code Available'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* No decorative blobs — composition carries the visual weight */}
    </motion.div>
  );
};

export default HorizontalScrollProjects;