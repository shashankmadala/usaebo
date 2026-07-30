import { pathwayStages } from "@/lib/content/competition";
import { Reveal } from "./Reveal";

export function Pathway() {
  return (
    <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {pathwayStages.map((stage, index) => (
        <Reveal as="li" className="border-t-2 border-gold-500 pt-5" delay={index * 90} key={stage.label}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
            Step {index + 1}
          </p>
          <h3 className="mt-2 font-heading text-xl font-semibold text-navy-900">{stage.label}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/60">{stage.detail}</p>
        </Reveal>
      ))}
    </ol>
  );
}
