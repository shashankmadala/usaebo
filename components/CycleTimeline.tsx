import { competition2027 } from "@/lib/content/competition";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const milestones = [
  {
    date: competition2027.registrationAnnounced,
    title: "Registration opens",
    detail: "Sign up for Round 1 through the official registration portal. Registration is free.",
    current: true,
  },
  {
    date: competition2027.deadline,
    title: "Registration closes",
    detail: "The final moment to enter the 2027 competition cycle.",
    current: false,
  },
  {
    date: `${competition2027.rounds[0].date}, ${competition2027.rounds[0].time}`,
    title: "Round 1",
    detail: `${competition2027.rounds[0].format}, taken digitally from anywhere. Top performers earn honor roll awards and advance.`,
    current: false,
  },
  {
    date: `${competition2027.rounds[1].date}, ${competition2027.rounds[1].time}`,
    title: "Round 2",
    detail: `${competition2027.rounds[1].format}. Gold, Silver, Bronze, and Honorable Mention awards are decided here.`,
    current: false,
  },
  {
    date: "After Round 2",
    title: "Team USA selected",
    detail: "Five students are selected from Round 2 to represent the United States at the International Economics Olympiad.",
    current: false,
  },
] as const;

export function CycleTimeline() {
  return (
    <ol className="relative border-l border-gold-500/40 pl-8">
      {milestones.map((milestone, index) => (
        <Reveal as="li" className="relative pb-10 last:pb-0" delay={index * 90} key={milestone.title}>
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-2.5",
              milestone.current ? "-left-[2.1875rem] size-1.5 bg-gold-500" : "-left-8 h-px w-3 bg-gold-500",
            )}
          />
          <p className="label text-gold-700">{milestone.date}</p>
          <h3 className="mt-2 font-heading text-xl font-semibold text-navy-900">
            {milestone.title}
            {milestone.current ? <span className="label ml-3 text-gold-600">Open now</span> : null}
          </h3>
          <p className="mt-1.5 max-w-xl text-sm leading-6 text-ink/60">{milestone.detail}</p>
        </Reveal>
      ))}
    </ol>
  );
}
