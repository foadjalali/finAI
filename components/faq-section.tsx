// components/FaqSection.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  { q: "What do I need to get started?", a: "Create an account, connect your sources, and start chatting with FinGPT. No complex setup required." },
  { q: "What kind of customization is available?", a: "You can tailor data sources, alerts, budgeting rules, and dashboard widgets to match your goals." },
  { q: "How easy is it to edit for beginners?", a: "Very. Clean defaults, guided onboarding, and examples help you move fast with confidence." },
  { q: "Do I need to know how to code?", a: "No. Everything is configurable from the UI. Developers can extend via API if needed." },
  { q: "What will I get after purchasing?", a: "Full access to features, updates, and support, plus templates to accelerate your workflow." },
];

export default function FaqSection({
  items = faqs,
  badge = "FAQ",
  titleTop = "Frequently",
  titleBottom = "Asked Questions",
  subtitle = "Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.",
}: {
  items?: FaqItem[];
  badge?: string;
  titleTop?: string;
  titleBottom?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: heading */}
        <div>
          {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
            {badge}
          </div> */}

          <h2 className="text-4xl leading-[1.1] font-bold text-white md:text-6xl">
            <span className="block">{titleTop}</span>
            <span className="block text-white/80">{titleBottom}</span>
          </h2>

          <p className="mt-4 max-w-xl text-white/70">
            {subtitle}
          </p>
        </div>

        {/* Right: accordion */}
        <div className="space-y-4">
          {items.map((it, i) => (
            <FaqItemCard key={i} idx={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItemCard({ idx, q, a }: { idx: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-[#0d0d12]/80 p-4 sm:p-6
                 border border-white/10 backdrop-blur
                 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      {/* gradient border like the screenshot */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          padding: 1,
          background:
            "linear-gradient(180deg, rgba(142,97,255,0.6), rgba(74,222,255,0.2) 60%, rgba(255,255,255,0.06))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude",
        }}
      />

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
        aria-controls={`faq-${idx}`}
      >
        <span className="text-base sm:text-lg text-white">{q}</span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5
                     text-white/80 transition-all duration-300 group-hover:bg-white/10"
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      {/* answer */}
      <div
        id={`faq-${idx}`}
        className={`transition-all duration-1000 ease-out overflow-hidden ${open ? "mt-3 max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-sm leading-7 text-white/70">{a}</p>
      </div>
    </div>
  );
}
