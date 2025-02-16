"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ethan ‘ShadowFox’",
    text: "The best online Mafia game I've played! So much strategy and fun.",
    avatar: "/avatars/user1.jpg",
    title: "Image by brgfx on Freepik",
  },
  {
    id: 2,
    name: "Sophia ‘SilentReaper’",
    text: "Every round feels fresh, and the real-time aspect is insane!",
    avatar: "/avatars/user2.jpg",
    title: "Image by pikisuperstar on Freepik",
  },
  {
    id: 3,
    name: "Liam ‘CrimsonKing’",
    text: "The intensity of deception in this game is unmatched. I’m addicted!",
    avatar: "/avatars/user3.jpg",
    title: "Image by pikisuperstar on Freepik",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gray-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold tracking-wide">What Players Say</h2>
        <p className="text-gray-400 mt-2">
          Real reviews from the Mafia community.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative max-w-3xl mx-auto mt-10 flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 md:left-[-60px] text-gray-400 hover:text-white transition-all"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Animated Testimonial Card */}
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="bg-gray-800/40 backdrop-blur-lg p-6 text-center rounded-2xl border border-gray-700 shadow-lg">
            <CardContent>
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <Image
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-yellow-400"
                  title={testimonials[index].title}
                />

                {/* Stars */}
                <div className="flex mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400" />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg italic text-gray-300 mt-4">
                  "{testimonials[index].text}"
                </p>
                <p className="text-sm text-yellow-400 mt-2 font-semibold">
                  – {testimonials[index].name}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 md:right-[-60px] text-gray-400 hover:text-white transition-all"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
