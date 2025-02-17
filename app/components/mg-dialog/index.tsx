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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={closeDialog}>{btnText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MGDialog;
