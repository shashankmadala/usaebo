import Image from "next/image";
import { cn } from "@/lib/utils";
import { ieo2026, internationalResults2026, teamUsa2026 } from "@/lib/content/team";

type MarqueeCard = {
  name: string;
  school: string;
  image: string;
  highlight: string;
  highlightStyle: string;
};

const medalChipStyles: Record<string, string> = {
  Gold: "bg-gold-100 text-gold-700",
  Silver: "bg-zinc-100 text-zinc-600",
  Bronze: "bg-orange-100 text-orange-800",
};

function buildCards(): MarqueeCard[] {
  return teamUsa2026.traveling.map((student) => {
    const medal = internationalResults2026.medals.find((entry) => entry.name === student.name);
    if (medal) {
      return {
        name: student.name,
        school: student.school,
        image: student.image,
        highlight: `${medal.medal} Medal`,
        highlightStyle: medalChipStyles[medal.medal],
      };
    }
    if ("role" in student && student.role) {
      return {
        name: student.name,
        school: student.school,
        image: student.image,
        highlight: student.role,
        highlightStyle: "bg-gold-500 text-navy-950",
      };
    }
    const honor = internationalResults2026.honors.find((entry) => entry.detail.includes(student.name));
    return {
      name: student.name,
      school: student.school,
      image: student.image,
      highlight: honor ? `${honor.title} Finalist` : "Team USA",
      highlightStyle: "bg-navy-800 text-gold-300",
    };
  });
}

function CardList({ hidden }: { hidden?: boolean }) {
  const cards = buildCards();
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4">
      {cards.map((card) => (
        <article
          className="w-60 shrink-0 rounded-2xl border border-paper/10 bg-navy-900 p-4 transition-colors duration-300 hover:border-gold-500/40"
          key={card.name}
        >
          <Image
            alt={hidden ? "" : `${card.name}, Team USA 2026`}
            className="aspect-square w-full rounded-xl object-cover"
            height={416}
            loading="eager"
            src={card.image}
            width={416}
          />
          <div className="mt-3.5 flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate font-heading text-base font-semibold text-paper">{card.name}</h3>
              <p className="mt-0.5 truncate text-xs text-paper/50">{card.school}</p>
            </div>
          </div>
          <span
            className={cn(
              "mt-2.5 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
              card.highlightStyle,
            )}
          >
            {card.highlight}
          </span>
        </article>
      ))}
      <div className="flex w-60 shrink-0 flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-navy-900 p-4 text-center">
        <p className="font-heading text-3xl font-bold text-gold-300">IEO 2026</p>
        <p className="mt-1.5 text-sm text-paper/55">{ieo2026.location}</p>
        <p className="mt-0.5 text-xs text-paper/40">{ieo2026.dates}</p>
      </div>
    </div>
  );
}

export function TeamMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-track marquee-third">
        <CardList />
        <CardList hidden />
        <CardList hidden />
      </div>
    </div>
  );
}
