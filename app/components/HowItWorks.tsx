import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Users, Gavel, Trophy } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    title: "Step 1: Sign Up & Enter the Game",
    description: "Join a match with players worldwide or invite your friends.",
    icon: UserPlus,
  },
  {
    title: "Step 2: Get Your Role",
    description:
      "Mafia, Citizen, or a Special Role – your identity is a secret!",
    icon: Users,
  },
  {
    title: "Step 3: Discuss, Vote, and Eliminate",
    description: "Strategize, bluff, and vote out suspicious players.",
    icon: Gavel,
  },
  {
    title: "Step 4: Survive & Win!",
    description: "Be the last standing and claim victory.",
    icon: Trophy,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <SectionHeader
          title={"How It Works"}
          subTitle={"Master the game in four simple steps."}
        />

        {/* Steps Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 text-left hover:scale-105 transition-transform"
            >
              <CardHeader className="flex items-center gap-3">
                <step.icon className="w-8 h-8 text-red-500" />
                <CardTitle className="text-lg font-semibold text-white">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
