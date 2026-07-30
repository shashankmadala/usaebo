import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { hallOfFameAwards, hallOfFameEntries, hallOfFameSource } from "@/lib/content/results";

export const metadata = {
  title: "Results",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        body="The 2026 Hall of Fame below is drawn from the official USAEBO Round 2 award ranking spreadsheet."
        eyebrow="Results"
        primaryHref="/results/past-problems"
        primaryLabel="Open past problems"
        secondaryHref={hallOfFameSource}
        secondaryLabel="Open source spreadsheet"
        title="Hall of fame"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {hallOfFameAwards.map((award) => {
              const rows = hallOfFameEntries.filter((entry) => entry.award === award);
              return (
                <section aria-labelledby={award} key={award}>
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="font-heading text-2xl font-semibold text-indigo" id={award}>
                      {award}
                    </h2>
                    <p className="text-sm font-semibold text-violet-deep">{rows.length} listed</p>
                  </div>
                  <div className="overflow-x-auto rounded-2xl bg-ink/[0.025]">
                    <table className="min-w-full divide-y divide-ink/8 text-left text-sm">
                      <thead className="text-indigo">
                        <tr>
                          <th className="px-5 py-3 font-semibold" scope="col">
                            Student
                          </th>
                          <th className="px-5 py-3 font-semibold" scope="col">
                            School
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink/8">
                        {rows.map((entry) => (
                          <tr key={`${entry.award}-${entry.lastName}-${entry.firstName}-${entry.school}`}>
                            <td className="px-5 py-3 font-semibold text-indigo">
                              {entry.firstName} {entry.lastName}
                            </td>
                            <td className="px-5 py-3 text-ink/65">{entry.school}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href={hallOfFameSource} variant="link">
              Open source spreadsheet
            </ButtonLink>
            <ButtonLink href="/team-usa" variant="link">
              Meet Team USA
            </ButtonLink>
          </div>
          <SourceNote href={hallOfFameSource} label="Official Round 2 award ranking spreadsheet" />
        </div>
      </section>
    </>
  );
}
