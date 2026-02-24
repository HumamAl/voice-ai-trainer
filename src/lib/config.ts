// App configuration — single source of truth for all identity/attribution text.
// Layout Builder populates these values from the Job Analyst brief.

export type AestheticProfile =
  | "linear"
  | "bold-editorial"
  | "warm-organic"
  | "corporate-enterprise"
  | "dark-premium"
  | "swiss-typographic"
  | "glassmorphism"
  | "neobrutalism"
  | "nature-wellness"
  | "data-dense"
  | "saas-modern"
  | "e-commerce"
  | "brand-forward"
  | "retrofuturism";

export const APP_CONFIG = {
  appName: "VoiceAI Trainer",
  projectName: "Voice AI Training Platform",
  clientName: null as string | null,
  domain: "ai-education",
  aesthetic: "dark-premium" as AestheticProfile,
} as const;
