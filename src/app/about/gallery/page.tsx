import Link from "next/link";
import type { Metadata } from "next";
import { galleryImages } from "@/lib/gallery";
import { GalleryGrid } from "./_components/GalleryGrid";
import { SiteNav } from "../../_components/SiteNav";
import { SiteFooter } from "../../_components/SiteFooter";

export const metadata: Metadata = {
  title: "갤러리 | 나의 四季",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-4xl px-6 py-16 md:px-0 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/about"
          className="-m-2 inline-block p-2 text-xs tracking-[0.3em] text-[var(--color-taupe)]"
        >
          鹽倉 姜吉遠 · 나의 四季
        </Link>
        <SiteNav />
      </div>

      <h1 className="mt-6 text-2xl tracking-widest md:text-3xl">갤러리</h1>

      <p className="mt-6 max-w-xl text-[15px] leading-[2] text-[var(--color-taupe)] md:text-base">
        시인은 매주 반려견 뽀미와 함께 한강 부근을 걸으며, 발걸음이 머무는 자리마다
        스치는 계절의 풍경을 사진으로 옮겨 담는다. 그렇게 쌓인 산책의 기록들을
        이곳에 모아 둔다.
      </p>

      <div className="mt-12">
        <GalleryGrid images={galleryImages} />
      </div>

      <SiteFooter className="mt-16 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8" />
    </div>
  );
}
