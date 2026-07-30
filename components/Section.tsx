import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-content px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
};

export function SectionHeading({ eyebrow, title, lead, align = "left", dark = false, id }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.14em]",
            dark ? "text-gold-300" : "text-gold-700",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-paper" : "text-navy-900",
        )}
        id={id}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cn("mt-4 text-base leading-7", dark ? "text-paper/65" : "text-ink/60")}>{lead}</p>
      ) : null}
    </div>
  );
}
