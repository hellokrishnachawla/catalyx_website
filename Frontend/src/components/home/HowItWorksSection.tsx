"use client";

import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Business discovery",
    desc: "We understand your business, products, goals, customers, channels and challenges to design a personalized commerce journey.",
    icon: "/images/how-it-works/discovery.png",
    side: "left" as const,
  },
  {
    num: "02",
    title: "Brand Identity Setup",
    desc: "We create and standardize your brand identity, including logos, catalogue styles, templates, and visual assets for a consistent digital presence.",
    icon: "/images/how-it-works/brand.png",
    side: "right" as const,
  },
  {
    num: "03",
    title: "Platform Integration",
    desc: "We integrate your preferred sales, marketing, and commerce channels into one unified ecosystem, enabling seamless content distribution across your business.",
    icon: "/images/how-it-works/integration.png",
    side: "left" as const,
  },
  {
    num: "04",
    title: "Template & Asset Setup",
    desc: "We build your catalogue templates, content frameworks, and digital asset structure – designed for scalability and future automation.",
    icon: "/images/how-it-works/tempelate.png",
    side: "right" as const,
  },
  {
    num: "05",
    title: "Product Upload",
    desc: "Simply upload your product photos and essential product information. No prompting. No editing. No designing. Catalyx handles the rest.",
    icon: "/images/how-it-works/upload.png",
    side: "left" as const,
  },
  {
    num: "06",
    title: "Catalogue & Content Generation",
    desc: "We transform your products into catalogue designs, product listings, promotional creatives, PDFs, and platform-specific digital assets automatically and at scale.",
    icon: "/images/how-it-works/catalogue.png",
    side: "right" as const,
  },
  {
    num: "07",
    title: "Smart Distribution",
    desc: "We automatically distribute your digital assets across all connected channels, helping you reach customers everywhere with minimal effort.",
    icon: "/images/how-it-works/distribution.png",
    side: "left" as const,
  },
  {
    num: "08",
    title: "Business Intelligence",
    desc: "We provide insights into product performance, customer engagement, demand trends and market opportunities to help you make smarter business decisions and grow.",
    icon: "/images/how-it-works/intelligence.png",
    side: "right" as const,
  },
];

// Layout constants (px)
const CARD_W      = 500;
const CARD_H      = 170;   // matches the taller card padding (50px top+bottom + content)
const ROW_H       = 200;   // height of each row in the timeline
const CIRCLE      = 100;    // icon circle diameter
const DOT         = 14;    // small connector dot diameter
const BLUE        = "#3b82f6";

