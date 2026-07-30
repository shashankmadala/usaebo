import { ArrowUpRight, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { pastProblems } from "@/lib/content/results";

export const metadata = {
  title: "Past Problems",
  description: "Official USAEBO Round 1 and Round 2 problems from previous competition cycles.",
};

export default function PastProblemsPage() {
  return (
    <>
      <PageHero
        body="Official problems from previous USAEBO cycles. Working through past rounds is the best preparation for the competition."
        eyebrow="Results"
        title="Past problems"
      />
      <section className="bg-paper">
        <Container className="max-w-4xl py-20 sm:py-24">
          {pastProblems.map((year) => (
            <Reveal key={year.year}>
              <article>
                <h2 className="font-heading text-2xl font-semibold text-navy-900">{year.year}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {year.items.map((item) => (
                    <a
                      className="card-lift group flex items-center gap-4 rounded-2xl border border-ink/8 bg-paper p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700"
                      href={item.href}
                      key={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                        <FileText aria-hidden="true" size={19} strokeWidth={1.9} />
                      </span>
                      <span className="flex-1 text-sm font-semibold text-navy-900">
                        {item.label}
                        <span className="sr-only"> (opens in new tab)</span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="shrink-0 text-ink/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-gold-600"
                        size={17}
                        strokeWidth={2}
                      />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
