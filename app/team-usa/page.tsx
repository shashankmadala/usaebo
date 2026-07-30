import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { StudentCard } from "@/components/StudentCard";
import { WaveDivider } from "@/components/WaveDivider";
import { ieo2026, internationalResults2026, teamUsa2026 } from "@/lib/content/team";

export const metadata = {
  title: "Team USA",
  description:
    "Meet the five students who represented the United States at the 2026 International Economics Olympiad.",
};

const medalStyles: Record<string, string> = {
  Gold: "bg-gold-100 text-gold-700",
  Silver: "bg-zinc-100 text-zinc-600",
  Bronze: "bg-orange-100 text-orange-800",
};

export default function TeamUsaPage() {
  return (
    <>
      <PageHero
        body={`Five students represented the United States at the 2026 International Economics Olympiad in ${ieo2026.location}, ${ieo2026.dates}.`}
        eyebrow="Team USA"
        title="Team USA for the 2026 IEO"
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Traveling members"
              title="The 2026 delegation"
              lead="Selected from Round 2 of the 2026 USAEBO, these five students competed in economics, finance, and the International Business Case Competition."
            />
          </Reveal>
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {teamUsa2026.traveling.map((student, index) => (
              <Reveal delay={index * 70} key={student.name}>
                <StudentCard {...student} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WaveDivider className="bg-paper text-navy-950" />
      <section className="relative overflow-hidden bg-navy-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(52rem_26rem_at_12%_-4rem,var(--color-navy-800),transparent_70%)]"
        />
        <Container className="relative pb-20 pt-14 sm:pb-24 sm:pt-16">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="IEO 2026 results"
              title="How Team USA performed"
              lead="In its first in-person appearance at the International Economics Olympiad, the United States finished with medals in every color."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {internationalResults2026.medals.map((medal, index) => (
              <Reveal delay={index * 90} key={medal.name}>
                <article className="h-full rounded-2xl border border-paper/10 bg-navy-900 p-6">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${medalStyles[medal.medal]}`}
                  >
                    {medal.medal}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-paper">{medal.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-paper/55">
                    {medal.school} · {medal.location}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <Reveal delay={100} variant="zoom">
              <article className="h-full rounded-2xl border border-gold-500/25 bg-navy-900 p-6">
                <p className="font-heading text-2xl font-bold tracking-tight text-gold-300">6th of 52</p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-paper">
                  International Business Case Competition
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-paper/55">
                  Led by team captain Shashank Madala, Team USA placed 6th out of 52 national teams in the
                  business case presentation before an international jury.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180} variant="zoom">
              <article className="h-full rounded-2xl border border-paper/10 bg-navy-900 p-6">
                <h3 className="font-heading text-lg font-semibold text-paper">Additional recognition</h3>
                <ul className="mt-3 grid gap-3 text-sm leading-6 text-paper/55">
                  {internationalResults2026.honors.map((honor) => (
                    <li key={honor.title}>
                      <span className="font-semibold text-gold-300">{honor.title}:</span> {honor.detail}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
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
        </Container>
      </section>
      <WaveDivider className="bg-navy-950 text-paper" variant="curve" flip />

      <section className="bg-paper">
        <Container className="pb-20 pt-14 sm:pb-24 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Alternates"
                title="Alternate members"
                lead="Two students were selected as Team USA alternate members for the 2026 IEO."
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {teamUsa2026.alternatives.map((student, index) => (
                <Reveal delay={index * 100} key={student.name}>
                  <article className="h-full rounded-2xl border border-ink/8 bg-paper p-6">
                    <h3 className="font-heading text-xl font-semibold text-navy-900">{student.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/60">{student.school}</p>
                    <p className="mt-0.5 text-sm text-ink/60">{student.location}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
