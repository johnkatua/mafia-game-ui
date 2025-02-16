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
import HeroSection from "./components/HeroSection";

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
