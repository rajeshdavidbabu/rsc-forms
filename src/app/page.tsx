import { EmailForm } from "@/components/email-form";
import { getAllEmails } from "@/actions/get-all-emails";
import { Subscribers } from "@/components/subscribers";

const Page = async () => {
  const emails = await getAllEmails();

  return (
    <div className="dark container mx-auto p-4 min-h-screen max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">RSC Forms</h1>
      <EmailForm />
      <br />
      <Subscribers emails={emails} />
    </div>
  );
};

export default Page;
