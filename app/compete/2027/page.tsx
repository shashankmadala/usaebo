import { ButtonLink } from "@/components/ButtonLink";
import { CycleTimeline } from "@/components/CycleTimeline";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { competition2027 } from "@/lib/content/competition";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "2027 Cycle",
  description:
    "Dates, formats, awards, and registration details for the 2027 USA Economics and Business Olympiad.",
};

export default function Competition2027Page() {
  return (
    <>
      <PageHero
        body={`Registration closes ${competition2027.deadline}. Round 1 takes place on ${competition2027.rounds[0].date} and Round 2 on ${competition2027.rounds[1].date}.`}
        eyebrow="2027 cycle"
        primaryHref={site.registerUrl}
        primaryLabel="Register"
        secondaryHref="/compete/rules"
        secondaryLabel="Read the rules"
        title="2027 USAEBO"
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Schedule"
                title="Dates and format"
                lead="Both rounds are digital, individually taken, and proctored with the required technology. Students can compete from anywhere, such as school, home, or a library."
              />
            </Reveal>
            <div className="grid gap-5">
              {competition2027.rounds.map((round, index) => (
                <Reveal delay={index * 100} key={round.name}>
                  <article className="rounded-2xl border border-ink/8 bg-paper p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="font-heading text-2xl font-semibold text-navy-900">{round.name}</h2>
                        <p className="mt-1.5 text-sm font-semibold text-gold-700">
                          {round.date}, {round.time}
                        </p>
                      </div>
                      <span className="w-fit rounded-full bg-gold-100 px-3 py-1 text-sm font-semibold text-gold-700">
                        {round.delivery}
                      </span>
                    </div>
                    <dl className="mt-6 grid gap-5 border-t border-ink/8 pt-6 text-sm sm:grid-cols-3">
                      <div>
                        <dt className="font-semibold text-navy-900">Format</dt>
                        <dd className="mt-1 leading-6 text-ink/60">{round.format}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-900">Awards</dt>
                        <dd className="mt-1 leading-6 text-ink/60">{round.awards}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-900">Location</dt>
                        <dd className="mt-1 leading-6 text-ink/60">{round.location}</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={200}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
                  <ButtonLink href={site.registerUrl}>Register</ButtonLink>
                  <ButtonLink href="/compete/syllabus" variant="link">
                    Review the syllabus
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="pb-20 sm:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Timeline"
                title="The 2027 cycle at a glance"
                lead="From registration to Team USA selection, here is how the year unfolds."
              />
            </Reveal>
            <CycleTimeline />
          </div>
        </Container>
      </section>
    </>
  );
}
