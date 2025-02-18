import { BASE_URL } from "@/app/constants";
import { useAlertStore, useDialogStore } from "@/app/stores";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const CreateGameForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { closeDialog } = useDialogStore();
  const { openAlert } = useAlertStore();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/create_game`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_name: name,
        }),
      });

      const data = await response.json();
      openAlert({
        game_id: data?.game_id,
        join: data?.join,
        host: data.host,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      closeDialog();
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
            name="player_name"
            placeholder="Blind Fold (BF)"
            required
            onChange={(e) => setName(e.target.value)}
            className="border-yellow-400 text-white"
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
            disabled={isLoading}
            className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 transition-all shadow-md"
          >
            {isLoading && <Loader2 className="animate-spin" />}
            {isLoading ? "Please Wait" : "Create Game"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </div>
    </form>
  );
};

export default CreateGameForm;
