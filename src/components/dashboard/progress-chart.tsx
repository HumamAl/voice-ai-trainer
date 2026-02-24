"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { UserProgress } from "@/lib/types";

export default function ProgressChart({ data }: { data: UserProgress[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="sessionsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--chart-4)" stopOpacity={0.2} />
            <stop offset="95%" stopColor="var(--chart-4)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--border)"
          vertical={false}
        />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v: string) => v.split(" ")[0]}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          tickLine={false}
          axisLine={false}
          domain={[0, 100]}
        />
        <Tooltip
          contentStyle={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            fontSize: 12,
          }}
        />
        <Area
          type="monotone"
          dataKey="avgScore"
          stroke="var(--primary)"
          strokeWidth={2}
          fill="url(#scoreGradient)"
          name="Avg Score"
          animationDuration={1200}
        />
        <Area
          type="monotone"
          dataKey="sessionsCompleted"
          stroke="var(--chart-4)"
          strokeWidth={1.5}
          fill="url(#sessionsGradient)"
          name="Sessions"
          animationDuration={1400}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
