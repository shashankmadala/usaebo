type SourceNoteProps = {
  href: string;
  label: string;
};

export function SourceNote({ href, label }: SourceNoteProps) {
  return (
    <p className="mt-5 text-sm leading-6 text-ink/45">
      Source:{" "}
      <a
        className="font-medium text-ink/55 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-indigo hover:decoration-indigo/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {label}
      </a>
    </p>
  );
}
