import { useDialogStore } from "@/app/stores";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, FormEventHandler, useState } from "react";

const CreateGameForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { closeDialog } = useDialogStore();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/create_game", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-gray-50 opacity-70">
            Host Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Blind Fold (BF)"
            required
            className="border-yellow-400"
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel
            type="reset"
            onClick={closeDialog}
            className="px-6 py-3 text-lg font-semibold border-2 bg-transparent border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all rounded-full"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            type="submit"
            onClick={closeDialog}
            className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-md"
          >
            {isLoading ? "Please Wait" : "Create Game"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </div>
    </form>
  );
};

export default CreateGameForm;
