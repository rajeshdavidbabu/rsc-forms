"use client";
import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function Submit() {
  const { pending } = useFormStatus();

  return (
    <div className="my-4">
      <Button type="reset">Reset</Button>
      <Button
        type="submit"
        variant={"outline"}
        className={"ml-4"}
        disabled={pending}
      >
        {pending ? "Submitting" : "Submit"}
      </Button>
    </div>
  );
}
