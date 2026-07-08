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

      {/* ── Desktop bar ─────────────────────────────────────────── */}
      <div
        className="hidden md:flex items-center justify-between h-[102px] w-full"
        style={{ paddingLeft: "160px", paddingRight: "160px" }}
      >
        {/* Logo */}
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

        {/* Nav links + button */}
        <div className="flex items-center gap-14">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[20px] font-normal transition-colors duration-150 relative pb-[3px] whitespace-nowrap",
                pathname === link.href
                  ? "text-[#111827] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2563eb]"
                  : "text-[#4b5563] hover:text-[#111827]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] font-semibold text-[19px] rounded-2xl transition-colors duration-200 whitespace-nowrap"
            style={{ padding: "12px 28px", color: "#ffffff" }}
          >
            Get started
          </Link>
        </div>
      </div>

      {/* ── Mobile bar ──────────────────────────────────────────── */}
      <div className="md:hidden flex items-center justify-between h-[72px]" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Logo — Footer-Logo.svg is the CX icon mark + Catalyx text stacked */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Footer-Logo.svg"
            alt="Catalyx"
            width={48}
            height={47}
            priority
            style={{ height: "47px", width: "auto" }}
          />
        </Link>

        {/* Get started button — visible in mobile bar */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] font-semibold text-[15px] rounded-2xl transition-colors duration-200"
          style={{ padding: "10px 22px", color: "#ffffff" }}
        >
          Get started
        </Link>

        {/* Hamburger / X toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="flex flex-col items-center justify-center w-9 h-9 gap-[5px]"
        >
          {mobileOpen ? (
            /* X icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* 3-line hamburger */
            <>
              <span className="block w-6 h-[2px] bg-[#111827] rounded-full" />
              <span className="block w-6 h-[2px] bg-[#111827] rounded-full" />
              <span className="block w-6 h-[2px] bg-[#111827] rounded-full" />
            </>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown menu ────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col items-center gap-0 pb-8 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "w-full text-center text-[22px] font-medium py-5 transition-colors",
                pathname === link.href
                  ? "text-[#2563eb]"
                  : "text-[#111827] hover:text-[#2563eb]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  );
}
