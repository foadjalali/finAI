"use client";

import { useState } from "react";
import { Check, Zap, Shield, Server } from "lucide-react";
import HeroSection from "./HeroSection";

type PricingCardProps = {
    title: string;
    subtitle: string;
    price: string;
    cta: string;
    features: string[];
    icon: React.ReactNode;
    recommended?: boolean;
};

function PricingCard({
    title,
    subtitle,
    price,
    cta,
    features,
    icon,
    recommended,
}: PricingCardProps) {
    return (
        <div
            className={[
                "relative rounded-2xl p-6 bg-neutral-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md",
                "hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300",
                recommended ? "border border-green-400/40" : "border border-white/10",
            ].join(" ")}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center text-black">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="text-sm text-white/60">{subtitle}</p>
                </div>
            </div>

            <p className="text-4xl font-bold text-white mb-4">{price}</p>

            <a
                href="#"
                className="block w-full text-center rounded-xl bg-green-500 text-black py-3 font-semibold hover:bg-green-400 transition"
                onClick={(e) => e.stopPropagation()} // دکمه کلیک ایبل، کارت کلیک نشه
            >
                {cta}
            </a>

            <ul className="mt-6 space-y-3">
                {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        {f}
                    </li>
                ))}
            </ul>

            {recommended && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-green-500 text-black text-xs font-semibold">
                    Recommended
                </div>
            )}
        </div>
    );
}

export default function PricingSection() {
    const [tab, setTab] = useState<"individual" | "api">("individual");

    const individualPlans = [
        {
            title: "Free",
            subtitle: "Try Claude",
            price: "$0",
            cta: "Get Started",
            icon: <Zap size={18} />,
            features: [
                "Basic access to AI model",
                "Limited daily messages",
                "Ideal for personal experimenting",
                "Access to quick answers & summaries",
                "Community support included",
            ],
        },
        {
            title: "Pro",
            subtitle: "For everyday productivity",
            price: "$17",
            cta: "Upgrade Now",
            icon: <Shield size={18} />,
            recommended: true,
            features: [
                "Priority message routing",
                "Faster response time",
                "Higher message limits",
                "Early access to new features",
                "Better performance for long tasks",
                "Fast support responses",
            ],
        },
        {
            title: "Max",
            subtitle: "Get the most out of Claude",
            price: "From $100",
            cta: "Contact Sales",
            icon: <Server size={18} />,
            features: [
                "Unlimited usage",
                "Best performance for enterprise",
                "Advanced analysis tools",
                "Higher rate limits",
                "Multi-user workspace support",
                "Full enterprise security",
            ],
        },
    ];

    const apiPlans = [
        {
            title: "Developer",
            subtitle: "Pay as you go",
            price: "$0 + usage",
            cta: "View API Docs",
            icon: <Zap size={18} />,
            features: [
                "No monthly fee",
                "Only pay for what you use",
                "Perfect for small apps",
                "Fast API response",
            ],
        },
        {
            title: "Startup",
            subtitle: "Scale your product",
            price: "$49/mo + usage",
            cta: "Start Building",
            icon: <Shield size={18} />,
            features: [
                "Higher rate limits",
                "Analytics dashboard",
                "Improved stability",
                "Email support",
            ],
        },
        {
            title: "Enterprise",
            subtitle: "Dedicated solutions",
            price: "Custom",
            cta: "Talk to Sales",
            icon: <Server size={18} />,
            features: [
                "Dedicated infrastructure",
                "SLAs & compliance",
                "Custom rate limits",
                "Onboarding training",
            ],
        },
    ];

    const plans = tab === "individual" ? individualPlans : apiPlans;

    return (
        <section className="max-w-6xl mx-auto px-6 py-4">
            <div
                className={`text-center mb-12 sm:mb-20 transition-all duration-1000 opacity-100 translate-y-0"
            }`}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                    <span className="text-green-400">Find the Right Plan</span> for Your Goals
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                    Explore flexible pricing options designed to scale with your project or business.                </p>
            </div>


            {/* Tabs */}
            <div className="flex justify-center mb-10">
                <div className="inline-flex bg-neutral-800/60 border border-white/10 rounded-xl p-1">
                    <button
                        onClick={() => setTab("individual")}
                        className={[
                            "px-6 py-2 rounded-lg text-sm font-medium transition",
                            tab === "individual"
                                ? "bg-white text-black"
                                : "text-white/60 hover:text-white",
                        ].join(" ")}
                    >
                        Individual
                    </button>
                    <button
                        onClick={() => setTab("api")}
                        className={[
                            "px-6 py-2 rounded-lg text-sm font-medium transition",
                            tab === "api"
                                ? "bg-white text-black"
                                : "text-white/60 hover:text-white",
                        ].join(" ")}
                    >
                        API
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((p, i) => (
                    <PricingCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
