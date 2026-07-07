import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalyx — Automate Catalogue. Scale Commerce.",
  description:
    "Catalyx gives product-based businesses the tools to digitise catalogues, manage assets, and sell everywhere — from one platform.",
};

export default function HomePage() {
  return (
    <section
      style={{ padding: "120px 24px", textAlign: "center", maxWidth: 600, margin: "0 auto" }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 12 }}>
        Home Page
      </h1>
      <p style={{ color: "#6b7280" }}>
        This page is assigned to another developer. The About page is live at{" "}
        <a href="/about" style={{ color: "#2563eb", textDecoration: "underline" }}>
          /about
        </a>
        .
      </p>
    </section>
  );
}
