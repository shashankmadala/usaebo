import { announcements } from "@/lib/content/news";
import { ButtonLink } from "./ButtonLink";

type Announcement = (typeof announcements)[number];

type AnnouncementListProps = {
  items?: readonly Announcement[];
};

export function AnnouncementList({ items = announcements }: AnnouncementListProps) {
  return (
    <div>
      {items.map((item) => (
        <article className="grid gap-3 border-t border-ink/10 py-6 md:grid-cols-[9rem_1fr]" key={`${item.date}-${item.title}`}>
          <p className="text-sm font-semibold text-violet-deep">{item.date}</p>
          <div>
            <h3 className="font-heading text-xl font-semibold text-indigo">{item.title}</h3>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-ink/65">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
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
