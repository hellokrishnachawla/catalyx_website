import Image from "next/image";

const DIFFERENCES = [
  {
    id: "all-in-one",
    icon: "/images/icons/diff-all-in-one.svg",
    title: "All-in-One Platform",
    description: "Catalogue creation, asset generation, distribution and business insights in one place.",
    accentBg: "#eff6ff",
  },
  {
    id: "built-around",
    icon: "/images/icons/diff-built-around.svg",
    title: "Built Around Your Business",
    description: "Whether you sell clothing, furniture, jewellery or other products, Catalyx adapts to your needs.",
    accentBg: "#f0fdf4",
  },
  {
    id: "less-manual",
    icon: "/images/icons/diff-less-manual.svg",
    title: "Less Manual Work",
    description: "Reduce the time spent on creating, updating and managing product catalogues.",
    accentBg: "#fffbeb",
  },
  {
    id: "ready-grow",
    icon: "/images/icons/diff-ready-grow.svg",
    title: "Ready to Grow With You",
    description: "From a few products to thousands, Catalyx helps you scale without increasing complexity.",
    accentBg: "#f5f3ff",
  },
];

export default function HowDifferent() {
  return (
    <section className="section bg-white">

      {/* ── Heading — desktop: 160px gutters; mobile: replaced below ── */}
      <div
        className="hidden md:flex flex-col items-center text-center gap-8 mb-14 fade-up"
        style={{ paddingLeft: "160px", paddingRight: "160px" }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#111827] leading-tight tracking-tight">
          How Catalyx Is Different
        </h2>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-base sm:text-2xl text-[#6b7280] leading-relaxed">
            Catalyx takes a business-first approach.
          </p>
          <p className="text-base sm:text-2xl text-[#6b7280] leading-relaxed">
            Every journey begins with a structured onboarding process to understand the business, its products, goals, target customers,
            sales channels and growth ambitions.
          </p>
          <p className="text-base sm:text-2xl text-[#6b7280] leading-relaxed">
            This enables us to create workflows tailored to each business rather than relying on a one-size-fits-all approach.
          </p>
        </div>
      </div>

      {/* ── Mobile heading — compact, centred, normal gutters ── */}
      <div className="md:hidden flex flex-col items-center text-center gap-4 mb-8 fade-up px-5">
        <h2 className="text-2xl font-bold text-[#111827] leading-tight">
          How Catalyx Is Different
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#6b7280] leading-relaxed">
            Catalyx takes a business-first approach.
          </p>
          <p className="text-sm text-[#6b7280] leading-relaxed">
            Every journey begins with a structured onboarding process to understand the business, its products, goals, target customers, sales channels and growth ambitions.
          </p>
          <p className="text-sm text-[#6b7280] leading-relaxed">
            This enables us to create workflows tailored to each business rather than relying on a one-size-fits-all approach.
          </p>
        </div>
      </div>

      {/* ── Desktop 2×2 grid — 160px gutters ── */}
      <div
        className="hidden md:grid md:grid-cols-2 gap-10 fade-up delay-200"
        style={{ paddingLeft: "180px", paddingRight: "180px", marginTop: "65px"}}
      >
        {DIFFERENCES.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-[#e5e7eb] transition-shadow duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ padding: "50px" }}
          >
            <div className="flex flex-row items-start gap-7">
              <div
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{ width: "90px", height: "90px", backgroundColor: item.accentBg }}
              >
                <Image src={item.icon} alt={item.title} width={50} height={50} className="object-contain" />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-xl sm:text-3xl font-semibold text-[#111827]">{item.title}</h3>
                <p className="text-base sm:text-xl text-[#6b7280] leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile single-column stack ── */}
      <div className="md:hidden" style={{ marginTop: "32px", marginLeft: "16px", marginRight: "16px" }}>
        <div className="grid grid-cols-1 gap-6 fade-up delay-200">
          {DIFFERENCES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#e5e7eb]"
              style={{ padding: "28px" }}
            >
              <div className="flex flex-row items-start gap-5">
                <div
                  className="rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ width: "72px", height: "72px", backgroundColor: item.accentBg }}
                >
                  <Image src={item.icon} alt={item.title} width={36} height={36} className="object-contain" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-semibold text-[#111827]">{item.title}</h3>
                  <p className="text-base text-[#6b7280] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
