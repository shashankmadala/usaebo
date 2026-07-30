import { AxisRule } from "@/components/AxisRule";
import { ButtonLink } from "@/components/ButtonLink";
import { Faq } from "@/components/Faq";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { Pathway } from "@/components/Pathway";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { competition2027 } from "@/lib/content/competition";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Compete",
  description:
    "How the USAEBO works: Round 1, Round 2, Team USA selection, and the International Economics Olympiad.",
};

const resources = [
  {
    title: "2027 Cycle",
    body: "Registration deadline, round dates, formats, and awards for the 2027 USAEBO.",
    href: "/compete/2027",
  },
  {
    title: "Syllabus",
    body: "The official topics in microeconomics, macroeconomics, business, and finance.",
    href: "/compete/syllabus",
  },
  {
    title: "Rules",
    body: "Eligibility, competition structure, proctoring, and disqualification policies.",
    href: "/compete/rules",
  },
] as const;

export default function CompetePage() {
  return (
    <>
      <PageHero
        body="Start with Round 1, qualify for Round 2, and compete for selection to Team USA for the International Economics Olympiad."
        eyebrow="Compete"
        primaryHref={site.registerUrl}
        primaryLabel="Register"
        secondaryHref="/compete/2027"
        secondaryLabel="View the 2027 schedule"
        title="The USAEBO pathway"
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              title="Four steps to the international stage"
              lead="The competition is individual-based. Every student begins in Round 1, and five students are ultimately selected for Team USA."
            />
          </Reveal>
          <div className="mt-12">
            <Pathway />
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <AxisRule className="-mt-8 mb-14 text-ink/15 sm:-mt-10" />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="2027 cycle"
                  title="Registration is open"
                  lead={`Registration closes on ${competition2027.deadline}. Both rounds are digital and can be taken from anywhere, such as school, home, or a library.`}
                />
                <div className="mt-8">
                  <ButtonLink href={site.registerUrl}>Register</ButtonLink>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {competition2027.rounds.map((round, index) => (
                <Reveal delay={index * 100} key={round.name}>
                  <article className="h-full border-t-2 border-gold-500 pt-5">
                    <p className="label text-gold-700">{round.name}</p>
                    <p className="mt-3 font-heading text-xl font-semibold text-navy-900">{round.date}</p>
                    <p className="label mt-1 text-ink/45">{round.time}</p>
                    <dl className="mt-5 grid gap-3 border-t border-ink/10 pt-5 text-sm">
                      <div>
                        <dt className="label text-ink/45">Format</dt>
                        <dd className="mt-1 text-ink/70">{round.format}</dd>
                      </div>
                      <div>
                        <dt className="label text-ink/45">Awards</dt>
                        <dd className="mt-1 text-ink/70">{round.awards}</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading title="Competition resources" />
          </Reveal>
          <div className="mt-10">
            {resources.map((item, index) => (
              <Reveal delay={index * 90} key={item.href}>
                <InfoCard body={item.body} href={item.href} index={index + 1} title={item.title} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper" id="faq">
        <Container className="max-w-4xl pb-20 sm:pb-24">
          <Reveal>
            <SectionHeading
              title="Common questions"
              lead="Everything students, parents, and teachers ask most before registering."
            />
          </Reveal>
          <Reveal className="mt-10" delay={120}>
            <Faq />
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-sm text-ink/60">
              Still have a question?{" "}
              <ButtonLink href="/contact" variant="link">
                Contact USAEBO
              </ButtonLink>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
