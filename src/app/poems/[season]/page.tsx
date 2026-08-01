import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeasonTabs } from "../_components/SeasonTabs";
import { PoemList } from "../_components/PoemList";
import { SiteNav } from "../../_components/SiteNav";
import { SiteFooter } from "../../_components/SiteFooter";
import { getPoemsBySeason } from "@/lib/poems";
import { getSeason, seasons, type SeasonId } from "@/lib/seasons";

export function generateStaticParams() {
  return seasons.map((season) => ({ season: season.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ season: string }>;
}): Promise<Metadata> {
  const { season } = await params;
  return { title: `${season} 시 | 나의 四季` };
}

export default async function SeasonPoemsPage({
  params,
}: {
  params: Promise<{ season: string }>;
}) {
  const { season: seasonParam } = await params;
  const season = getSeason(seasonParam);
  if (!season) notFound();

  const seasonPoems = getPoemsBySeason(season.id as SeasonId);

  return (
    <div className="mx-auto min-h-dvh w-full max-w-2xl px-6 py-16 md:px-0 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="-m-2 inline-block p-2 text-xs tracking-[0.3em] text-[var(--color-taupe)]"
        >
          鹽倉 姜吉遠 · 나의 四季
        </Link>
        <SiteNav />
      </div>
      <h1
        className="mt-6 flex items-baseline gap-3 text-2xl tracking-widest md:text-3xl"
        style={{ color: `var(--color-${season.color})` }}
      >
        <span>{season.hanja}</span>
        <span>{season.id}</span>
      </h1>

      <div className="mt-10">
        <SeasonTabs active={season.id} />
      </div>

      <div className="mt-8">
        <PoemList poems={seasonPoems} />
      </div>

      <SiteFooter className="mt-16 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8" />
    </div>
  );
}
