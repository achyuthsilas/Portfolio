export const profile = {
  name: "Achyuth Kumar Silasagaram",
  title: "Generative AI Engineer",
  tagline:
    "Shipping production RAG systems, multi-agent orchestration, and HIPAA-grade AI workflows.",
  about:
    "Generative AI Engineer with 4+ years across enterprise AI and software engineering, specializing in production RAG systems, multi-agent orchestration, and MLOps. Shipped a HIPAA-compliant clinical RAG platform indexing 50,000+ documents at 94% faithfulness on Azure OpenAI, and previously built ML-driven anomaly detection at Dell on AWS.",
  location: "San Jose, CA",
  email: "achyuth.uf237@gmail.com",
  phone: "+1-216-860-7167",
  github: "https://github.com/achyuthsilas",
  linkedin: "https://www.linkedin.com/in/achyuthkumar09/",
  leetcode: "https://leetcode.com/u/achyuthsilas/",
  githubUsername: "achyuthsilas",
};

export const skills = [
  {
    group: "Generative AI & LLMs",
    items: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Multi-Agent Orchestration",
      "Prompt Engineering (CoT, Few-shot)",
      "LLM-as-a-Judge",
      "RLHF",
      "Fine-tuning (LoRA, PEFT)",
      "Tool Calling",
      "Agentic AI",
      "ReAct",
      "CrewAI",
      "TensorFlow",
    ],
  },
  {
    group: "Machine Learning & NLP",
    items: [
      "Transformers",
      "BERT",
      "XGBoost",
      "Time-Series Forecasting",
      "NER",
      "Sentiment Analysis",
      "scikit-learn",
      "CNN",
      "VGG16",
    ],
  },
  {
    group: "Programming & Frameworks",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "PyTorch",
      "Java",
      "Spring Boot",
      "C# (.NET Core)",
      "ReactJS",
      "TypeScript",
      "SQL",
    ],
  },
  {
    group: "Cloud & MLOps",
    items: [
      "AWS (Bedrock, SageMaker, Lambda, EKS)",
      "Azure (OpenAI, AI Search, AKS)",
      "Azure Document Intelligence",
      "GCP",
      "Vertex AI",
      "Guardrails AI",
      "Docker",
      "Helm",
      "GitHub Actions",
      "Jenkins",
      "MLflow",
      "LangSmith",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    group: "Data Engineering",
    items: [
      "PostgreSQL",
      "DynamoDB",
      "MongoDB",
      "FAISS",
      "Pinecone",
      "Apache Spark",
      "Kafka",
      "Airflow",
      "AWS Glue",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Kaiser Permanente",
    period: "Jun 2024 — Present",
    points: [
      "Architected a production-grade RAG pipeline using LangChain and Azure OpenAI, indexing 50,000+ medical documents into Azure AI Search; integrated Guardrails AI for I/O validation, achieving 94% RAGAS faithfulness with citation-backed grounding.",
      "Engineered a secure multi-agent orchestration layer using LangGraph with tool calling and ReAct self-correction, automating 12+ clinical workflows and reducing processing time by 45%; embedded policy guardrails ensuring safe, auditable behavior.",
      "Implemented system-level guardrails including PII redaction, query validation, and human-in-the-loop (HITL) escalation using Azure Document Intelligence to ensure HIPAA compliance.",
      "Optimized LLM performance by establishing evaluation pipelines with RAGAS and LangSmith, improving response accuracy by 30% and reducing token consumption via semantic caching.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dell Technologies",
    period: "Mar 2021 — Jul 2022",
    points: [
      "Productionized hardware failure prediction ML models via event-driven FastAPI and Spring Boot microservices on AWS; drove feature engineering and model evaluation with data science teams, reducing inference latency 30% across 10,000+ devices.",
      "Built real-time streaming ETL pipelines using Apache Kafka and Spark to process system telemetry data, improving anomaly detection throughput by 25%.",
      "Containerized AI workloads using Docker and orchestrated deployments on Kubernetes (EKS) with Helm charts, streamlining CI/CD via Jenkins and Terraform and enabling reproducible infrastructure as code.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "TatvaSoft",
    period: "Jan 2020 — Feb 2021",
    points: [
      "Developed modular web applications using Java and ReactJS to integrate RESTful APIs for large-scale data processing.",
      "Optimized SQL Server queries and managed data reliability for enterprise applications to reduce execution time for reporting.",
      "Built an NLP-based ticket routing system using scikit-learn and classical text classification, applying TF-IDF representations to automate triage of 1,000+ daily support tickets and reduce manual routing effort by 50%.",
    ],
  },
];

export const education = [
  {
    school: "Eastern Illinois University",
    degree: "M.S. in Computer Technology",
    period: "Aug 2022 — Jun 2024",
    detail: "Graduate studies focused on applied computing and AI systems.",
  },
  {
    school: "Vardhaman College of Engineering",
    degree: "B.Tech in Computer Science",
    period: "Aug 2017 — Jul 2021",
    detail: "Foundations in software engineering and machine learning.",
  },
];

export const achievements = [
  "Shipped a HIPAA-compliant clinical RAG platform at Kaiser Permanente indexing 50,000+ documents with 94% RAGAS faithfulness.",
  "Automated 12+ clinical workflows via LangGraph multi-agent orchestration, cutting processing time by 45%.",
  "Reduced ML inference latency by 30% across 10,000+ Dell devices via event-driven FastAPI microservices on AWS.",
  "Improved anomaly detection throughput by 25% with Kafka + Spark streaming ETL pipelines.",
];

export const certifications = [
  "Azure AI Engineer — hands-on production deployments",
  "AWS — Bedrock, SageMaker, Lambda, EKS",
];

export interface Project {
  name: string;
  description: string;
  url: string;
  repo?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "AI Interview Coach",
    description:
      "An LLM-powered interview coach that runs realistic mock interviews, evaluates answers, and gives structured feedback on clarity, depth, and delivery.",
    url: "https://ai-interview-coach-git-main-achyuthsilas-projects.vercel.app/",
    tags: ["LLM", "Agents", "Next.js", "Evals"],
  },
  {
    name: "Medical Report Simplifier",
    description:
      "Turns dense medical reports into plain-language summaries with key findings, risk flags, and follow-up questions for patients.",
    url: "https://medical-report-simplifier-phi.vercel.app/",
    tags: ["Healthcare", "RAG", "LLM", "NLP"],
  },
  {
    name: "Healthcare AI Chatbot",
    description:
      "A Streamlit healthcare assistant that answers medical questions with grounded retrieval, guardrails, and citation-backed responses.",
    url: "https://healthcare-ai-chatbot-achyuth-kumar.streamlit.app/",
    tags: ["Streamlit", "RAG", "Healthcare", "Guardrails"],
  },
];
