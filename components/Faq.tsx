"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-paper shadow-fine">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-navy-900 transition-colors duration-200 hover:bg-mist/60 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-700 sm:text-lg"
                onClick={() => setOpenIndex(open ? null : index)}
                type="button"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-gold-600 transition-transform duration-300 [transition-timing-function:var(--ease-out-soft)]",
                    open && "rotate-180",
                  )}
                  size={18}
                  strokeWidth={2}
                />
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out-soft)]"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-ink/60">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
