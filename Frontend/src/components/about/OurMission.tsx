import Image from "next/image";

export default function OurMission() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12 fade-up">
          {/* Left — Icon */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="w-24 h-24 relative">
              <Image
                src="/mission-icon.svg"
                alt="Mission icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-5 border-l-4 border-[#2563eb] pl-8">
            {/* Tag */}
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#111827] border border-[#111827] px-3 py-1 rounded-full w-fit">
              OUR MISSION
            </span>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] leading-snug max-w-xl">
              Every business starts with a product.{" "}
              Not every business has access to the tools needed to take that product to market.
            </h2>

            {/* Blue underline */}
            <div className="w-10 h-0.5 bg-[#2563eb] rounded-full" />

            {/* Body */}
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-lg">
              To make digital commerce accessible to every business with a product worth
              selling by simplifying product digitization, digital identity creation, distribution,
              and business intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
