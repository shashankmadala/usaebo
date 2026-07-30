"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-ink/10">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className="border-b border-ink/10" key={item.question}>
            <h3>
              <button
                aria-expanded={open}
                className="grid w-full grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 text-left transition-colors duration-200 hover:bg-mist/60 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-700"
                onClick={() => setOpenIndex(open ? null : index)}
                type="button"
              >
                <span aria-hidden="true" className="font-accent text-2xl italic text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-lg font-semibold text-navy-900 sm:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "self-center text-gold-600 transition-transform duration-300 [transition-timing-function:var(--ease-out-soft)]",
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
                <p className="max-w-2xl pb-6 pl-16 pr-6 text-sm leading-7 text-ink/60">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
