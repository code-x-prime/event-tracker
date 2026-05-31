import React from "react";
import { GradientText } from "./GradientText";

type StatCounterProps = {
  number: string;
  label: string;
  className?: string;
};

export function StatCounter({ number, label, className = "" }: StatCounterProps) {
  return (
    <div className={`text-center ${className}`}>
      <GradientText className="font-display text-5xl md:text-6xl font-bold block">
        {number}
      </GradientText>
      <p className="font-sans text-sm uppercase tracking-[0.15em] text-muted mt-2">{label}</p>
    </div>
  );
}
