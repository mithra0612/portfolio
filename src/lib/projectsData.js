// Source of truth for portfolio projects.
// Preserves all existing fields, hackathon recognitions, structured capabilities, tech stacks, and links.

export const projects = [
  {
    number: "01",
    slug: "finvista",
    shortTitle: "FINVISTA",
    title: "AI-Based Financial Services Platform for India Post",
    subtitle: "AI-Assisted Decision Support System for India Post (SIH Finalist)",
    categoryBadge: "Decision Support System",
    tagline: "India Post analytics & decision support",
    challenge:
      "Postal officials face severe operational challenges: promoting POSB schemes in rural areas is heavily manual and lacks demographic intelligence. Without a centralized regional demographics tool, identifying eligible beneficiaries is difficult, campaign planning is done without seasonal insights, and officials lack a quick assistant to answer scheme-related queries.",
    techHighlight: [
      "Next.js",
      "Node.js",
      "Supabase",
      "Gemini 2.0 Flash",
      "LightGBM",
      "Selenium",
    ],
    pillars: [
      {
        label: "AI ASSISTANT",
        title: "Gemini 2.0 Flash + RAG",
        description: "Contextual query assistant providing instant guidance on POSB schemes, eligibility rules, and circular guidelines.",
      },
      {
        label: "REC ENGINE",
        title: "LightGBM categorical",
        description: "Demographic and seasonal recommendation engine matching rural communities with financial products.",
      },
      {
        label: "AUTOMATION",
        title: "Selenium periodic",
        description: "Automated event discovery gathering local agricultural melas and market days for targeted outreach.",
      },
      {
        label: "ARCHITECTURE",
        title: "React migrated to Next.js",
        description: "Direct server-side optimization, secure role separation, and high-performance demographic dashboards.",
      },
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Supabase",
      "Gemini 2.0 Flash",
      "LightGBM",
      "Selenium WebDriver",
      "React.js",
      "Python",
      "Pandas",
      "NumPy",
      "BeautifulSoup4",
    ],
    live: "",
    github: "https://github.com/mithra0612/postal-service",
    thumbnail: "/financial-services.png",
    gallery: [
      "/financial-services.png",
      "/sih1.jpg",
      "/sih2.jpg",
      "/sih3.jpg",
      "/sih4.jpg",
    ],
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
    number: "02",
    slug: "growthguardian",
    shortTitle: "GROWTHGUARDIAN",
    title: "Growth Guardian – AI-Driven Financial Literacy & Scam Protection Platform",
    subtitle: "AI-Driven Financial Literacy & Scam Protection Platform (HackIt Winner)",
    categoryBadge: "AI Financial Literacy & Safety",
    tagline: "AI-driven financial literacy & scam protection",
    challenge:
      "Families and young investors navigate increasingly complex financial products alongside rampant digital fraud and deceptive investment schemes. Without accessible financial education, safe virtual simulation, and real-time scam verification, individuals face severe financial loss and lack confidence in long-term wealth building.",
    techHighlight: [
      "React.js",
      "Node.js",
      "Express.js",
      "Hugging Face",
      "Scikit-learn",
      "MongoDB",
    ],
    pillars: [
      {
        label: "AI SCAM DETECTOR",
        title: "Hugging Face + NLP",
        description: "Real-time semantic analysis to identify fraudulent investment offers and deceptive communications.",
      },
      {
        label: "FORECASTING ENGINE",
        title: "ML Asset Return Projection",
        description: "Simulates inflation-adjusted purchasing power and multi-asset compounding trajectories.",
      },
      {
        label: "SIMULATION LAB",
        title: "Risk-Free Virtual Trading",
        description: "Interactive sandboxes for budgeting, debt vs. invest decisions, and family finance management.",
      },
      {
        label: "EDUCATION SYSTEM",
        title: "Family Learning Modules",
        description: "Tailored curriculums for adults and children with interactive checkpoint assessments.",
      },
    ],
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
    gallery: [
      "/growth-guardian.png",
      "/hackit1.jpg",
      "/hackit2.jpg",
    ],
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
    number: "03",
    slug: "wellcare",
    shortTitle: "WELLCARE",
    title: "Wellcare – AI-Based Women's Health & Wellness Platform",
    subtitle: "AI-Based Women's Health & Wellness Platform (TNWISE Finalist)",
    categoryBadge: "Women's Health & Wellness",
    tagline: "AI-based women's health & wellness platform",
    challenge:
      "Women across semi-urban and rural areas encounter persistent barriers to stigma-free reproductive health guidance, early PCOS/hormonal symptom detection, and reliable nutritional advice. Without accessible AI-driven personalization and confidential community support, critical preventive care remains largely out of reach.",
    techHighlight: [
      "React.js",
      "Node.js",
      "Firestore",
      "GCP",
      "Transformers",
      "Redux",
    ],
    pillars: [
      {
        label: "CYCLE INTELLIGENCE",
        title: "Predictive Health Models",
        description: "Ovulation, cycle forecasting, and recurring symptom anomaly tracking algorithms.",
      },
      {
        label: "WELLNESS ENGINE",
        title: "AI Diet & Home Remedies",
        description: "Tailored nutritional advice and natural remedies curated based on hormonal phases.",
      },
      {
        label: "INTERACTIVE EDU",
        title: "Gamified Myth Busting",
        description: "Engaging spin-wheels and interactive cards breaking cultural health misconceptions.",
      },
      {
        label: "SUPPORT HUB",
        title: "AI Health Chatbot & Community",
        description: "Confidential guidance backed by medical articles, verified schemes, and emergency helplines.",
      },
    ],
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
    gallery: [
      "/wellcare.png",
      "/tnwise1.jpg",
      "/tnwise2.jpg",
    ],
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
    number: "04",
    slug: "vanadhikar",
    shortTitle: "VANADHIKAR",
    title: "VanAdhikar – AI-Powered WebGIS & Decision Support System",
    subtitle: "AI-Powered WebGIS & Decision Support System for Forest Rights (SIH 2025)",
    categoryBadge: "WebGIS & Decision Support",
    tagline: "AI-powered WebGIS & decision support system",
    challenge:
      "Implementing the Forest Rights Act has long been hindered by fragmented paper records, contested land boundaries, and lack of geospatial integration. Tribal communities encounter long delays in title recognition, asset discovery, and direct access to rightful government welfare programs.",
    techHighlight: [
      "React.js",
      "PostgreSQL + PostGIS",
      "QGIS",
      "Google Earth Engine",
      "PyTorch",
      "spaCy NER",
    ],
    pillars: [
      {
        label: "GEOSPATIAL ENGINE",
        title: "PostGIS + WebGIS Atlas",
        description: "Geofenced forest boundaries, satellite layers, and parcel tracking down to village and individual levels.",
      },
      {
        label: "OCR & NER PIPELINE",
        title: "Tesseract + spaCy",
        description: "Extracts structured claim data from legacy handwritten pattas, title deeds, and verification records.",
      },
      {
        label: "DECISION SUPPORT",
        title: "Multi-Scheme Mapper",
        description: "AI scoring connects tribal households to PM-KISAN, PMAY, and seasonal agricultural welfare schemes.",
      },
      {
        label: "MULTILINGUAL IVR",
        title: "Automated Voice Feedback",
        description: "Enables tribal communities to share feedback and check claim status in regional vernacular languages.",
      },
    ],
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
    gallery: [
      "/fra.png",
    ],
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
    number: "05",
    slug: "civiclens",
    shortTitle: "CIVIC LENS",
    title: "Civic Lens – Transparent Governance Through Data",
    subtitle: "Transparent Governance Through Public Data & AI (Hack'25 Finalist)",
    categoryBadge: "Transparent Governance & Data",
    tagline: "Transparent governance through public data & AI",
    challenge:
      "Public datasets regarding municipal budgets, infrastructure spending, and development milestones are fragmented across disparate government portals. Filing Right to Information (RTI) queries is tedious and slow, while ordinary citizens lack intuitive tools to monitor local civic projects.",
    techHighlight: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Open Data APIs",
      "LangChain",
      "RAG Pipeline",
    ],
    pillars: [
      {
        label: "OPEN DATA PIPELINE",
        title: "1200+ Datasets Unified",
        description: "Ward-level dashboards aggregating budgets, projects, and developmental milestones into clear metrics.",
      },
      {
        label: "AI RTI ASSISTANT",
        title: "Automated RAG System",
        description: "Accelerates Right to Information queries and draft generation from weeks down to minutes.",
      },
      {
        label: "CIVIC PARTICIPATION",
        title: "Geo-Tagged Grievances",
        description: "Allows citizens to pinpoint infrastructure and public service issues for rapid municipal tracking.",
      },
      {
        label: "BILINGUAL ACCESS",
        title: "Malayalam & English",
        description: "Ensures grassroots democratic access across linguistic demographics throughout Kerala.",
      },
    ],
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
    gallery: [
      "/civic-lens.png",
      "/hack251.jpg",
      "/hack252.jpg",
    ],
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

export const SECTION_LABELS = {
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

export const DETAIL_SECTION_ORDER = [
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

// Helper to look up a project by slug (with alias fallback)
export function getProjectBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().replace(/-/g, "");
  return (
    projects.find(
      (p) => p.slug === slug || p.slug.toLowerCase().replace(/-/g, "") === normalized
    ) || null
  );
}

// Helper to get next project in circular sequence
export function getNextProject(currentSlug) {
  const currentIndex = projects.findIndex(
    (p) =>
      p.slug === currentSlug ||
      p.slug.toLowerCase().replace(/-/g, "") ===
        (currentSlug || "").toLowerCase().replace(/-/g, "")
  );
  if (currentIndex === -1) return projects[0];
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}
