export function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[11px] tracking-widest text-[color-mix(in_srgb,var(--color-taupe)_70%,transparent)] ${className}`}
    >
      © 2026 thejmstudio. All rights reserved.
    </p>
  );
}
