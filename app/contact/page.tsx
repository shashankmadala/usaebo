import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the USA Economics and Business Olympiad team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        body="Questions about registration, the competition, sponsorship, or Team USA? We are happy to help."
        title="Contact USAEBO"
        variant="compact"
      />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="label text-ink/45">Email us</p>
              <a
                className="mt-5 inline-block break-all font-heading text-3xl font-semibold tracking-tight text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 transition-colors hover:text-gold-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-700 sm:text-4xl lg:text-5xl"
                href={`mailto:${site.contactEmail}`}
              >
                {site.contactEmail}
              </a>
              <p className="mt-6 max-w-sm text-sm leading-6 text-ink/60">
                The fastest way to reach the USAEBO team for any question.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <p className="label text-ink/45">Join the community</p>
              <div className="mt-5 border-t border-ink/10">
                {site.socials.map((social) => (
                  <a
                    className="group flex items-center justify-between gap-4 border-b border-ink/10 py-5 transition-colors duration-200 hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-700"
                    href={social.href}
                    key={social.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="font-heading text-xl font-semibold text-navy-900">
                      {social.label}
                      <span className="sr-only"> (opens in new tab)</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="text-ink/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-gold-600"
                      size={20}
                      strokeWidth={2}
                    />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-ink/60">
                Connect with other competitors and get updates.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
