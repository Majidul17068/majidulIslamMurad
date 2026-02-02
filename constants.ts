import { Project, Experience, SkillCategory, ResearchItem, Certification } from './types';

export const SOCIAL_LINKS = {
  email: "contact.majidul.islam@gmail.com",
  phone: "+8801632220262",
  linkedin: "https://www.linkedin.com/in/majidulislammurad/",
  github: "https://github.com/Majidul17068",
  facebook: "https://www.facebook.com/mazidul.islam.murad"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Care Home AI Solution EMPATHIKA",
    problem: "Lack of personalized monitoring for care home residents.",
    architectureHighlights: [
      "Multi-agent orchestration",
      "Personalized care plan generation",
      "Real-time monitoring agents",
      "Collaborative decision making"
    ],
    techStack: ["CrewAI Multi-Agent", "LangFuse", "FastAPI", "In-house LLMs", "Vector DB"],
    diagramType: "AGENTIC",
    githubUrl: "mailto:contact.majidul.islam@gmail.com?subject=Demo Request: Care Home AI Solution EMPATHIKA",
    buttonText: "Ask for Demo"
  },
  {
    id: "2",
    title: "Medical Document OCR Solution",
    problem: "Low accuracy OCR on noisy, low-resolution scanned medical documents.",
    architectureHighlights: [
      "Image preprocessing pipeline",
      "OCR engine with post-OCR intelligence",
      "Medical validation & matching",
      "API integration for downstream systems"
    ],
    techStack: ["Tesseract", "OpenCV", "Python", "FastAPI", "Deep Learning"],
    diagramType: "OCR_PIPELINE",
    githubUrl: "https://github.com/Majidul17068/care-data-migration"
  },
  {
    id: "3",
    title: "Agentic RAG – HR Policy Chatbot",
    problem: "Complex policy retrieval and comprehension for Kazi Farms Group employees.",
    architectureHighlights: [
      "Retrieval-Augmented Generation (RAG) pipeline",
      "DeepSeek models & ChromaDB vector store",
      "Multi-lingual support (English/Bangla)",
      "Source attribution engine"
    ],
    techStack: ["LangChain", "DeepSeek", "ChromaDB", "Python"],
    diagramType: "RAG",
    githubUrl: "https://github.com/Majidul17068/KFG-HR-Bot"
  },
  {
    id: "4",
    title: "AI Sales Forecasting (Big Data)",
    problem: "Optimizing inventory and supply chain via predictive analytics.",
    architectureHighlights: [
      "Historical sales data ingestion pipeline",
      "Seasonal trend analysis models",
      "Predictive analytics dashboard integration",
      "Scalable Big Data processing"
    ],
    techStack: ["PySpark", "Pandas", "Scikit-Learn", "FastAPI"],
    diagramType: "DATA_PIPELINE",
    githubUrl: "https://github.com/Majidul17068/AI-sales-forecast-demo"
  },
  {
    id: "5",
    title: "NHS Medicine Parser Automation",
    problem: "Inefficient manual extraction of critical data from NHS medical records.",
    architectureHighlights: [
      "Automated OCR & NLP parsing pipeline",
      "Unstructured to structured data conversion",
      "High-accuracy entity extraction",
      "Healthcare compliance standards"
    ],
    techStack: ["OCR", "NLP", "Python", "Automation"],
    diagramType: "DATA_PIPELINE",
    githubUrl: "https://github.com/Majidul17068/dmd_downloader"
  },
  {
    id: "6",
    title: "Edge AI & GPU Optimization",
    problem: "High latency in real-time inference on edge devices.",
    architectureHighlights: [
      "NVIDIA Jetson deployment",
      "TensorRT & CUDA kernel acceleration",
      "FP16/INT8 quantization for speed",
      "Low-latency vision pipeline"
    ],
    techStack: ["CUDA", "TensorRT", "Jetson", "C++"],
    diagramType: "EDGE_PIPELINE",
    githubUrl: "mailto:contact.majidul.islam@gmail.com?subject=Demo Request: Edge AI & GPU Optimization",
    buttonText: "Ask for Demo"
  }
];


export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "TulipTech Limited",
    role: "AI/ML Engineer",
    period: "Aug 2025 - Present", // Keeping date from prompt, though future dated
    location: "Dhaka, Bangladesh",
    points: [
      "Optimized Edge AI pipelines on NVIDIA Jetson using TensorRT & CUDA (FP16/INT8).",
      "Developed multimodal systems combining vision, text, and OCR for document understanding.",
      "Orchestrated multi-agent systems using CrewAI/LangGraph for complex task decomposition.",
      "Implemented LLM observability (Phoenix/Langfuse) to reduce hallucination rates."
    ]
  },
  {
    id: "2",
    company: "Sysnova Information Systems",
    role: "AI Programmer (Data)",
    period: "Mar 2025 - Aug 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Designed autonomous reasoning agents using multi-agent frameworks.",
      "Built real-time big data processing pipelines with PySpark.",
      "Established MLOps pipelines (MLflow) for automated model training and deployment."
    ]
  },
  {
    id: "3",
    company: "TulipTech Limited",
    role: "Software Engineer (AI)",
    period: "Oct 2022 - Mar 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Deployed scalable AI solutions using FastAPI and Azure cloud infrastructure.",
      "Engineered secure FastAPIs and managed MongoDB document stores.",
      "Led Cloud & DevOps integration for AI model lifecycle management."
    ]
  },
  {
    id: "4",
    company: "Bangladesh Navy - Naval Academy",
    role: "Officer Cadet",
    period: "Dec 2016 - Mar 2018",
    location: "Bangladesh",
    points: [
      "Leadership & Discipline: Completed intensive military training, strengthening leadership, teamwork and decision-making under pressure.",
      "Maritime & Tactical Training: Acquired hands-on experience in naval operations, navigation and tactical combat strategies.",
      "Strategic Planning & Crisis Management: Trained to operate effectively in high-stress environments, making quick and strategic decisions.",
      "Technical & Weaponry Knowledge: Gained foundational knowledge in naval engineering, weapon systems and maritime technologies.",
      "Ethics & Professionalism: Maintained strong discipline, integrity and commitment to service throughout military service."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Edge AI & GPU Systems",
    icon: "Cpu",
    skills: ["NVIDIA Jetson", "CUDA / TensorRT", "FP16 / INT8 Opt.", "Real-time Inference"]
  },
  {
    title: "LLM Systems & RAG",
    icon: "Brain",
    skills: ["Transformers", "LangChain / LlamaIndex", "ChromaDB / Pinecone", "Prompt Engineering"]
  },
  {
    title: "Agentic AI",
    icon: "Bot",
    skills: ["CrewAI", "LangGraph", "Multi-agent Systems", "Autonomous Reasoning"]
  },
  {
    title: "ML Infrastructure",
    icon: "Server",
    skills: ["FastAPI / Streamlit", "MLflow / Docker", "AWS / Azure / GCP", "CI/CD Pipelines"]
  }
];

export const RESEARCH: ResearchItem[] = [
  {
    title: "Multi Factor Authentication Kerberos",
    venue: "IEEE SEM Vol -12",
    date: "Jan 2024",
    description: "Research on Internet Banking Cyber Security in Bangladesh focusing on MFA solutions."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Oracle Certified Foundation Associate", issuer: "Oracle University", year: "2025" },
  { title: "Agile Project Management Practitioner", issuer: "HP LIFE", year: "2024" },
  { title: "Admin Official Certification", issuer: "monday.com", year: "2023" },
  { title: "Cyber Security (Ethical Hacking)", issuer: "Arena Web Security", year: "2022" }
];