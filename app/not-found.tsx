import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-violet-deep">404</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-indigo">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-ink/65">The page you requested is not part of the USAEBO site map.</p>
        <div className="mt-8">
          <ButtonLink href="/">Open home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
