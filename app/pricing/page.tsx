import Aurora from "@/components/Aurora";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import PricingSection from "@/components/pricing/PricingCard";

export const metadata = {
    title: {
        default: "FinGPT Pricing | Choose Your AI-Powered Trading Plan",
        template: "%s | FinGPT",
    },

    description:
        "Discover FinGPT pricing plans tailored for traders and investors. Choose the right AI-powered tools for market analysis, portfolio management, and smarter trading decisions at every level.",

    keywords: [
        "FinGPT pricing",
        "AI trading plans",
        "subscription plans",
        "financial intelligence pricing",
        "market analysis tools",
        "portfolio optimization",
        "crypto trading AI",
        "stock market AI",
        "investor tools",
        "automated trading insights",
    ],

    alternates: {
        canonical: "/pricing",
    },

    openGraph: {
        type: "website",
        siteName: "FinGPT",
        title: "FinGPT Pricing | AI-Powered Trading & Investment Plans",
        description:
            "Compare FinGPT subscription plans and unlock AI-driven insights for smarter trading, risk management, and portfolio optimization.",
        images: [
            {
                url: "/home/1.webp",
                width: 800,
                height: 800,
                alt: "FinGPT Pricing Plans – AI Finance & Trading",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "FinGPT Pricing | Smart AI Trading Plans",
        description:
            "Explore FinGPT subscription options. Get AI-powered market insights, automated trading strategies, and personalized investment guidance.",
        images: ["/home/1.webp"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": 0,
            "max-image-preview": "none",
            "max-video-preview": 0,
        },
    }
};

export default function Pricing() {
    return (
        <div className="min-h-screen bg-black overflow-hidden mt-32">
            <main className="min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 w-full h-full">
                    <Aurora colorStops={["#270036", "#210029", "#270036"]} amplitude={1.2} blend={0.6} speed={0.8} />
                </div>
                <div className="relative z-10">
                    <GlassmorphismNav />
                    <PricingSection />
                    <CTASection />
                    <Footer />
                </div>
            </main>
        </div>
    )
}