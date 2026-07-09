export default function TeamHero() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        pt-24
        pb-20
      "
    >
      <h1
        className="
          text-5xl
          font-bold
          text-[#111827]
        "
      >
        Meet the Team
      </h1>

      <p
        className="
          mt-6
          max-w-3xl
          text-lg
          text-[#6B7280]
          leading-8
        "
      >
        The people behind the ideas, technology and vision that are
        building Catalyx.
      </p>
    </section>
  );
}