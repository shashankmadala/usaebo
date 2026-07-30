import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        body="USAEBO welcomes sponsors and partners to support running the Olympiad, training students, and sending students for international contests."
        eyebrow="Sponsors"
        primaryHref="/contact"
        primaryLabel="Contact USAEBO"
        title="Sponsors and partners"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <article className="rounded-2xl bg-salmon-tint/40 p-8">
            <h2 className="font-heading text-2xl font-semibold text-indigo">Become a sponsor or partner</h2>
            <p className="mt-4 text-base leading-7 text-ink/65">
              If you are interested in becoming a sponsor or partner, please contact USAEBO.
            </p>
            <div className="mt-6">
              <ButtonLink href={`mailto:${site.contactEmail}`} icon="mail" variant="primary">
                Email USAEBO
              </ButtonLink>
            </div>
          </article>
          <SourceNote href="https://www.usaebo.org/sponsors-partners" label="Official sponsors and partners page" />
        </div>
      </section>
    </>
  );
}
