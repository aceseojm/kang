"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HIDE_KEY = "announcement-popup-hide-until";

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

export function AnnouncementPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // localStorage only exists client-side, so this can't be derived during SSR/hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(window.localStorage.getItem(HIDE_KEY) !== todayString());
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function hideForToday() {
    window.localStorage.setItem(HIDE_KEY, todayString());
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className="w-full max-w-sm overflow-hidden rounded-sm bg-[var(--color-ivory-end)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[1168/1214] w-full">
          <Image
            src="/images/popup.png"
            alt="강길원 첫 시집 《사계로 읽는 시》 출간 안내"
            fill
            sizes="(max-width: 480px) 100vw, 384px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex items-center justify-between border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] px-5 py-3 text-xs tracking-widest text-[var(--color-taupe)]">
          <button
            type="button"
            onClick={hideForToday}
            className="-m-2 p-2 transition-colors hover:text-[var(--color-ink)]"
          >
            오늘 하루 그만 보기
          </button>
          <button
            type="button"
            onClick={close}
            className="-m-2 p-2 transition-colors hover:text-[var(--color-ink)]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
