import { cn } from "@/lib/utils";

// An economics chart axis: 1px baseline with minor and major tick marks.
// Color it with a text-* class; it renders in currentColor.
export function AxisRule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("axis-rule", className)} />;
}
