import { ButtonLink } from "./ButtonLink";
import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { WaveDivider } from "./WaveDivider";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_22rem_at_12%_-6rem,var(--color-gold-200),transparent_70%)]"
        />
        <Container className="relative pb-14 pt-16 sm:pb-16 sm:pt-20">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{eyebrow}</p>
              <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                {title}
              </h1>
              {body ? <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg">{body}</p> : null}
              {primaryHref && primaryLabel ? (
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
                  {secondaryHref && secondaryLabel ? (
                    <ButtonLink href={secondaryHref} variant="link">
                      {secondaryLabel}
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Reveal>
        </Container>
      </section>
      <WaveDivider className="bg-mist text-paper" />
    </>
  );
}
