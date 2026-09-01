export function TimelineSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] py-10 first:border-t-0">
      <h2 className="text-sm tracking-[0.3em] text-[var(--color-taupe)]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function TimelineRow({
  date,
  children,
}: {
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 py-2.5 text-[15px] leading-relaxed md:text-base">
      <span className="w-20 shrink-0 tabular-nums text-[var(--color-taupe)]">
        {date}
      </span>
      <span>{children}</span>
    </div>
  );
}
