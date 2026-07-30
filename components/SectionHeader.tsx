type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
};

export function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold text-violet-deep">{eyebrow}</p> : null}
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-indigo">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-ink/65">{body}</p> : null}
    </div>
  );
}
