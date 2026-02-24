"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { sessions, personalityModes } from "@/data/mock-data";
import type { SessionStatus } from "@/lib/types";
import {
  CheckCircle2,
  Clock,
  XCircle,
  Loader2,
  Filter,
} from "lucide-react";

const statusConfig: Record<SessionStatus, { label: string; icon: React.ElementType; className: string }> = {
  completed: { label: "Completed", icon: CheckCircle2, className: "text-[color:var(--success)]" },
  "in-progress": { label: "In Progress", icon: Loader2, className: "text-primary" },
  abandoned: { label: "Abandoned", icon: XCircle, className: "text-muted-foreground" },
  scheduled: { label: "Scheduled", icon: Clock, className: "text-[color:var(--warning)]" },
};

export default function SessionsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [modeFilter, setModeFilter] = useState<string>("all");

  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      if (statusFilter !== "all" && s.status !== statusFilter) return false;
      if (modeFilter !== "all" && s.personalityMode !== modeFilter) return false;
      return true;
    });
  }, [statusFilter, modeFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Session History</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Review your past voice training sessions and scores
        </p>
      </div>

      {/* Filters */}
      <div
        className="aesthetic-card"
        style={{ padding: "var(--card-padding)" }}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Status:</span>
            <div className="flex gap-1">
              {["all", "completed", "in-progress", "abandoned"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    statusFilter === s
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-[color:var(--surface-hover)]"
                  }`}
                >
                  {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Mode:</span>
            <div className="flex gap-1">
              <button
                onClick={() => setModeFilter("all")}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  modeFilter === "all"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-[color:var(--surface-hover)]"
                }`}
              >
                All
              </button>
              {personalityModes.slice(0, 3).map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setModeFilter(mode.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    modeFilter === mode.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-[color:var(--surface-hover)]"
                  }`}
                >
                  {mode.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sessions list */}
      <div className="space-y-2">
        {filteredSessions.map((session) => {
          const mode = personalityModes.find((m) => m.id === session.personalityMode);
          const status = statusConfig[session.status];
          const StatusIcon = status.icon;
          const dateStr = new Date(session.startedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={session.id}
              className="aesthetic-card flex items-center justify-between"
              style={{ padding: "var(--card-padding)" }}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: mode?.color + "20", color: mode?.color }}
                >
                  <StatusIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{session.topic}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {mode?.label}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground">{dateStr}</span>
                    {session.durationMinutes > 0 && (
                      <span className="text-[11px] text-muted-foreground">
                        {session.durationMinutes} min
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {session.status === "completed" && (
                  <div className="text-right">
                    <p className="text-lg font-mono font-bold">{session.overallScore}</p>
                    <p className="text-[10px] text-muted-foreground">score</p>
                  </div>
                )}
                <Badge
                  variant="secondary"
                  className={`text-[10px] ${status.className}`}
                >
                  {status.label}
                </Badge>
              </div>
            </div>
          );
        })}

        {filteredSessions.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            No sessions match the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}
