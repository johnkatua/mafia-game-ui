import { useAlertStore } from "@/app/stores";
import { Button } from "@/components/ui/button";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

const GameAlertContent = () => {
  const { data } = useAlertStore();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (data?.join) {
      await navigator.clipboard.writeText(data.join);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="text-white p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-yellow-400">Your Game's Ready!</h2>
      <p className="mt-2 text-gray-300">
        Share the link with others to join the game.
      </p>

      <div className="mt-3">
        <p className="text-lg font-medium text-gray-100">
          <span className="text-yellow-400">Game ID:</span> {data?.game_id}
        </p>
        <div className="flex items-center gap-3 mt-2 p-2 bg-gray-800 rounded-md">
          <p className="text-lg font-medium text-gray-100 truncate">
            {data?.join}
          </p>
          <Button
            onClick={copyToClipboard}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-2 rounded-md flex items-center gap-1"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Clipboard className="w-5 h-5" />
            )}
          </Button>
        </div>
        <p className="text-lg font-medium text-gray-100 mt-2">
          <span className="text-yellow-400">Joined as:</span> {data?.host}
        </p>
      </div>
    </div>
  );
};

export default GameAlertContent;
