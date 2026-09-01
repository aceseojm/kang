"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { GalleryCategory } from "@/lib/gallery";

type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  hasPommi: boolean;
};

type FilterValue = GalleryCategory | "전체" | "뽀미";

const filters: { label: string; value: FilterValue }[] = [
  { label: "전체", value: "전체" },
  { label: "꽃", value: "꽃" },
  { label: "열매", value: "열매" },
  { label: "풍경", value: "풍경" },
  { label: "뽀미", value: "뽀미" },
];

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState<FilterValue>("전체");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let result: GalleryImage[];
    
    if (filter === "전체") {
      result = images;
    } else if (filter === "뽀미") {
      result = images.filter((img) => img.hasPommi);
    } else {
      result = images.filter((img) => img.category === filter);
    }

    // 같은 카테고리 내에서 꽃이 열매보다 상위에 오도록 정렬
    if (filter === "전체") {
      const categoryOrder: Record<GalleryCategory, number> = { "꽃": 0, "풍경": 1, "열매": 2 };
      result = result.sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category]);
    }

    return result;
  }, [images, filter]);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + filtered.length) % filtered.length,
        );
      }
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, filtered.length]);

  return (
    <>
      <div className="flex flex-wrap gap-2 text-xs tracking-[0.2em] md:text-sm">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => {
              setFilter(f.value);
              setActiveIndex(null);
            }}
            className={`-m-2 p-2 transition-colors ${
              filter === f.value
                ? "text-[var(--color-ink)]"
                : "text-[var(--color-taupe)] hover:text-[var(--color-ink)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative aspect-square overflow-hidden bg-[color-mix(in_srgb,var(--color-ink)_6%,transparent)]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 text-sm tracking-widest text-white/70 hover:text-white"
            aria-label="닫기"
          >
            닫기 ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? i : (i - 1 + filtered.length) % filtered.length,
              );
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-6 text-2xl text-white/70 hover:text-white md:left-6"
            aria-label="이전 사진"
          >
            ‹
          </button>

          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[activeIndex].src}
              alt={filtered[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length));
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-6 text-2xl text-white/70 hover:text-white md:right-6"
            aria-label="다음 사진"
          >
            ›
          </button>

          <div className="absolute bottom-4 text-xs tracking-widest text-white/50">
            {activeIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
