import CTA from "./components/CTA";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import LiveStats from "./components/LiveStats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <LiveStats />
      <Testimonials />
      <CTA />
    </div>
  );
}
