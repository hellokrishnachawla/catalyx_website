
const challenges = [
  {
    img: "/images/commerce/Challenge-1.svg",
    title: "Digital Adoption Barriers",
    desc: "Many businesses understand the need to go digital but lack the expertise, resources and guidance to do so effectively.",
  },
  {
    img: "/images/commerce/Challenge-2.svg",
    title: "Fragmented Tool Ecosystem",
    desc: "Businesses rely on multiple disconnected tools to design, edit, publish and manage digital assets.",
  },
  {
    img: "/images/commerce/Challenge-3.svg",
    title: "AI Generation Limitations",
    desc: "Current AI tools generate outputs, but still depend on extensive prompting, validation and manual refinement.",
  },
  {
    img: "/images/commerce/Challenge-4.svg",
    title: "Limited Mass Scalability",
    desc: "Most workflows break down when businesses need to digitize large product inventories.",
  },
  {
    img: "/images/commerce/Challenge-5.svg",
    title: "Lack of Workflow Automation",
    desc: "Existing tools fail businesses needing large-scale product management.",
  },
];

export default function ChallengesSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #4361EE 0%, #14213D 100%)",
        paddingTop: "72px",
        paddingBottom: "80px",
      }}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden lg:block" style={{ paddingLeft: "160px", paddingRight: "160px" }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "600",
            color: "#ffffff",
            lineHeight: "1.2",
            marginBottom: "80px",
            marginTop: "10px",
          }}
        >
          The Challenges of Modern Product Digitization
        </h2>

        {/* Top row — 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          {challenges.slice(0, 3).map((c) => (
            <Card key={c.title} {...c} imgHeight={240} />
          ))}
        </div>

        {/* Bottom row — 2 cards centred */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            maxWidth: "calc(66.66% + 8px)",
            margin: "0 auto",
          }}
        >
          {challenges.slice(3).map((c) => (
            <Card key={c.title} {...c} imgHeight={240} />
          ))}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "32px",
          }}
        >
          The Challenges of Modern Product Digitization
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {challenges.map((c) => (
            <Card key={c.title} {...c} imgHeight={180} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Shared card ─────────────────────────────────────────────────────────── */
function Card({
  img,
  title,
  desc,
  imgHeight,
}: {
  img: string;
  title: string;
  desc: string;
  imgHeight: number;
}) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "16px 16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
      }}
    >
      {/* Illustration */}
      <div
        style={{
          width: "100%",
          height: `${imgHeight}px`,
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "6px",
            display: "block",
          }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "#111827",
          lineHeight: "1.3",
          textAlign: "center",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "16px",
          color: "#6b7280",
          lineHeight: "1.65",
          margin: 0,
          textAlign: "center",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
