import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import React from "react";

// MGAlert -> A custom Mafia Game Alert Component
const MGAlert = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is an Alert</AlertDescription>
    </Alert>
  );
};

export default MGAlert;
