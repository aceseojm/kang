import Link from "next/link";
import type { Poem } from "@/lib/poems";
import { seasons } from "@/lib/seasons";

export function PoemList({ poems }: { poems: Poem[] }) {
  if (poems.length === 0) {
    return (
      <p className="text-sm text-[var(--color-taupe)]">
        아직 등록된 시가 없습니다.
      </p>
    );
  }

  return (
    <ul className="flex flex-col divide-y divide-[color-mix(in_srgb,var(--color-ink)_10%,transparent)]">
      {poems.map((poem) => {
        const season = seasons.find((s) => s.id === poem.season)!;
        const firstLine = poem.lines.find((line) => line.trim().length > 0) ?? "";
        return (
          <li key={`${poem.season}-${poem.slug}`}>
            <Link
              href={`/poems/${poem.season}/${poem.slug}`}
              className="group flex items-baseline justify-between gap-6 py-5 md:py-6"
            >
              <span className="flex items-baseline gap-4">
                <span
                  className="text-xs tracking-widest md:text-sm"
                  style={{ color: `var(--color-${season.color})` }}
                >
                  {season.hanja}
                </span>
                <span className="text-lg tracking-wide transition-opacity md:text-xl">
                  {poem.title}
                </span>
              </span>
              <span className="hidden max-w-xs truncate text-sm text-[var(--color-taupe)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                {firstLine}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
