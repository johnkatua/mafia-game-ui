import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// MGAlert -> A custom Mafia Game Alert Component
const MGAlert = () => {
  return (
    <Alert className="flex gap-2 fixed left-4 bottom-4 max-w-lg z-50 bg-gray-100 border-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5, repeat: Infinity }}
      >
        <Terminal className="h-6 w-6" />
      </motion.div>
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <AlertTitle className="text-2xl font-semibold">Heads up!</AlertTitle>
          <Button className="">X</Button>
        </div>
        <AlertDescription>This is an Alert</AlertDescription>
      </div>
    </Alert>
  );
};

export default MGAlert;
