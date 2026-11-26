import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { notices } from "@/lib/notices";
import { SiteNav } from "../../_components/SiteNav";
import { SiteFooter } from "../../_components/SiteFooter";

export function generateStaticParams() {
  return notices.map((notice) => ({ slug: notice.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const notice = notices.find((item) => item.slug === params.slug);
  return {
    title: notice
      ? `${notice.title} | 나의 四季`
      : "공지사항 | 나의 四季",
  };
}

export default function NoticeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const notice = notices.find((item) => item.slug === params.slug);

  if (!notice) {
    notFound();
  }

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

      <Link
        href="/notice"
        className="mt-10 inline-flex items-center gap-2 text-xs tracking-widest text-[var(--color-taupe)]"
      >
        ← 공지사항 목록
      </Link>

      <p
        className="mt-6 text-xs tracking-widest"
        style={{ color: "var(--color-autumn)" }}
      >
        {notice.date}
      </p>
      <h1 className="mt-2 text-2xl tracking-widest md:text-3xl">
        {notice.title}
      </h1>
      <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-[var(--color-ink)] md:text-base">
        {notice.body}
      </p>
      {notice.image ? (
        <div className="mt-6 overflow-hidden rounded-lg">
          <Image
            src={notice.image}
            alt={notice.title}
            width={900}
            height={1200}
            className="w-full"
          />
        </div>
      ) : null}
      {notice.link ? (
        <a
          href={notice.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border px-4 py-2 text-xs tracking-widest transition-colors hover:text-[var(--color-cream,#fff)]"
          style={{
            borderColor: "var(--color-autumn)",
            color: "var(--color-autumn)",
          }}
        >
          {notice.link.label} →
        </a>
      ) : null}

      <SiteFooter className="mt-16 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8" />
    </div>
  );
}
