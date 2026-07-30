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
    title: "Run the olympiad",
    body: "Sponsorship keeps registration free and supports the national rounds that reach students across the country.",
  },
  {
    title: "Train Team USA",
    body: "Partners help prepare the five selected students for the economics, finance, and business case events.",
  },
  {
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
            <SectionHeading title="What your support makes possible" />
          </Reveal>
          <div className="mt-10">
            {impact.map((item, index) => (
              <Reveal delay={index * 90} key={item.title}>
                <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-ink/10 py-6 last:border-b md:grid-cols-[3rem_16rem_1fr] md:gap-6">
                  <span aria-hidden="true" className="font-accent text-2xl italic text-gold-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-navy-900">{item.title}</h3>
                  <p className="col-span-2 text-sm leading-6 text-ink/60 md:col-span-1">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t-2 border-gold-500 bg-navy-950">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-accent text-4xl font-normal leading-[1.08] tracking-tight text-paper sm:text-5xl">
                  Become a sponsor or partner
                </h2>
                <p className="mt-4 text-base leading-7 text-paper/60">
                  If you are interested in supporting USAEBO, we would love to hear from you.
                </p>
              </div>
              <div className="shrink-0">
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
