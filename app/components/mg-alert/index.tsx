import { useAlertStore } from "@/app/stores";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { FC, PropsWithChildren, ReactNode } from "react";

interface MGAlertProps {
  title: string;
  children: ReactNode;
}

// MGAlert -> A custom Mafia Game Alert Component
const MGAlert: FC<PropsWithChildren<MGAlertProps>> = ({ title, children }) => {
  const { isOpen, closeAlert } = useAlertStore();
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-6 bottom-8 transform -translate-x-1/2 max-w-md w-full z-50"
    >
      <Alert className="flex gap-4 items-start p-5 rounded-xl bg-black/80 border border-yellow-500 shadow-lg text-white backdrop-blur-lg">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
        >
          <Terminal className="h-7 w-7 text-yellow-400" />
        </motion.div>

        <div className="w-full">
          <div className="flex items-end justify-end w-full">
            {/* <AlertTitle className="text-xl font-semibold text-yellow-400">
              {title}
            </AlertTitle> */}
            <motion.button
              onClick={closeAlert}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-yellow-400 transition-transform"
            >
              ✖
            </motion.button>
          </div>
          <AlertDescription className="text-gray-300 mt-2">
            {children}
          </AlertDescription>
        </div>
      </Alert>
    </motion.div>
  );
};

export default MGAlert;
