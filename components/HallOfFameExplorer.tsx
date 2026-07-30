"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Award, HallOfFameEntry } from "@/lib/content/results";
import { cn } from "@/lib/utils";

const awardSquares: Record<Award, string> = {
  "Team USA for IEO (Traveling member)": "bg-navy-900",
  "Team USA for IEO (Alternative member)": "border border-navy-900 bg-transparent",
  Gold: "bg-gold-500",
  Silver: "bg-zinc-400",
  Bronze: "bg-orange-700",
};

const awardShortLabels: Record<Award, string> = {
  "Team USA for IEO (Traveling member)": "Team USA",
  "Team USA for IEO (Alternative member)": "Team USA (Alt)",
  Gold: "Gold",
  Silver: "Silver",
  Bronze: "Bronze",
};

function AwardMark({ award }: { award: Award }) {
  return (
    <span className="label flex items-center gap-2 whitespace-nowrap text-ink/70">
      <span aria-hidden="true" className={cn("size-1.5 shrink-0", awardSquares[award])} />
      {awardShortLabels[award]}
    </span>
  );
}

type HallOfFameExplorerProps = {
  entries: HallOfFameEntry[];
  awards: Award[];
};

export function HallOfFameExplorer({ entries, awards }: HallOfFameExplorerProps) {
  const [selectedAward, setSelectedAward] = useState<Award | "All">("All");
  const [query, setQuery] = useState("");

  const indexed = useMemo(() => entries.map((entry, i) => ({ entry, index: i + 1 })), [entries]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return indexed.filter(({ entry }) => {
      if (selectedAward !== "All" && entry.award !== selectedAward) return false;
      if (!normalized) return true;
      const haystack = `${entry.firstName} ${entry.lastName} ${entry.school}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [indexed, selectedAward, query]);

  const counts = useMemo(() => {
    const map = new Map<Award, number>();
    for (const entry of entries) {
      map.set(entry.award, (map.get(entry.award) ?? 0) + 1);
    }
    return map;
  }, [entries]);

  return (
    <div>
      <p className="label label-tick text-ink/45">
        2026 cycle · {entries.length} students of record
      </p>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by award">
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
            className="h-10 w-full rounded-lg border border-ink/12 bg-paper pl-10 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink/60 focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name or school"
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="mt-6 border-y border-ink/10">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="label hidden py-3.5 pl-1 pr-4 font-medium text-ink/45 sm:table-cell" scope="col">
                  No.
                </th>
                <th className="label py-3.5 pr-4 font-medium text-ink/45" scope="col">
                  Student
                </th>
                <th className="label py-3.5 pr-4 font-medium text-ink/45" scope="col">
                  School
                </th>
                <th className="label hidden py-3.5 pr-1 font-medium text-ink/45 sm:table-cell" scope="col">
                  Award
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/6">
              {filtered.map(({ entry, index }) => (
                <tr
                  className="transition-colors duration-150 hover:bg-mist/60"
                  key={`${entry.award}-${entry.lastName}-${entry.firstName}-${entry.school}`}
                >
                  <td className="hidden py-3 pl-1 pr-4 align-top font-mono text-xs leading-6 text-ink/35 sm:table-cell">
                    {String(index).padStart(3, "0")}
                  </td>
                  <td className="py-3 pr-4 align-top font-medium leading-6 text-navy-900">
                    {entry.firstName} {entry.lastName}
                    <span className="mt-1 block sm:hidden">
                      <AwardMark award={entry.award} />
                    </span>
                  </td>
                  <td className="py-3 pr-4 align-top leading-6 text-ink/60">{entry.school}</td>
                  <td className="hidden py-3 pr-1 align-top leading-6 sm:table-cell">
                    <AwardMark award={entry.award} />
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
      <p aria-live="polite" className="label mt-3 text-ink/45">
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
        "rounded-md px-3 py-1.5 text-sm font-medium tabular-nums transition-all duration-200",
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
