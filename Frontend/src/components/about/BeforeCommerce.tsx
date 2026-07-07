import Image from "next/image";

const STEPS = [
  {
    number: "01",
    label: "Product",
    image: "/images/commerce/product.png",
    alt: "Product illustration — chair with plant and box",
    description:
      "Every journey starts with a product.",
  },
  {
    number: "02",
    label: "Digital identity",
    image: "/images/commerce/identity.png",
    alt: "Digital identity illustration — product catalogue card",
    description:
      "We create a unique digital identity for each product – structured, consistent and ready for every channel",
  },
  {
    number: "03",
    label: "Digital Assets",
    image: "/images/commerce/digital-assets.png",
    alt: "Digital assets illustration — file types viewer",
    description:
      "We build rich, high-quality digital assets – images, videos, documents and copy that bring your product to life.",
  },
  {
    number: "04",
    label: "Commerce",
    image: "/images/commerce/storefronts.png",
    alt: "Storefronts illustration — website and marketplace channels",
    description:
      "Your product is now complete, and commerce-ready prepared to reach customers everywhere.",
  },
];

export default function BeforeCommerce() {
  return (
    <section className="section bg-[#f0f4fa]">
      <div className="container">
        {/* Centered Heading Block */}
        <div className="flex flex-col items-center text-center gap-5 mb-12 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-tight tracking-tight">
            Before Commerce Begins
          </h2>
          <p className="text-base text-[#6b7280] leading-relaxed max-w-2xl">
            Most digital platforms begin where selling starts. Catalyx begins much earlier.
          </p>
          <p className="text-base text-[#6b7280] leading-relaxed max-w-3xl">
            Before products can be marketed online, listed on marketplaces, showcased on websites, or shared across digital
            channels, businesses first need a strong digital foundation. They need structured product information, professional
            digital assets and connected workflows that enable products to be presented consistently and at scale.
          </p>
          <p className="text-base text-[#6b7280] leading-relaxed max-w-3xl">
            While many platforms help businesses sell online, Catalyx focuses on the stage before commerce – helping businesses
            transform products into commerce-ready digital assets and build the foundation required for long-term digital growth.
          </p>
        </div>

        {/* White card with 4-step horizontal flow */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 sm:p-12 fade-up delay-200">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-start">
            {STEPS.map((step, index) => (
              <div key={step.number} className="flex items-start gap-0">
                {/* Step column */}
                <div className="flex flex-col items-center gap-4 flex-1">
                  {/* Number + Label */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white text-sm font-bold flex items-center justify-center shadow-sm">
                      {step.number}
                    </div>
                    <span className="text-sm font-semibold text-[#111827] text-center">
                      {step.label}
                    </span>
                    {/* Blue underline */}
                    <div className="w-8 h-0.5 bg-[#2563eb] rounded-full" />
                  </div>

                  {/* Image */}
                  <div className="relative w-full aspect-square max-w-[160px]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#6b7280] leading-relaxed text-center px-2">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps */}
                {index < STEPS.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center pt-8 flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#9ca3af]"
                    >
                      <path
                        d="M5 12h14M14 7l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
