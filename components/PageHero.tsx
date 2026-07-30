import { ButtonLink } from "./ButtonLink";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body: string;
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
    <section className="bg-paper">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold text-violet-deep">{eyebrow}</p> : null}
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-indigo sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">{body}</p>
          {primaryHref || secondaryHref ? (
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {primaryHref && primaryLabel ? <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink> : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="link">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
