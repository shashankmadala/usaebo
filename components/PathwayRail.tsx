import { pathwayStages } from "@/lib/content/competition";
import { cn } from "@/lib/utils";

type PathwayRailProps = {
  compact?: boolean;
  dark?: boolean;
};

export function PathwayRail({ compact = false, dark = false }: PathwayRailProps) {
  return (
    <ol
      aria-label="USAEBO pathway"
      className={cn("grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4", compact && "gap-y-6")}
    >
      {pathwayStages.map((stage, index) => (
        <li className={cn("border-t pt-5", dark ? "border-paper/20" : "border-ink/10")} key={stage.label}>
          <span className={cn("font-heading text-sm font-semibold", dark ? "text-paper/40" : "text-indigo/35")}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className={cn("mt-2 font-heading text-lg font-semibold", dark ? "text-paper" : "text-indigo")}>
            {stage.label}
          </p>
          <p className={cn("mt-1 text-sm leading-6", dark ? "text-paper/70" : "text-ink/65")}>{stage.detail}</p>
        </li>
      ))}
    </ol>
  );
}
