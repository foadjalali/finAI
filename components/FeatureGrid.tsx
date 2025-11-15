// components/FeatureGrid.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Bot, ChartLine, Wallet, BellRing, Sparkles, Gauge } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  image: { src: string; alt: string };
};

const features: Feature[] = [
  { id: "f1", title: "AI Financial Chatbot", subtitle: "24/7 Expert Support", description: "Instant, context-aware answers for budgeting, investing, loans, and more.", href: "#", icon: <Bot className="w-5 h-5" />, image: { src: "/images/home/chatbot.webp", alt: "AI chatbot" } },
  { id: "f2", title: "Portfolio Insights", subtitle: "Smart Analytics", description: "Automatic performance breakdowns, risk metrics, and diversification tips.", href: "#", icon: <Wallet className="w-5 h-5" />, image: { src: "/images/home/portfolio.webp", alt: "Portfolio analytics" } },
  { id: "f3", title: "Predictive Analytics", subtitle: "Driven Decisions", description: "Leverage ML forecasts for trends, returns, and scenario planning.", href: "#", icon: <ChartLine className="w-5 h-5" />, image: { src: "/images/home/predict.webp", alt: "Predictive" } },
  { id: "f4", title: "Market Alerts", subtitle: "Real-Time Signals", description: "Custom alerts for price moves, news spikes, and volatility shifts.", href: "#", icon: <BellRing className="w-5 h-5" />, image: { src: "/images/home/market-alert.webp", alt: "Market alerts" } },
  { id: "f5", title: "AI-Driven Automation", subtitle: "Reduce Friction", description: "Automate repetitive analysis, tagging, and report generation.", href: "#", icon: <Sparkles className="w-5 h-5" />, image: { src: "/images/home/automation.webp", alt: "Automation" } },
  { id: "f6", title: "Smart Budget Planner", subtitle: "Clarity & Control", description: "Categorize spend, set goals, and get optimization suggestions.", href: "#", icon: <Gauge className="w-5 h-5" />, image: { src: "/images/home/budget.webp", alt: "Budget planner" } },
];

// dotted background
function DottedBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-3xl opacity-40"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
        maskImage:
          "radial-gradient(ellipse at top, black, transparent 65%), radial-gradient(ellipse at bottom, black, transparent 65%)",
      }}
    />
  );
}

// gradient border (بدون glow)
function FancyBorder() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          padding: 1,
          background:
            "linear-gradient(180deg, rgba(142,97,255,0.6), rgba(74,222,255,0.2) 60%, rgba(255,255,255,0.05))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude",
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
    </>
  );
}

function useInViewOnce<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}

function FeatureCard({ f, delayMs = 0 }: { f: Feature; delayMs?: number }) {
  const { ref, inView } = useInViewOnce<HTMLAnchorElement>(0.2);

  return (
    <a
      ref={ref}
      href={f.href || "#"}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "group relative flex flex-col justify-between rounded-3xl bg-neutral-900/60 p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm",
        "transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        "hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]",
      ].join(" ")}
    >
      <FancyBorder />
      <DottedBg />

      <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-white/70" aria-hidden />

      <div className="relative z-10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-violet-400 to-violet-600 text-white shadow-lg shadow-violet-900/40">
        {f.icon}
      </div>

      <div className="relative z-10">
        <h3 className="text-base font-semibold text-white">{f.title}</h3>
        <p className="text-sm text-white/60">{f.subtitle}</p>
      </div>

      <div className="relative z-10 mt-4 space-y-3">
        <div className="flex items-start gap-2">
          <span className="mt-2 inline-block h-2 w-2 rounded-full bg-white/90" />
          <p className="text-sm leading-6 text-white/70">{f.description}</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-800">
          <Image
            src={f.image.src}
            alt={f.image.alt}
            width={800}
            height={480}
            className="h-44 w-full object-cover transition-all duration-1000 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </a>
  );
}

export default function FeatureGrid() {
  return (
    <section id="feature" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div
        className={`text-center mb-12 sm:mb-20 transition-all duration-1000 opacity-100 translate-y-0"
            }`}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Our Key Featues
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
          <span className="text-green-400">AI-Driven Tools</span> for an Intelligent Financial Life
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
          FinGPT brings intelligence, automation, and clarity to every part of your financial journey.        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={f.id} f={f} delayMs={i * 120} />
        ))}
      </div>
    </section>
  );
}
