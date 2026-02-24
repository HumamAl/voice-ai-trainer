"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { APP_CONFIG } from "@/lib/config";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Clock,
  TrendingUp,
  Flame,
  ArrowUpRight,
  Play,
} from "lucide-react";
import {
  userStats,
  sessions,
  monthlyProgress,
  modeDistribution,
  personalityModes,
} from "@/data/mock-data";

const ProgressChart = dynamic(() => import("@/components/dashboard/progress-chart"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] flex items-center justify-center text-sm text-muted-foreground">
      Loading chart...
    </div>
  ),
});

const ModeChart = dynamic(() => import("@/components/dashboard/mode-chart"), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] flex items-center justify-center text-sm text-muted-foreground">
      Loading chart...
    </div>
  ),
});

function useCountUp(target: number, duration: number = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({
  label,
  value,
  suffix,
  icon: Icon,
  trend,
  delay,
}: {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ElementType;
  trend?: string;
  delay: number;
}) {
  const { count, ref } = useCountUp(value);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={ref}
      className="aesthetic-card transition-all"
      style={{
        padding: "var(--card-padding)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transitionDuration: "var(--dur-slow, 250ms)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Icon className="w-4 h-4 text-muted-foreground/50" />
      </div>
      <p className="text-2xl font-bold font-mono">
        {count}
        {suffix && <span className="text-base font-normal text-muted-foreground ml-0.5">{suffix}</span>}
      </p>
      {trend && (
        <p className="text-xs text-[color:var(--success)] mt-1 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> {trend}
        </p>
      )}
    </div>
  );
}

export default function DashboardPage() {
  const [selectedMode, setSelectedMode] = useState<string>("all");

  const recentSessions = useMemo(() => {
    const filtered = selectedMode === "all"
      ? sessions
      : sessions.filter((s) => s.personalityMode === selectedMode);
    return filtered
      .filter((s) => s.status === "completed")
      .slice(0, 5);
  }, [selectedMode]);

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your voice training performance at a glance
          </p>
        </div>
        <Link
          href="/voice-studio"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Play className="w-4 h-4" /> Start Session
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Sessions"
          value={userStats.totalSessions}
          icon={Mic}
          trend="+15 this month"
          delay={0}
        />
        <StatCard
          label="Avg. Duration"
          value={userStats.avgSessionDuration}
          suffix="min"
          icon={Clock}
          trend="+2 min vs last month"
          delay={50}
        />
        <StatCard
          label="Overall Score"
          value={userStats.overallScore}
          suffix="/100"
          icon={TrendingUp}
          trend={`+${userStats.improvementRate}% improvement`}
          delay={100}
        />
        <StatCard
          label="Current Streak"
          value={userStats.currentStreak}
          suffix="days"
          icon={Flame}
          delay={150}
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          className="aesthetic-card lg:col-span-2"
          style={{ padding: "var(--card-padding)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium">Performance Trend</p>
            <Badge variant="secondary" className="text-xs font-mono">6 months</Badge>
          </div>
          <ProgressChart data={monthlyProgress} />
        </div>

        <div
          className="aesthetic-card"
          style={{ padding: "var(--card-padding)" }}
        >
          <p className="text-sm font-medium mb-4">Mode Distribution</p>
          <ModeChart data={modeDistribution} />
        </div>
      </div>

      {/* Recent sessions with filter */}
      <div
        className="aesthetic-card"
        style={{ padding: "var(--card-padding)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium">Recent Sessions</p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedMode("all")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                selectedMode === "all"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-[color:var(--surface-hover)]"
              }`}
            >
              All
            </button>
            {personalityModes.slice(0, 3).map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedMode === mode.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-[color:var(--surface-hover)]"
                }`}
              >
                {mode.label.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {recentSessions.map((session) => {
            const mode = personalityModes.find((m) => m.id === session.personalityMode);
            return (
              <Link
                key={session.id}
                href="/sessions"
                className="flex items-center justify-between py-2.5 px-3 rounded-md aesthetic-hover group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: mode?.color }}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{session.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      {mode?.label} &middot; {session.durationMinutes}min
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-mono font-medium">{session.overallScore}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/sessions"
          className="block mt-3 text-xs text-primary hover:text-primary/80 transition-colors text-center"
        >
          View all sessions →
        </Link>
      </div>

      {/* Bottom banner */}
      <div
        className="rounded-lg border border-primary/20 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style={{ background: "var(--section-dark)" }}
      >
        <p className="text-xs text-white/70">
          This is a live demo built for{" "}
          <span className="text-white font-medium">{APP_CONFIG.projectName}</span>
        </p>
        <div className="flex items-center gap-3 text-xs">
          <Link href="/challenges" className="text-primary hover:text-primary/80 transition-colors">
            My Approach →
          </Link>
          <Link href="/proposal" className="text-primary hover:text-primary/80 transition-colors">
            Work With Me →
          </Link>
        </div>
      </div>
    </div>
  );
}
