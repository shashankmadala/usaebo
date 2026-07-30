import { ButtonLink } from "@/components/ButtonLink";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { Pathway } from "@/components/Pathway";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
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
    eyebrow: "Current cycle",
    body: "Registration deadline, round dates, formats, and awards for the 2027 USAEBO.",
    href: "/compete/2027",
  },
  {
    title: "Syllabus",
    eyebrow: "Preparation",
    body: "The official topics in microeconomics, macroeconomics, business, and finance.",
    href: "/compete/syllabus",
  },
  {
    title: "Rules",
    eyebrow: "Policy",
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
              eyebrow="How it works"
              title="Four steps to the international stage"
              lead="The competition is individual-based. Every student begins in Round 1, and five students are ultimately selected for Team USA."
            />
          </Reveal>
          <div className="mt-12">
            <Pathway />
          </div>
        </Container>
      </section>

      <WaveDivider className="bg-paper text-mist" />
      <section className="bg-mist">
        <Container className="pb-20 pt-14 sm:pb-24 sm:pt-16">
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
            <div className="grid gap-5 sm:grid-cols-2">
              {competition2027.rounds.map((round, index) => (
                <Reveal delay={index * 100} key={round.name}>
                  <article className="h-full rounded-2xl border border-ink/8 bg-paper p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                      {round.name}
                    </p>
                    <p className="mt-2 font-heading text-xl font-semibold text-navy-900">
                      {round.date}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink/60">{round.time}</p>
                    <dl className="mt-5 grid gap-3 border-t border-ink/8 pt-5 text-sm">
                      <div>
                        <dt className="font-semibold text-navy-900">Format</dt>
                        <dd className="mt-0.5 text-ink/60">{round.format}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-900">Awards</dt>
                        <dd className="mt-0.5 text-ink/60">{round.awards}</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <WaveDivider className="bg-mist text-paper" flip />

      <section className="bg-paper">
        <Container className="pb-20 pt-14 sm:pb-24 sm:pt-16">
          <Reveal>
            <SectionHeading eyebrow="Go deeper" title="Competition resources" />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {resources.map((item, index) => (
              <Reveal delay={index * 90} key={item.href}>
                <InfoCard body={item.body} eyebrow={item.eyebrow} href={item.href} title={item.title} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
