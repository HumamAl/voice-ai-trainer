import type { Challenge } from "@/lib/types";

export const executiveSummary = "Building a real-time voice AI application demands solving three interconnected problems: sub-200ms voice-to-response latency for natural conversation flow, personality-driven behavior that genuinely adapts mid-session, and structured post-session analysis that turns unstructured speech into actionable feedback. I've built AI pipelines (WMF Agent Dashboard) and audio-driven apps (Meditation Audio) that tackle similar challenges — here's how I'd approach yours.";

export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "Real-Time Voice Pipeline with Sub-200ms Latency",
    description: "The core technical challenge: capturing voice input, streaming it through speech-to-text, processing it with an LLM for dynamic response generation, and synthesizing speech output — all while maintaining conversational flow. Users will abandon sessions immediately if there's noticeable lag between speaking and hearing a response. This requires a WebSocket-based streaming architecture with overlapping processing stages.",
    visualizationType: "flow",
    outcome: "Could reduce perceived response time to under 200ms through stream-based processing, making AI conversations feel as natural as speaking with a human trainer",
  },
  {
    id: "challenge-2",
    title: "Dynamic Personality Engine with Mid-Session Adaptation",
    description: "Each personality mode (Coach, Interviewer, Mentor, Challenger, Supportive) needs to consistently maintain character while dynamically adapting to what the user says. The AI can't just swap system prompts — it needs to adjust tone, follow-up strategy, and feedback style in real-time based on conversation context. A rigid persona feels scripted; too loose and the modes become indistinguishable.",
    visualizationType: "before-after",
    outcome: "Could enable 5+ distinct personality experiences that users can perceive as genuinely different coaching styles, increasing session completion rates and repeat usage",
  },
  {
    id: "challenge-3",
    title: "Multi-Criteria Post-Session Feedback Generation",
    description: "After each session, the system must analyze the full conversation transcript and produce structured, actionable feedback across 6+ criteria (clarity, confidence, pace, articulation, engagement, relevance). This isn't simple sentiment analysis — it requires understanding conversational dynamics, identifying specific moments of strength or weakness, and generating feedback that's specific enough to be useful without being overwhelming.",
    visualizationType: "metrics",
    outcome: "Could deliver session feedback reports within 30 seconds of session end, with criterion-level scores that track improvement over time and guide targeted practice",
  },
];
