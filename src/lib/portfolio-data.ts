export const profile = {
  name: "Achyuth Kumar Silasagaram",
  title: "Generative AI Engineer",
  tagline:
    "Shipping production RAG systems, multi-agent orchestration, and HIPAA-grade AI workflows.",
  about:
    "AI Engineer with 5+ years building production-grade Generative AI and full-stack ML systems for healthcare and enterprise at scale. Shipped a HIPAA-compliant RAG platform indexing 50,000+ clinical documents on Azure OpenAI, sustaining 94% RAGAS faithfulness and 99.9% uptime. Expert in LangGraph multi-agent orchestration, LLM fine-tuning (LoRA, PEFT), vector retrieval, and end-to-end MLOps across Azure, AWS, and GCP.",
  location: "Santa Clara, CA",
  email: "achyuthsilas26@gmail.com",
  phone: "(669) 577-2363",
  github: "https://github.com/achyuthsilas",
  linkedin: "https://www.linkedin.com/in/achyuthsilas/",
  leetcode: "https://leetcode.com/u/achyuthsilas/",
  githubUsername: "achyuthsilas",
};

export const skills = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "Java", "C#", "SQL", "JavaScript"],
  },
  {
    group: "LLM & Generative AI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Multi-Agent Orchestration",
      "ReAct",
      "Tool Calling",
      "Prompt Engineering (CoT, Few-shot)",
      "Fine-tuning (LoRA, QLoRA, PEFT)",
      "RLHF",
      "LLM-as-a-Judge",
      "Guardrails AI",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Llama",
      "Groq",
      "CrewAI",
    ],
  },
  {
    group: "ML / DL & NLP",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Hugging Face Transformers",
      "BERT",
      "XGBoost",
      "Time-Series Forecasting",
      "NER",
      "CNN",
      "Whisper",
      "OCR (Tesseract)",
    ],
  },
  {
    group: "MLOps & Observability",
    items: [
      "MLflow",
      "LangSmith",
      "RAGAS",
      "DeepEval",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Datadog",
      "Azure Monitor",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Kubernetes (EKS, AKS)",
      "Helm",
      "Terraform",
    ],
  },
  {
    group: "Cloud & Data",
    items: [
      "Azure (OpenAI, AI Search, AKS, Document Intelligence)",
      "AWS (Bedrock, SageMaker, Lambda, EKS)",
      "GCP (Vertex AI, Gemini, BigQuery, Pub/Sub, Dataflow)",
      "Apache Spark",
      "Kafka",
      "Airflow",
      "AWS Glue",
    ],
  },
  {
    group: "Databases & Retrieval",
    items: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Supabase",
      "SQLite",
      "FAISS",
      "Pinecone",
      "Azure AI Search",
      "Hybrid Search (BM25 + Dense)",
      "Cross-Encoders",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Kaiser Permanente",
    period: "Jun 2024 — Present",
    points: [
      "Architected a production RAG pipeline on Azure OpenAI and AI Search using LangChain, indexing 50,000+ HIPAA-regulated clinical documents and achieving 94% RAGAS faithfulness with citation-backed grounding.",
      "Engineered a secure multi-agent orchestration layer with LangGraph, ReAct self-correction, and tool calling, automating 12+ clinical workflows and reducing manual processing time by 45% across regulated clinical pipelines.",
      "Implemented system-level guardrails including PII redaction, query validation, and human-in-the-loop (HITL) escalation using Azure Document Intelligence and Guardrails AI to enforce HIPAA compliance on 100% of inference calls with full audit logging.",
      "Optimized LLM performance by establishing evaluation pipelines with RAGAS and LangSmith, improving response accuracy by 30% and reducing token consumption 40% via semantic caching, prompt compression, and structured output schemas.",
      "Instrumented observability via OpenTelemetry, Azure Monitor, and Prometheus, tracking latency, hallucination rate, and per-query cost across the inference stack to sustain 99.9% service availability.",
      "Partnered with clinicians, compliance officers, and product managers in iterative design reviews, translating regulated clinical workflow requirements into production AI capabilities rolled out to 500+ internal users.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dell Technologies",
    period: "Mar 2021 — Jul 2022",
    points: [
      "Productionized hardware-failure prediction models behind event-driven FastAPI and Spring Boot microservices on AWS, integrating PostgreSQL, DynamoDB, and Kafka topics and cutting inference latency 30% across 10,000+ enterprise devices.",
      "Built real-time streaming ETL pipelines with Kafka and Spark for device telemetry, raising anomaly detection throughput by 25% and catching failures early across global hardware fleets.",
      "Containerized ML workloads using Docker and orchestrated deployments on Kubernetes (EKS) with Helm charts, streamlining CI/CD via Jenkins and Terraform for reproducible infrastructure-as-code from development through production.",
      "Deployed predictive ML models across QA, staging, and production using Jenkins and Terraform automation, cutting deployment cycle time by 40% and enabling a weekly model release cadence with one-click rollback and canary support.",
    ],
  },
  {
    role: "Software Engineer",
    company: "TatvaSoft",
    period: "Jan 2020 — Feb 2021",
    points: [
      "Developed modular full-stack web applications using Java (Spring Boot) and ReactJS, integrating RESTful APIs and SQL Server backends to power enterprise data workflows with sub-200ms median response times under production load.",
      "Trained an NLP ticket-routing system using scikit-learn with TF-IDF feature engineering and classical text classification, automating triage of 1,000+ daily support tickets and reducing manual routing effort by 50%.",
      "Optimized SQL Server queries via indexing, execution-plan analysis, and stored-procedure refactoring, cutting average reporting execution time by 35% and improving data reliability across enterprise reporting dashboards.",
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
