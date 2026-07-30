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
        eyebrow="Compete"
        title="Rules"
      />
      <section className="bg-paper">
        <Container className="max-w-4xl py-20 sm:py-24">
          <div className="grid gap-5">
            {groups.map((group, index) => (
              <Reveal delay={index * 80} key={group.title}>
                <article className="rounded-2xl border border-ink/8 bg-paper p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-semibold text-navy-900">{group.title}</h2>
                  <ul className="mt-5 grid gap-3.5 text-sm leading-6 text-ink/60">
                    {group.items.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-gold-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
