import Image from "next/image";
import Link from "next/link";

type Corner = "tl" | "tr" | "bl" | "br";

const badgePosition: Record<Corner, string> = {
  tl: "top-6 left-6 md:top-8 md:left-8",
  tr: "top-6 right-6 md:top-8 md:right-8",
  bl: "bottom-6 left-6 md:bottom-8 md:left-8",
  br: "bottom-6 right-6 md:bottom-8 md:right-8",
};

export function Quadrant({
  href,
  hanja,
  label,
  color,
  badgeCorner,
  image,
}: {
  href: string;
  hanja: string;
  label: string;
  color: "spring" | "summer" | "autumn" | "winter";
  badgeCorner: Corner;
  image?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${label} 시 목록으로 이동`}
      className="group relative block h-full w-full overflow-hidden"
    >
      {image ? (
        <Image
          src={image}
          alt={`${label} 배경 이미지`}
          fill
          priority
          sizes="50vw"
          className="h-full w-full object-cover object-left transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ objectPosition: "left center" }}
        />
      ) : (
        <div
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, var(--color-${color}) 32%, var(--color-ivory-end)) 0%, var(--color-ivory-end) 100%)`,
          }}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      <span
        className={`absolute ${badgePosition[badgeCorner]} flex h-11 w-11 items-center justify-center rounded-full border text-lg font-medium backdrop-blur-sm md:h-12 md:w-12 md:text-xl`}
        style={{
          borderColor: `var(--color-${color})`,
          color: `var(--color-${color})`,
          background: "color-mix(in srgb, var(--color-ivory-end) 70%, transparent)",
        }}
      >
        {hanja}
      </span>
    </Link>
  );
}
