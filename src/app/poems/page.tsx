import Link from "next/link";
import type { Metadata } from "next";
import { Quadrant } from "../_components/Quadrant";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";
import { SeasonTabs } from "./_components/SeasonTabs";
import { PoemList } from "./_components/PoemList";
import { poems } from "@/lib/poems";
import { seasons } from "@/lib/seasons";

export const metadata: Metadata = {
  title: "시 목록 | 나의 四季",
};

export default function PoemsPage() {
  const sorted = [...poems].sort((a, b) => {
    const seasonA = seasons.find((s) => s.id === a.season)!.order;
    const seasonB = seasons.find((s) => s.id === b.season)!.order;
    return seasonA - seasonB;
  });

  return (
    <>
      <div className="relative h-dvh w-full overflow-hidden bg-[var(--color-ivory-end)] text-[var(--color-ink)]">
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2 bg-[var(--color-ivory-end)] md:gap-3">
          <Quadrant
            href="/poems/봄"
            label="봄"
            hanja="春"
            color="spring"
            badgeCorner="br"
            image="/images/hero-spring-v2.png"
          />
          <Quadrant href="/poems/여름" label="여름" hanja="夏" color="summer" badgeCorner="bl" image="/images/hero-summer.png" />
          <Quadrant href="/poems/가을" label="가을" hanja="秋" color="autumn" badgeCorner="tr" image="/images/hero-autumn.png" />
          <Quadrant href="/poems/겨울" label="겨울" hanja="冬" color="winter" badgeCorner="tl" image="/images/hero-winter.png" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="rounded-sm bg-[color-mix(in_srgb,var(--color-ivory-end)_78%,transparent)] px-3 py-6 backdrop-blur-[2px] md:px-4 md:py-8">
            <h1
              className="text-2xl font-medium tracking-[0.4em] md:text-4xl"
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
            >
              四季로 읽는 詩
            </h1>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-3 md:bottom-10">
          <p className="text-xs tracking-[0.3em] text-[var(--color-taupe)] md:text-sm">
            鹽倉 姜吉遠 · 첫 시집
          </p>
          <svg
            className="h-4 w-4 animate-bounce text-[var(--color-taupe)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

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
        <h2 className="mt-6 text-2xl tracking-widest md:text-3xl">詩</h2>

        <div className="mt-10">
          <SeasonTabs />
        </div>

        <div className="mt-8">
          <PoemList poems={sorted} />
        </div>

        <SiteFooter className="mt-16 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8" />
      </div>
    </>
  );
}
