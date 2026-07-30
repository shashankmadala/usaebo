import { pathwayStages } from "@/lib/content/competition";
import { Reveal } from "./Reveal";

// The four competition steps as a timeline: a connecting gold line with dot
// markers, each step in a soft card. Horizontal on desktop, vertical on mobile.
export function Pathway() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-[9px] top-2 w-px bg-gold-500/30 lg:bottom-auto lg:left-2 lg:right-2 lg:top-[9px] lg:h-px lg:w-auto"
      />
      <ol className="grid gap-7 lg:grid-cols-4 lg:gap-6">
        {pathwayStages.map((stage, index) => (
          <Reveal as="li" className="relative pl-9 lg:pl-0" delay={index * 100} key={stage.label}>
            <span
              aria-hidden="true"
              className="absolute left-0 top-0.5 flex size-5 items-center justify-center rounded-full border-2 border-gold-500 bg-paper lg:relative lg:left-auto lg:top-auto lg:mb-5"
            >
              <span className="size-1.5 rounded-full bg-gold-500" />
            </span>
            <article className="card-lift h-full rounded-2xl border border-ink/8 bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                Step {index + 1}
              </p>
              <h3 className="mt-2.5 font-heading text-xl font-semibold text-navy-900">{stage.label}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/60">{stage.detail}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
