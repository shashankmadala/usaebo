import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { syllabus } from "@/lib/content/syllabus";

export const metadata = {
  title: "Syllabus",
  description:
    "The official USAEBO syllabus covering microeconomics, macroeconomics, business, and finance.",
};

export default function SyllabusPage() {
  return (
    <>
      <PageHero
        body="The official USAEBO syllabus covers microeconomics, macroeconomics, business, and finance."
        eyebrow="Compete"
        title="Syllabus"
      />
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-5 lg:grid-cols-3">
            {syllabus.map((group, index) => (
              <Reveal delay={index * 100} key={group.category}>
                <article className="h-full rounded-2xl border border-ink/8 bg-paper p-6 sm:p-8">
                  <h2 className="font-heading text-2xl font-semibold text-navy-900">{group.category}</h2>
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/60">
                    {group.topics.map((topic) => (
                      <li className="flex gap-3" key={topic}>
                        <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-gold-500" />
                        {topic}
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
