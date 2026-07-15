"use client";

import { useMemo, useRef } from "react";
import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team";

const SCROLL_AMOUNT = 320;

export default function TeamMembers() {
  const founder = teamMembers.find((member) => member.isFounder);

  const members = useMemo(
    () => teamMembers.filter((member) => !member.isFounder),
    []
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    scrollRef.current?.scrollBy({
      left: SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex-1 overflow-hidden">

      {/* Mobile */}
      <div className="lg:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="snap-center flex-shrink-0"
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>

      {/* Desktop */}
<div className="hidden lg:flex items-start gap-10 max-w-[1500px] mx-auto px-10 pt-6">
        {/* Founder */}
        {founder && (
          <div className="flex-shrink-0">
            <TeamCard member={founder} />
          </div>
        )}

        {/* Members */}
        <div className="relative flex-1 flex items-center overflow-hidden">

          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-100 transition"
          >
            ←
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollRef}
            className="mx-14 flex-1 overflow-x-auto overflow-y-hidden hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 w-max py-2">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex-shrink-0"
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-100 transition"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}