import { ContactForm } from "@/components/Forms";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        body={`Please email USAEBO at ${site.contactEmail}.`}
        eyebrow="Contact"
        primaryHref={`mailto:${site.contactEmail}`}
        primaryLabel="Email USAEBO"
        title="Contact USAEBO"
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-indigo">Email</h2>
            <p className="mt-4 text-base leading-7 text-ink/65">
              Official contact email:{" "}
              <a className="font-semibold text-violet-deep underline decoration-violet-tint/60 underline-offset-4" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
            </p>
            <SourceNote href="https://www.usaebo.org/contact" label="Official contact page" />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
