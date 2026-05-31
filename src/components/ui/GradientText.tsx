import React from "react";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={`gradient-text ${className}`}
      style={{
        background: "linear-gradient(90deg, #2B9E7C, #8AC63F)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </Tag>
  );
}
