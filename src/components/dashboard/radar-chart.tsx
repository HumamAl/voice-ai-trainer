"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import type { FeedbackCriterion } from "@/lib/types";

export default function RadarChartComponent({ criteria }: { criteria: FeedbackCriterion[] }) {
  const data = criteria.map((c) => ({
    subject: c.name,
    score: c.score,
    fullMark: c.maxScore,
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="var(--border)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fontSize: 9, fill: "var(--muted-foreground)" }}
        />
        <Radar
          name="Score"
          dataKey="score"
          stroke="var(--primary)"
          fill="var(--primary)"
          fillOpacity={0.2}
          animationDuration={1200}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
