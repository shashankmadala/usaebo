import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "gold" | "outline" | "invert" | "link";

const buttonVariants: Record<Exclude<ButtonVariant, "link">, string> = {
  primary: "bg-navy-900 text-paper hover:bg-navy-700",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  outline: "bg-transparent text-navy-900 ring-1 ring-inset ring-ink/15 hover:bg-mist hover:ring-ink/30",
  invert: "bg-paper text-navy-900 hover:bg-gold-100",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: "arrow" | "external" | "mail" | "none";
  size?: "md" | "sm";
};

export function ButtonLink({ href, children, variant = "primary", className, icon, size = "md" }: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const linkTarget = href.startsWith("mailto:") ? undefined : "_blank";
  const newTabNote =
    isExternal && linkTarget === "_blank" ? <span className="sr-only"> (opens in new tab)</span> : null;

  if (variant === "link") {
    const Icon = icon === "mail" ? Mail : isExternal || icon === "external" ? ArrowUpRight : ArrowRight;
    const classes = cn(
      "link-arrow text-sm font-semibold text-navy-900 hover:text-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-700",
      className,
    );
    return isExternal ? (
      <a className={classes} href={href} rel="noreferrer" target={linkTarget}>
        {children}
        {newTabNote}
        <Icon aria-hidden="true" className="text-gold-600" size={15} strokeWidth={2.2} />
      </a>
    ) : (
      <Link className={classes} href={href}>
        {children}
        <Icon aria-hidden="true" className="text-gold-600" size={15} strokeWidth={2.2} />
      </Link>
    );
  }

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700",
    size === "md" ? "min-h-11 px-6 py-2.5" : "min-h-9 px-4 py-1.5",
    buttonVariants[variant],
    className,
  );

  const iconEl =
    icon && icon !== "none" ? (
      icon === "mail" ? (
        <Mail aria-hidden="true" size={16} strokeWidth={2} />
      ) : icon === "external" ? (
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
      ) : (
        <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
      )
    ) : null;

  return isExternal ? (
    <a className={classes} href={href} rel="noreferrer" target={linkTarget}>
      <span>{children}</span>
      {newTabNote}
      {iconEl}
    </a>
  ) : (
    <Link className={classes} href={href}>
      <span>{children}</span>
      {iconEl}
    </Link>
  );
}
