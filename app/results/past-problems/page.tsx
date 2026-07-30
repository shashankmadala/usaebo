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
        title="Past problems"
        variant="compact"
      />
      <section className="bg-paper">
        <Container className="max-w-4xl py-16 sm:py-20">
          {pastProblems.map((year) => (
            <Reveal key={year.year}>
              <article className="grid gap-x-10 gap-y-5 py-10 first:pt-0 sm:grid-cols-[8rem_1fr]">
                <h2 className="font-accent text-3xl italic text-gold-600">{year.year}</h2>
                <div className="border-t border-ink/10">
                  {year.items.map((item) => (
                    <a
                      className="group flex items-center gap-4 border-b border-ink/10 py-4 transition-colors duration-200 hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-700"
                      href={item.href}
                      key={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FileText aria-hidden="true" className="shrink-0 text-gold-600" size={17} strokeWidth={1.9} />
                      <span className="flex-1 text-sm font-semibold text-navy-900">
                        {item.label}
                        <span className="sr-only"> (opens in new tab)</span>
                      </span>
                      <span className="label hidden text-ink/35 sm:block">PDF</span>
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
