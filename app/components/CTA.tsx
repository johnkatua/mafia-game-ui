"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative bg-black text-white py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image or Moody Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mafia-bg.jpg" // Change to a moody Mafia-themed image
          alt="Mafia Game"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/80"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-wide text-yellow-400"
        >
          Think you can outsmart the Mafia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mt-4"
        >
          Prove your deception skills, strategize with your allies, and survive
          the game. The Mafia is waiting… Will you win, or will you fall?
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Button className="px-8 py-4 text-lg font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-md">
            🎯 Play Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
