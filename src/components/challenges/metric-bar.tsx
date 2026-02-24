"use client";

import { useEffect, useRef, useState } from "react";

interface MetricBarProps {
  label: string;
  value: number;
  max?: number;
  unit?: string;
  color?: string;
}

export function MetricBar({
  label,
  value,
  max = 100,
  unit = "",
  color = "var(--primary)",
}: MetricBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimatedWidth(percentage), 100);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="space-y-1.5" ref={ref}>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium font-mono">
          {value}
          {unit || `/${max}`}
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${animatedWidth}%`, background: color }}
        />
      </div>
    </div>
  );
}
