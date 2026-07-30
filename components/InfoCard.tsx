import Link from "next/link";
import { ArrowRight } from "lucide-react";

type InfoCardProps = {
  title: string;
  body: string;
  href: string;
  index: number;
};

// A ledger row: gold serif numeral, title, body, arrow. The whole row is the link.
export function InfoCard({ title, body, href, index }: InfoCardProps) {
  return (
    <Link
      className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-ink/10 py-6 transition-colors duration-200 last:border-b hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-700 md:grid-cols-[3rem_16rem_1fr_auto] md:gap-6"
      href={href}
    >
      <span aria-hidden="true" className="font-accent text-2xl italic text-gold-600">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="font-heading text-xl font-semibold text-navy-900">{title}</h3>
      <p className="hidden text-sm leading-6 text-ink/60 md:block">{body}</p>
      <ArrowRight
        aria-hidden="true"
        className="self-center text-ink/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold-600"
        size={18}
        strokeWidth={2}
      />
    </Link>
  );
}
