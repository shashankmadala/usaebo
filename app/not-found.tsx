import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="max-w-3xl py-28">
        <p className="label label-tick text-gold-700">404</p>
        <h1 className="mt-5 font-accent text-5xl font-normal tracking-tight text-navy-900 sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-ink/60">
          The page you requested does not exist. It may have moved during the site redesign.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="link">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
