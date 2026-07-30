"use client";

import { useEffect, useState, type ElementType } from "react";
import { cn } from "@/lib/utils";

type WordRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  step?: number;
  accentWords?: readonly string[];
  accentClassName?: string;
};

export function WordReveal({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  step = 70,
  accentWords = [],
  accentClassName,
}: WordRevealProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const words = text.split(" ");

  return (
    <Tag aria-label={text} className={className}>
      {words.map((word, index) => {
        const bare = word.replace(/[^a-zA-Z0-9-]/g, "");
        const isAccent = accentWords.includes(bare);
        return (
          <span key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            <span
              aria-hidden="true"
              className={cn("word", shown && "in", isAccent && accentClassName)}
              style={{ transitionDelay: `${delay + index * step}ms` }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
