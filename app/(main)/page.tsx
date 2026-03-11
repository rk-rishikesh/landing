import { Footer } from "./sections/Footer";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PricingSection } from "./sections/PricingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export default function MainPage() {
  return (
    <main>
      <section className="min-h-svh max-h-svh md:min-h-screen md:max-h-screen">
        <HeroSection />
      </section>

      <section className="min-h-svh max-h-svh md:min-h-screen md:max-h-screen">
        <FeaturesSection />
      </section>

      <section className="min-h-svh max-h-svh md:min-h-screen md:max-h-screen">
        <HowItWorksSection />
      </section>

      <section className="min-h-svh max-h-svh md:min-h-screen md:max-h-screen">
        <TestimonialsSection />
      </section>

      <section className="min-h-svh max-h-svh md:min-h-screen md:max-h-screen">
        <PricingSection />
      </section>

      <section className="min-h-svh max-h-svh md:min-h-screen md:max-h-screen">
        <Footer />
      </section>
    </main>
  );
}
