import Link from "next/link";
import { ArrowRight } from "lucide-react";

type InfoCardProps = {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
};

export function InfoCard({ eyebrow, title, body, href }: InfoCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {eyebrow ? <p className="text-sm font-semibold text-violet-deep">{eyebrow}</p> : null}
          <h3 className="mt-2 font-heading text-xl font-semibold text-indigo">{title}</h3>
        </div>
        {href ? (
          <ArrowRight
            aria-hidden="true"
            className="mt-1 shrink-0 text-indigo/40 transition-transform group-hover:translate-x-1 group-hover:text-indigo"
            size={18}
            strokeWidth={1.8}
          />
        ) : null}
      </div>
      <p className="mt-3 max-w-md text-sm leading-6 text-ink/65">{body}</p>
    </>
  );

  if (href) {
    return (
      <Link
        className="group block border-t border-ink/10 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-salmon"
        href={href}
      >
        {content}
      </Link>
    );
  }

  return <article className="border-t border-ink/10 py-6">{content}</article>;
}
