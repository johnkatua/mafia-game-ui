"use client";

import { motion, useScroll } from "framer-motion";
import CTA from "./components/CTA";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import LiveStats from "./components/LiveStats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          originX: 0,
          background: "linear-gradient(90deg, #facc15, #eab308, #ca8a04)",
          boxShadow: "0px 0px 10px rgba(234, 179, 8, 0.8)",
          borderRadius: "0px 0px 8px 8px",
          zIndex: 1000,
          transition: "background 0.3s ease-in-out",
        }}
        animate={{
          background: [
            "linear-gradient(90deg, #facc15, #eab308, #ca8a04)",
            "linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <LiveStats />
      <Testimonials />
      <CTA />
    </div>
  );
}
