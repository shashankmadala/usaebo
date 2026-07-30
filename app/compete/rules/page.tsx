import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { competition2027 } from "@/lib/content/competition";

export const metadata = {
  title: "Rules",
};

export default function RulesPage() {
  const groups = [
    { title: "Eligibility", items: competition2027.eligibility },
    { title: "Structure", items: competition2027.structure },
    { title: "Proctors", items: competition2027.proctors },
    { title: "Disqualification", items: competition2027.disqualification },
  ];

  return (
    <>
      <PageHero
        body="Eligibility, structure, proctoring, and disqualification policies are carried over from the official 2027 USAEBO page."
        eyebrow="Compete"
        title="Rules"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div>
            {groups.map((group) => (
              <details className="group border-t border-ink/10 py-6 first:border-t-0" key={group.title} open>
                <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-xl font-semibold text-indigo">
                  {group.title}
                  <ChevronDown
                    aria-hidden="true"
                    className="text-indigo/40 transition-transform group-open:rotate-180"
                    size={18}
                    strokeWidth={2}
                  />
                </summary>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink/65">
                  {group.items.map((item) => (
                    <li className="border-t border-ink/8 pt-3 first:border-t-0 first:pt-0" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <SourceNote href="https://www.usaebo.org/2027-usaebo" label="Official 2027 USAEBO page" />
        </div>
      </section>
    </>
  );
}
