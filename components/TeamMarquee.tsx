import Image from "next/image";
import { cn } from "@/lib/utils";
import { ieo2026, internationalResults2026, teamUsa2026 } from "@/lib/content/team";

type MarqueeCard = {
  name: string;
  school: string;
  image: string;
  highlight: string;
  squareClass: string;
};

const medalSquares: Record<string, string> = {
  Gold: "bg-gold-500",
  Silver: "bg-zinc-400",
  Bronze: "bg-orange-700",
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
        squareClass: medalSquares[medal.medal],
      };
    }
    if ("role" in student && student.role) {
      return {
        name: student.name,
        school: student.school,
        image: student.image,
        highlight: student.role,
        squareClass: "bg-gold-500",
      };
    }
    const honor = internationalResults2026.honors.find((entry) => entry.detail.includes(student.name));
    return {
      name: student.name,
      school: student.school,
      image: student.image,
      highlight: honor ? `${honor.title} Finalist` : "Team USA",
      squareClass: "bg-paper/60",
    };
  });
}

function CardList({ hidden }: { hidden?: boolean }) {
  const cards = buildCards();
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4">
      {cards.map((card) => (
        <article className="group w-60 shrink-0" key={card.name}>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              alt={hidden ? "" : `${card.name}, Team USA 2026`}
              className="aspect-square w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              height={416}
              loading="eager"
              src={card.image}
              width={416}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-navy-900 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
          <div className="mt-3.5">
            <h3 className="truncate font-heading text-base font-semibold text-paper">{card.name}</h3>
            <p className="mt-0.5 truncate text-xs text-paper/50">{card.school}</p>
            <p className="label mt-2 flex items-center gap-2 text-gold-300">
              <span aria-hidden="true" className={cn("size-1.5", card.squareClass)} />
              {card.highlight}
            </p>
          </div>
        </article>
      ))}
      <div className="flex w-60 shrink-0 flex-col items-start justify-center border-l border-paper/15 pl-8">
        <p className="font-accent text-4xl italic text-gold-300">IEO 2026</p>
        <p className="label mt-3 text-paper/55">{ieo2026.location}</p>
        <p className="label mt-1 text-paper/35">{ieo2026.dates}</p>
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
