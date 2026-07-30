import Image from "next/image";
import { AxisRule } from "@/components/AxisRule";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { StudentCard } from "@/components/StudentCard";
import { cn } from "@/lib/utils";
import { ieo2026, internationalResults2026, teamUsa2026 } from "@/lib/content/team";

export const metadata = {
  title: "Team USA",
  description:
    "Meet the five students who represented the United States at the 2026 International Economics Olympiad.",
};

const medalSquares: Record<string, string> = {
  Gold: "bg-gold-500",
  Silver: "bg-zinc-400",
  Bronze: "bg-orange-700",
};

const recordRows = [
  ...internationalResults2026.medals.map((medal) => ({
    mark: medal.medal,
    square: medalSquares[medal.medal],
    name: medal.name,
    detail: `${medal.school} · ${medal.location}`,
  })),
  ...internationalResults2026.honors.map((honor) => ({
    mark: honor.title,
    square: "bg-paper/50",
    name: honor.detail.split(" for ")[1]?.split(",")[0] ?? honor.title,
    detail: honor.detail,
  })),
];

export default function TeamUsaPage() {
  return (
    <>
      <PageHero
        aside={
          <div className="flex gap-2">
            {teamUsa2026.traveling.map((student) => (
              <div className="relative flex-1 overflow-hidden rounded-lg" key={student.name}>
                <Image
                  alt={`${student.name}, Team USA 2026`}
                  className="aspect-[3/4] w-full object-cover grayscale"
                  height={160}
                  src={student.image}
                  width={120}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy-900 opacity-40 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        }
        body={`Five students represented the United States at the 2026 International Economics Olympiad in ${ieo2026.location}, ${ieo2026.dates}.`}
        eyebrow="Team USA · 2026"
        title="Team USA for the 2026 IEO"
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              title="The 2026 delegation"
              lead="Selected from Round 2 of the 2026 USAEBO, these five students competed in economics, finance, and the International Business Case Competition."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {teamUsa2026.traveling.map((student, index) => (
              <Reveal delay={index * 70} key={student.name}>
                <StudentCard {...student} badge={"role" in student ? student.role : undefined} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-950">
        <Container className="py-20 sm:py-24">
          <AxisRule className="-mt-8 mb-14 text-gold-300/25 sm:-mt-10" />
          <Reveal>
            <SectionHeading
              dark
              display
              eyebrow="IEO 2026 results"
              title="How Team USA performed"
              lead="In its first in-person appearance at the International Economics Olympiad, the United States finished with medals in every color."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 border-t border-paper/10">
              {recordRows.map((row) => (
                <div
                  className="grid gap-x-6 gap-y-1 border-b border-paper/10 py-5 sm:grid-cols-[11rem_14rem_1fr] sm:items-baseline"
                  key={`${row.mark}-${row.name}`}
                >
                  <p className="label flex items-center gap-2 text-gold-300">
                    <span aria-hidden="true" className={cn("size-1.5 shrink-0", row.square)} />
                    {row.mark}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-paper">{row.name}</h3>
                  <p className="text-sm leading-6 text-paper/55">{row.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="font-accent text-7xl leading-none text-gold-300 sm:text-8xl">6th</p>
              <p className="label mt-4 text-paper/55">of 52 national teams</p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <h3 className="font-heading text-xl font-semibold text-paper">
                International Business Case Competition
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-paper/60">
                Led by team captain Shashank Madala, Team USA placed 6th out of 52 national teams in the
                business case presentation before an international jury.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href={internationalResults2026.pressRelease} variant="gold">
                  Read the press release
                </ButtonLink>
                <ButtonLink
                  className="text-paper hover:text-gold-300"
                  href={internationalResults2026.businessCaseSource}
                  variant="link"
                >
                  Coverage in NJ Stage
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <Reveal>
              <SectionHeading
                title="Alternate members"
                lead="Two students were selected as Team USA alternate members for the 2026 IEO."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="border-t border-ink/10">
                {teamUsa2026.alternatives.map((student) => (
                  <div
                    className="grid gap-x-6 gap-y-1 border-b border-ink/10 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline"
                    key={student.name}
                  >
                    <h3 className="font-heading text-lg font-semibold text-navy-900">{student.name}</h3>
                    <p className="text-sm leading-6 text-ink/60">
                      {student.school} · {student.location}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
