import { Project, Experience, SkillCategory, ResearchItem, Certification, Mentorship } from './types';

export const SOCIAL_LINKS = {
  email: "contact.majidul.islam@gmail.com",
  phone: "+8801632220262",
  linkedin: "https://www.linkedin.com/in/majidulislammurad/",
  github: "https://github.com/Majidul17068",
  facebook: "https://www.facebook.com/mazidul.islam.murad"
};

export const PROJECTS: Project[] = [
  {
    id: "personakit",
    title: "personakit — Declarative LLM Agent Builder",
    problem: "Building production-quality LLM agents usually means hand-wired chains, ad-hoc evaluation and provider-specific glue. personakit replaces all of that with a single declarative data object — persona, frameworks, probes, red flags and themes as data, not code.",
    architectureHighlights: [
      "Persona, frameworks, probes and red flags as a single data object",
      "Cross-provider runtime — OpenAI, Anthropic, plus 100+ providers via LiteLLM",
      "Streaming, OpenTelemetry hooks, token cost tracking, multi-turn tool loop",
      "Red flags as a first-class primitive: regex AND semantic LLM matching for audit-grade output"
    ],
    techStack: ["Python", "OpenAI", "Anthropic", "LiteLLM", "OpenTelemetry", "Pytest"],
    diagramType: "AGENTIC",
    githubUrl: "https://github.com/Majidul17068/personakit",
    pypiUrl: "https://pypi.org/project/personakit/",
    status: "oss",
    buttonText: "View on GitHub"
  },
  {
    id: "1",
    title: "EMPATHIKA — Healthcare AI Platform",
    problem: "Personalized monitoring, care planning and medication safety for healthcare and clinical research — combining internal records with external medical knowledge for grounded, citation-backed responses.",
    architectureHighlights: [
      "Multi-agent orchestration",
      "Personalized care plan generation",
      "Real-time monitoring agents",
      "Collaborative decision making"
    ],
    techStack: ["Multi-Agent", "LangFuse", "FastAPI", "In-house LLMs", "Vector DB"],
    diagramType: "AGENTIC",
    customBadge: "Agentic AI · Multi-Agent · RAG",
    status: "live",
    hideArchitecture: true
  },
  {
    id: "bank-reconciliation",
    title: "AI Bank Reconciliation",
    problem: "Manual matching of bank statements with internal financial records is slow, error-prone and doesn't scale for large enterprises. AI Bank Reconciliation automates the entire match-and-flag workflow.",
    architectureHighlights: [
      "Automated statement vs ledger matching",
      "Anomaly flagging and exception routing",
      "Accelerates monthly close, reduces manual review",
      "Scales reconciliation across enterprise volumes"
    ],
    techStack: ["Python", "FastAPI", "ML", "Automation"],
    diagramType: "DATA_PIPELINE",
    status: "live",
    githubUrl: "mailto:contact.majidul.islam@gmail.com?subject=Demo Request: AI Bank Reconciliation",
    buttonText: "Ask for Demo",
    bookDemoUrl: "mailto:contact.majidul.islam@gmail.com?subject=Book Demo: AI Bank Reconciliation"
  },
  {
    id: "3",
    title: "Agentic RAG — HR Policy Chatbot",
    problem: "Complex policy retrieval and comprehension for Kazi Farms Group employees — natural-language access to internal HR & policy documents with full source attribution.",
    architectureHighlights: [
      "Retrieval-Augmented Generation (RAG) pipeline",
      "DeepSeek models & ChromaDB vector store",
      "Multi-lingual support (English/Bangla)",
      "Source attribution engine"
    ],
    techStack: ["LangChain", "DeepSeek", "ChromaDB", "Python"],
    diagramType: "RAG",
    status: "live",
    githubUrl: "https://github.com/Majidul17068/KFG-HR-Bot"
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
    bookDemoUrl: "mailto:contact.majidul.islam@gmail.com?subject=Book Demo: Medical Document OCR"
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
      "Optimizing Edge AI pipelines on NVIDIA Jetson using TensorRT & CUDA (FP16/INT8), significantly reducing inference latency.",
      "Developing multimodal document understanding systems combining vision, text, and OCR for automated data extraction.",
      "Orchestrating complex agentic workflows using CrewAI and LangGraph to decompose and execute multi-step tasks.",
      "Implementing full-stack LLM observability with Phoenix and Langfuse to monitor performance and mitigate hallucinations."
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
    title: "ML & Deep Learning",
    icon: "Brain",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "Hugging Face Transformers", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Time Series Forecasting"]
  },
  {
    title: "LLMs & NLP",
    icon: "Sparkles",
    skills: ["OpenAI", "Anthropic", "DeepSeek", "Groq", "Ollama", "LLaMA Models", "LiteLLM", "Prompt Engineering", "Fine-tuning", "Streaming", "Token Cost Tracking"]
  },
  {
    title: "Agents & Multi-Agent",
    icon: "Bot",
    skills: ["LangChain", "LlamaIndex", "CrewAI", "LangGraph", "AutoGen", "Tool Calling", "Multi-Agent Orchestration", "Conversational Sessions", "personakit (OSS)"]
  },
  {
    title: "Retrieval & Vectors",
    icon: "Database",
    skills: ["RAG", "Agentic RAG", "ChromaDB", "Pinecone", "Embedding Models", "Semantic Search", "Source Attribution"]
  },
  {
    title: "Vision & Document AI",
    icon: "Layers",
    skills: ["Tesseract", "OpenCV", "OCR Pipelines", "Multimodal Understanding", "Document Parsing", "Deep Learning"]
  },
  {
    title: "Edge AI & GPU",
    icon: "Cpu",
    skills: ["NVIDIA Jetson", "CUDA", "TensorRT", "ONNX Runtime", "FP16 / INT8 Quantization", "Real-time Inference"]
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: ["FastAPI", "Streamlit", "REST APIs", "MongoDB", "PySpark", "Big Data"]
  },
  {
    title: "MLOps & Observability",
    icon: "Boxes",
    skills: ["MLflow", "Phoenix", "Langfuse", "OpenTelemetry", "Docker", "Model Versioning", "Hallucination Analysis"]
  },
  {
    title: "Cloud Platforms",
    icon: "Network",
    skills: ["Azure", "AWS", "GCP", "Azure Cognitive Services"]
  },
  {
    title: "CI/CD & Testing",
    icon: "Terminal",
    skills: ["GitHub Actions", "Jenkins", "Pytest", "mypy --strict", "Trusted Publishing", "Git"]
  },
  {
    title: "Automation & PM",
    icon: "Calendar",
    skills: ["N8N", "Make.com", "Zapier", "monday.com", "Jira", "Agile / PMI"]
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
  { title: "PMI Member", issuer: "Project Management Institute (PMI)", year: "2026", url: "/pmi-certificate.pdf" },
  { title: "Oracle Certified Foundation Associate", issuer: "Oracle University", year: "2025" },
  { title: "Agile Project Management Practitioner", issuer: "HP LIFE", year: "2024" },
  { title: "Industrial Data Science and Machine Learning with AI", issuer: "HR Ventures", year: "2023" },
  { title: "Admin Official Certification", issuer: "monday.com", year: "2023" },
  { title: "Cybersecurity (Ethical Hacking)", issuer: "Arena Web Security", year: "2022" }
];

export const MENTORSHIP: Mentorship = {
  role: "Mentor",
  organization: "AI/ML Professional Community",
  url: "https://www.linkedin.com/groups/14270358/",
  description: "Active mentor in the AI/ML practitioner community on LinkedIn — guiding peers on production LLM systems, RAG, multi-agent architectures, MLOps, and AI career growth.",
  highlights: [
    "Production LLM systems & evaluation",
    "RAG, vector stores and retrieval design",
    "Multi-agent architectures (CrewAI, LangGraph)",
    "MLOps, observability and AI career growth"
  ],
  photos: ["/mentor-1.jpg", "/mentor-2.jpg"]
};
