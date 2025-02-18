import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAlertStore } from "@/app/stores";

interface MGAlertProps {
  title: string;
  children: ReactNode;
}

// MGAlert -> A custom Mafia Game Alert Component
const MGAlert: FC<PropsWithChildren<MGAlertProps>> = ({ title, children }) => {
  const { isOpen, closeAlert } = useAlertStore();
  if (!isOpen) return null;
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
          <AlertTitle className="text-2xl font-semibold">{title}</AlertTitle>
          <Button className="" onClick={closeAlert}>
            X
          </Button>
        </div>
        <AlertDescription>{children}</AlertDescription>
      </div>
    </Alert>
  );
};

export default MGAlert;
