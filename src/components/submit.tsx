"use client";
import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function Submit() {
  const { pending } = useFormStatus();

  return (
    <>
      <Button type="reset" variant={"outline"}>
        Reset
      </Button>
      <Button
        type="submit"
        variant={"outline"}
        className={"ml-4"}
        disabled={pending}
      >
        {pending ? "Submitting" : "Submit"}
      </Button>
    </>
  );
}
