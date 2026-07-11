import Image from "next/image";
import React from "react";

const STEPS = [
  {
    number: "01",
    label: "Product",
    image: "/images/commerce/storefronts.png",
    alt: "Product illustration — chair with plant and box",
    description: "Every journey starts with a product.",
  },
  {
    number: "02",
    label: "Digital identity",
    image: "/images/commerce/digital-assets.png",
    alt: "Digital identity illustration — product catalogue card",
    description:
      "We create a unique digital identity for each product – structured, consistent and ready for every channel",
  },
  {
    number: "03",
    label: "Digital Assets",
    image: "/images/commerce/identity.png",
    alt: "Digital assets illustration — file types viewer",
    description:
      "We build rich, high-quality digital assets – images, videos, documents and copy that bring your product to life.",
  },
  {
    number: "04",
    label: "Commerce",
    image: "/images/commerce/product.png",
    alt: "Storefronts illustration — website and marketplace channels",
    description:
      "Your product is now complete, and commerce-ready prepared to reach customers everywhere.",
  },
];

export default function BeforeCommerce() {
  return (
    <section className="section bg-[#f0f4fa]">

      {/* ── Text block ── */}
      <div className="container">
        <div className="flex flex-col items-center text-center gap-8 mb-16 fade-up">
          <h2 className="text-4xl sm:text-4xl font-semibold text-[#111827] leading-tight tracking-tight">
            Before Commerce Begins
          </h2>
          <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-4xl">
            Most digital platforms begin where selling starts. Catalyx begins much earlier.
          </p>
          <p className="text-base sm:text-xl text-[#6b7280] leading-relaxed max-w-8xl">
            Before products can be marketed online, listed on marketplaces, showcased on
            websites, or shared across digital channels, businesses first need a strong
            digital foundation. They need structured product information, professional
            digital assets and connected workflows that enable products to be presented
            consistently and at scale.
          </p>
          <p className="text-base sm:text-xl text-[#6b7280] leading-relaxed max-w-8xl">
            While many platforms help businesses sell online, Catalyx focuses on the stage
            before commerce – helping businesses transform products into commerce-ready
            digital assets and build the foundation required for long-term digital growth.
          </p>
        </div>
      </div>

      {/* ── White card ──
          paddingLeft/Right matches header's exact 160px gutter so the card
          edges line up with the Catalyx logo (left) and Get started button (right).
          paddingTop gives the overflowing number badges room to breathe.
      ── */}
      <div
        className="fade-up delay-200 w-full hidden md:block"
        style={{ paddingLeft: "120px", paddingRight: "120px", marginTop: "70px" }}
      >
        <div
          className="bg-white rounded-2xl border border-[#e5e7eb]"
          style={{ padding: "48px 40px 48px 40px" }}
        >
          {/* 4-column grid: [step] [arrow] [step] [arrow] [step] [arrow] [step] */}
          <div className="grid grid-cols-[1fr_52px_1fr_52px_1fr_52px_1fr] items-start">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* ── Step column ── */}
                <div className="flex flex-col items-center" style={{ gap: "16px" }}>
                  {/* Number badge */}
                  <div
                    className="rounded-full bg-[#2563eb] text-white font-bold flex items-center justify-center shadow-sm flex-shrink-0"
                    style={{ width: "50px", height: "50px", fontSize: "18px" }}
                  >
                    {step.number}
                  </div>

                  {/* Label */}
                  <span
                    className="font-bold text-[#111827] text-center"
                    style={{ fontSize: "20px" }}
                  >
                    {step.label}
                  </span>

                  {/* Blue underline */}
                  <div className="w-10 rounded-full bg-[#2563eb]" style={{ height: "3px", marginTop: "-8px" }} />

                  {/* Image — tall enough to match the reference */}
                  <div
                    className="relative w-full"
                    style={{ height: "270px" }}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#6b7280] leading-relaxed text-center"
                    style={{ fontSize: "16.5px", marginTop: "12px" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* ── Arrow ── sits in its own 52px column, vertically centered on the image */}
                {index < STEPS.length - 1 && (
                  <div
                    className="flex items-center justify-center"
                    style={{ paddingTop: "300px" }} /* ~top of image row */
                  >
                    <svg
                      width="100"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#9ca3af]"
                    >
                      <path
                        d="M5 12h14M14 7l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE: vertical stack ── */}
      <div
        className="md:hidden fade-up delay-200"
        style={{ marginLeft: "16px", marginRight: "16px", marginTop: "32px" }}
      >
        <div
          className="bg-white rounded-2xl border border-[#e5e7eb]"
          style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "32px", paddingBottom: "32px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {STEPS.map((step, index) => (
              <div key={step.number} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Number badge + label — centred */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                  <div
                    className="rounded-full bg-[#2563eb] text-white font-bold flex-shrink-0"
                    style={{
                      width: "44px", height: "44px", fontSize: "15px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
                    }}
                  >
                    {step.number}
                  </div>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>
                    {step.label}
                  </span>
                </div>

                {/* Image (left margin) + description (right margin) */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: "140px", height: "140px", marginLeft: "8px" }}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p
                    style={{
                      flex: 1,
                      fontSize: "14px",
                      color: "#6b7280",
                      lineHeight: "1.6",
                      marginRight: "8px"
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Down arrow between steps */}
                {index < STEPS.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#9ca3af]">
                      <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
