"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Flame, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialStats = {
  onlinePlayers: 3410,
  totalGames: 25600,
};

const leaderboard = [
  { rank: 1, name: "ShadowFox", score: 9870 },
  { rank: 2, name: "SilentReaper", score: 9520 },
  { rank: 3, name: "CrimsonKing", score: 9235 },
];

const LiveStats = () => {
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats((prev) => ({
        onlinePlayers: prev.onlinePlayers + Math.floor(Math.random() * 10),
        totalGames: prev.totalGames + Math.floor(Math.random() * 5),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold tracking-wide">Live Stats</h2>
        <p className="text-gray-400 mt-2">
          Stay updated with real-time game stats.
        </p>

        {/* Stats Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="bg-gray-800 border border-gray-700 text-center">
              <CardHeader>
                <Users className="w-10 h-10 text-green-400 mx-auto" />
                <CardTitle className="text-xl font-semibold">
                  {stats.onlinePlayers.toLocaleString()} Players Online
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                👥 Real-time activity tracking.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="bg-gray-800 border border-gray-700 text-center">
              <CardHeader>
                <Flame className="w-10 h-10 text-orange-400 mx-auto" />
                <CardTitle className="text-xl font-semibold">
                  {stats.totalGames.toLocaleString()} Rounds Completed
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                🔥 Fast-paced action, endless fun.
              </CardContent>
            </Card>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="bg-gray-800 border border-gray-700 text-center">
              <CardHeader>
                <Trophy className="w-10 h-10 text-yellow-400 mx-auto" />
                <CardTitle className="text-xl font-semibold">
                  Top Players
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                {leaderboard.map((player) => (
                  <p key={player.rank} className="text-lg">
                    🏆 {player.rank}. {player.name} -{" "}
                    <span className="text-yellow-300">{player.score}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
