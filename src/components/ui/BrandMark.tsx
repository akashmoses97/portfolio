const brandStyles = {
  jpmc: "bg-[#f3f6fa] text-[#1f2937] border-[#c8d1dc]",
  tamu: "bg-[#fbf3f4] text-[#500000] border-[#d8b8bd]",
  jntu: "bg-[#f4f7fb] text-[#1d4ed8] border-[#c7d2fe]",
  default: "bg-elevated text-accent border-border",
} as const;

const brandText = {
  jpmc: "JPMC",
  tamu: "A&M",
  jntu: "JNTU",
  default: "EDU",
} as const;

export default function BrandMark({
  brand,
  className = "",
}: {
  brand?: string;
  className?: string;
}) {
  const key = (brand && brand in brandStyles ? brand : "default") as keyof typeof brandStyles;

  return (
    <div
      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border text-xs font-black tracking-tight ${brandStyles[key]} ${className}`}
      aria-hidden="true"
    >
      {brandText[key]}
    </div>
  );
}
