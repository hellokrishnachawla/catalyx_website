import Image from "next/image";
import Card from "@/components/ui/Card";

const DIFFERENCES = [
  {
    id: "all-in-one",
    icon: "/images/icons/diff-all-in-one.svg",
    title: "All-in-One Platform",
    description:
      "Catalogue creation, asset generation, distribution and business insights in one place.",
    accentBg: "#eff6ff",
  },
  {
    id: "built-around",
    icon: "/images/icons/diff-built-around.svg",
    title: "Built Around Your Business",
    description:
      "Whether you sell clothing, furniture, jewellery or other products, Catalyx adapts to your needs.",
    accentBg: "#f0fdf4",
  },
  {
    id: "less-manual",
    icon: "/images/icons/diff-less-manual.svg",
    title: "Less Manual Work",
    description:
      "Reduce the time spent on creating, updating and managing product catalogues.",
    accentBg: "#fffbeb",
  },
  {
    id: "ready-grow",
    icon: "/images/icons/diff-ready-grow.svg",
    title: "Ready to Grow With You",
    description:
      "From a few products to thousands, Catalyx helps you scale without increasing complexity.",
    accentBg: "#f5f3ff",
  },
];

export default function HowDifferent() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-tight tracking-tight">
            How Catalyx Is Different
          </h2>
          <div className="flex flex-col gap-1 max-w-2xl">
            <p className="text-base text-[#6b7280] leading-relaxed">
              Catalyx takes a business-first approach.
            </p>
            <p className="text-base text-[#6b7280] leading-relaxed">
              Every journey begins with a structured onboarding process to understand the business, its products, goals, target customers,
              sales channels and growth ambitions.
            </p>
            <p className="text-base text-[#6b7280] leading-relaxed">
              This enables us to create workflows tailored to each business rather than relying on a one-size-fits-all approach.
            </p>
          </div>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-up delay-200">
          {DIFFERENCES.map((item) => (
            <Card key={item.id} padding="lg" hover className="flex flex-row gap-5 items-start">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.accentBg }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
