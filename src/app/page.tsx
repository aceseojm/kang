import Image from "next/image";
import Link from "next/link";
import { Quadrant } from "./_components/Quadrant";
import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";
import { bio } from "@/lib/profile";
import { galleryImages } from "@/lib/gallery";

export default function Home() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <main className="bg-[var(--color-ivory-end)] text-[var(--color-ink)]">
      <section className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25" />

        <SiteNav
          variant="dark"
          showHome={false}
          className="absolute inset-x-0 top-0 justify-center px-6 py-4 md:py-6"
        />

        <p className="relative text-xs tracking-[0.4em] text-white/80 md:text-sm">
          {bio.penName} {bio.hanja}
        </p>
        <h1 className="relative mt-4 text-3xl tracking-widest text-white md:text-5xl">
          {bio.name}
        </h1>
        <p className="relative mt-3 text-sm tracking-wide text-white/80 md:text-base">
          {bio.role}
        </p>
        <blockquote className="relative mt-12 max-w-md text-lg leading-relaxed tracking-wide text-white md:max-w-xl md:text-2xl">
          {bio.pullQuote}
        </blockquote>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 md:bottom-12">
          <svg
            className="h-4 w-4 animate-bounce text-white/80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-20 md:px-0 md:py-28">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl tracking-widest md:text-2xl">
            四季로 읽는 詩
          </h2>
          <Link
            href="/poems"
            className="-m-2 shrink-0 p-2 text-xs tracking-widest text-[var(--color-taupe)] transition-colors hover:text-[var(--color-ink)]"
          >
            더 보기 →
          </Link>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-taupe)] md:text-base">
          첫 시집 《사계로 읽는 시》 살아온 인생을 봄·여름·가을·겨울, 네 계절로 나누었습니다.
        </p>

        <div className="mt-8 grid aspect-[4/3] w-full grid-cols-2 grid-rows-2 gap-2 overflow-hidden bg-[var(--color-ivory-end)] md:aspect-[16/9] md:gap-3">
          <Quadrant href="/poems/봄" label="봄" hanja="春" color="spring" badgeCorner="br" image="/images/hero-spring-v2.png" />
          <Quadrant href="/poems/여름" label="여름" hanja="夏" color="summer" badgeCorner="bl" image="/images/hero-summer.png" />
          <Quadrant href="/poems/가을" label="가을" hanja="秋" color="autumn" badgeCorner="tr" image="/images/hero-autumn.png" />
          <Quadrant href="/poems/겨울" label="겨울" hanja="冬" color="winter" badgeCorner="tl" image="/images/hero-winter.png" />
        </div>
      </section>

      <section className="border-t border-[color-mix(in_srgb,var(--color-ink)_8%,transparent)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-6 md:px-0 md:py-14">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl tracking-widest md:text-2xl">詩人</h2>
            <Link
              href="/about"
              className="-m-2 shrink-0 p-2 text-xs tracking-widest text-[var(--color-taupe)] transition-colors hover:text-[var(--color-ink)]"
            >
              더 보기 →
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="relative mx-auto aspect-[4/5] w-28 shrink-0 overflow-hidden grayscale md:mx-0 md:w-32">
              <Image
                src="/images/kang.png"
                alt={`${bio.name} 시인 초상`}
                fill
                sizes="(max-width: 768px) 7rem, 8rem"
                className="object-cover"
              />
            </div>
            <p className="max-w-xl text-[15px] leading-[2] text-[var(--color-ink)] md:text-base">
              {bio.paragraphs[0]}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color-mix(in_srgb,var(--color-ink)_8%,transparent)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 md:px-0 md:py-28">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl tracking-widest md:text-2xl">갤러리</h2>
            <Link
              href="/about/gallery"
              className="-m-2 shrink-0 p-2 text-xs tracking-widest text-[var(--color-taupe)] transition-colors hover:text-[var(--color-ink)]"
            >
              더 보기 →
            </Link>
          </div>
          <Link
            href="/about/gallery"
            className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3"
          >
            {previewImages.map((img) => (
              <span key={img.src} className="relative block aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </span>
            ))}
          </Link>
        </div>
      </section>

      <footer className="border-t border-[color-mix(in_srgb,var(--color-ink)_8%,transparent)]">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-xs tracking-widest text-[var(--color-taupe)] md:px-0">
          <span>
            {bio.penName} {bio.hanja} · 나의 四季
          </span>
          <SiteNav />
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 pb-8 text-[11px] tracking-widest text-[color-mix(in_srgb,var(--color-taupe)_70%,transparent)] md:px-0">
          Created by{" "}
          <a
            href="https://www.thejmstudio.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="-m-2 inline-block p-2 transition-colors hover:text-[var(--color-ink)]"
          >
            thejmstudio
          </a>
          <SiteFooter className="mt-2 block" />
        </div>
      </footer>
    </main>
  );
}
