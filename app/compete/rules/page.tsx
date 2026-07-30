import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { competition2027 } from "@/lib/content/competition";

export const metadata = {
  title: "Rules",
  description: "Eligibility, structure, proctoring, and disqualification policies for the USAEBO.",
};

export default function RulesPage() {
  const groups = [
    { title: "Eligibility", items: competition2027.eligibility },
    { title: "Structure", items: competition2027.structure },
    { title: "Proctoring", items: competition2027.proctors },
    { title: "Disqualification", items: competition2027.disqualification },
  ];

  return (
    <>
      <PageHero
        body="Eligibility, structure, proctoring, and disqualification policies for the 2027 USAEBO."
        title="Rules"
        variant="compact"
      />
      <section className="bg-paper">
        <Container className="max-w-4xl py-16 sm:py-20">
          {groups.map((group, index) => (
            <Reveal delay={index * 80} key={group.title}>
              <article className="grid gap-x-10 gap-y-4 border-b border-ink/10 py-10 first:pt-0 sm:grid-cols-[12rem_1fr]">
                <h2 className="font-heading text-xl font-semibold text-navy-900">
                  <span aria-hidden="true" className="label-tick mr-3 text-gold-600" />
                  {group.title}
                </h2>
                <ul className="grid gap-3.5 text-sm leading-6 text-ink/70">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
