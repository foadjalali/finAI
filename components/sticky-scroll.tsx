"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
        title: "Financial Intelligence Engine",
        description:
            "FinGPT analyzes your accounts, spending patterns, and financial behavior in real time. It turns raw data into clear, actionable insights that help you understand and control your money effortlessly.",
        content: (
            <img
                src="/images/home/1.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Financial Intelligence Engine"
            />
        ),
    },
    {
        title: "Predictive Money Insights",
        description:
            "Get ahead of your finances with AI-powered predictions. FinGPT forecasts cash-flow risks, detects unusual activity, and highlights upcoming opportunities, before they happen.",
        content: (
            <img
                src="/images/home/2.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Predictive Insights"
            />
        ),
    },
    {
        title: "Automated Smart Planning",
        description:
            "Say goodbye to manual budgeting. FinGPT automatically builds and adjusts your budget, tracks your goals, and keeps everything optimized without you lifting a finger.",
        content: (
            <img
                src="/images/home/3.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Automated Planning"
            />
        ),
    },
    {
        title: "Unified Financial Dashboard",
        description:
            "All your bank accounts, cards, investments, and spending trends, connected in one intelligent hub. FinGPT gives you full clarity with a clean, data-rich dashboard.",
        content: (
            <img
                src="/images/home/4.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Unified Dashboard"
            />
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div className="w-full py-4">
            <StickyScroll content={content} />
        </div>
    );
}
