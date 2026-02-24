"use client";

import { useState } from "react";
import Link from "next/link";
import { challenges, executiveSummary } from "@/data/challenges";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { FlowDiagram } from "@/components/challenges/flow-diagram";
import { BeforeAfter } from "@/components/challenges/before-after";
import { MetricBar } from "@/components/challenges/metric-bar";

export default function ChallengesPage() {
  const [activeStep, setActiveStep] = useState(0);

  const visualizations: Record<string, React.ReactNode> = {
    "challenge-1": (
      <FlowDiagram
        steps={[
          { label: "Voice Input", sublabel: "WebSocket stream", status: "active" },
          { label: "Speech-to-Text", sublabel: "Streaming STT", status: "active" },
          { label: "LLM Processing", sublabel: "Context-aware response", status: "active" },
          { label: "Text-to-Speech", sublabel: "Low-latency synthesis", status: "active" },
          { label: "Audio Output", sublabel: "< 200ms total", status: "complete" },
        ]}
      />
    ),
    "challenge-2": (
      <BeforeAfter
        before={{
          title: "Static Prompt Swap",
          items: [
            "Same response style regardless of context",
            "Mode differences feel cosmetic",
            "No mid-session adaptation",
            "Users can't tell modes apart after 2 minutes",
          ],
        }}
        after={{
          title: "Dynamic Personality Engine",
          items: [
            "Tone and follow-up strategy adapt per turn",
            "Each mode has distinct questioning patterns",
            "Context-aware escalation/de-escalation",
            "Users report 5 genuinely different experiences",
          ],
        }}
      />
    ),
    "challenge-3": (
      <div className="space-y-3">
        <MetricBar label="Clarity" value={85} color="var(--chart-1)" />
        <MetricBar label="Confidence" value={72} color="var(--chart-2)" />
        <MetricBar label="Articulation" value={88} color="var(--chart-3)" />
        <MetricBar label="Pace" value={68} color="var(--chart-4)" />
        <MetricBar label="Engagement" value={80} color="var(--chart-5)" />
        <MetricBar label="Relevance" value={84} color="var(--primary)" />
        <p className="text-[11px] text-muted-foreground mt-2 text-center">
          Sample feedback breakdown — each criterion scored and tracked across sessions
        </p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 space-y-8">

        {/* Page heading */}
        <div>
          <h1 className="text-2xl font-bold">My Approach</h1>
          <p className="text-sm text-muted-foreground mt-1">
            How I would tackle the key technical challenges in building your voice AI platform
          </p>
        </div>

        {/* Executive summary */}
        <div
          className="rounded-lg p-5 space-y-3"
          style={{ background: "var(--section-dark)" }}
        >
          <Link
            href="/"
            className="text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            ← Back to the live demo
          </Link>
          <p className="text-sm leading-relaxed text-white/80">
            {executiveSummary}
          </p>
        </div>

        {/* Challenge cards */}
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              title={challenge.title}
              description={challenge.description}
              outcome={challenge.outcome}
            >
              {visualizations[challenge.id]}
            </ChallengeCard>
          ))}
        </div>

        {/* Interactive element — tech stack comparison */}
        <div className="aesthetic-card" style={{ padding: "var(--card-padding)" }}>
          <p className="text-sm font-medium mb-3">Recommended Tech Stack</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { layer: "Frontend", tech: "Next.js + React 19", reason: "Server components for fast initial load, client components for real-time voice UI" },
              { layer: "Voice I/O", tech: "Web Speech API + Deepgram", reason: "Browser-native capture with streaming STT for low latency" },
              { layer: "AI Engine", tech: "OpenAI GPT-4 / Claude", reason: "Structured output for personality modes + feedback generation" },
              { layer: "TTS Output", tech: "ElevenLabs / Play.ht", reason: "Low-latency, natural-sounding voice synthesis with personality control" },
              { layer: "Real-time", tech: "WebSockets + Edge Functions", reason: "Persistent connection for streaming audio + response chunks" },
              { layer: "Auth & Data", tech: "NextAuth + PostgreSQL", reason: "Session management, user progress, feedback storage" },
            ].map((item) => (
              <div
                key={item.layer}
                className="p-3 rounded-md border border-border/60 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{item.layer}</span>
                  <span className="text-xs font-mono font-medium text-primary">{item.tech}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA closer */}
        <div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-base font-semibold">Ready to discuss the approach?</p>
            <p className="text-sm text-muted-foreground mt-1">
              I can walk through how each piece connects to your specific MVP requirements.
            </p>
          </div>
          <Link
            href="/proposal"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
          >
            Work With Me →
          </Link>
        </div>
      </div>
    </div>
  );
}
