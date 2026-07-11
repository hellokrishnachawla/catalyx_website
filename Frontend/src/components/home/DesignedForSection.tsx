const businesses = [
  { label: "Retailers",              img: "/images/product-based-buisness/Retailers.png" },
  { label: "Manufacturers",          img: "/images/product-based-buisness/Manufaturers.png" },
  { label: "Wholesellers",           img: "/images/product-based-buisness/Wholesellers.png" },
  { label: "D2C Brands",             img: "/images/product-based-buisness/D2CBrands.png" },
  { label: "Resellers",              img: "/images/product-based-buisness/Resellers.png" },
  { label: "Aspiring\nEntrepreneur", img: "/images/product-based-buisness/Entrepreneur.png" },
];

export default function DesignedForSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "80px", paddingBottom: "25px" }}>

      <style>{`
        .designed-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding-left: 20px;
          padding-right: 20px;
        }
        .designed-card {
          max-width: 100%;
          flex: unset;
        }
        @media (min-width: 768px) {
          .designed-grid {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            gap: 20px;
            padding-left: 120px;
            padding-right: 120px;
          }
          .designed-card {
            flex: 1 1 0;
            min-width: 0;
            max-width: none;
          }
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px", padding: "0 24px" }}>
        <h2 style={{
          fontSize: "clamp(26px, 2.6vw, 44px)",
          fontWeight: "600",
          color: "#111827",
          lineHeight: "1.2",
          marginBottom: "16px",
        }}>
          Designed for Product‑Based Businesses
        </h2>
        <p style={{
          fontSize: "20px",
          color: "#6b7280",
          lineHeight: "1.6",
          maxWidth: "580px",
          margin: "0 auto",
        }}>
          Helping inventory‑driven businesses transform products into ready‑to‑publish digital assets.
        </p>
      </div>

      {/* Cards — single element, responsive via CSS */}
      <div className="designed-grid">
        {businesses.map((b) => (
          <div
            key={b.label}
            className="designed-card"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "28px 16px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
            }}
          >
            <img
              src={b.img}
              alt={b.label}
              style={{ width: "70px", height: "70px", objectFit: "contain" }}
            />
            <span style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "#111827",
              textAlign: "center",
              lineHeight: "1.4",
              whiteSpace: "pre-line",
            }}>
              {b.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
