"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { feedbackReports, sessions, personalityModes } from "@/data/mock-data";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const RadarChartComponent = dynamic(() => import("@/components/dashboard/radar-chart"), {
  ssr: false,
  loading: () => <div className="h-[250px] flex items-center justify-center text-sm text-muted-foreground">Loading...</div>,
});

export default function FeedbackPage() {
  const [expandedId, setExpandedId] = useState<string | null>(feedbackReports[0]?.id ?? null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Feedback Reports</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Detailed performance analysis from each session
        </p>
      </div>

      <div className="space-y-3">
        {feedbackReports.map((report) => {
          const session = sessions.find((s) => s.id === report.sessionId);
          const mode = personalityModes.find((m) => m.id === session?.personalityMode);
          const isExpanded = expandedId === report.id;

          return (
            <div
              key={report.id}
              className="aesthetic-card overflow-hidden"
            >
              {/* Header - always visible */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : report.id)}
                className="w-full flex items-center justify-between text-left hover:bg-[color:var(--surface-hover)] transition-colors"
                style={{ padding: "var(--card-padding)" }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-mono text-lg font-bold"
                    style={{
                      background: report.overallScore >= 80
                        ? "oklch(0.627 0.194 149.214 / 0.15)"
                        : report.overallScore >= 70
                          ? "oklch(0.769 0.188 70.08 / 0.15)"
                          : "oklch(0.577 0.245 27.325 / 0.15)",
                      color: report.overallScore >= 80
                        ? "var(--success)"
                        : report.overallScore >= 70
                          ? "var(--warning)"
                          : "var(--destructive)",
                    }}
                  >
                    {report.overallScore}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{session?.topic}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                        {mode?.label}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground">
                        {new Date(report.generatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
              </button>

              {/* Expanded details */}
              {isExpanded && (
                <div
                  className="border-t border-border/60 space-y-5"
                  style={{ padding: "var(--card-padding)" }}
                >
                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {report.summary}
                  </p>

                  {/* Criteria scores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                        Performance Breakdown
                      </p>
                      <div className="space-y-3">
                        {report.criteria.map((c) => (
                          <div key={c.name}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium">{c.name}</span>
                              <span className="text-xs font-mono">{c.score}/{c.maxScore}</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                  width: `${(c.score / c.maxScore) * 100}%`,
                                  background: c.score >= 85
                                    ? "var(--success)"
                                    : c.score >= 70
                                      ? "var(--primary)"
                                      : "var(--warning)",
                                }}
                              />
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-0.5">{c.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                        Skill Radar
                      </p>
                      <RadarChartComponent criteria={report.criteria} />
                    </div>
                  </div>

                  {/* Strengths & Improvements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-lg bg-[color:var(--success)]/5 border border-[color:var(--success)]/20 p-3">
                      <p className="text-xs font-medium flex items-center gap-1.5 mb-2 text-[color:var(--success)]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Strengths
                      </p>
                      <ul className="space-y-1">
                        {report.strengths.map((s, i) => (
                          <li key={i} className="text-xs text-muted-foreground">
                            &bull; {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-[color:var(--warning)]/5 border border-[color:var(--warning)]/20 p-3">
                      <p className="text-xs font-medium flex items-center gap-1.5 mb-2 text-[color:var(--warning)]">
                        <AlertCircle className="w-3.5 h-3.5" /> Areas to Improve
                      </p>
                      <ul className="space-y-1">
                        {report.improvements.map((s, i) => (
                          <li key={i} className="text-xs text-muted-foreground">
                            &bull; {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
