"use client";

import React from "react";
import Image from "next/image";

interface ForgeSysLogoProps {
  className?: string;
  height?: number;
  width?: number;
  showText?: boolean;
  iconOnly?: boolean;
  theme?: "dark" | "light" | "auto";
}

export function ForgeSysMark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 relative ${className}`}
      style={{ width: size, height: Math.round((size * 124) / 110) }}
    >
      <Image
        src="/brand/forgesys-mark-transparent.png"
        alt="ForgeSys Mark"
        width={size}
        height={Math.round((size * 124) / 110)}
        className="w-full h-full object-contain"
        priority
      />
    </span>
  );
}

export default function ForgeSysLogo({
  className = "",
  height = 28,
  iconOnly = false,
  theme = "light",
}: ForgeSysLogoProps) {
  if (iconOnly) {
    return <ForgeSysMark size={height} className={className} />;
  }

  // Calculate proportional width: original is 469 x 113 (~4.15 aspect ratio)
  const calcWidth = Math.round(height * 4.15);
  const logoSrc =
    theme === "dark"
      ? "/brand/forgesys-logo-white.png"
      : "/brand/forgesys-logo.png";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="ForgeSys"
        width={calcWidth}
        height={height}
        style={{ height: `${height}px`, width: "auto" }}
        className="object-contain"
        priority
      />
    </div>
  );
}
