import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdjacentPoems, getPoem, poems } from "@/lib/poems";
import { getSeason } from "@/lib/seasons";
import { SiteNav } from "../../../_components/SiteNav";
import { SiteFooter } from "../../../_components/SiteFooter";

export function generateStaticParams() {
  return poems.map((poem) => ({ season: poem.season, slug: poem.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ season: string; slug: string }>;
}): Promise<Metadata> {
  const { season: seasonParam, slug } = await params;
  const season = getSeason(seasonParam);
  const poem = season ? getPoem(season.id, slug) : undefined;
  return { title: poem ? `${poem.title} | 나의 四季` : "나의 四季" };
}

export default async function PoemPage({
  params,
}: {
  params: Promise<{ season: string; slug: string }>;
}) {
  const { season: seasonParam, slug } = await params;
  const season = getSeason(seasonParam);
  if (!season) notFound();

  const poem = getPoem(season.id, slug);
  if (!poem) notFound();

  const { prev, next } = getAdjacentPoems(season.id, slug);

  return (
    <div className="relative flex min-h-dvh w-full flex-col">
      <header className="flex flex-col gap-3 px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center justify-between">
          <Link
            href={`/poems/${season.id}`}
            className="-m-2 flex items-center gap-2 p-2 text-xs tracking-[0.2em] text-[var(--color-taupe)] md:text-sm"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border text-sm"
              style={{
                borderColor: `var(--color-${season.color})`,
                color: `var(--color-${season.color})`,
              }}
            >
              {season.hanja}
            </span>
            {season.id} 詩
          </Link>
          <Link href="/" className="-m-2 inline-block p-2 text-xs tracking-[0.2em] text-[var(--color-taupe)]">
            鹽倉 姜吉遠
          </Link>
        </div>
        <SiteNav className="justify-end" />
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-0">
        <h1 className="text-xl tracking-[0.2em] md:text-2xl">{poem.title}</h1>
        <div
          className="mt-10 flex flex-col gap-1 text-base md:text-lg"
          style={{ lineHeight: 2.2 }}
        >
          {poem.lines.map((line, i) =>
            line.trim().length === 0 ? (
              <div key={i} className="h-4" />
            ) : (
              <p key={i}>{line}</p>
            )
          )}
        </div>
      </main>

      <footer className="flex items-center justify-between px-6 py-8 text-sm tracking-wide md:px-12 md:py-10">
        {prev ? (
          <Link
            href={`/poems/${season.id}/${prev.slug}`}
            className="-m-2 flex items-center gap-2 p-2 text-[var(--color-taupe)] transition-colors hover:text-[var(--color-ink)]"
          >
            <span aria-hidden>←</span>
            <span className="hidden sm:inline">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/poems/${season.id}/${next.slug}`}
            className="-m-2 flex items-center gap-2 p-2 text-[var(--color-taupe)] transition-colors hover:text-[var(--color-ink)]"
          >
            <span className="hidden sm:inline">{next.title}</span>
            <span aria-hidden>→</span>
          </Link>
        ) : (
          <span />
        )}
      </footer>
      <SiteFooter className="pb-8 text-center md:pb-10" />
    </div>
  );
}
