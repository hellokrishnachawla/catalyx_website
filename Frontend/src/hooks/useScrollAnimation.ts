"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollAnimation
 * Attaches an IntersectionObserver to a container ref.
 * When the element enters the viewport, it adds the "animate-in" class.
 *
 * Usage:
 *   const ref = useScrollAnimation();
 *   <div ref={ref} className="fade-up">...</div>
 *
 * In globals.css define .fade-up and .fade-up.animate-in transition styles.
 */
export function useScrollAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-in");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
