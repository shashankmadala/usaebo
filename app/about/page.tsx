import Image from "next/image";
import Link from "next/link";
import { AxisRule } from "@/components/AxisRule";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { pathwayStages } from "@/lib/content/competition";
import { site } from "@/lib/content/site";
import { leadership, studentAmbassadors } from "@/lib/content/team";

export const metadata = {
  title: "About & Leadership",
  description:
    "USAEBO organizes the USA Economics and Business Olympiad and selects Team USA for the International Economics Olympiad.",
};

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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Mission"
                title="A national selection pathway"
                lead="USAEBO organizes the USA Economics and Business Olympiad. Each competition cycle selects the five students who represent Team USA at the International Economics Olympiad, the premier international competition in economics, finance, and business for high school students."
              />
            </Reveal>
            <Reveal delay={120}>
              <ol className="border-t border-ink/10">
                {pathwayStages.map((stage, index) => (
                  <li
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-ink/10 py-4 sm:grid-cols-[3rem_10rem_1fr]"
                    key={stage.label}
                  >
                    <span aria-hidden="true" className="font-accent text-xl italic text-gold-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-navy-900">{stage.label}</h3>
                    <p className="col-span-2 text-sm leading-6 text-ink/60 sm:col-span-1">{stage.detail}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <AxisRule className="-mt-8 mb-14 text-ink/15 sm:-mt-10" />
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <Reveal>
              <SectionHeading eyebrow="Leadership" title="The team behind the olympiad" />
            </Reveal>
            <Reveal delay={100}>
              <div className="border-t border-ink/10">
                {leadership.map((person) => (
                  <div
                    className="grid gap-x-6 gap-y-2 border-b border-ink/10 py-6 sm:grid-cols-[14rem_1fr] sm:items-baseline"
                    key={person.name}
                  >
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-navy-900">{person.name}</h3>
                      <p className="label mt-1 text-gold-700">{person.role}</p>
                    </div>
                    <p className="text-sm leading-6 text-ink/60">{person.bio}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow="Student Ambassadors" title="Representing USAEBO nationwide" />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <div className="flex -space-x-2">
                {studentAmbassadors.members.map((student) => (
                  <div
                    className="relative size-14 overflow-hidden rounded-full border-2 border-paper"
                    key={student.name}
                  >
                    <Image
                      alt={student.name}
                      className="size-full object-cover grayscale"
                      height={112}
                      src={student.image ?? ""}
                      width={112}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-navy-900 opacity-40 mix-blend-multiply"
                    />
                  </div>
                ))}
              </div>
              <p className="max-w-xl text-sm leading-7 text-ink/70">
                {studentAmbassadors.members.map((student, index) => (
                  <span key={student.name}>
                    {index > 0 ? (index === studentAmbassadors.members.length - 1 ? ", and " : ", ") : ""}
                    <Link
                      className="font-semibold text-navy-900 underline decoration-gold-400/60 underline-offset-4 transition-colors hover:decoration-gold-600"
                      href="/team-usa"
                    >
                      {student.name}
                    </Link>
                  </span>
                ))}{" "}
                serve as USAEBO Student Ambassadors, representing the olympiad to students and schools
                across the country.
              </p>
            </div>
          </Reveal>
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
