import { CTA } from "@/components/landing-page/cta";
import { Features } from "@/components/landing-page/features";
import { Hero } from "@/components/landing-page/hero";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";

export function LandingPage() {
  return (
    <main className="bg-background text-text">
      <Hero />
      <Features />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
