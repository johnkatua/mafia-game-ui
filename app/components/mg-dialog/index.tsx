import { useDialogStore } from "@/app/stores";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FC, ReactNode, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface MGDialogProps {
  description: string;
  title: string;
  children?: ReactNode;
}

// MGDialog -> A custom Mafia Game Dialog
const MGDialog: FC<PropsWithChildren<MGDialogProps>> = ({
  description,
  title,
  children,
}) => {
  const { isOpen, closeDialog } = useDialogStore();
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-gray-900 border-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl tracking-wide text-yellow-400 drop-shadow-md">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.p>
          </AlertDialogTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pb-4"
          >
            <AlertDialogDescription className="text-gray-300">
              {description}
            </AlertDialogDescription>
          </motion.div>
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MGDialog;
