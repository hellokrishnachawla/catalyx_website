"use client";

import Image from "next/image";

export default function OurMission() {
  return (
    <section className="section bg-white">
      <div className="container">

        {/* ── DESKTOP layout — hidden below md ── */}
        <div className="hidden md:flex flex-row items-center gap-16 fade-up">

          {/* Left — Icon in soft blue circle */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div
              className="rounded-full flex items-center justify-center"
              style={{ width: "120px", height: "120px", backgroundColor: "#eff6ff" }}
            >
              <div style={{ width: "100px", height: "100px", position: "relative" }}>
                <Image src="/mission-icon.svg" alt="Mission icon" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Right — Content with left blue border */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              borderLeft: "5px solid #eff6ff",
              paddingLeft: "40px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2563eb",
                border: "1.5px solid #2563eb",
                borderRadius: "15px",
                padding: "10px 50px",
                width: "fit-content",
              }}
            >
              OUR MISSION
            </span>

            <h2
              style={{
                fontSize: "clamp(24px, 44px, 60px)",
                fontWeight: "600",
                color: "#0f172a",
                lineHeight: "1.25",
                maxWidth: "900px",
              }}
            >
              Every business starts with a product.{" "}
              Not every business has access to the tools needed to take that product to market.
            </h2>

            <div style={{ width: "90px", height: "4px", backgroundColor: "#4361EE", borderRadius: "999px" }} />

            <p style={{ fontSize: "24px", color: "#6b7280", lineHeight: "1.7", maxWidth: "900px" }}>
              To make digital commerce accessible to every business with a product worth
              selling by simplifying product digitization, digital identity creation, distribution,
              and business intelligence.
            </p>
          </div>
        </div>

        {/* ── MOBILE layout — hidden at md and above ── */}
        <div
          className="md:hidden flex flex-col gap-4 fade-up"
          style={{
            backgroundColor: "#ffffff",
            border: "1.5px solid #e5e7eb",
            borderRadius: "20px",
            padding: "24px 20px",
            boxShadow: "0 2px 16px rgba(37,99,235,0.06)",
          }}
        >
          {/* Icon — small, top-left aligned */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#eff6ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ width: "36px", height: "36px", position: "relative" }}>
              <Image src="/mission-icon.svg" alt="Mission icon" fill className="object-contain" />
            </div>
          </div>

          {/* "OUR MISSION" pill */}
          <span
            style={{
              display: "inline-block",
              fontSize: "22px",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2563eb",
              border: "1.5px solid #2563eb",
              borderRadius: "999px",
              padding: "6px 18px",
              width: "fit-content",
            }}
          >
            OUR MISSION
          </span>

          {/* Headline */}
          <h2
            style={{
              fontSize: "11px",
              fontWeight: "800",
              color: "#0f172a",
              lineHeight: "1.3",
            }}
          >
            Every business starts with a product. Not every business has access to the tools needed to take that product to market.
          </h2>

          {/* Blue accent line */}
          <div style={{ width: "48px", height: "3px", backgroundColor: "#2563eb", borderRadius: "999px" }} />

          {/* Body */}
          <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7" }}>
            To make digital commerce accessible to every business with a product worth
            selling by simplifying product digitization, digital identity creation, distribution
            and business intelligence.
          </p>
        </div>

      </div>
    </section>
  );
}
