import React from "react";
import { GradientText } from "./GradientText";

type SectionHeaderProps = {
  label?: string;
  heading: string;
  headingHighlight?: string;
  sub?: string;
  center?: boolean;
  className?: string;
};

export function SectionHeader({
  label,
  heading,
  headingHighlight,
  sub,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-teal mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
        {heading}{" "}
        {headingHighlight && <GradientText>{headingHighlight}</GradientText>}
      </h2>
      {sub && (
        <p className="mt-4 text-muted font-sans text-base md:text-lg max-w-2xl leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
