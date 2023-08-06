import { EmailForm } from "@/components/email-form";
import { getAllEmailFromDB } from "@/db";
import { Subscribers } from "@/components/subscribers";

const Page = async () => {
  async function getAllEmails() {
    "use server";

    try {
      const emailAdded = await getAllEmailFromDB();

      return emailAdded;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  const emails = await getAllEmails();

  return (
    <div className="container mx-auto p-4 min-h-screen max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">RSC Forms</h1>
      <EmailForm />
      <br />
      <Subscribers emails={emails} />
    </div>
  );
};

export default Page;
