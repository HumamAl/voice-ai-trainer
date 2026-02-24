"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  MicOff,
  Volume2,
  Settings,
  RotateCcw,
} from "lucide-react";
import { personalityModes, sampleConversation } from "@/data/mock-data";
import type { PersonalityMode } from "@/lib/types";

export default function VoiceStudioPage() {
  const [selectedMode, setSelectedMode] = useState<PersonalityMode>("interviewer");
  const [isActive, setIsActive] = useState(false);
  const [showTranscript, setShowTranscript] = useState(true);

  const activeMode = personalityModes.find((m) => m.id === selectedMode)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Voice Studio</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Start a real-time voice conversation with your AI trainer
        </p>
      </div>

      {/* Mode Selector */}
      <div
        className="aesthetic-card"
        style={{ padding: "var(--card-padding)" }}
      >
        <p className="text-sm font-medium mb-3">Select Personality Mode</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {personalityModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`text-left p-3 rounded-md border transition-all ${
                selectedMode === mode.id
                  ? "border-primary bg-primary/5"
                  : "border-border/60 hover:border-border hover:bg-[color:var(--surface-hover)]"
              }`}
            >
              <p className="text-sm font-medium">{mode.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">
                {mode.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Voice Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Main voice area */}
        <div className="lg:col-span-3">
          <div
            className="aesthetic-card"
            style={{ padding: "var(--card-padding)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Badge
                  variant={isActive ? "default" : "secondary"}
                  className="text-xs"
                >
                  {isActive ? "Session Active" : "Ready"}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {activeMode.label}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="p-1.5 rounded-md text-muted-foreground hover:bg-[color:var(--surface-hover)] transition-colors"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Voice visualization area */}
            <div className="flex flex-col items-center justify-center py-12 space-y-6">
              {/* Pulsing mic button */}
              <button
                onClick={() => setIsActive(!isActive)}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-destructive text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {isActive && (
                  <>
                    <span className="absolute inset-0 rounded-full animate-ping bg-destructive/30" />
                    <span className="absolute -inset-2 rounded-full border-2 border-destructive/20 animate-pulse" />
                  </>
                )}
                {isActive ? (
                  <MicOff className="w-8 h-8 relative z-10" />
                ) : (
                  <Mic className="w-8 h-8 relative z-10" />
                )}
              </button>

              <p className="text-sm text-muted-foreground text-center">
                {isActive
                  ? "Listening... Click to stop"
                  : "Click the microphone to start a session"}
              </p>

              {/* Audio wave placeholder */}
              {isActive && (
                <div className="flex items-center gap-1 h-8">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary/60 rounded-full"
                      style={{
                        height: `${Math.random() * 24 + 8}px`,
                        animation: `pulse 0.8s ease-in-out ${i * 0.05}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:bg-[color:var(--surface-hover)] border border-border/60 transition-colors">
                  <Volume2 className="w-3.5 h-3.5" /> Audio Settings
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:bg-[color:var(--surface-hover)] border border-border/60 transition-colors">
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transcript sidebar */}
        <div className="lg:col-span-2">
          <div
            className="aesthetic-card h-full"
            style={{ padding: "var(--card-padding)" }}
          >
            <p className="text-sm font-medium mb-3">Live Transcript</p>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {sampleConversation.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary/10 text-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="font-medium text-[10px] text-muted-foreground mb-1 uppercase tracking-wide">
                      {msg.role === "user" ? "You" : "AI " + personalityModes.find(m => m.id === selectedMode)?.label}
                    </p>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
