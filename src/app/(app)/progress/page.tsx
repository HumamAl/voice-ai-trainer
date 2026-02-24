"use client";

import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { userStats, monthlyProgress, modeDistribution } from "@/data/mock-data";
import {
  TrendingUp,
  Target,
  Flame,
  Clock,
  Award,
  BarChart3,
} from "lucide-react";

const ProgressChart = dynamic(() => import("@/components/dashboard/progress-chart"), {
  ssr: false,
  loading: () => <div className="h-[300px] flex items-center justify-center text-sm text-muted-foreground">Loading...</div>,
});

function ProgressStat({
  icon: Icon,
  label,
  value,
  suffix,
  description,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  suffix?: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-md border border-border/60">
      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-lg font-mono font-bold">
          {value}
          {suffix && <span className="text-sm font-normal text-muted-foreground ml-0.5">{suffix}</span>}
        </p>
        <p className="text-xs font-medium">{label}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export default function ProgressPage() {
  const latestMonth = monthlyProgress[monthlyProgress.length - 1];
  const previousMonth = monthlyProgress[monthlyProgress.length - 2];
  const scoreDelta = latestMonth.avgScore - previousMonth.avgScore;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Progress</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track your voice training improvement over time
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <ProgressStat
          icon={Target}
          label="Overall Score"
          value={userStats.overallScore}
          suffix="/100"
          description={`${scoreDelta > 0 ? "+" : ""}${scoreDelta} pts from last month`}
        />
        <ProgressStat
          icon={Flame}
          label="Current Streak"
          value={userStats.currentStreak}
          suffix="days"
          description={`Longest: ${userStats.longestStreak} days`}
        />
        <ProgressStat
          icon={Clock}
          label="Total Practice"
          value={userStats.totalPracticeHours}
          suffix="hrs"
          description={`Across ${userStats.totalSessions} sessions`}
        />
        <ProgressStat
          icon={TrendingUp}
          label="Improvement Rate"
          value={`+${userStats.improvementRate}%`}
          description="Score improvement over 6 months"
        />
        <ProgressStat
          icon={Award}
          label="Best Score"
          value={91}
          suffix="/100"
          description="Self-Introduction Practice"
        />
        <ProgressStat
          icon={BarChart3}
          label="Sessions This Month"
          value={latestMonth.sessionsCompleted}
          description={`Avg ${latestMonth.avgDuration} min per session`}
        />
      </div>

      {/* Performance trend chart */}
      <div
        className="aesthetic-card"
        style={{ padding: "var(--card-padding)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium">Performance Trend</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Average score and session count over 6 months
            </p>
          </div>
          <Badge variant="secondary" className="text-xs font-mono">
            {scoreDelta > 0 ? "+" : ""}{scoreDelta} pts
          </Badge>
        </div>
        <ProgressChart data={monthlyProgress} />
      </div>

      {/* Monthly breakdown */}
      <div
        className="aesthetic-card"
        style={{ padding: "var(--card-padding)" }}
      >
        <p className="text-sm font-medium mb-4">Monthly Breakdown</p>
        <div className="space-y-2">
          {[...monthlyProgress].reverse().map((month) => (
            <div
              key={month.month}
              className="flex items-center justify-between py-2 px-3 rounded-md border border-border/40"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium w-20">{month.month.split(" ")[0]}</span>
                <div className="hidden sm:flex items-center gap-1">
                  <div className="h-2 rounded-full bg-primary/20 w-24 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${month.avgScore}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-muted-foreground">
                  {month.sessionsCompleted} sessions
                </span>
                <span className="text-muted-foreground">
                  {month.avgDuration}min avg
                </span>
                <span className="font-mono font-bold w-8 text-right">
                  {month.avgScore}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mode mastery */}
      <div
        className="aesthetic-card"
        style={{ padding: "var(--card-padding)" }}
      >
        <p className="text-sm font-medium mb-4">Mode Mastery</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {modeDistribution.map((mode) => (
            <div
              key={mode.mode}
              className="text-center p-3 rounded-md border border-border/40"
            >
              <p className="text-lg font-mono font-bold">{mode.sessions}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{mode.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
