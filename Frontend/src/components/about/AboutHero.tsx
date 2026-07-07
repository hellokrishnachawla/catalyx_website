import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-6 fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] leading-tight tracking-tight">
              Building the Digital Foundation for Product Businesses
            </h1>
            <p className="text-base text-[#6b7280] leading-relaxed">
              Every successful digital business starts with a strong foundation.
              Yet millions of product-based businesses still struggle with
              fragmented workflows, limited resources and the complexity of
              product digitization. Catalyx exists to simplify that journey and
              make digital commerce more accessible for businesses of every size.
            </p>
            <p className="text-base font-semibold text-[#111827] leading-relaxed">
              Catalyx is building the infrastructure that enables businesses to
              move from product inventory to digital opportunity.
            </p>
          </div>

          {/* Right — Illustration */}
          <div className="flex justify-center lg:justify-end fade-up delay-200">
            <div
              className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#1a3a8f" }}
            >
              <Image
                src="/about-hero.png.png"
                alt="Catalyx platform illustration — 3D network cube"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
