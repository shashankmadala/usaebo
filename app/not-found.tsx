import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="max-w-3xl py-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-ink/60">
          The page you requested does not exist. It may have moved during the site redesign.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-4 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="link">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
