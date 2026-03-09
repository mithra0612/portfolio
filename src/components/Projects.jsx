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
    <div className="relative bg-black text-white">
      <style>{`
        @keyframes floatGradient {
          0% { transform: translate(-40%, -30%) rotate(0deg) scale(1); opacity: .7; }
          50% { transform: translate(-20%, -10%) rotate(10deg) scale(1.05); opacity: .85; }
          100% { transform: translate(-40%, -30%) rotate(0deg) scale(1); opacity: .7; }
        }
      `}</style>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden
          className="absolute -left-40 -top-40 h-[900px] w-[900px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.22), rgba(0,0,0,0)) , radial-gradient(circle at 70% 70%, rgba(249,115,22,0.12), rgba(0,0,0,0))",
            animation: "floatGradient 10s ease-in-out infinite",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 pb-4 md:py-12 -mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-3xl font-extrabold tracking-tight text-blue-500 sm:text-5xl md:text-5xl"
        >
          My Projects
        </motion.h1>
      </div>

      <div className="hidden md:block" ref={containerRef} style={{ height: `${containerHeight}vh`, scrollBehavior: "smooth" }}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    i === currentProject
                      ? "bg-orange-300 scale-125 shadow-[0_0_0_6px_rgba(253,186,116,0.08)]"
                      : "bg-zinc-600 hover:bg-orange-200/70"
                  }`}
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

      <div className="md:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/90 to-black/90 shadow-2xl transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gray-800">
                            <div class="text-center text-gray-400">
                              <div class="text-4xl mb-2">📷</div>
                              <div class="text-sm">Project Image</div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-center gap-3">
                      <span className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-bold text-white">
                        {project.year}
                      </span>
                      <span className="text-xs font-medium text-blue-400 line-clamp-1">
                        {project.event}
                      </span>
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-bold leading-tight text-white line-clamp-2">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
                        >
                          <Link size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/20"
                        >
                          <Github size={18} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => openModal(project)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
                    >
                      <span>View Full Details</span>
                      <SquareArrowOutUpRight className="w-4 h-4"/>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
        filter: `blur(${cardBlur}px)`,
        zIndex: isActive ? 20 : 1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 28,
        mass: 0.7,
      }}
      className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4"
    >
      <motion.div
        onClick={() => onCardClick(project)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full cursor-pointer overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/90 to-black/90 shadow-2xl transition-all duration-300 ${
          isActive
            ? "ring-2 ring-blue-500/50 shadow-blue-500/20"
            : "ring-1 ring-white/10"
        }`}
      >
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 md:h-64">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gray-800">
                  <div class="text-center text-gray-400">
                    <div class="text-4xl mb-2">📷</div>
                    <div class="text-sm">Project Image</div>
                  </div>
                </div>
              `;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="space-y-4 p-6 text-center md:p-8">
          <div className="flex items-center justify-center gap-3">
            <span className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-bold text-white">
              {project.year}
            </span>
            <span className="text-sm font-medium text-blue-400">
              {project.event}
            </span>
          </div>

          <h3 className="text-xl font-bold leading-tight text-white md:text-3xl">
            {project.title}
          </h3>
          <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-400 md:text-base">
            View 
          </p>
          <SquareArrowOutUpRight className ="w-4 h-4"/>
          </div>
        </div>
      </motion.div>
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
      className="fixed inset-0 z-[100] bg-black"
    >
      <div className="h-full w-full overflow-y-auto">
        <div className="sticky top-0 z-20 bg-gradient-to-b from-black via-black/95 to-transparent backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="group flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="font-medium">Back to Projects</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-bold text-white">
                  {project.year}
                </span>
                <span className="hidden text-sm font-medium text-blue-400 sm:inline">
                  {project.event}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg sm:h-[300px] md:h-[400px]"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gray-800">
                    <div class="text-center text-gray-400">
                      <div class="text-6xl mb-4">📷</div>
                      <div class="text-xl">Project Image</div>
                    </div>
                  </div>
                `;
              }}
            />
          </motion.div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <div className="md:hidden">
                  <span className="text-xs sm:text-sm font-medium text-blue-400">
                    {project.event}
                  </span>
                </div>
              </motion.div>

              {detailSections.map((sectionKey, sectionIndex) => {
                const value = project[sectionKey];
                const label = SECTION_LABELS[sectionKey] || sectionKey;

                if (!value) return null;

                return (
                  <motion.section
                    key={sectionKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + sectionIndex * 0.05 }}
                  >
                    <h2 className="mb-3 text-xs sm:text-sm font-semibold text-white/90">
                      {label}
                    </h2>

                    {typeof value === "string" ? (
                      <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                        {value}
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {value.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4"
                          >
                            <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                            <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.section>
                );
              })}

              {project.outcome && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 sm:p-5"
                >
                  <h2 className="mb-3 text-xs sm:text-sm font-semibold text-white/90">
                    {SECTION_LABELS.outcome}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                    {project.outcome}
                  </p>
                </motion.section>
              )}

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <h2 className="mb-3 text-xs sm:text-sm font-semibold text-white/90">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.55 + techIndex * 0.02 }}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.section>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-32 space-y-4 sm:space-y-6"
              >
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 sm:p-5">
                  <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-white">Links</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-between gap-3 rounded-xl bg-blue-500 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-blue-600"
                      >
                        <span className="flex items-center gap-2">
                          <Link size={18} className="sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">Live Demo</span>
                          <span className="sm:hidden">Live</span>
                        </span>
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-white/20"
                      >
                        <span className="flex items-center gap-2">
                          <Github size={18} className="sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">Source Code</span>
                          <span className="sm:hidden">Code</span>
                        </span>
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4 sm:p-5">
                  <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-white">
                    Project Info
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Year</span>
                      <span className="font-medium text-white">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-gray-400">Event</span>
                      <span className="max-w-[60%] text-right font-medium text-white line-clamp-2">
                        {project.event}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-gray-400">Stack Size</span>
                      <span className="font-medium text-white">
                        {project.tech.length}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-gray-400">Status</span>
                      <span className="font-medium text-green-400">
                        {project.live ? "Live" : "Code Available"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3), rgba(0,0,0,0))",
          }}
        />
        <div
          className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.3), rgba(0,0,0,0))",
          }}
        />
      </div>
    </motion.div>
  );
};

export default HorizontalScrollProjects;