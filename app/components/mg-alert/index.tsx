import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

// MGAlert -> A custom Mafia Game Alert Component
const MGAlert = () => {
  return (
    <Alert className="fixed left-2 bottom-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5, repeat: Infinity }}
      >
        <Terminal className="h-4 w-4" />
      </motion.div>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is an Alert</AlertDescription>
    </Alert>
  );
};

export default MGAlert;
