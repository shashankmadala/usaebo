"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  // Positive drifts with the scroll direction, negative against it.
  speed?: number;
};

export function Parallax({ children, className, speed = 0.15 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = parent.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div className={cn("will-change-transform", className)} ref={ref}>
      {children}
    </div>
  );
}
