import Link from "next/link";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "詩人" },
  { href: "/poems", label: "詩" },
  { href: "/about/gallery", label: "갤러리" },
  { href: "/notice", label: "공지" },
  { href: "/notice#contact", label: "문의" },
];

export function SiteNav({
  variant = "light",
  className = "",
  showHome = true,
}: {
  variant?: "light" | "dark";
  className?: string;
  showHome?: boolean;
}) {
  const textColor = variant === "dark" ? "text-white/80" : "text-[var(--color-taupe)]";
  const hoverColor = variant === "dark" ? "hover:text-white" : "hover:text-[var(--color-ink)]";
  const items = showHome ? navItems : navItems.filter((item) => item.label !== "홈");

  return (
    <nav
      className={`flex flex-wrap items-center gap-4 text-xs tracking-[0.2em] md:gap-6 md:text-sm ${textColor} ${className}`}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`-m-2 p-2 transition-colors ${hoverColor}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
