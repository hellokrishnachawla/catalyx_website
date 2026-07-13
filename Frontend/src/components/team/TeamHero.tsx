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
        pt-20
        pb-14
        md:pt-24
        md:pb-20
      "
    >
      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#111827]
        "
      >
        Meet the team
      </h1>

      <p
        className="
          mt-5
          max-w-3xl
          text-base
          md:text-lg
          leading-7
          md:leading-8
          text-[#6B7280]
        "
      >
        The people behind the ideas, technology, and vision that are
        building Catalyx.
      </p>
    </section>
  );
}