"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface SignatureLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "subtle" | "dark";
  external?: boolean;
  className?: string;
  showUnderline?: boolean;
  isButton?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function SignatureLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  showUnderline = true,
  isButton = false,
  onClick,
  size = "md"
}: SignatureLinkProps) {
  const sizeClasses = {
    sm: "text-xs tracking-wider",
    md: "text-sm tracking-wide",
    lg: "text-base tracking-wide"
  }[size];

  const variantClasses = {
    primary: "text-[#111111] hover:text-[#FD5006]",
    secondary: "text-[#6B6B67] hover:text-[#111111]",
    subtle: "text-[#6B6B67] hover:text-[#FD5006]",
    dark: "text-[#F4F4F0] hover:text-[#FD5006]"
  }[variant];

  const content = (
    <span
      className={`group inline-flex items-center gap-2 font-medium font-mono uppercase transition-colors duration-200 relative select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span className="relative pb-0.5">
        {children}
        {showUnderline && (
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FD5006] transition-all duration-300 ease-out group-hover:w-full" />
        )}
      </span>
      {external ? (
        <ArrowUpRight
          size={size === "sm" ? 12 : size === "md" ? 14 : 16}
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FD5006]"
        />
      ) : (
        <ArrowRight
          size={size === "sm" ? 12 : size === "md" ? 14 : 16}
          className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:text-[#FD5006]"
        />
      )}
    </span>
  );

  if (isButton) {
    return (
      <button type="button" onClick={onClick} className="inline-block text-left">
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
