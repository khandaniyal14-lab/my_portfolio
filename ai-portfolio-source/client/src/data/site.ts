import type { Experience, Education } from "@/types";

export const skills = [
  { name: "Python", level: 95, category: "Languages", icon: "python" },
  { name: "JavaScript", level: 90, category: "Languages", icon: "javascript" },
  { name: "LangGraph", level: 90, category: "AI/ML", icon: "langgraph" },
  { name: "LLMs", level: 90, category: "AI/ML", icon: "llms" },
  { name: "RAG", level: 90, category: "AI/ML", icon: "rag" },
  { name: "Transformer", level: 90, category: "AI/ML", icon: "transformer" },
  { name: "Vector Database", level: 90, category: "Database", icon: "vector-database" },
  { name: "NLP", level: 90, category: "AI/ML", icon: "nlp" },
  { name: "Automation", level: 90, category: "AI/ML", icon: "automation" },
  { name: "LangSmith", level: 90, category: "AI/ML", icon: "langsmith" },
  { name: "React", level: 90, category: "Frontend", icon: "react" },
  { name: "FastAPI", level: 90, category: "Backend", icon: "fastapi" },
  { name: "PyTorch", level: 88, category: "AI/ML", icon: "pytorch" },
  { name: "TensorFlow", level: 82, category: "AI/ML", icon: "tensorflow" },
  { name: "LangChain", level: 90, category: "AI/ML", icon: "langchain" },
  { name: "OpenAI API", level: 92, category: "AI/ML", icon: "openai" },
  { name: "PostgreSQL", level: 85, category: "Database", icon: "postgresql" },
  { name: "Redis", level: 80, category: "Database", icon: "redis" },
  { name: "Docker", level: 88, category: "DevOps", icon: "docker" },
  { name: "Kubernetes", level: 82, category: "DevOps", icon: "kubernetes" },
  { name: "AWS", level: 85, category: "Cloud", icon: "aws" },
  { name: "GCP", level: 80, category: "Cloud", icon: "gcp" },
];

export const experiences: Experience[] = [
  {
    company: "TechnoHub AI",
    role: "AI Agentic & Fullstack Engineer",
    period: "JUNE 2024 — JUNE 2026",
    description:
      "Designing and delivering production-ready AI systems, automation platforms, and full-stack applications for startups and international clients. Focused on LLM applications, AI agents, workflow automation, and scalable backend architectures.",
    highlights: [
      "Architected and shipped AI copilots using Gemini API, FastAPI, REST architectures, and modern LLM workflows",
      "Built multi-tenant SaaS platforms with authentication, role-based access control, and production deployments",
      "Integrated n8n, Twilio, and third-party APIs to automate business workflows and improve response time by up to 40%",
      "Designed scalable backend systems using Python, FastAPI, PostgreSQL, Redis, and Docker for production environments",
    ],
  },

  {
    company: "Freelance / Remote",
    role: "AI Automation Developer",
    period: "Mar 2023 — Mar 2024",
    description:
      "Delivered AI-powered applications for clients across e-commerce, CRM, manufacturing, and productivity domains. Built intelligent systems combining LLMs, automation, and modern full-stack technologies.",
    highlights: [
      "Developed RAG-powered chatbots and semantic search systems using LangChain, FAISS, embeddings, and vector databases",
      "Created reusable Python modules for AI integrations, API orchestration, and automation workflows",
      "Built workflow automation solutions reducing repetitive manual processes by up to 50%",
      "Delivered production AI applications with focus on reliability, scalability, and business impact",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "University of Haripur",
    degree: "B.Sc. Artificial Intelligence",
    period: "2023 — Present",
    description:
      "Currently pursuing a Bachelor's degree in Artificial Intelligence with a CGPA of 3.75/4.00. Focused on Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Data Science, and Software Engineering while working as an AI Fullstack Engineer.",
  },
  {
    institution: "Professional Certifications",
    degree:
      "Machine Learning • NumPy & Pandas • Scikit-learn • Agentic AI",
    period: "2023 — Present",
    description:
      "Completed professional certifications covering Machine Learning fundamentals, data analysis with NumPy and Pandas, Scikit-learn, and Agentic AI concepts through platforms including Coursera and DeepLearning.AI. Also achieved IELTS Overall Band 7.5 for professional communication.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
