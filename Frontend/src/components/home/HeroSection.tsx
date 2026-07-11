"use client";

export default function HeroSection() {
  return (
    <section className="bg-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

      {/* ── DESKTOP layout ── */}
      <div
        className="hidden md:flex flex-row items-center gap-16"
        style={{ paddingLeft: "120px", paddingRight: "120px" }}
      >
        {/* Left — text content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Headline */}
          <div>
            <h1
              style={{
                fontSize: "clamp(40px, 3.6vw, 72px)",
                fontWeight: "700",
                color: "#0f172a",
                lineHeight: "1.1",
                marginBottom: "8px",
              }}
            >
              Automate Catalogue.
            </h1>
            <h1
              style={{
                fontSize: "clamp(40px, 3.6vw, 72px)",
                fontWeight: "700",
                color: "#2563eb",
                lineHeight: "1.1",
              }}
            >
              Scale Commerce.
            </h1>
          </div>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px", maxWidth: "500px" }}>
            <p style={{ fontSize: "20px", color: "#6b7280", lineHeight: "1.5", maxWidth: "700px" }}>
              Millions of businesses and aspiring entrepreneurs have products with the potential to
              succeed, yet many lack the tools and infrastructure required to transform those products
              into market-ready digital assets.
            </p>
            <p style={{ fontSize: "20px", color: "#6b7280", lineHeight: "1.5", maxWidth: "700px" }}>
              Catalyx helps you bridge that gap. From product digitization and digital identity
              creation to content generation, distribution, and business intelligence, Catalyx
              provides the foundation required to take products from inventory to opportunity.
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#6b7280",
                lineHeight: "1.6",
                maxWidth: "700px",
              }}
            >
              Our mission is simple: make product digitization accessible to every business with a
              product worth selling.
            </p>
          </div>
        </div>

        {/* Right — video placeholder */}
        <div
          className="flex-shrink-0"
          style={{
            width: "48%",
            aspectRatio: "14/12.5",
            backgroundColor: "#eef2f9",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Play button */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "rgba(100, 116, 160, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {/* Triangle play icon */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: "16px solid #64748b",
                marginLeft: "4px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div
        className="md:hidden flex flex-col gap-8"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        {/* Headline */}
        <div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#0f172a",
              lineHeight: "1.15",
              marginBottom: "4px",
            }}
          >
            Automate Catalogue.
          </h1>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#2563eb",
              lineHeight: "1.15",
            }}
          >
            Scale Commerce.
          </h1>
        </div>

        {/* Video placeholder */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4/3",
            backgroundColor: "#eef2f9",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(100, 116, 160, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "9px solid transparent",
                borderBottom: "9px solid transparent",
                borderLeft: "14px solid #64748b",
                marginLeft: "3px",
              }}
            />
          </div>
        </div>

        {/* Body text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7", textAlign: "center" }}>
            Millions of businesses and aspiring entrepreneurs have products with the potential to
            succeed, yet many lack the tools and infrastructure required to transform those products
            into market-ready digital assets.
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7", textAlign: "center" }}>
            Catalyx helps you bridge that gap. From product digitization and digital identity
            creation to content generation, distribution, and business intelligence, Catalyx
            provides the foundation required to take products from inventory to opportunity.
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#0f172a",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            Our mission is simple: make product digitization accessible to every business with a
            product worth selling.
          </p>
        </div>
      </div>

    </section>
  );
}
