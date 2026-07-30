import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "invert" | "link";

const buttonVariants: Record<"primary" | "secondary" | "ghost" | "invert", string> = {
  primary: "bg-indigo text-paper hover:bg-violet-deep",
  secondary: "bg-transparent text-indigo ring-1 ring-inset ring-indigo/15 hover:ring-indigo/35",
  ghost: "bg-salmon-tint text-indigo hover:bg-salmon",
  invert: "bg-paper text-indigo hover:bg-salmon-tint",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: "arrow" | "external" | "mail" | "none";
};

export function ButtonLink({ href, children, variant = "primary", className, icon }: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const linkTarget = href.startsWith("mailto:") ? undefined : "_blank";

  if (variant === "link") {
    const Icon = icon === "mail" ? Mail : isExternal || icon === "external" ? ArrowUpRight : ArrowRight;
    const classes = cn(
      "link-arrow text-sm font-semibold text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-salmon",
      className,
    );
    return isExternal ? (
      <a className={classes} href={href} rel="noreferrer" target={linkTarget}>
        {children}
        <Icon aria-hidden="true" size={15} strokeWidth={2} />
      </a>
    ) : (
      <Link className={classes} href={href}>
        {children}
        <Icon aria-hidden="true" size={15} strokeWidth={2} />
      </Link>
    );
  }

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon",
    buttonVariants[variant],
    className,
  );

  if (icon && icon !== "none") {
    const Icon = icon === "mail" ? Mail : icon === "external" ? ArrowUpRight : ArrowRight;
    return isExternal ? (
      <a className={classes} href={href} rel="noreferrer" target={linkTarget}>
        <span>{children}</span>
        <Icon aria-hidden="true" size={16} strokeWidth={2} />
      </a>
    ) : (
      <Link className={classes} href={href}>
        <span>{children}</span>
        <Icon aria-hidden="true" size={16} strokeWidth={2} />
      </Link>
    );
  }

  return isExternal ? (
    <a className={classes} href={href} rel="noreferrer" target={linkTarget}>
      {children}
    </a>
  ) : (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
