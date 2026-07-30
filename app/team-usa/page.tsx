import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { StudentCard } from "@/components/StudentCard";
import { ieo2026, internationalResults2026, teamUsa2026 } from "@/lib/content/team";

export const metadata = {
  title: "Team USA",
};

export default function TeamUsaPage() {
  return (
    <>
      <PageHero
        body={`The 2026 IEO takes place in ${ieo2026.location}, ${ieo2026.dates}.`}
        eyebrow="Team USA"
        title={teamUsa2026.title}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-base leading-7 text-ink/65">{teamUsa2026.intro}</p>
          <section className="mt-8 border-y border-ink/8 py-6">
            <h2 className="font-heading text-2xl font-semibold text-indigo">International results</h2>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-violet-deep">Medals</dt>
                <dd className="mt-2 text-sm leading-6 text-ink/65">{internationalResults2026.medalSummary}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-violet-deep">Business case presentation</dt>
                <dd className="mt-2 text-sm leading-6 text-ink/65">{internationalResults2026.businessCase}</dd>
              </div>
            </dl>
          </section>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {teamUsa2026.traveling.map((student) => (
              <StudentCard key={student.name} {...student} />
            ))}
          </div>
          <section className="mt-12">
            <h2 className="font-heading text-2xl font-semibold text-indigo">Alternative members</h2>
            <div className="mt-5 grid gap-x-10 gap-y-0 md:grid-cols-2">
              {teamUsa2026.alternatives.map((student) => (
                <article className="border-t border-ink/10 py-5" key={student.name}>
                  <h3 className="font-heading text-xl font-semibold text-indigo">{student.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{student.school}</p>
                  <p className="mt-1 text-sm font-semibold text-violet-deep">{student.location}</p>
                </article>
              ))}
            </div>
          </section>
          <SourceNote href="https://www.usaebo.org/2026-team-usa" label="Official 2026 Team USA page" />
          <SourceNote href={internationalResults2026.pressRelease} label="USAEBO 2026 Team USA press release" />
          <SourceNote href={internationalResults2026.businessCaseSource} label="Business case placement source" />
          <SourceNote href={ieo2026.source} label="IEO 2026 annual regulations" />
        </div>
      </section>
    </>
  );
}
