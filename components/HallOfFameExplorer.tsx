"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Award, HallOfFameEntry } from "@/lib/content/results";
import { cn } from "@/lib/utils";

const awardBadgeStyles: Record<Award, string> = {
  "Team USA for IEO (Traveling member)": "bg-navy-900 text-gold-300",
  "Team USA for IEO (Alternative member)": "bg-navy-900/8 text-navy-800",
  Gold: "bg-gold-100 text-gold-700",
  Silver: "bg-zinc-100 text-zinc-600",
  Bronze: "bg-orange-100 text-orange-800",
};

const awardShortLabels: Record<Award, string> = {
  "Team USA for IEO (Traveling member)": "Team USA",
  "Team USA for IEO (Alternative member)": "Team USA (Alternate)",
  Gold: "Gold",
  Silver: "Silver",
  Bronze: "Bronze",
};

type HallOfFameExplorerProps = {
  entries: HallOfFameEntry[];
  awards: Award[];
};

export function HallOfFameExplorer({ entries, awards }: HallOfFameExplorerProps) {
  const [selectedAward, setSelectedAward] = useState<Award | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (selectedAward !== "All" && entry.award !== selectedAward) return false;
      if (!normalized) return true;
      const haystack = `${entry.firstName} ${entry.lastName} ${entry.school}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [entries, selectedAward, query]);

  const counts = useMemo(() => {
    const map = new Map<Award, number>();
    for (const entry of entries) {
      map.set(entry.award, (map.get(entry.award) ?? 0) + 1);
    }
    return map;
  }, [entries]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by award">
          <FilterPill
            active={selectedAward === "All"}
            label={`All (${entries.length})`}
            onClick={() => setSelectedAward("All")}
          />
          {awards.map((award) => (
            <FilterPill
              active={selectedAward === award}
              key={award}
              label={`${awardShortLabels[award]} (${counts.get(award) ?? 0})`}
              onClick={() => setSelectedAward(award)}
            />
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Search by name or school</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/35"
            size={15}
            strokeWidth={2}
          />
          <input
            className="h-10 w-full rounded-full border border-ink/12 bg-paper pl-10 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink/60 focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name or school"
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-ink/8">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink/8 bg-mist text-navy-900">
                <th className="px-5 py-3.5 font-semibold" scope="col">
                  Student
                </th>
                <th className="px-5 py-3.5 font-semibold" scope="col">
                  School
                </th>
                <th className="hidden px-5 py-3.5 font-semibold sm:table-cell" scope="col">
                  Award
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/6">
              {filtered.map((entry) => (
                <tr
                  className="transition-colors duration-150 hover:bg-mist/60"
                  key={`${entry.award}-${entry.lastName}-${entry.firstName}-${entry.school}`}
                >
                  <td className="px-5 py-3 font-medium text-navy-900">
                    {entry.firstName} {entry.lastName}
                    <span
                      className={cn(
                        "mt-1.5 flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold sm:hidden",
                        awardBadgeStyles[entry.award],
                      )}
                    >
                      {awardShortLabels[entry.award]}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-ink/60">{entry.school}</td>
                  <td className="hidden whitespace-nowrap px-5 py-3 sm:table-cell">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                        awardBadgeStyles[entry.award],
                      )}
                    >
                      {awardShortLabels[entry.award]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-ink/60">
            No students match this search. Try a different name or school.
          </p>
        ) : null}
      </div>
      <p aria-live="polite" className="mt-3 text-xs text-ink/60">
        Showing {filtered.length} of {entries.length} students
      </p>
    </div>
  );
}

function FilterPill({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      aria-pressed={active}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-navy-900 text-paper"
          : "bg-transparent text-ink/60 ring-1 ring-inset ring-ink/12 hover:text-navy-900 hover:ring-ink/30",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700",
      )}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
