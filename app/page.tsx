import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import Aurora from "@/components/Aurora"
import { FeaturesSection } from "@/components/features-section"
import { AITeamSection } from "@/components/ai-team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import FeatureGrid from "@/components/FeatureGrid"
import FaqSection from "@/components/faq-section"
import { StickyScrollRevealDemo } from "@/components/sticky-scroll"
import FinGPTContactForm from "@/components/contact-form"
import TeamSection from "@/components/TeamSection"
import { Metadata } from "next"
import PricingSection from "@/components/pricing/PricingCard"
import { HeroSection } from "@/components/hero-section"

export const metadata = {
  // metadataBase: new URL("https://fingpt.ai"),

  title: {
    default: "FinGPT | AI-Powered Financial Intelligence & Trading Insights",
    template: "%s | FinGPT",
  },

  description:
    "FinGPT is an AI-driven financial intelligence platform that analyzes market trends, investor sentiment, news signals, and user behavior to deliver personalized insights, smarter trading decisions, and automated portfolio guidance.",

  keywords: [
    "FinGPT",
    "AI trading assistant",
    "AI investing",
    "automated trading insights",
    "market sentiment AI",
    "personal finance intelligence",
    "crypto market analysis",
    "stock market AI",
    "portfolio optimization",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    // url: "https://fingpt.ai",
    siteName: "FinGPT",
    title: "FinGPT | AI-Powered Personal Finance & Trading Insights",
    description:
      "Real-time financial intelligence powered by AI. Get smart alerts, personalized recommendations, risk analysis, sentiment detection, and actionable insights for better trading and investing.",
    images: [
      {
        url: "/home/1.webp",
        width: 800,
        height: 800,
        alt: "FinGPT – AI Finance & Trading Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FinGPT | AI-Driven Financial Insights",
    description:
      "Analyze markets faster, understand risks deeper, and make confident trading decisions with AI-powered insights from FinGPT.",
    images: ["/home/1.webp"],
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  }

};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#270036", "#210029", "#270036"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeatureGrid />
          <StickyScrollRevealDemo />
          {/* <FeaturesSection /> */}
          <TestimonialsSection />
          <FaqSection />
          {/* <TeamSection /> */}
          <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-12 sm:mb-20 transition-all duration-1000 opacity-100 translate-y-0"
            }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                <span className="text-green-400">AI-Driven Tools</span> for an Intelligent Financial Life
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                FinGPT brings intelligence, automation, and clarity to every part of your financial journey.        </p>
            </div>
          </section>
          <PricingSection />
          {/* <FinGPTContactForm /> */}
          {/* <ROICalculatorSection /> */}
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
