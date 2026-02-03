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
    problem: "Personalized monitoring and complete soutions for care home residents.",
    architectureHighlights: [
      "Multi-agent orchestration",
      "Personalized care plan generation",
      "Real-time monitoring agents",
      "Collaborative decision making"
    ],
    techStack: ["CrewAI Multi-Agent", "LangFuse", "FastAPI", "In-house LLMs", "Vector DB"],
    diagramType: "AGENTIC",
    githubUrl: "mailto:contact.majidul.islam@gmail.com?subject=Demo Request: Care Home AI Solution EMPATHIKA",
    buttonText: "Ask for Demo",
    bookDemoUrl: "https://tulip-tech.com/"
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
    githubUrl: "https://github.com/Majidul17068/care-data-migration",
    bookDemoUrl: "https://tulip-tech.com/"
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
    period: "Aug 2025 - Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Optimized Edge AI pipelines on NVIDIA Jetson using TensorRT & CUDA (FP16/INT8), significantly reducing inference latency.",
      "Developed multimodal document understanding systems combining vision, text, and OCR for automated data extraction.",
      "Orchestrated complex agentic workflows using CrewAI and LangGraph to decompose and execute multi-step tasks.",
      "Implemented full-stack LLM observability with Phoenix and Langfuse to monitor performance and mitigate hallucinations."
    ]
  },
  {
    id: "2",
    company: "Sysnova Information Systems",
    role: "AI Programmer (Data)",
    period: "Mar 2025 - Aug 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Designed autonomous reasoning agents within multi-agent frameworks to automate decision-making processes.",
      "Built real-time big data processing pipelines using PySpark for high-volume data ingestion.",
      "Established robust MLOps pipelines with MLflow to automate model training, tracking, and deployment."
    ]
  },
  {
    id: "3",
    company: "TulipTech Limited",
    role: "Software Engineer (AI)",
    period: "Oct 2022 - Mar 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Deployed scalable AI microservices using FastAPI on resilient Azure cloud infrastructure.",
      "Engineered secure and efficient document stores using MongoDB for high-throughput applications.",
      "Led Cloud & DevOps integration strategies to streamline the complete AI model lifecycle."
    ]
  },
  {
    id: "4",
    company: "Bangladesh Navy - Naval Academy",
    role: "Officer Cadet",
    period: "Dec 2016 - Mar 2018",
    location: "Bangladesh",
    points: [
      "Leadership & Discipline: Completed rigorous military training, cultivating strong leadership and decision-making skills under pressure.",
      "Maritime Operations: Gained practical expertise in naval navigation, tactical strategy, and maritime combat operations.",
      "Strategic Crisis Management: Trained to execute strategic decisions effectively in high-stress, critical environments.",
      "Technical Foundations: Acquired foundational knowledge in naval engineering, weapon systems, and defense technologies.",
      "Professional Ethics: Maintained the highest standards of integrity, discipline, and commitment to service."
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
    description: "Research on Internet Banking Cybersecurity in Bangladesh focusing on MFA solutions."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Oracle Certified Foundation Associate", issuer: "Oracle University", year: "2025" },
  { title: "Agile Project Management Practitioner", issuer: "HP LIFE", year: "2024" },
  { title: "Admin Official Certification", issuer: "monday.com", year: "2023" },
  { title: "Cybersecurity (Ethical Hacking)", issuer: "Arena Web Security", year: "2022" }
];