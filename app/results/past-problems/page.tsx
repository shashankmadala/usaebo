import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { pastProblems } from "@/lib/content/results";

export const metadata = {
  title: "Past Problems",
};

export default function PastProblemsPage() {
  return (
    <>
      <PageHero
        body="Official USAEBO past problem links are preserved from the live site."
        eyebrow="Results"
        title="Past problems"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div>
            {pastProblems.map((year) => (
              <article className="border-t border-ink/10 py-6 first:border-t-0" key={year.year}>
                <h2 className="font-heading text-2xl font-semibold text-indigo">{year.year}</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {year.items.map((item) => (
                    <ButtonLink href={item.href} key={item.href} variant="secondary">
                      {item.label}
                    </ButtonLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <SourceNote href="https://www.usaebo.org/past-problems" label="Official USAEBO past problems page" />
        </div>
      </section>
    </>
  );
}
