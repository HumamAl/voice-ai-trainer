import type { Profile, PortfolioProject } from "@/lib/types";

export const profile: Profile = {
  name: "Humam",
  tagline: "Full-stack developer specializing in AI-powered business tools — from email classification to voice-driven training platforms.",
  bio: "I build MVPs and production apps that solve real operational problems. My AI experience spans Claude API pipelines, structured output extraction, and audio-driven applications. I've shipped 24+ projects across 15 industries — the relevant ones for your voice AI platform are below.",
  approach: [
    {
      title: "Scope the Voice Pipeline",
      description: "Map the full audio flow — capture, STT, LLM, TTS — and identify latency bottlenecks before writing code. Get the WebSocket architecture right first.",
    },
    {
      title: "Build the Core Loop",
      description: "Voice input → AI response → audio output working end-to-end in week 1. Personality modes and feedback come after the core loop is solid.",
    },
    {
      title: "Layer Personality + Feedback",
      description: "Add personality engine with prompt architecture and structured feedback generation. Daily demos so you see progress every day.",
    },
    {
      title: "Polish and Ship",
      description: "Session history, progress tracking, mobile responsiveness. Your first users see something impressive, not a prototype.",
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: ["TypeScript", "React 19", "Next.js (App Router)", "Tailwind CSS", "shadcn/ui", "WebSocket clients"],
    },
    {
      name: "AI & Voice",
      skills: ["Claude API", "OpenAI API", "Structured Output", "Speech-to-Text APIs", "Text-to-Speech APIs", "Prompt Engineering"],
    },
    {
      name: "Backend & Infra",
      skills: ["Node.js", "WebSocket Servers", "Edge Functions", "PostgreSQL", "Vercel", "REST APIs"],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "wmf-agent",
    title: "WMF Agent Dashboard",
    description: "AI-powered customer service agent for manufacturing — email classification, RFQ data extraction with confidence scoring, and human-in-the-loop approval workflow.",
    tech: ["Next.js", "Claude API", "n8n", "Microsoft Graph"],
    relevance: "Same AI pipeline architecture — structured input processing, dynamic response generation, and actionable output formatting",
    outcome: "Replaced a 4-hour manual quote review process with a 20-minute structured extraction and approval flow",
    liveUrl: "https://wmf-agent-dashboard.vercel.app",
  },
  {
    id: "medrecord-ai",
    title: "MedRecord AI",
    description: "AI-powered medical record summarization — extracts clinical data, diagnoses, medications, and generates structured timeline summaries.",
    tech: ["Next.js", "AI Extraction Pipeline", "TypeScript"],
    relevance: "Multi-criteria analysis of unstructured content — similar to analyzing voice conversations for feedback generation",
    outcome: "Document processing pipeline that extracts structured clinical data and generates a readable timeline summary",
    liveUrl: "https://medrecord-ai-delta.vercel.app",
  },
  {
    id: "outerbloom",
    title: "Outerbloom — AI Social Coordination",
    description: "AI-powered social event coordination platform with intelligent matching of people, schedules, and venues.",
    tech: ["Next.js", "TypeScript", "AI Pipeline", "Tailwind"],
    relevance: "Real-time AI matching and dynamic response — similar architecture to adaptive personality conversations",
    outcome: "AI-driven matching pipeline connecting users, schedules, and venues — reducing manual coordination overhead",
    liveUrl: "https://outerbloom.vercel.app",
  },
  {
    id: "tinnitus-therapy",
    title: "Tinnitus Therapy SaaS",
    description: "Multi-clinic therapy management with patient intake, treatment protocols, session tracking, and progress analytics.",
    tech: ["Next.js", "Recharts", "TypeScript", "shadcn/ui"],
    relevance: "Session-based progress tracking with multi-criteria scoring — directly applicable to voice training analytics",
    outcome: "Multi-clinic SaaS covering the full patient journey — intake, protocol assignment, session tracking, and outcome dashboards",
    liveUrl: "https://tinnitus-therapy.vercel.app",
  },
];
