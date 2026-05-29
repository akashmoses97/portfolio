"use client";

import { useState, useEffect, useRef } from "react";

const CDN = "https://cdn.simpleicons.org";

const palette = [
  "bg-blue-50   text-blue-700   border-blue-100",
  "bg-emerald-50 text-emerald-700 border-emerald-100",
  "bg-slate-100 text-slate-700  border-slate-200",
  "bg-amber-50  text-amber-700  border-amber-100",
  "bg-indigo-50 text-indigo-700 border-indigo-100",
  "bg-rose-50   text-rose-700   border-rose-100",
  "bg-violet-50 text-violet-700 border-violet-100",
];

interface ToolMarkProps {
  logo: string;
  name: string;
  slug?: string;
  index?: number;
}

type ImgState = "local" | "cdn" | "initials";

export default function ToolMark({ logo, name, slug, index = 0 }: ToolMarkProps) {
  return (
    <ToolMarkImage
      key={`${logo}:${slug ?? ""}`}
      logo={logo}
      name={name}
      slug={slug}
      index={index}
    />
  );
}

function ToolMarkImage({ logo, name, slug, index = 0 }: ToolMarkProps) {
  const localSrc = `/logos/skills/${logo}.svg`;
  const cdnSrc = slug ? `${CDN}/${slug}` : null;

  const initial: ImgState = "local";
  const [imgState, setImgState] = useState<ImgState>(initial);
  const [ready, setReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const src = imgState === "local" ? localSrc : imgState === "cdn" ? cdnSrc : null;

  function handleError() {
    if (imgState === "local" && cdnSrc) {
      setImgState("cdn");
      setReady(false);
    } else {
      setImgState("initials");
      setReady(false);
    }
  }

  useEffect(() => {
    if (src && imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setReady(true);
    }
  }, [src]);

  const initials = logo.length <= 5 ? logo.toUpperCase() : name.slice(0, 2).toUpperCase();

  return (
    <span
      className="relative flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-md"
      aria-hidden="true"
      title={name}
    >
      {src && (
        <img
          ref={imgRef}
          src={src}
          alt=""
          width={18}
          height={18}
          className={`absolute inset-0 m-auto h-[18px] w-[18px] rounded-[3px] object-contain p-[1px] transition-opacity duration-150 ${ready ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setReady(true)}
          onError={handleError}
        />
      )}

      {/* Initials — shown until logo is ready */}
      <span
        className={`flex h-full w-full items-center justify-center rounded-md border text-[9px] font-black tracking-tight transition-opacity duration-150 ${palette[index % palette.length]} ${ready ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {initials}
      </span>
    </span>
  );
}
