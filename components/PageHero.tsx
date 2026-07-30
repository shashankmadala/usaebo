import { ButtonLink } from "./ButtonLink";
import { Container } from "./Section";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  // compact: a document title bar for utility pages.
  // display: a serif display hero for flagship pages, with an optional aside column.
  variant?: "display" | "compact";
  aside?: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  variant = "display",
  aside,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  if (variant === "compact") {
    return (
      <section className="bg-paper">
        <Container className="pt-14 sm:pt-16">
          <div className="flex flex-col gap-4 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
            <h1 className="font-accent text-4xl font-normal tracking-tight text-navy-900 sm:text-5xl">
              {title}
            </h1>
            {body ? <p className="max-w-md text-sm leading-6 text-ink/60 md:text-right">{body}</p> : null}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-mist">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            {eyebrow ? <p className="label label-tick text-gold-700">{eyebrow}</p> : null}
            <h1 className="mt-5 font-accent text-5xl font-normal leading-[1.05] tracking-[-0.01em] text-navy-900 sm:text-6xl">
              {title}
            </h1>
            {body ? <p className="mt-6 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg">{body}</p> : null}
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
          {aside ? <div className="lg:col-span-4 lg:col-start-9">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
