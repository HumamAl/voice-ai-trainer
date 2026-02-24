import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FlowStep {
  label: string;
  sublabel?: string;
  status?: "active" | "complete" | "pending";
}

interface FlowDiagramProps {
  steps: FlowStep[];
}

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 py-2",
              step.status === "complete"
                ? "border-[color:var(--success)]/40 bg-[color:var(--success)]/5"
                : step.status === "active"
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                step.status === "complete"
                  ? "bg-[color:var(--success)]/20 text-[color:var(--success)]"
                  : "bg-primary/20 text-primary"
              )}
            >
              {i + 1}
            </div>
            <div>
              <p className="text-xs font-medium">{step.label}</p>
              {step.sublabel && (
                <p className="text-[10px] text-muted-foreground">{step.sublabel}</p>
              )}
            </div>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
