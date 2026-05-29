"use client";

import { useState } from "react";

const brandImages: Record<string, string> = {
  jpmc: "/logos/jpmc.svg",
  tamu: "/logos/tamu.svg",
  jntu: "/logos/jntu.png",
};

const brandFallback = {
  jpmc:    { style: "bg-white border-gray-200  text-[#117ACA]", text: "JPMC" },
  tamu:    { style: "bg-white border-[#c8102e] text-[#500000]", text: "A&M"  },
  jntu:    { style: "bg-white border-gray-200  text-[#1e3a8a]", text: "JNTU" },
  default: { style: "bg-elevated border-border  text-accent",   text: "EDU"  },
} as const;

export default function BrandMark({
  brand,
  className = "",
}: {
  brand?: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);

  const key = (brand && brand in brandFallback
    ? brand
    : "default") as keyof typeof brandFallback;

  const src = brand ? brandImages[brand] : undefined;
  const { style, text } = brandFallback[key];

  return (
    <div
      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border overflow-hidden ${style} ${className}`}
      aria-hidden="true"
    >
      {src && !imgError ? (
        <img
          src={src}
          alt=""
          width={48}
          height={48}
          className="h-full w-full object-contain p-1.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xs font-black tracking-tight">{text}</span>
      )}
    </div>
  );
}
