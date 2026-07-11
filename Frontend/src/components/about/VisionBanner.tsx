import Image from "next/image";

export default function VisionBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to right, #4361EE 0%, #3F5BE1 76%, #14213D 100%)",
        paddingTop: "55px",
        paddingBottom: "55px",
      }}
    >
      {/* Dot mesh — right 40%, inset top/bottom so it doesn't touch the edges */}
      <div
        className="absolute right-0"
        style={{ width: "40%", top: "10px", bottom: "10px", zIndex: 0 }}
      >
        <Image
          src="/vision-mesh.png"
          alt=""
          fill
          className="object-cover object-left"
          style={{ opacity: 0.6 }}
          aria-hidden="true"
        />
        {/* Fade left edge of dots into the gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #3F5BE1 0%, transparent 40%)" }}
        />
      </div>

      {/* ── DESKTOP content — 160px left gutter matching header logo ── */}
      <div
        className="relative hidden md:block"
        style={{ paddingLeft: "160px", paddingRight: "80px", zIndex: 10 }}
      >
        <div style={{ maxWidth: "840px" }} className="fade-up">
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "17px",
                fontWeight: "600",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.7)",
                borderRadius: "15px",
                padding: "8px 50px",
              }}
            >
              OUR VISION
            </span>
          </div>

          <p
            style={{
              fontSize: "clamp(26px, 2.4vw, 42px)",
              fontWeight: "600",
              color: "#ffffff",
              lineHeight: "1.25",
              marginBottom: "28px",
            }}
          >
            A future where every business can participate,{" "}
            compete and grow in the digital economy{" "}
            regardless of size, resources{" "}
            or technical expertise.
          </p>

          <div style={{ width: "63px", height: "4px", backgroundColor: "#ffffff", borderRadius: "999px" }} />
        </div>
      </div>

      {/* ── MOBILE content — 20px gutters, smaller font ── */}
      <div
        className="relative md:hidden"
        style={{ paddingLeft: "20px", paddingRight: "20px", zIndex: 10 }}
      >
        <div className="fade-up">
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.7)",
                borderRadius: "999px",
                padding: "6px 16px",
              }}
            >
              OUR VISION
            </span>
          </div>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#ffffff",
              lineHeight: "1.35",
              marginBottom: "24px",
            }}
          >
            A future where every business can participate, compete and grow in the digital economy regardless of size, resources or technical expertise.
          </p>

          <div style={{ width: "48px", height: "3px", backgroundColor: "#ffffff", borderRadius: "999px" }} />
        </div>
      </div>
    </section>
  );
}
