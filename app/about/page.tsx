import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Pathway } from "@/components/Pathway";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { StudentCard } from "@/components/StudentCard";
import { WaveDivider } from "@/components/WaveDivider";
import { site } from "@/lib/content/site";
import { leadership, studentAmbassadors } from "@/lib/content/team";

export const metadata = {
  title: "About & Leadership",
  description:
    "USAEBO organizes the USA Economics and Business Olympiad and selects Team USA for the International Economics Olympiad.",
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        body={site.description}
        eyebrow="About"
        primaryHref="/compete"
        primaryLabel="How the olympiad works"
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
        title="About USAEBO"
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Mission"
                title="A national selection pathway"
                lead="USAEBO organizes the USA Economics and Business Olympiad. Each competition cycle selects the five students who represent Team USA at the International Economics Olympiad, the premier international competition in economics, finance, and business for high school students."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-ink/8 bg-mist p-6 sm:p-8">
                <Pathway />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <WaveDivider className="bg-paper text-mist" />
      <section className="bg-mist">
        <Container className="pb-20 pt-14 sm:pb-24 sm:pt-16">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="The team behind the olympiad"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
            {leadership.map((person, index) => (
              <Reveal delay={index * 100} key={person.name}>
                <article className="h-full rounded-2xl border border-ink/8 bg-paper p-6 sm:p-7">
                  <span
                    aria-hidden="true"
                    className="flex size-14 items-center justify-center rounded-full bg-navy-900 font-heading text-lg font-bold text-gold-300"
                  >
                    {initials(person.name)}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-navy-900">{person.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-gold-700">{person.role}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{person.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <WaveDivider className="bg-mist text-paper" flip />

      <section className="bg-paper">
        <Container className="pb-20 pt-14 sm:pb-24 sm:pt-16">
          <Reveal>
            <SectionHeading
              eyebrow="Student Ambassadors"
              title="Representing USAEBO nationwide"
              lead={studentAmbassadors.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {studentAmbassadors.members.map((student, index) => (
              <Reveal delay={index * 70} key={student.name}>
                <StudentCard {...student} badge="Team USA 2026" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href="/team-usa">Meet Team USA</ButtonLink>
              <ButtonLink href="/results" variant="link">
                Browse the Hall of Fame
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
