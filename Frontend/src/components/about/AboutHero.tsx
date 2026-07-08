import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-white overflow-hidden">
      {/* ---------------- MOBILE ---------------- */}
      <div className="block lg:hidden px-4 pt-10 pb-12">
        <h1
          style={{
            fontSize: "29px",
            fontWeight: 600,
            color: "#111827",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            marginTop : "30px",
            marginLeft: "20px",
            marginRight: "12px"
          }}
        >
          Building the Digital Foundation for Product Businesses
        </h1>

        <div
          style={{
            width: "330px",
            height: "240px",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "#1a3a8f",
            position: "relative",
            marginBottom: "24px",
            marginLeft: "15px"
          }}
        >
          <Image
            src="/about-hero.png.png"
            alt="Catalyx platform illustration"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <p
          style={{
            fontSize: "16px",
            color: "#6b7280",
            lineHeight: "1.75",
            marginBottom: "20px",
            marginLeft: "15px",
            marginRight: "10px"
          }}
        >
          Every successful digital business starts with a strong foundation.
          Yet millions of product-based businesses still struggle with
          fragmented workflows, limited resources and the complexity of
          product digitization. Catalyx exists to simplify that journey and
          make digital commerce more accessible for businesses of every size.
        </p>

        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#6b7280",
            lineHeight: "1.6",
            marginLeft: "15px"
          }}
        >
          Catalyx is building the infrastructure that enables businesses to
          move from product inventory to digital opportunity.
        </p>
      </div>

      {/* ---------------- DESKTOP (YOUR ORIGINAL CODE) ---------------- */}
      <div
        className="hidden lg:flex flex-row items-center"
        style={{
          gap: "48px",
          paddingTop: "60px",
          paddingBottom: "60px",
          paddingLeft: "160px",
          paddingRight: "160px",
        }}
      >
        {/* Left */}
        <div
          className="flex flex-col fade-up"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "62px",
              fontWeight: "600",
              color: "#111827",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Building the Digital Foundation for Product Businesses
          </h1>

          <p
            style={{
              fontSize: "25px",
              color: "#6b7280",
              lineHeight: "1.75",
            }}
          >
            Every successful digital business starts with a strong foundation.
            Yet millions of product-based businesses still struggle with
            fragmented workflows, limited resources and the complexity of
            product digitization. Catalyx exists to simplify that journey and
            make digital commerce more accessible for businesses of every size.
          </p>

          <p
            style={{
              fontSize: "25px",
              fontWeight: "700",
              color: "#6b7280",
              lineHeight: "1.6",
            }}
          >
            Catalyx is building the infrastructure that enables businesses to
            move from product inventory to digital opportunity.
          </p>
        </div>

        {/* Right */}
        <div
          className="fade-up delay-200 flex-shrink-0"
          style={{
            width: "800px",
            height: "700px",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "#1a3a8f",
            position: "relative",
          }}
        >
          <Image
            src="/about-hero.png.png"
            alt="Catalyx platform illustration"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}