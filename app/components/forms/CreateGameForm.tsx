import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CreateGameForm = () => {
  return (
    <form>
      <div className="grid gap-2">
        <Label htmlFor="name">Host Name</Label>
        <Input id="name" type="text" placeholder="Blind Fold (BF)" required />
      </div>
    </form>
  );
};

export default CreateGameForm;
