import Button from "@/components/ui/Button";

export default function MeetTeamBanner() {
  return (
    <section className="overflow-hidden relative mx-4 sm:mx-8 lg:mx-16 my-12 rounded-2xl" style={{ backgroundColor: "#0f2240" }}>
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-10 py-16">
        <div className="flex flex-col gap-5 max-w-lg fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Meet the people building Catalyx
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Bringing together technology, design and business expertise to simplify
            product digitization.
          </p>
          <div className="mt-2">
            <Button href="/team" variant="outline-white" size="lg">
              View Team →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