export default function HowItWorksSection() {
  const totalH = steps.length * ROW_H;

  return (
    <section style={{ backgroundColor: "#eef2f9", paddingTop: "40px", paddingBottom: "96px" }}>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px", padding: "0 24px" }}>
        <h2 style={{ fontSize: "clamp(28px,2.5vw,48px)", fontWeight: 600, color: "#111827", lineHeight: 1.2, marginBottom: 16 }}>
          How Catalyx Works
        </h2>
        <p style={{fontSize: 20, color: "#6b7280", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
          Follow the complete journey from product upload to ready-to-publish digital assets through one connected workflow.
        </p>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block" style={{ padding: "0 80px" }}>
        {/*
          We render a single relative container whose width we know.
          We use a CSS custom property trick: the container is 100% wide,
          and we do all positioning with percentages or by centering the
          circle column at exactly 50%.

          Strategy:
            - Vertical blue line: absolute, left=50%, width=2px, full height
            - Each row: absolute block, top = i * ROW_H
              - Icon circle: absolute, left = 50% - CIRCLE/2, top centred in row
              - Card: absolute, left or right column
              - Horizontal line: from circle edge to card edge
              - Dot: at the card-side end of the horizontal line
        */}
        <div style={{ position: "relative", height: totalH }}>

          {/* Continuous vertical line — runs from centre of first circle to centre of last */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: ROW_H / 2,
            bottom: ROW_H / 2,
            width: 4,
            backgroundColor: BLUE,
            transform: "translateX(-50%)",
            zIndex: 0,
          }} />

          {steps.map((step, i) => {
            const rowTop    = i * ROW_H;
            const circleTop = rowTop + (ROW_H - CIRCLE) / 2;   // centre circle in row
            const cardTop   = rowTop + (ROW_H - CARD_H) / 2;    // centre card in row
            const isLeft    = step.side === "left";

            return (
              <div key={step.num}>

                {/* Icon circle */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: circleTop,
                  transform: "translateX(-50%)",
                  width: CIRCLE,
                  height: CIRCLE,
                  borderRadius: "50%",
                  border: `3px solid ${BLUE}`,
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}>
                  <Image src={step.icon} alt={step.title} width={48} height={48} style={{ objectFit: "contain" }} />
                </div>

                {isLeft ? (
                  <>
                    {/* LEFT card */}
                    <div style={{
                      position: "absolute",
                      right: "calc(50% + 44px + 32px)",   // 44px = half circle, 32px gap
                      top: cardTop,
                      width: CARD_W,
                      zIndex: 2,
                    }}>
                      <StepCard num={step.num} title={step.title} desc={step.desc} />
                    </div>

                    {/* Horizontal line: from right edge of card to left edge of circle */}
                    <div style={{
                      position: "absolute",
                      right: "calc(50% + 44px)",          // ends at left edge of circle
                      top: rowTop + ROW_H / 2 - 1,
                      width: 32,                          // 32px gap
                      height: 3,
                      backgroundColor: BLUE,
                      zIndex: 1,
                    }} />

                    {/* Blue dot — at the right edge of the card (where line meets card) */}
                    <div style={{
                      position: "absolute",
                      right: `calc(50% + 44px + 32px - ${DOT / 2}px)`,
                      top: rowTop + ROW_H / 2 - DOT / 2,
                      width: DOT,
                      height: DOT,
                      borderRadius: "50%",
                      backgroundColor: BLUE,
                      zIndex: 3,
                    }} />
                  </>
                ) : (
                  <>
                    {/* RIGHT card */}
                    <div style={{
                      position: "absolute",
                      left: "calc(50% + 44px + 32px)",
                      top: cardTop,
                      width: CARD_W,
                      zIndex: 2,
                    }}>
                      <StepCard num={step.num} title={step.title} desc={step.desc} />
                    </div>

                    {/* Horizontal line: from right edge of circle to left edge of card */}
                    <div style={{
                      position: "absolute",
                      left: "calc(50% + 44px)",
                      top: rowTop + ROW_H / 2 - 1,
                      width: 32,
                      height: 3,
                      backgroundColor: BLUE,
                      zIndex: 1,
                    }} />

                    {/* Blue dot — at the left edge of the card */}
                    <div style={{
                      position: "absolute",
                      left: `calc(50% + 44px + 32px - ${DOT / 2}px)`,
                      top: rowTop + ROW_H / 2 - DOT / 2,
                      width: DOT,
                      height: DOT,
                      borderRadius: "50%",
                      backgroundColor: BLUE,
                      zIndex: 3,
                    }} />
                  </>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden" style={{ padding: "0 20px" }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ display: "flex", alignItems: "stretch" }}>

            {/* Left column: circle + vertical line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 56 }}>
              {/* Icon circle */}
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: `2px solid ${BLUE}`, backgroundColor: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, zIndex: 2,
              }}>
                <Image src={step.icon} alt={step.title} width={30} height={30} style={{ objectFit: "contain" }} />
              </div>
              {/* Vertical line stretches to fill the card height */}
              {i < steps.length - 1 && (
                <div style={{ width: 2, flex: 1, backgroundColor: BLUE }} />
              )}
            </div>

            {/* Right: horizontal connector + dot + card, padded to align with circle centre */}
            <div style={{ display: "flex", alignItems: "flex-start", paddingTop: "15px", paddingBottom: i < steps.length - 1 ? "24px" : "0", flex: 1 }}>
              {/* Horizontal line */}
              <div style={{ height: 2, width: 14, backgroundColor: BLUE, flexShrink: 0, marginTop: 13 }} />
              {/* Blue dot */}
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                backgroundColor: BLUE, flexShrink: 0, marginTop: 9,
              }} />
              {/* Card */}
              <div style={{
                flex: 1,
                backgroundColor: "#fff", borderRadius: 14,
                padding: "14px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: BLUE }}>{step.num}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{step.title}</span>
                </div>
                <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: "50px 44px",
      width: "100%",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
        <span style={{ fontSize: 35, fontWeight: 600, color: BLUE, lineHeight: 1 }}>{num}</span>
        <span style={{ fontSize: 25, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>{title}</span>
      </div>
      <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.65, margin: 0, maxWidth: "360px" }}>{desc}</p>
    </div>
  );
}
