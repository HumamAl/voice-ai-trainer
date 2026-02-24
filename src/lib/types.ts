import type { LucideIcon } from "lucide-react";

// Sidebar navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// ── Voice AI Domain Types ──────────────────────────────────────

export type PersonalityMode =
  | "coach"
  | "interviewer"
  | "mentor"
  | "challenger"
  | "supportive";

export type SessionStatus =
  | "completed"
  | "in-progress"
  | "abandoned"
  | "scheduled";

export type FeedbackRating = 1 | 2 | 3 | 4 | 5;

export interface PersonalityConfig {
  id: PersonalityMode;
  label: string;
  description: string;
  tone: string;
  icon: string;
  color: string;
}

export interface Session {
  id: string;
  userId: string;
  personalityMode: PersonalityMode;
  status: SessionStatus;
  startedAt: string;
  endedAt: string | null;
  durationMinutes: number;
  topic: string;
  overallScore: number;
  feedbackId: string | null;
}

export interface FeedbackCriterion {
  name: string;
  score: number;
  maxScore: number;
  comment: string;
}

export interface SessionFeedback {
  id: string;
  sessionId: string;
  overallScore: number;
  criteria: FeedbackCriterion[];
  summary: string;
  strengths: string[];
  improvements: string[];
  generatedAt: string;
}

export interface UserProgress {
  month: string;
  sessionsCompleted: number;
  avgScore: number;
  avgDuration: number;
  topMode: PersonalityMode;
}

export interface UserStats {
  totalSessions: number;
  avgSessionDuration: number;
  overallScore: number;
  currentStreak: number;
  longestStreak: number;
  totalPracticeHours: number;
  favoriteMode: PersonalityMode;
  improvementRate: number;
}

export interface ConversationMessage {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: string;
  sentiment?: "positive" | "neutral" | "negative";
}

export interface ActiveUser {
  id: string;
  name: string;
  avatar: string;
  sessionsThisWeek: number;
  currentStreak: number;
  topScore: number;
  lastActive: string;
}

// Challenge visualization types
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline"
  | "dual-kpi"
  | "tech-stack"
  | "decision-flow";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
  outcome?: string;
}

// Proposal types
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
  outcome?: string;
  liveUrl?: string;
}
