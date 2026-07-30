import Link from "next/link";
import { ArrowRight } from "lucide-react";

type InfoCardProps = {
  title: string;
  body: string;
  href: string;
  eyebrow?: string;
};

export function InfoCard({ title, body, href, eyebrow }: InfoCardProps) {
  return (
    <Link
      className="card-lift group flex h-full flex-col rounded-2xl border border-ink/8 bg-paper p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700"
      href={href}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{eyebrow}</p>
      ) : null}
      <h3 className="mt-2 font-heading text-xl font-semibold text-navy-900">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/60">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1"
          size={15}
          strokeWidth={2.2}
        />
      </span>
    </Link>
  );
}
