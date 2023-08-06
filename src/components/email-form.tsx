import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { addEmailToDB } from "@/db";
import { revalidatePath } from "next/cache";
import { emailSchema } from "@/zod";

let error: string | null = null;

export function EmailForm() {
  async function addEmail(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      const { errors: zodErrors } = result.error;
      error = zodErrors[0].message;
    } else {
      await addEmailToDB(result.data);
      error = null;
    }

    revalidatePath("/");
  }

  return (
    <form action={addEmail}>
      <div>
        <Label htmlFor="email" className={error ? "text-red-500" : ""}>
          Email
        </Label>
        <Input id="email" name="email" />
      </div>
      {error && <Label className="text-red-500">{error}</Label>}
      <div className="my-4">
        <Button type="reset">Reset</Button>
        <Button type="submit" variant={"outline"} className={"ml-4"}>
          Submit
        </Button>
      </div>
    </form>
  );
}
