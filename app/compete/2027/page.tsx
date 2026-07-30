import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SourceNote } from "@/components/SourceNote";
import { competition2027 } from "@/lib/content/competition";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "2027 Competition",
};

export default function Competition2027Page() {
  return (
    <>
      <PageHero
        body={`Registration deadline: ${competition2027.deadline}. Round 1 is March 13, 2027. Round 2 is March 27, 2027.`}
        eyebrow="2027 competition"
        primaryHref={site.registerUrl}
        primaryLabel="Register"
        secondaryHref="/compete/rules"
        secondaryLabel="Read rules"
        title={competition2027.title}
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader eyebrow="Schedule" title="Dates and format" body="Both rounds are digital and can be taken anywhere, such as school, home, or library." />
          <div className="grid gap-4">
            {competition2027.rounds.map((round) => (
              <article className="rounded-2xl bg-ink/[0.035] p-6" key={round.name}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-indigo">{round.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-violet-deep">
                      {round.date}, {round.time}
                    </p>
                  </div>
                  <span className="rounded-full bg-salmon-tint px-3 py-1 text-sm font-semibold text-indigo">
                    {round.delivery}
                  </span>
                </div>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-indigo">Format</dt>
                    <dd className="mt-1 text-ink/65">{round.format}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-indigo">Awards</dt>
                    <dd className="mt-1 text-ink/65">{round.awards}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-indigo">Location</dt>
                    <dd className="mt-1 text-ink/65">{round.location}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="lg:col-start-2">
            <ButtonLink href={site.registerUrl}>Register</ButtonLink>
            <SourceNote href="https://www.usaebo.org/2027-usaebo" label="Official 2027 USAEBO page" />
          </div>
        </div>
      </section>
    </>
  );
}
