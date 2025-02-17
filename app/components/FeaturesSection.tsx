import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock, EyeOff } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    title: "🕵️‍♂️ Bluff, Betray, Survive",
    description: "Deceive or be deceived in this social deduction thriller.",
    icon: EyeOff,
  },
  {
    title: "🎭 Role-Based Gameplay",
    description:
      "Every player has a secret role—Mafia, Detective, Citizen... What’s yours?",
    icon: Shield,
  },
  {
    title: "⏳ Real-Time Rounds",
    description: "Quick matches, no waiting, instant action.",
    icon: Clock,
  },
  {
    title: "🌍 Play with Anyone, Anytime",
    description: "Join public games or challenge your friends.",
    icon: Users,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <SectionHeader
        title={"Why Play?"}
        subTitle={
          "Outsmart, strategize, and survive in the ultimate game of deception."
        }
      />
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold tracking-wide text-yellow-400">
          Why Play?
        </h2>
        <p className="text-gray-400 mt-2">
          Outsmart, strategize, and survive in the ultimate game of deception.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 text-left hover:scale-105 transition-transform"
            >
              <CardHeader className="flex items-center gap-3">
                <feature.icon className="w-8 h-8 text-red-500" />
                <CardTitle className="text-lg font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
