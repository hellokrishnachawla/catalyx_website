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
  { label: "Facebook", href: "https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61591416034611&sk=about", icon: <FacebookIcon /> },
  { label: "X (Twitter)", href: "https://x.com/catalyxtech", icon: <XIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/catalyx.tech?igsh=cXBseWFrdXBwbjYw&utm_source=qr", icon: <InstagramIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/catalyxofficial/", icon: <LinkedInIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#eef2f8]" style={{marginTop : "120px"}}>
      {/* Top section: logo left, columns right */}
      <div
        className="flex flex-col md:flex-row items-start justify-between"
        style={{ paddingTop: "64px", paddingBottom: "56px", paddingLeft: "180px", paddingRight: "180px" }}
      >
        {/* Brand — Footer-Logo.svg already includes the CX icon + "Catalyx" wordmark */}
        <Link href="/" className="flex-shrink-0 mb-10 md:mb-0">
          <Image
            src="/Footer-Logo.svg"
            alt="Catalyx"
            width={130}
            height={127}
            style={{ width: "130px", height: "auto" }}
          />
        </Link>

        {/* Three nav columns grouped to the right */}
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

      {/* Divider */}
      <div style={{ marginLeft: "160px", marginRight: "160px" }}>
        <div className="border-t border-[#d1d5db]" />
      </div>

      {/* Social icons — centered */}
      <div className="flex justify-center gap-5" style={{ paddingTop: "28px", paddingBottom: "48px" }}>
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
    </footer>
  );
}
