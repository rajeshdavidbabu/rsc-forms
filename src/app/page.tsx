import { EmailForm } from "@/components/email-form";
import { Card, CardContent } from "@/components/ui/card";
import { getAllEmails } from "@/actions/get-all-emails";

const Page = async () => {
  const emails = await getAllEmails();

  return (
    <div className="dark container mx-auto p-4 min-h-screen max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">RSC Forms</h1>
      <EmailForm />
      <br />
      {emails?.length ? (
        <Card className="flex flex-col w-[50%] my-5">
          <CardContent className="p-4">
            <ul>
              {emails.map((email) => {
                return <li>{email}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <div className="my-5">No emails on the database !</div>
      )}
    </div>
  );
};

export default Page;
