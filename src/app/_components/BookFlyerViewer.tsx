"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Bookstore = {
  name: string;
  href: string;
  left: string;
  width: string;
};

export function BookFlyerViewer({ bookstores }: { bookstores: Bookstore[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative aspect-[2/3] overflow-hidden bg-white shadow-[18px_20px_0_var(--color-autumn)]">
        <Image
          src="/images/last-book-design.png"
          alt="《四季로 읽는 詩》 구매 안내 전단"
          fill
          sizes="(max-width: 768px) 40vw, 20vw"
          unoptimized
          priority
          className="object-contain"
        />
        <button
          type="button"
          aria-label="신간 시집 전단 크게 보기"
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 z-10 cursor-zoom-in"
        />
        <div className="pointer-events-none absolute inset-0 z-30" aria-label="구매 및 공식 홈페이지 링크">
          {bookstores.map((bookstore) => (
            <a
              key={bookstore.name}
              href={bookstore.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${bookstore.name}에서 시집 구매하기`}
              className="pointer-events-auto absolute top-[82.5%] block h-[7.5%] rounded-sm outline-offset-2 transition-colors hover:bg-[var(--color-autumn)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-autumn)]"
              style={{ left: bookstore.left, width: bookstore.width }}
            />
          ))}
          <a
            href="https://www.kanggilwon.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="강길원 공식 홈페이지 방문하기"
            className="pointer-events-auto absolute left-[30%] top-[93%] block h-[6%] w-[40%] rounded-sm outline-offset-2 transition-colors hover:bg-[var(--color-autumn)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-autumn)]"
          />
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="신간 시집 전단 원본 보기"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            aria-label="확대 이미지 닫기"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition-colors hover:bg-black md:right-8 md:top-8"
          >
            ×
          </button>
          <div
            className="relative h-full w-full max-w-5xl cursor-zoom-out"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/images/last-book-design.png"
              alt="《四季로 읽는 詩》 구매 안내 전단 원본"
              fill
              sizes="100vw"
              unoptimized
              priority
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
