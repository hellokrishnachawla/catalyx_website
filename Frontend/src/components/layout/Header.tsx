"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e7eb]">
      {/*
        Header inner: 40px left/right padding, logo on far left,
        nav + button grouped on the right with equal spacing.
      */}
      <div
        className="flex items-center justify-between h-[102px] w-full"
        style={{ paddingLeft: "160px", paddingRight: "160px" }}
      >
        {/* Logo — SVG contains the full "CX Catalyx" wordmark */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Catalyx"
            width={180}
            height={48}
            priority
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        {/* Desktop: nav links + button on the right, all same gap */}
        <div className="hidden md:flex items-center gap-15">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[18px] font-normal transition-colors duration-150 relative pb-[3px] whitespace-nowrap",
                pathname === link.href
                  ? "text-[#111827] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2563eb]"
                  : "text-[#4b5563] hover:text-[#111827]"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Get started button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] font-semibold text-[17px] rounded-2xl transition-colors duration-200 whitespace-nowrap"
            style={{ padding: "12px 28px", color: "#ffffff" }}
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#f3f4f6] transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-5 h-0.5 bg-[#374151] transition-transform duration-300", mobileOpen && "translate-y-2 rotate-45")} />
          <span className={cn("block w-5 h-0.5 bg-[#374151] transition-opacity duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("block w-5 h-0.5 bg-[#374151] transition-transform duration-300", mobileOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#e5e7eb]",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col py-4 gap-1 px-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-[#2563eb] bg-[#eff6ff]"
                  : "text-[#6b7280] hover:text-[#111827] hover:bg-[#f9fafb]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#e5e7eb] mt-2 px-3">
            <Link
              href="/contact"
              className="flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-sm rounded-4xl transition-colors duration-200 w-full py-2.5"
            >
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
