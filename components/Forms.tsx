import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  return (
    <form className="flex flex-col gap-2.5 sm:flex-row" method="post">
      {/* TODO(content): Confirm newsletter provider before wiring submission. */}
      <label className="sr-only" htmlFor={dark ? "newsletter-dark" : "newsletter"}>
        Email address
      </label>
      <input
        className={cn(
          "min-h-11 flex-1 rounded-full border px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-salmon/60",
          dark
            ? "border-paper/25 bg-transparent text-paper placeholder:text-paper/45 focus:border-paper"
            : "border-ink/12 bg-paper text-ink placeholder:text-ink/40 focus:border-violet",
        )}
        id={dark ? "newsletter-dark" : "newsletter"}
        name="email"
        placeholder="Email address"
        type="email"
      />
      <button
        className={cn(
          "min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon disabled:cursor-not-allowed disabled:opacity-60",
          dark ? "bg-paper text-indigo hover:bg-salmon-tint" : "bg-indigo text-paper hover:bg-violet-deep",
        )}
        disabled
        type="button"
      >
        Sign up
      </button>
    </form>
  );
}

export function ContactForm() {
  return (
    <div>
      <form className="grid gap-5" method="post">
        {/* TODO(content): Confirm contact form endpoint before wiring submission. */}
        <div>
          <label className="text-sm font-semibold text-indigo" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 min-h-11 w-full rounded-full border border-ink/12 bg-paper px-4 text-sm text-ink outline-none transition-colors focus:border-violet focus:ring-2 focus:ring-salmon/60"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-indigo" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 min-h-11 w-full rounded-full border border-ink/12 bg-paper px-4 text-sm text-ink outline-none transition-colors focus:border-violet focus:ring-2 focus:ring-salmon/60"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-indigo" htmlFor="message">
            Message
          </label>
          <textarea
            className="mt-2 min-h-32 w-full rounded-2xl border border-ink/12 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet focus:ring-2 focus:ring-salmon/60"
            id="message"
            name="message"
          />
        </div>
        <button
          className="min-h-11 w-fit rounded-full bg-indigo px-6 text-sm font-semibold text-paper transition-colors hover:bg-violet-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon disabled:cursor-not-allowed disabled:opacity-60"
          disabled
          type="button"
        >
          Send message
        </button>
      </form>
      <div className="mt-6 border-t border-ink/10 pt-5">
        <ButtonLink href={`mailto:${site.contactEmail}`} icon="mail" variant="link">
          Email USAEBO
        </ButtonLink>
      </div>
    </div>
  );
}
