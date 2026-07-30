import { ButtonLink } from "@/components/ButtonLink";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { PathwayRail } from "@/components/PathwayRail";
import { SectionHeader } from "@/components/SectionHeader";
import { competition2027, stageCards } from "@/lib/content/competition";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Compete",
};

export default function CompetePage() {
  return (
    <>
      <PageHero
        body="Start with Round 1, qualify for Round 2, and compete for selection to Team USA for the International Economics Olympiad."
        eyebrow="Compete"
        primaryHref={site.registerUrl}
        primaryLabel="Register"
        secondaryHref="/compete/2027"
        secondaryLabel="View 2027 schedule"
        title="The USAEBO pathway"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
          <PathwayRail />
          <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-3">
            {stageCards.map((card) => (
              <InfoCard body={card.body} eyebrow={card.eyebrow} href={card.href} key={card.title} title={card.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-ink/8 bg-salmon-tint/40">
        <div className="mx-auto grid max-w-content gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="2027 cycle"
            title={competition2027.registrationStatus}
            body={`Registration deadline: ${competition2027.deadline}.`}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {competition2027.rounds.map((round) => (
              <article className="rounded-2xl bg-paper p-6" key={round.name}>
                <h3 className="font-heading text-xl font-semibold text-indigo">{round.name}</h3>
                <dl className="mt-5 grid gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-violet-deep">Date and time</dt>
                    <dd className="mt-1 text-ink/65">
                      {round.date}, {round.time}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-violet-deep">Format</dt>
                    <dd className="mt-1 text-ink/65">{round.format}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-violet-deep">Delivery</dt>
                    <dd className="mt-1 text-ink/65">{round.delivery}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="lg:col-start-2">
            <ButtonLink href={site.registerUrl}>Register</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
