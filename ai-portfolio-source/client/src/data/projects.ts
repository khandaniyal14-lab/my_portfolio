import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "hr-ai-recruitment-assistant",
    featured: true,

    title: "AI-Powered HR Recruitment Assistant",

    shortDescription:
      "A production-ready AI recruitment platform built with LangGraph multi-agent architecture that automates candidate screening, AI matching, interview workflows, and hiring audits.",

    longDescription:
      "The AI-Powered HR Recruitment Assistant is an end-to-end recruitment automation platform designed to streamline the hiring process for organizations. HR teams can create job openings, connect their company Gmail account, and automatically receive applications directly from candidates. Incoming emails are processed by a LangGraph-based Email Agent, which identifies the correct job, downloads resumes, and creates application records. The Resume Agent extracts candidate information using Mistral AI, generates semantic embeddings using Sentence Transformers, and builds structured candidate profiles. The Matching Agent evaluates each candidate only against the relevant job, producing AI compatibility scores, strengths, weaknesses, and detailed reasoning. Through the React dashboard, HR can review ranked candidates, preview resumes, schedule interviews, hire applicants, and automatically notify unsuccessful candidates when a position closes. A dedicated Audit Agent generates a management report containing the top-ranked candidates for every closed job, providing transparency and reducing the possibility of unfair hiring decisions. The complete solution is containerized with Docker for simple client-side deployment while keeping company recruitment data on the client's infrastructure.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "JavaScript",
      "LangGraph",
      "LangChain",
      "Mistral AI",
      "Sentence Transformers",
      "PostgreSQL",
      "SQLAlchemy",
      "Gmail API",
      "Redis",
      "Docker",
      "JWT Authentication",
    ],

    coverImage: "/HR_Assitant/cover.png",

    demoVideo: "/HR_Assitant/Hero.mp4",

    screenshots: [
      "/HR_Assitant/login.png",
      "/HR_Assitant/email_integration.png",
      "/HR_Assitant/Job_Management.png",
      "/HR_Assitant/Dashboard.png",
      "/HR_Assitant/Candidate_resume.png",
      "/HR_Assitant/received_email.png",
      "/HR_Assitant/interview_email.png",
      "/HR_Assitant/rejection email.png",
      "/HR_Assitant/01_system_architecture.png",
      "/HR_Assitant/02_email_agent.png",
      "/HR_Assitant/03_resume_agent.png",
      "/HR_Assitant/04_matching_agent.png",
      "/HR_Assitant/05_communication_agent.png",
      "/HR_Assitant/06_audit_agent.png",
    ],

    github: "https://github.com/khandaniyal14-lab/HR_Agent",

    liveDemo: "",

    features: [
      "LangGraph multi-agent architecture with Email, Resume, Matching, Communication and Audit agents.",
      "Automatic Gmail integration for collecting job applications.",
      "AI-powered resume parsing using Mistral LLM.",
      "Semantic candidate embeddings generated using Sentence Transformers.",
      "AI candidate ranking with strengths, weaknesses and detailed reasoning.",
      "Automatic application acknowledgement emails.",
      "Interview scheduling with one-click email invitations.",
      "Automatic rejection emails when jobs are closed.",
      "Resume preview and raw resume download from the HR dashboard.",
      "Management audit reports containing the top-ranked candidates for every closed position.",
      "Complete job lifecycle management including secure deletion of applications, resumes and AI data.",
      "Docker-ready deployment for on-premise client installation.",
    ],

    challenges: [
      {
        challenge:
          "Building a modular AI recruitment workflow without creating a tightly coupled backend.",
        solution:
          "Designed the application around independent LangGraph agents, allowing Email, Resume, Matching, Communication and Audit workflows to evolve separately while remaining connected through a clean orchestration layer.",
      },
      {
        challenge:
          "Ensuring candidates are evaluated only against the job they actually applied for.",
        solution:
          "Implemented subject-based job matching during email processing so each candidate is scored exclusively against the corresponding job opening rather than every active vacancy.",
      },
      {
        challenge:
          "Maintaining transparency throughout the hiring process.",
        solution:
          "Developed an Audit Agent that automatically generates management reports listing the highest-ranked candidates after a job closes, creating an auditable recruitment process.",
      },
    ],

    lessonsLearned: [
      "LangGraph provides an excellent foundation for orchestrating production AI workflows through specialized agents.",
      "Separating business logic into independent agents greatly improves maintainability and scalability.",
      "Combining LLM reasoning with semantic embeddings produces more reliable recruitment decisions than keyword-based matching.",
      "Automation should always preserve human control, especially for recruitment and hiring decisions.",
    ],

    aiWorkflow: [
      "Email Agent → Monitor Gmail, identify job, download resumes and create application records.",
      "Resume Agent → Extract resume text, parse candidate information using Mistral AI and generate semantic embeddings.",
      "Matching Agent → Compare candidates with the relevant job description and generate AI compatibility scores.",
      "Communication Agent → Send acknowledgement, interview invitation and rejection emails automatically.",
      "Audit Agent → Generate management reports containing the top-ranked candidates after each job closes.",
    ],

    architectureImage: "/HR_Assitant/01_system_architecture.png",
  },

  {
    id: "2",
    slug: "ai-trade-intelligence-platform",
    featured: true,

    title: "AI-Powered Trade Intelligence Platform",

    shortDescription:
      "An AI-powered B2B trade intelligence platform that connects African and Pakistani businesses through intelligent company matching, AI-driven search, and automated lead generation.",

    longDescription:
      "The AI-Powered Trade Intelligence Platform was developed for a client to simplify cross-border trade between African and Pakistani businesses. Companies create detailed business profiles, after which the platform intelligently recommends similar organizations operating within the same industry, helping users discover potential suppliers, buyers, distributors, and strategic partners. The platform features an AI-powered assistant built with LangChain that answers natural language queries using an internal knowledge base of company profiles and product catalogs, enabling users to search for specific companies, compare products across multiple businesses, and explore industry information through conversational AI. To accelerate business development, an automated lead generation engine performs targeted Google searches, scans hundreds of relevant business websites, and extracts publicly available contact information using BeautifulSoup, providing users with high-quality sales leads. The system combines AI-powered retrieval, intelligent business recommendations, web data extraction, and scalable FastAPI services into a comprehensive trade intelligence solution designed for international business networking.",

    technologies: [
      "Python",
      "FastAPI",
      "HTML",
      "CSS",
      "JavaScript",
      "LangChain",
      "BeautifulSoup",
      "Google Search",
      "REST API",
      "AI Chatbot",
      "Web Scraping",
    ],

    coverImage: "/trade_portal/home.png",

    demoVideo: "/trade_portal/demo.mp4",

    screenshots: [
      "/trade_portal/home.png",
      "/trade_portal/Sign_in.png",
      "/trade_portal/Dashboard.png",
      "/trade_portal/profile.png",
      "/trade_portal/products.png",
      "/trade_portal/Rag_chatbot.png",
      "/trade_portal/leads.png",
      "/trade_portal/architecture.png"
    ],

    github: "https://github.com/khandaniyal14-lab/my_ui_project",

    liveDemo: "",

    features: [
      "AI-powered company recommendations based on business sector and profile similarity.",
      "Cross-border business networking between African and Pakistani companies.",
      "LangChain-powered AI assistant for answering company and product-related questions.",
      "Semantic search across company profiles and product catalogs.",
      "Automated Google lead discovery for targeted industries and businesses.",
      "BeautifulSoup-based web scraping engine for extracting publicly available company contact information.",
      "Business directory with intelligent company matching and recommendations.",
      "Lead management dashboard for organizing and tracking discovered opportunities.",
      "FastAPI REST APIs providing scalable backend services.",
      "Responsive business portal optimized for professional networking and trade discovery.",
    ],

    challenges: [
      {
        challenge:
          "Providing accurate AI responses without allowing the chatbot to generate incorrect business information.",
        solution:
          "Implemented a LangChain-powered retrieval workflow that grounds responses using indexed company profiles and product data, ensuring answers are based only on trusted business information.",
      },
      {
        challenge:
          "Discovering high-quality business leads across multiple industries.",
        solution:
          "Designed an automated lead generation pipeline that performs targeted Google searches, crawls relevant business websites, and extracts publicly available contact details using BeautifulSoup.",
      },
      {
        challenge:
          "Matching companies with relevant business partners across different countries.",
        solution:
          "Developed an intelligent recommendation system that analyzes company profiles and suggests businesses operating within similar industries and trade sectors.",
      },
      {
        challenge:
          "Maintaining a scalable architecture while integrating AI services and web scraping.",
        solution:
          "Separated business management, AI services, recommendation logic, and lead generation into modular FastAPI components, making the platform easier to maintain and extend.",
      },
    ],

    lessonsLearned: [
      "Retrieval-based AI systems provide significantly more reliable business information than unrestricted language model responses.",
      "Combining semantic search with structured business data greatly improves recommendation quality.",
      "Building resilient web scraping pipelines requires handling inconsistent website structures and changing HTML layouts.",
      "Designing modular backend services simplifies the integration of AI, search, and automation features in production systems.",
    ],

    aiWorkflow: [
      "Company Registration → Businesses create detailed company profiles and industry information.",
      "Recommendation Engine → Analyze company profiles and recommend similar businesses from Pakistan and Africa.",
      "AI Assistant → LangChain retrieves company and product information to answer user queries.",
      "Semantic Search → Users search for companies, products, and industries using natural language.",
      "Lead Generation Engine → Google searches discover relevant companies and BeautifulSoup extracts publicly available contact information.",
    ],

    architectureImage: "/trade_portal/architecture.png",
  },

  {
    id: "3",
    slug: "ai-person-monitoring-platform",
    featured: true,

    title: "AI-Powered Person Monitoring Platform",

    shortDescription:
      "A real-time computer vision platform powered by YOLO for person detection, zone monitoring, occupancy analytics, and intelligent workforce alerts.",

    longDescription:
      "The AI-Powered Person Monitoring Platform was developed to provide organizations with real-time occupancy monitoring and workforce analytics using computer vision. The platform processes live CCTV camera feeds through the YOLO object detection model to detect and track people across configurable monitoring zones. Each person is continuously monitored to determine zone occupancy, restricted area access, overcrowding conditions, and staffing levels. Zone presence is aggregated every minute to generate historical occupancy analytics while configurable business rules automatically trigger alerts for overcrowded areas, restricted zone violations, and understaffed locations. The system includes an administrative dashboard for camera configuration, zone management, occupancy monitoring, historical presence logs, and operational analytics, enabling organizations to improve safety, security, and workforce management through AI-powered automation.",

    technologies: [
      "Python",
      "FastAPI",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "NumPy",
      "Pandas",
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
      "Real-Time Video Analytics"
    ],

    coverImage: "/person_monitoring_app/cover.png",

    demoVideo: "",

    screenshots: [
      "/person_monitoring_app/Dashboard.png",
      "/person_monitoring_app/dashboard_2.png",
      "/person_monitoring_app/camera_config.png",
      "/person_monitoring_app/Zone_management.png",
      "/person_monitoring_app/person_presence_logs.png",
      "/person_monitoring_app/restricted_zone.png",
      "/person_monitoring_app/overcrowd_alert.png",
      "/person_monitoring_app/understaff_alert.png"
    ],

    github: "https://github.com/khandaniyal14-lab/person_monitoring_app",

    liveDemo: "",

    features: [
      "Real-time person detection using the YOLO computer vision model.",
      "Zone presence tracking with continuous multi-person monitoring.",
      "Per-minute occupancy aggregation for historical analytics.",
      "Restricted zone intrusion detection and instant alerts.",
      "Overcrowding detection based on configurable occupancy thresholds.",
      "Understaffed area monitoring for operational efficiency.",
      "Live person presence logs with timestamped activity history.",
      "Camera configuration and management dashboard.",
      "Interactive zone creation and monitoring tools.",
      "Real-time operational dashboard with occupancy statistics.",
      "FastAPI REST APIs for monitoring and analytics.",
      "Scalable architecture for security, retail, and workforce management applications."
    ],

    challenges: [
      {
        challenge:
          "Tracking people accurately across multiple video frames without duplicate counting.",
        solution:
          "Integrated YOLO-based object detection with persistent tracking to maintain consistent identities throughout each monitoring session."
      },
      {
        challenge:
          "Generating actionable occupancy analytics from continuous video streams.",
        solution:
          "Implemented zone presence tracking with per-minute aggregation, converting frame-level detections into meaningful operational metrics."
      },
      {
        challenge:
          "Providing immediate alerts for critical operational events.",
        solution:
          "Developed configurable business rules that automatically detect overcrowding, restricted zone access, and understaffed locations in real time."
      },
      {
        challenge:
          "Managing multiple monitoring zones across different camera feeds.",
        solution:
          "Designed flexible zone management and camera configuration modules that allow administrators to customize monitoring areas without modifying the detection pipeline."
      }
    ],

    lessonsLearned: [
      "YOLO delivers highly efficient real-time person detection suitable for production surveillance systems.",
      "Persistent tracking significantly improves occupancy accuracy compared to frame-by-frame detection.",
      "Per-minute aggregation transforms raw computer vision data into actionable business intelligence.",
      "Configurable monitoring rules make AI-powered surveillance adaptable to different industries and operational requirements."
    ],

    aiWorkflow: [
      "Live CCTV Camera → Capture continuous video stream.",
      "YOLO Detection → Detect every person within each video frame.",
      "Object Tracking → Assign persistent IDs to individuals.",
      "Zone Presence Tracking → Monitor movement across configured zones.",
      "Per-Minute Aggregation → Calculate occupancy statistics for each zone.",
      "Alert Engine → Trigger overcrowding, restricted zone, and understaffed area alerts.",
      "Analytics Dashboard → Display live occupancy, presence logs, and historical reports."
    ],

    architectureImage: "/person_monitoring_app/architecture.png",
  },

];
