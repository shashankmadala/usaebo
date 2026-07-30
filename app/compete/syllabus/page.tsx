import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { syllabus } from "@/lib/content/syllabus";

export const metadata = {
  title: "Syllabus",
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
        <div className="mx-auto grid max-w-content gap-x-10 gap-y-10 border-t border-ink/10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          {syllabus.map((group) => (
            <article key={group.category}>
              <h2 className="font-heading text-2xl font-semibold text-indigo">{group.category}</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/65">
                {group.topics.map((topic) => (
                  <li className="border-t border-ink/8 pt-3 first:border-t-0 first:pt-0" key={topic}>
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <div className="lg:col-span-3">
            <SourceNote href="https://www.usaebo.org/syllabus" label="Official USAEBO syllabus" />
          </div>
        </div>
      </section>
    </>
  );
}
