// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="h-screen">
//       <div className="h-full relative">
//         <Image
//           src={"/white-bg.jpg"}
//           alt="White-bg"
//           width={0}
//           height={0}
//           className="object-fill w-full h-full"
//         />
//         <div className="absolute top-0 left-0 bottom-0 right-0 p-6">
//           <div className="bg-slate-300 flex items-center justify-center">
//             <div className="bg-header-color text-white py-2 px-4 rounded-3xl w-[560px]">
//               Header
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import LiveStats from "./components/LiveStats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative">
        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Enter the Underworld
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A high-stakes deception game where trust is a lie and betrayal is
            survival.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center">
            <Button
              className="px-6 py-3 text-lg font-semibold"
              variant="default"
            >
              Play Now
            </Button>
            <Button
              className="px-6 py-3 text-lg font-semibold text-black"
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <HowItWorks />
      <LiveStats />
      <Testimonials />
      <CTA />
    </div>
  );
}
