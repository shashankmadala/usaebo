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
        title="Syllabus"
        variant="compact"
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          {syllabus.map((group, index) => (
            <Reveal delay={index * 80} key={group.category}>
              <article className="grid gap-x-10 gap-y-6 border-b border-ink/10 py-12 first:pt-0 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p aria-hidden="true" className="font-accent text-2xl italic text-gold-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900">
                    {group.category}
                  </h2>
                  <p className="label mt-3 text-ink/45">{group.topics.length} topics</p>
                </div>
                <ul className="text-base leading-8 text-ink/70 sm:columns-2 sm:gap-x-10 lg:col-span-7 lg:col-start-6">
                  {group.topics.map((topic) => (
                    <li className="break-inside-avoid" key={topic}>
                      {topic}
                    </li>
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
