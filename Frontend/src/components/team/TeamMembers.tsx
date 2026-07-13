"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team";

const AUTO_SCROLL_SPEED = 45;
const RESUME_DELAY = 1500;

export default function TeamMembers() {
  const founder = teamMembers.find((member) => member.isFounder);
  const members = useMemo(
    () => teamMembers.filter((member) => !member.isFounder),
    []
  );

  const carouselItems = useMemo(
    () => [...members, ...members],
    [members]
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const animationRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const stepWidthRef = useRef(300);
  const loopWidthRef = useRef(0);

  const setTrackTransform = (value: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${value}px)`;
  };

  const normalizeOffset = (value: number) => {
    const width = loopWidthRef.current || 1;
    let offset = value;
    while (offset < 0) {
      offset += width;
    }
    while (offset >= width) {
      offset -= width;
    }
    return offset;
  };

  const updateMeasurements = () => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".team-slide");
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;

    if (card) {
      stepWidthRef.current = card.offsetWidth + gap;
    }

    loopWidthRef.current = track.scrollWidth / 2;
    offsetRef.current = normalizeOffset(offsetRef.current);
    setTrackTransform(offsetRef.current);
  };

  useLayoutEffect(() => {
    updateMeasurements();
  }, [carouselItems]);

  useEffect(() => {
    const handleResize = () => updateMeasurements();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pauseAutoScroll = () => {
    pausedRef.current = true;

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  const scrollByStep = (direction: 1 | -1) => {
    offsetRef.current = normalizeOffset(
      offsetRef.current + stepWidthRef.current * direction
    );
    setTrackTransform(offsetRef.current);
    pauseAutoScroll();
  };

  const scrollNext = () => scrollByStep(1);
  const scrollPrev = () => scrollByStep(-1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastFrame = performance.now();

    const animate = (time: number) => {
      const delta = time - lastFrame;
      lastFrame = time;

      if (!pausedRef.current) {
        offsetRef.current = normalizeOffset(
          offsetRef.current + (AUTO_SCROLL_SPEED * delta) / 1000
        );
        setTrackTransform(offsetRef.current);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handlePointerEnter = () => {
      pausedRef.current = true;
    };

    const handlePointerLeave = () => {
      pausedRef.current = false;
    };

    track.addEventListener("pointerenter", handlePointerEnter);
    track.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
      track.removeEventListener("pointerenter", handlePointerEnter);
      track.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section className="pb-24 relative">
      <div className="lg:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="snap-center flex-shrink-0">
            <TeamCard member={member} />
          </div>
        ))}
      </div>

      <div className="hidden lg:flex mx-auto max-w-[1500px] gap-8 px-8 items-start">
        {founder && (
          <div className="flex-shrink-0">
            <TeamCard member={founder} />
          </div>
        )}

        <div className="relative flex-1 overflow-visible">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Scroll team cards left"
              className="pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 transition"
            >
              <span className="text-lg">←</span>
            </button>
          </div>

          <div className="overflow-hidden px-12">
            <div
              ref={trackRef}
              className="flex gap-6 py-2 will-change-transform"
              style={{ transform: "translateX(0px)" }}
            >
              {carouselItems.map((member, index) => (
                <div key={`${member.id}-${index}`} className="team-slide flex-shrink-0">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Scroll team cards right"
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-40 h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 transition"
      >
        <span className="text-lg">→</span>
      </button>
    </section>
  );
}
