import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "96%",
        minHeight: "320px",
        background: "linear-gradient(135deg, #3b5bdb 0%, #2755DA 100%)",
        borderRadius: "15px",
        padding: "40px 36px",
        color: "#ffffff",
        overflow: "hidden",
        margin: "10px"
      }}
    >
      {/* Heading */}
      <div>
        <h2 style={{ fontSize: "24px", fontWeight: 500, lineHeight: 1.35, letterSpacing: "-0.02em", maxWidth: "480px"}}>
          Have a question or want to learn more?
        </h2>
        <p style={{ fontSize: "24px", lineHeight: 1.6, fontWeight: 500 }}>
          Get in touch with our team.
        </p>
      </div>

      {/* Contact details */}
      <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "30px", fontSize: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Phone size={20} />
          <span>+91-9654307204</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Mail size={20} />
          <span>info@officialcatalyx.tech</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <MapPin size={20} />
          <span>Delhi, India</span>
        </div>
      </div>

      {/* Decorative circles */}
      <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
      <div style={{ position: "absolute", bottom: "40px", right: "60px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}
