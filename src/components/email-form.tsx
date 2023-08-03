import { Input } from "@/components/ui/input";
import { addEmailToDB } from "@/db";
import { revalidatePath } from "next/cache";
import { Submit } from "./submit";

export function EmailForm() {
  async function addEmail(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;

    await addEmailToDB(email);

    revalidatePath("/");
  }

  return (
    <form action={addEmail}>
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" name="email" />
      </div>
      <br />
      <Submit />
    </form>
  );
}
