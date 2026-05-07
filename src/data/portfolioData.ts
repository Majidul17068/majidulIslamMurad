import { Code2, Cpu, Database, LayoutGrid, Network, Server, Sparkles, TerminalSquare } from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Md. Majidul Islam",
    role: "AI/ML Engineer & Architect",
    tagline: "Building intelligent systems that turn data into decisions and automation into advantage.",
    intro:
      "I architect production-grade AI systems end-to-end — from edge deployment on NVIDIA GPUs to multi-agent LLM orchestration. Three live AI platforms shipped (healthcare, enterprise RAG, financial automation), author of personakit on PyPI, IEEE-published on banking cybersecurity.",
    highlights: [
      "Author & Maintainer of personakit (Open Source LLM Agent Framework on PyPI)",
      "3 live AI platforms in production — Empathika, HR Policy Chatbot, Bank Reconciliation",
      "Edge AI on NVIDIA Jetson with TensorRT, FP16/INT8 quantization",
      "IEEE-published researcher on banking cybersecurity",
    ],
    photo: "/profile.png",
    cvLink: "/cv.pdf",
    email: "contact.majidul.islam@gmail.com",
    github: "Majidul17068",
    linkedin: "majidulislammurad",
    website: "majidulislam.com.bd",
  },
  about: {
    narrative: `I architect production AI systems end-to-end — from research and fine-tuning through deployment, monitoring and observability. My daily work spans multi-agent orchestration with LangGraph and CrewAI, low-latency edge inference using CUDA and TensorRT, and rigorous MLOps.

Three of my AI platforms are live in production today — for healthcare care planning, enterprise HR retrieval, and bank reconciliation. I author personakit, an open-source declarative LLM agent library on PyPI, and am IEEE-published on banking cybersecurity. I care about AI that ships, holds up under real load, and earns trust — not benchmarks or demos.`,
  },
  expertise: [
    {
      title: "Edge AI & GPU-Accelerated Systems",
      icon: Cpu,
      skills: [
        "NVIDIA Jetson, TensorRT, CUDA",
        "GPU Memory Hierarchy & Optimization",
        "FP16/INT8 Quantization & Kernel Fusion",
        "Low-latency Vision & Sensor Processing",
      ],
    },
    {
      title: "LLM Systems & Multi-Agent Architectures",
      icon: Network,
      skills: [
        "CrewAI, LangGraph, LangChain, LlamaIndex",
        "RAG Design & Vector Stores (ChromaDB, Pinecone)",
        "Multi-Agent Orchestration & Task Decomposition",
        "Prompt Tracing & Evaluation (Phoenix, Langfuse)",
      ],
    },
    {
      title: "ML Infrastructure & Production Systems",
      icon: Server,
      skills: [
        "FastAPI, Streamlit, MLflow",
        "Model Versioning & Experiment Tracking",
        "Docker, GitHub Actions, Jenkins",
        "AWS, GCP, Azure Cloud Platforms",
      ],
    },
    {
      title: "Data & Applied Machine Learning",
      icon: Database,
      skills: [
        "Pandas, NumPy, Scikit-Learn",
        "Big Data Processing (PySpark)",
        "Sales Forecasting & Predictive Analytics",
        "Multimodal AI (Vision + Text + OCR)",
      ],
    },
  ],
  experience: [
    {
      company: "TulipTech Limited",
      role: "AI/ML Engineer",
      duration: "Aug 2025 \u2013 Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Built and optimized Edge AI pipelines on NVIDIA Jetson for low-latency inference using TensorRT and FP16/INT8 quantizations.",
        "Developed multimodal AI systems combining vision, text, and document understanding with OCR pipelines.",
        "Implemented robust Retrieval-Augmented Generation (RAG) using LangChain, CrewAI, and vector databases for reliable knowledge grounding.",
        "Designed and orchestrated multi-agent AI systems with CrewAI and LangGraph for task decomposition and collaborative workflows.",
        "Fine-tuned and evaluated LLMs on domain-specific datasets via in-house GPU clusters, maximizing accuracy.",
        "Enforced LLM observability and hallucination analysis using Phoenix and Langfuse for latency and cost monitoring.",
      ],
    },
    {
      company: "Sysnova Information Systems Limited",
      role: "AI Programmer Data",
      duration: "Mar 2025 \u2013 Aug 2025",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Engineered a high-performance FastAPI backend to power scalable, data-driven AI solutions.",
        "Designed agentic AI systems capable of autonomous reasoning and complex decision-making tasks.",
        "Processed large-scale datasets using Pandas and PySpark for real-time operational insights.",
        "Established automated MLOps pipelines for model training, testing, and deployment utilizing MLflow.",
        "Leveraged LangChain and AutoGen to orchestrate seamless collaboration between specialized AI agents.",
      ],
    },
    {
      company: "TulipTech Limited",
      role: "Software Engineer (AI)",
      duration: "Oct 2022 \u2013 Mar 2025",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Designed and deployed scalable AI solutions following strict MLOps best practices using Python and FastAPI.",
        "Implemented end-to-end ML architectures ensuring robust model lifecycle management.",
        "Led Cloud & DevOps integration with Microsoft Azure to provision and optimize cloud-based AI infrastructure.",
        "Engineered secure, performant APIs and managed document-based databases (MongoDB).",
      ],
    },
  ],
  otherExperience: [
    {
      company: "96.4 Spice Fm",
      role: "Radio Jockey",
      duration: "Oct 2020 \u2013 Oct 2022",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Created content, wrote scripts and conducted live interviews with artists, entrepreneurs and public figures to drive audience engagement.",
        "Collaborated with producers and broadcast team to ensure smooth broadcasting, while maintaining a lively and energetic on-air presence.",
      ],
    },
    {
      company: "Bangladesh Navy",
      role: "Officer Cadet",
      duration: "Dec 2016 \u2013 Mar 2018",
      location: "Bangladesh Naval Academy",
      bullets: [
        "Strengthened leadership, teamwork and decision-making under pressure through intensive military training.",
        "Acquired hands-on experience in naval operations, navigation and tactical combat strategies.",
        "Trained to operate effectively in high-stress environments, making quick and strategic decisions.",
      ],
    },
  ],
  projects: [
    {
      name: "personakit",
      type: "Open Source Framework",
      description: "A declarative Python library for building role-based LLM agents.",
      problem: "Traditional agent building involves messy, hand-wired chains lacking standardized behavioral controls.",
      solution: "A unified data object handling personas, frameworks, probes, and red flags declaratively.",
      tech: "Python, OpenTelemetry, LiteLLM, GitHub Actions (CI/CD)",
      impact: "11 releases shipped to PyPI. Wired for production with token tracking across 30 models and cross-provider standardizations.",
      link: "https://github.com/Majidul17068/personakit",
      pypiUrl: "https://pypi.org/project/personakit/",
      status: ["live", "oss"] as const,
    },
    {
      name: "Empathika",
      type: "Healthcare AI Platform",
      description: "Multi-Agent RAG for Care & Medication workflows.",
      problem: "Clinical decision-making requires vast, rapidly-accessible knowledge strictly grounded in medical literature.",
      solution: "A multi-agent system combining RAG over clinical records with external medical knowledge. Driven by the personakit library.",
      tech: "Agentic Frameworks, Vector DBs, Edge AI",
      impact: "Currently live in production. Serves real users for care planning and medication safety with citation-backed responses.",
      status: ["live"] as const,
    },
    {
      name: "HR Policy Chatbot",
      type: "Enterprise RAG",
      description: "Agentic RAG queries for large organizational policies.",
      problem: "Employees struggle to navigate massive, fragmented internal HR documents.",
      solution: "An agentic RAG built on DeepSeek models and ChromaDB, supporting English and Bangla queries.",
      tech: "DeepSeek, ChromaDB, LangChain",
      impact: "Live at a large enterprise (Kazi Farms Group). Empowers thousands of employees with instant, fully attributed answers.",
      status: ["live"] as const,
    },
    {
      name: "Bank Reconciliation AI",
      type: "Financial Automation",
      description: "Smart financial workflow automation system.",
      problem: "Manual bank statement reconciliation is error-prone and time-consuming at an enterprise scale.",
      solution: "An intelligent AI system that automatically maps and matches bank statements with internal records.",
      tech: "Machine Learning, FastAPI, Automated Workflows",
      impact: "Live in production. Drastically reduces manual finance work, accelerating monthly close efforts securely.",
      status: ["live"] as const,
    },
    {
      name: "Sales Forecasting (Big Data)",
      type: "Predictive Analytics",
      description: "Machine learning based sales forecasting system.",
      problem: "Inefficient inventory and supply chain management due to lack of accurate demand predictions.",
      solution: "Leveraged historical sales data, seasonal trends, and external factors for accurate forecasting.",
      tech: "Pandas, Scikit-Learn, PySpark",
      impact: "Enabled data-driven decision making for marketing and supply chain teams via predictive dashboards.",
    },
    {
      name: "NHS Medicine Parser",
      type: "Healthcare Data Automation",
      description: "Automated system for parsing critical healthcare data.",
      problem: "Fragmented and unstructured medical records in NHS systems leading to poor accessibility.",
      solution: "NLP-based system to parse and extract critical data from NHS medical records.",
      tech: "Python, NLP, OCR",
      impact: "Significantly improved healthcare data accessibility and processing efficiency.",
    },
  ],
  techStack: {
    aiTools: [
      "OpenAI",
      "Anthropic",
      "DeepSeek",
      "Groq",
      "Ollama",
      "LiteLLM",
      "Hugging Face",
      "PyTorch",
      "TensorFlow",
      "ChromaDB",
      "Pinecone",
      "MLflow",
      "Phoenix",
      "Langfuse",
      "Tesseract",
      "OpenCV",
    ],
    frameworks: [
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "LangGraph",
      "AutoGen",
      "FastAPI",
      "Streamlit",
      "personakit",
    ],
    edge: [
      "NVIDIA Jetson",
      "CUDA",
      "TensorRT",
      "ONNX Runtime",
      "FP16 / INT8 Quantization",
      "Real-time Inference",
      "GPU Memory Optimization",
    ],
    mlops: [
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "AWS",
      "GCP",
      "Azure",
      "Pytest",
      "mypy --strict",
      "Trusted Publishing",
      "OpenTelemetry",
    ],
  },
  openSource: {
    title: "Personakit Ecosystem",
    description: "Driving declarative agent architecture for production environments.",
    highlights: [
      "Differentiator: First-class 'red flag' primitives mapped deterministically.",
      "Auditable: Built for clinical, legal, and fintech use cases.",
      "Reliability: 93 unit tests, strict type-checking, bundled domain specialists.",
    ],
  },
  leadership: [
    {
      title: "AI/ML Mentor",
      org: "AI/ML Professional Community",
      description: "Mentoring practitioners on production LLM systems, RAG pipelines, multi-agent orchestration, MLOps, and AI career growth.",
      photos: ["/mentor-1.jpg", "/mentor-2.jpg"],
      linkUrl: "https://www.linkedin.com/groups/14270358/",
    },
    {
      title: "PMI Member",
      org: "Project Management Institute",
      description: "Member since 2026. Advocating for structured, agile AI project delivery.",
      linkUrl: "/pmi-certificate.pdf",
    },
    {
      title: "Former Radio Jockey",
      org: "96.4 Spice Fm",
      description: "Conducted live interviews, scripted content, and operated broadcast systems, developing elite communication skills.",
    },
  ],
  certifications: [
    {
      name: "PMI Member",
      link: "/pmi-certificate.pdf",
      year: "2026"
    },
    {
      name: "Oracle Certified Foundation Associate",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AEC85B5DD6152B83FA0719DE0FB6AB9346CCE5B9772BEA359BC4BAFBE3AE9157",
      year: "2025"
    },
    {
      name: "Agile Project Management Practitioner (HP LIFE)",
      link: "#",
      year: "2024"
    },
    {
      name: "Admin Official Certification (monday.com)",
      link: "https://monday-certificates.s3.eu-west-1.amazonaws.com/MD%20MAJIDUL%20%20ISLAM_Admin%20official%20certification.png",
      year: "2023"
    },
    {
      name: "Cyber Security (Ethical Hacking)",
      link: "#",
      year: "2022"
    }
  ],
  training: [
    {
      name: "Industrial Data Science and Machine learning with AI",
      org: "HR Ventures",
      year: "2023"
    },
    {
      name: "Cyber Security",
      org: "Arena Web Security - Batch 42",
      year: "2023"
    }
  ],
  coursesAndPractice: [
    {
      name: "Complete Data Science Bootcamp",
      org: "Udemy"
    },
    {
      name: "Complete MLOps Bootcamp with 10+ end to end ML Projects",
      org: "Udemy"
    },
    {
      name: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
      org: "Udemy"
    },
    {
      name: "AI Engineer Production Track",
      org: ""
    },
    {
      name: "OpenClaw: Run Powerful & Autonomous AI Agents Securely",
      org: ""
    }
  ],
  research: [
    {
      title: "Multi Factor Authentication Kerberos",
      publication: "IEEE SEM Vol-12, 2024",
      description: "Research on internet banking cyber security in Bangladesh, focusing on robust multi-factor authentication solutions.",
      date: "Jan 2024"
    }
  ],
  education: [
    {
      degree: "B.Sc. Computer Science and Engineering",
      grade: "3.66 / 4.00",
      duration: "2018 — 2022"
    },
    {
      degree: "Higher Secondary Certificate",
      grade: "5.00 / 5.00",
      duration: "2016"
    },
    {
      degree: "Secondary School Certificate",
      grade: "5.00 / 5.00",
      duration: "2014"
    }
  ]
};
