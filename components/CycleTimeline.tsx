import { competition2027 } from "@/lib/content/competition";
import { Reveal } from "./Reveal";

const milestones = [
  {
    date: competition2027.registrationAnnounced,
    title: "Registration opens",
    detail: "Sign up for Round 1 through the official registration portal. Registration is free.",
  },
  {
    date: competition2027.deadline,
    title: "Registration closes",
    detail: "The final moment to enter the 2027 competition cycle.",
  },
  {
    date: `${competition2027.rounds[0].date}, ${competition2027.rounds[0].time}`,
    title: "Round 1",
    detail: `${competition2027.rounds[0].format}, taken digitally from anywhere. Top performers earn honor roll awards and advance.`,
  },
  {
    date: `${competition2027.rounds[1].date}, ${competition2027.rounds[1].time}`,
    title: "Round 2",
    detail: `${competition2027.rounds[1].format}. Gold, Silver, Bronze, and Honorable Mention awards are decided here.`,
  },
  {
    date: "After Round 2",
    title: "Team USA selected",
    detail: "Five students are selected from Round 2 to represent the United States at the International Economics Olympiad.",
  },
] as const;

export function CycleTimeline() {
  return (
    <ol className="relative border-l-2 border-gold-500/30 pl-8">
      {milestones.map((milestone, index) => (
        <Reveal as="li" className="relative pb-10 last:pb-0" delay={index * 90} key={milestone.title}>
          <span
            aria-hidden="true"
            className="absolute -left-[2.4375rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-gold-500 bg-paper"
          >
            <span className="size-1.5 rounded-full bg-gold-500" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{milestone.date}</p>
          <h3 className="mt-1.5 font-heading text-xl font-semibold text-navy-900">{milestone.title}</h3>
          <p className="mt-1.5 max-w-xl text-sm leading-6 text-ink/60">{milestone.detail}</p>
        </Reveal>
      ))}
    </ol>
  );
}
