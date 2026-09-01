import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TimelineSection, TimelineRow } from "./_components/TimelineSection";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";
import {
  awards,
  bio,
  books,
  career,
  currentPositions,
  debut,
  founding,
  relatedSites,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "詩人 | 나의 四季",
};

export default function AboutPage() {
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

      <h1 className="mt-6 text-2xl tracking-widest md:text-3xl">
        {bio.name}
        <span className="ml-3 text-base tracking-normal text-[var(--color-taupe)] md:text-lg">
          {bio.role}
        </span>
      </h1>

      <div className="mt-14 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:gap-12">
        <div className="relative mx-auto aspect-[4/5] w-48 shrink-0 overflow-hidden grayscale md:mx-0 md:w-56">
          <Image
            src="/images/kang.png"
            alt={`${bio.name} 시인 초상`}
            fill
            sizes="(max-width: 768px) 12rem, 14rem"
            className="object-cover"
            priority
          />
        </div>

        <blockquote
          className="border-l text-xl leading-relaxed tracking-wide md:pl-8 md:text-2xl"
          style={{ borderColor: "var(--color-autumn)", paddingLeft: "1.5rem" }}
        >
          {bio.pullQuote}
        </blockquote>
      </div>

      <div className="mt-12 flex flex-col gap-6 text-[15px] leading-[2] text-[var(--color-ink)] md:text-base">
        {bio.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16">
        <TimelineSection title="이력">
          <TimelineRow date={founding.date}>{founding.text}</TimelineRow>
          {career.map((item) => (
            <TimelineRow key={item.date} date={item.date}>
              {item.text}
            </TimelineRow>
          ))}
          <TimelineRow date="현재">
            {currentPositions.join(" · ")}
          </TimelineRow>
        </TimelineSection>

        <TimelineSection title="등단">
          <TimelineRow date={debut.date}>{debut.text}</TimelineRow>
        </TimelineSection>

        <TimelineSection title="수상">
          {awards.map((item) => (
            <TimelineRow key={item.date + item.text} date={item.date}>
              {item.text}
              {item.cert && (
                <span className="ml-2 text-[var(--color-taupe)]">
                  ({item.cert})
                </span>
              )}
            </TimelineRow>
          ))}
        </TimelineSection>

        <TimelineSection title="저서">
          {books.map((book) => (
            <TimelineRow key={book.date} date={book.date}>
              《{book.title}》
              <span className="ml-2 text-[var(--color-taupe)]">
                {book.publisher}
              </span>
            </TimelineRow>
          ))}
        </TimelineSection>
        <TimelineSection title="블로그">
          <TimelineRow date="소금창고">
            <p className="leading-[2] text-[15px] md:text-base">
              염창(鹽倉) — 소금을 갈무리해두는 창고라는 뜻의 호입니다. 이 블로그는 시인이 오랜 세월 마음에 담아온 글과 삶의 지혜, 여행의 기록들을 정성껏 갈무리해온 공간입니다. 시간이 지나야 제맛을 내는 소금처럼, 변하지 않는 것들의 곳간 소금창고를 만나보세요.
            </p>
            <a
              href="https://blog.naver.com/duackd_"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold underline text-[var(--color-ink)] transition-colors hover:text-[var(--color-autumn)]"
            >
              소금창고 ↗
            </a>
          </TimelineRow>
        </TimelineSection>
      </div>

      <footer className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8 text-sm tracking-wide text-[var(--color-taupe)]">
        <Link
          href="/about/gallery"
          className="-m-2 inline-block p-2 transition-colors hover:text-[var(--color-ink)]"
        >
          갤러리 ↗
        </Link>
        {relatedSites.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="-m-2 inline-block p-2 transition-colors hover:text-[var(--color-ink)]"
          >
            {site.name} ↗
          </a>
        ))}
      </footer>
      <SiteFooter className="mt-6" />
    </div>
  );
}
