// components/HeroSection.tsx
import React from "react";

export type HeroSectionProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode; // can pass an <svg/>
  className?: string;
  center?: boolean;
};

export default function HeroSection({
  title,
  subtitle,
  icon,
  className = "",
  center = true,
}: HeroSectionProps) {
  return (
    <section
      className={`w-full py-32 ${center ? "text-center" : "text-left"} ${className}`}
      aria-labelledby="hero-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {icon ? (
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-icon glass-highlighter"
              aria-hidden
            >
              {icon}
            </div>
          ) : null}

          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"
            style={{ lineHeight: 1.03 }}
          >
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
