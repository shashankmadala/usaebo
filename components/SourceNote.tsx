type SourceNoteProps = {
  href: string;
  label: string;
};

export function SourceNote({ href, label }: SourceNoteProps) {
  return (
    <p className="mt-5 text-sm leading-6 text-ink/60">
      Source:{" "}
      <a
        className="font-medium text-ink/70 underline decoration-gold-400/60 underline-offset-4 transition-colors hover:text-navy-900 hover:decoration-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {label}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </p>
  );
}
