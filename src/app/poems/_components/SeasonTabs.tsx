import Link from "next/link";
import { seasons, type SeasonId } from "@/lib/seasons";

export function SeasonTabs({ active }: { active?: SeasonId }) {
  return (
    <nav className="flex items-center gap-6 text-sm tracking-[0.15em] md:gap-8 md:text-base">
      <Link
        href="/poems"
        className="pb-1"
        style={{
          borderBottom: !active ? "1px solid var(--color-ink)" : "1px solid transparent",
          color: !active ? "var(--color-ink)" : "var(--color-taupe)",
        }}
      >
        전체
      </Link>
      {seasons.map((season) => {
        const isActive = active === season.id;
        return (
          <Link
            key={season.id}
            href={`/poems/${season.id}`}
            className="flex items-center gap-1.5 pb-1"
            style={{
              borderBottom: isActive
                ? `1px solid var(--color-${season.color})`
                : "1px solid transparent",
              color: isActive ? `var(--color-${season.color})` : "var(--color-taupe)",
            }}
          >
            <span>{season.hanja}</span>
            <span>{season.id}</span>
          </Link>
        );
      })}
    </nav>
  );
}
