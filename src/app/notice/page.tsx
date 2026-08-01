import Link from "next/link";
import type { Metadata } from "next";
import { notices } from "@/lib/notices";
import { ContactForm } from "./_components/ContactForm";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "공지사항 · 문의 | 나의 四季",
};

export default function NoticePage() {
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

      <h1 className="mt-6 flex items-center gap-3 text-2xl tracking-widest md:text-3xl">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ background: "var(--color-autumn)" }}
        />
        공지사항
      </h1>

      <div className="mt-10">
        {notices.length === 0 ? (
          <p className="text-sm text-[var(--color-taupe)]">
            아직 등록된 공지가 없습니다.
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-[color-mix(in_srgb,var(--color-ink)_10%,transparent)]">
            {notices.map((notice) => (
              <li
                key={notice.slug}
                className="border-l-2 py-5 pl-5"
                style={{ borderColor: "var(--color-autumn)" }}
              >
                <p
                  className="text-xs tracking-widest"
                  style={{ color: "var(--color-autumn)" }}
                >
                  {notice.date}
                </p>
                <h2 className="mt-2 text-base md:text-lg">{notice.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]">
                  {notice.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        id="contact"
        className="mt-20 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-14"
      >
        <h2 className="flex items-center gap-3 text-xl tracking-widest md:text-2xl">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--color-summer)" }}
          />
          문의
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-taupe)] md:text-base">
          시집, 강연, 협업 등 문의하실 내용이 있다면 아래 양식으로 편하게
          남겨 주세요.
        </p>
        <ContactForm />
      </div>

      <SiteFooter className="mt-16 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8" />
    </div>
  );
}
