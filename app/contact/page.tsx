import Aurora from "@/components/Aurora";
import FinGPTContactForm from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import HeroSection from "@/components/pricing/HeroSection";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <main className="min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 w-full h-full">
                    <Aurora colorStops={["#270036", "#210029", "#270036"]} amplitude={1.2} blend={0.6} speed={0.8} />
                </div>
                <div className="relative z-10">
                    <GlassmorphismNav />

                    <HeroSection
                        title={<>
                            <span className="block">We’re Here to Help</span>
                            <span className="block text-white/80">You Every Step of the Way</span>
                        </>}
                        subtitle="Reach out with any questions, feedback, or support needs, our team will respond quickly."
                    />
                    <FinGPTContactForm />
                    <CTASection />
                    <Footer />
                </div>
            </main>
        </div>
    )
}