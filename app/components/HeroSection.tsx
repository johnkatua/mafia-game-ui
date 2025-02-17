"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/avatars/user2.jpg" // Replace with a mafia-themed image
          alt="Mafia Game Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold tracking-wide text-yellow-400 drop-shadow-md"
        >
          Enter the Underworld
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-xl text-gray-300"
        >
          A high-stakes deception game where trust is a lie and betrayal is
          survival. Will you be the last one standing?
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <Button className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-md">
            🎯 Play Now
          </Button>
          <Button className="px-6 py-3 text-lg font-semibold border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all rounded-full">
            <a href="#how-it-works">📖 Learn More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
