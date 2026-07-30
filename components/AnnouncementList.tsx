import { announcements } from "@/lib/content/news";
import { ButtonLink } from "./ButtonLink";

type Announcement = (typeof announcements)[number];

type AnnouncementListProps = {
  items?: readonly Announcement[];
  headingLevel?: "h2" | "h3";
  // compact: first paragraph only, for the home page digest
  compact?: boolean;
};

// Paragraphs like "Gold: Eli Orbach, ..." render with a small gold lead-in.
function BodyLine({ text }: { text: string }) {
  const match = text.match(/^([A-Za-z][A-Za-z0-9 ,]{2,36}):\s+(.*)$/);
  if (match) {
    return (
      <p>
        <span className="mr-2 text-xs font-semibold uppercase tracking-[0.1em] text-gold-700">
          {match[1]}
        </span>
        {match[2]}
      </p>
    );
  }
  return <p>{text}</p>;
}

export function AnnouncementList({
  items = announcements,
  headingLevel: Heading = "h3",
  compact = false,
}: AnnouncementListProps) {
  return (
    <div>
      {items.map((item) => (
        <article
          className="grid gap-3 border-t border-ink/8 py-7 first:border-t-0 first:pt-0 md:grid-cols-[9.5rem_1fr]"
          key={`${item.date}-${item.title}`}
        >
          <p className="pt-0.5 text-sm font-medium text-ink/60">{item.date}</p>
          <div>
            <Heading className="font-heading text-xl font-semibold text-navy-900">{item.title}</Heading>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-ink/60">
              {(compact ? item.body.slice(0, 1) : item.body).map((paragraph) => (
                <BodyLine key={paragraph} text={paragraph} />
              ))}
            </div>
            {item.links.length ? (
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {item.links.map((link) => (
                  <ButtonLink href={link.href} key={link.href} variant="link">
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
