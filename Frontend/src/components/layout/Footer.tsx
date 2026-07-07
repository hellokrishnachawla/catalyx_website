import Link from "next/link";
import Image from "next/image";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Getting started", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Chat support", href: "#" },
    ],
  },
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "X (Twitter)", href: "#", icon: <XIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#eef2f8]" style={{ marginTop: "120px" }}>

      {/* ── DESKTOP layout ─────────────────────────────────────── */}
      <div
        className="hidden md:flex items-start justify-between"
        style={{ paddingTop: "64px", paddingBottom: "56px", paddingLeft: "180px", paddingRight: "180px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Footer-Logo.svg"
            alt="Catalyx"
            width={130}
            height={127}
            style={{ width: "130px", height: "auto" }}
          />
        </Link>

        {/* Three nav columns */}
        <div className="flex gap-25">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-5">
              <h4 className="text-[18px] font-bold text-[#111827] tracking-wide">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] text-[#6b7280] hover:text-[#2563eb] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop divider */}
      <div className="hidden md:block" style={{ marginLeft: "160px", marginRight: "160px" }}>
        <div className="border-t border-[#d1d5db]" />
      </div>

      {/* Desktop social icons */}
      <div className="hidden md:flex justify-center gap-5" style={{ paddingTop: "28px", paddingBottom: "48px" }}>
        {SOCIAL_LINKS.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="w-11 h-11 rounded-lg border border-[#c9cdd4] bg-white flex items-center justify-center text-[#6b7280] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors duration-150"
          >
            <span style={{ transform: "scale(1.3)", display: "flex" }}>{s.icon}</span>
          </Link>
        ))}
      </div>

      {/* ── MOBILE layout ──────────────────────────────────────── */}
      <div className="md:hidden flex flex-col" style={{ paddingTop: "48px", paddingBottom: "40px", paddingLeft: "40px", paddingRight: "40px" }}>

        {/* Logo centered */}
        <div className="flex justify-center" style={{ marginBottom: "40px" }}>
          <Link href="/">
            <Image
              src="/Footer-Logo.svg"
              alt="Catalyx"
              width={80}
              height={78}
              style={{ width: "80px", height: "auto" }}
            />
          </Link>
        </div>

        {/* Product + Company in 2 columns */}
        <div className="grid grid-cols-2" style={{ columnGap: "32px", marginBottom: "32px" }}>
          {FOOTER_COLUMNS.slice(0, 2).map((col) => (
            <div key={col.heading} className="flex flex-col" style={{ gap: "12px" }}>
              <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#111827" }}>{col.heading}</h4>
              <ul className="flex flex-col" style={{ gap: "8px" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontSize: "15px", color: "#6b7280" }} className="hover:text-[#2563eb] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support — full width */}
        <div className="flex flex-col" style={{ gap: "12px", marginBottom: "40px" }}>
          <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#111827" }}>{FOOTER_COLUMNS[2].heading}</h4>
          <ul className="flex flex-col" style={{ gap: "8px" }}>
            {FOOTER_COLUMNS[2].links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} style={{ fontSize: "15px", color: "#6b7280" }} className="hover:text-[#2563eb] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #d1d5db", marginBottom: "32px" }} />

        {/* Social icons centered */}
        <div className="flex justify-center" style={{ gap: "16px" }}>
          {SOCIAL_LINKS.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex items-center justify-center text-[#6b7280] hover:text-[#2563eb] hover:border-[#2563eb] transition-colors duration-150"
              style={{ width: "44px", height: "44px", borderRadius: "8px", border: "1px solid #c9cdd4", backgroundColor: "white" }}
            >
              <span style={{ transform: "scale(1.3)", display: "flex" }}>{s.icon}</span>
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}
