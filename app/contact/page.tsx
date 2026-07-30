import { Mail, MessagesSquare } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
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
        eyebrow="Contact"
        title="Contact USAEBO"
      />
      <section className="bg-paper">
        <Container className="max-w-4xl py-20 sm:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col rounded-2xl border border-ink/8 bg-paper p-6 sm:p-8">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Mail aria-hidden="true" size={20} strokeWidth={1.9} />
                </span>
                <h2 className="mt-5 font-heading text-xl font-semibold text-navy-900">Email us</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink/60">
                  The fastest way to reach the USAEBO team for any question.
                </p>
                <div className="mt-6">
                  <ButtonLink href={`mailto:${site.contactEmail}`} icon="mail">
                    {site.contactEmail}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="flex h-full flex-col rounded-2xl border border-ink/8 bg-paper p-6 sm:p-8">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <MessagesSquare aria-hidden="true" size={20} strokeWidth={1.9} />
                </span>
                <h2 className="mt-5 font-heading text-xl font-semibold text-navy-900">Join the community</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink/60">
                  Connect with other competitors and get updates on Discord and social media.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {site.socials.map((social) => (
                    <ButtonLink href={social.href} key={social.href} variant="link">
                      {social.label}
                    </ButtonLink>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
