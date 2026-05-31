import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function ServiceCard({ icon, title, description, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl p-8 border border-brand-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
      style={{
        "--tw-shadow-color": "rgba(43, 158, 124, 0.15)",
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(43,158,124,0.08), rgba(138,198,63,0.08))",
          border: "1.5px solid transparent",
          borderImage: "linear-gradient(135deg, #2B9E7C, #8AC63F) 1",
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white text-2xl"
        style={{ background: "linear-gradient(135deg, #2B9E7C, #8AC63F)" }}
      >
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-dark mb-3">{title}</h3>
      <p className="font-sans text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
