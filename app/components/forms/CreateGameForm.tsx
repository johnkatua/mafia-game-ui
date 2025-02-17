import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CreateGameForm = () => {
  return (
    <form>
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
    </form>
  );
};

export default CreateGameForm;
