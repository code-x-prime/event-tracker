'use client';

import React from "react";

type ButtonProps = {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/40 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]}`;

  const variantClasses = {
    primary:
      "bg-brand-gradient text-white shadow-lg hover:shadow-teal/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white active:scale-[0.98]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
