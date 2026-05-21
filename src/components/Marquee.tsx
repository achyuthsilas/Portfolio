export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-border py-6 marquee">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl whitespace-nowrap flex items-center gap-16"
          >
            {t}
            <span className="text-primary text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
