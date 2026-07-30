import { cn } from "@/lib/utils";

type WaveDividerProps = {
  // Compose as "bg-<above-section-color> text-<below-section-color>"
  className?: string;
  variant?: "wave" | "curve";
  flip?: boolean;
};

const paths: Record<"wave" | "curve", string> = {
  wave: "M0,26 C120,42 300,8 480,18 C660,28 780,44 960,30 C1140,16 1320,10 1440,22 L1440,48 L0,48 Z",
  curve: "M0,34 C360,2 1080,50 1440,14 L1440,48 L0,48 Z",
};

export function WaveDivider({ className, variant = "wave", flip = false }: WaveDividerProps) {
  return (
    <div aria-hidden="true" className={cn("leading-none", className)}>
      <svg
        className={cn("block h-8 w-full sm:h-12", flip && "-scale-x-100")}
        preserveAspectRatio="none"
        viewBox="0 0 1440 48"
      >
        <path className="fill-current" d={paths[variant]} />
      </svg>
    </div>
  );
}
