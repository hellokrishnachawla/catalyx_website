export default function VisionBanner() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #1a3a8f 0%, #2563eb 100%)" }}>
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="max-w-3xl fade-up">
          {/* Tag */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white border border-white/60 px-3 py-1 rounded-full w-fit mb-6">
            OUR VISION
          </span>

          {/* Vision statement */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
            A future where every business can participate,{" "}
            compete and grow in the digital economy{" "}
            regardless of size, resources{" "}
            or technical expertise.
          </p>

          {/* Blue underline accent */}
          <div className="mt-6 w-10 h-0.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
