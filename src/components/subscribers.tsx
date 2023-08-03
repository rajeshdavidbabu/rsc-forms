import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const Subscribers = ({ emails }: { emails: string[] | null }) => {
  return (
    <>
      {emails?.length ? (
        <Card className="flex flex-col w-[50%] my-5 p-4">
          <CardTitle>Subscribers</CardTitle>
          <CardContent className="p-4">
            <ul>
              {emails.map((email) => {
                return (
                  <li>
                    <Label>{email}</Label>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};
