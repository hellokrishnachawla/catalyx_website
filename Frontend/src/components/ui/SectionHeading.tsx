import React from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
  /** Makes the last word/phrase of the title blue */
  highlightLast?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  titleClassName,
  subtitleClassName,
  className,
  highlightLast = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  const renderTitle = () => {
    if (!highlightLast) return title;
    const words = title.split(" ");
    const last = words.pop();
    return (
      <>
        {words.join(" ")}{" "}
        <span className="text-[#2563eb]">{last}</span>
      </>
    );
  };

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2563eb] bg-[#eff6ff] px-3 py-1 rounded-full w-fit">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold text-[#111827] leading-tight tracking-tight",
          titleClassName
        )}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base text-[#6b7280] leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
