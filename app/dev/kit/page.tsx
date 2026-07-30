import { ButtonLink } from "@/components/ButtonLink";
import { InfoCard } from "@/components/InfoCard";
import { NewsletterForm } from "@/components/Forms";
import { PathwayRail } from "@/components/PathwayRail";
import { SectionHeader } from "@/components/SectionHeader";
import { stageCards } from "@/lib/content/competition";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Dev Kit",
};

const swatches = [
  { label: "ink", className: "bg-ink" },
  { label: "indigo", className: "bg-indigo" },
  { label: "indigo-mid", className: "bg-indigo-mid" },
  { label: "violet", className: "bg-violet" },
  { label: "violet-deep", className: "bg-violet-deep" },
  { label: "violet-tint", className: "bg-violet-tint" },
  { label: "salmon", className: "bg-salmon" },
  { label: "salmon-tint", className: "bg-salmon-tint" },
  { label: "paper", className: "bg-paper" },
] as const;

export default function DevKitPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Dev kit" title="USAEBO design system" body="A compact reference for tokens, pathway, cards, buttons, and form fields." />
        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
          {swatches.map((swatch) => (
            <div className="rounded-xl bg-ink/[0.03] p-3" key={swatch.label}>
              <div className={`h-16 rounded-lg ${swatch.className}`} />
              <p className="mt-2 text-xs font-semibold text-ink">{swatch.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <PathwayRail />
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href={site.registerUrl}>Register</ButtonLink>
          <ButtonLink href="/compete" variant="secondary">
            Open compete
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Open contact
          </ButtonLink>
          <ButtonLink href="/contact" variant="link">
            Open contact
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-3">
          {stageCards.map((card) => (
            <InfoCard body={card.body} eyebrow={card.eyebrow} key={card.title} title={card.title} />
          ))}
        </div>
        <div className="mt-12 max-w-xl">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
