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
  btnText: string;
  description: string;
  title: string;
  children?: ReactNode;
}

// MGDialog -> A custom Mafia Game Dialog
const MGDialog: FC<PropsWithChildren<MGDialogProps>> = ({
  btnText,
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
            transition={{ duration: 0.8 }}
          >
            <AlertDialogDescription className="text-gray-300">
              {description}
            </AlertDialogDescription>
          </motion.div>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={closeDialog}
            className="px-6 py-3 text-lg font-semibold border-2 bg-transparent border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all rounded-full"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={closeDialog}
            className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-md"
          >
            {btnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MGDialog;
