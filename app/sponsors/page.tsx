import { Handshake, LineChart, Plane } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Sponsors",
  description: "Partner with USAEBO to support the olympiad and send Team USA to the international stage.",
};

const impact = [
  {
    icon: LineChart,
    title: "Run the olympiad",
    body: "Sponsorship keeps registration free and supports the national rounds that reach students across the country.",
  },
  {
    icon: Handshake,
    title: "Train Team USA",
    body: "Partners help prepare the five selected students for the economics, finance, and business case events.",
  },
  {
    icon: Plane,
    title: "Send students abroad",
    body: "Support covers travel to the International Economics Olympiad, where Team USA competes against 50+ nations.",
  },
] as const;

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        body="USAEBO welcomes sponsors and partners to support running the olympiad, training students, and sending Team USA to international contests."
        eyebrow="Sponsors"
        primaryHref={`mailto:${site.contactEmail}`}
        primaryLabel="Email USAEBO"
        title="Sponsors and partners"
      />
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Why partner"
              title="What your support makes possible"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {impact.map((item, index) => (
              <Reveal delay={index * 90} key={item.title}>
                <article className="h-full rounded-2xl border border-ink/8 bg-paper p-6 sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                    <item.icon aria-hidden="true" size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-ink/60">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-paper pb-20 sm:pb-24">
        <Container>
          <Reveal variant="zoom">
            <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center shadow-panel sm:px-12 sm:py-14">
              <h2 className="mx-auto max-w-xl font-heading text-3xl font-semibold tracking-tight text-paper">
                Become a sponsor or partner
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-paper/60">
                If you are interested in supporting USAEBO, we would love to hear from you.
              </p>
              <div className="mt-8">
                <ButtonLink href={`mailto:${site.contactEmail}`} icon="mail" variant="gold">
                  {site.contactEmail}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
