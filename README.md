# Rutgers Course & Professor Review AI Advisor to Prepare Students for Upcoming Classes

AI-powered web app that helps Rutgers students explore **courses and professors**, read real reviews, and get **concise, grounded summaries** using **Retrieval-Augmented Generation (RAG)**.

## ✨ Features (MVP)
- **Search by Course, Professor, or Both** (e.g., `CS111`, `Prof. Smith`, or “How is CS111 with Prof. Smith?”)
- **AI Summaries via RAG**: Retrieves the most relevant reviews and generates a concise answer (difficulty, workload, teaching style).
- **Review Browser**: List & filter reviews (rating, difficulty, workload hours).
- **Add Reviews (seed/admin for now)** to bootstrap the dataset.
- **Rutgers Data Sources**: Supports RateMyProfessors (RMP) + Rutgers Course API for official course metadata.

---

## 🧠 RAG Pipeline
1. **Ingest**: Load course/professor reviews + course metadata.
2. **Embed**: Generate text embeddings (OpenAI) via LangChain.
3. **Retrieve**: Similarity search (top-k chunks) from a vector store.
4. **Generate**: LLM produces an answer **grounded** in retrieved context.

---

## 🛠 Tech Stack

**Frontend**
- React **+ TypeScript**
- Axios for HTTP
- Tailwind CSS / shadcn/ui

**Backend**
- **FastAPI** (Python)
- **Mangum** (FastAPI ↔ AWS Lambda)
- Pydantic for schemas

**AI / Retrieval**
- **LangChain** (chains, retrievers, prompt templates)
- **OpenAI** (embeddings + LLM)
- Vector store: **FAISS** (local/dev) → (Optional) **Pinecone** or **OpenSearch Serverless** in prod

**Data & Infra**
- **DynamoDB** (course/professor/review storage)
- **AWS Lambda** + **API Gateway** (serverless API)
- **CloudWatch** (logs/metrics)
