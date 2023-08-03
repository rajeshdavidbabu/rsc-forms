// Your fancyass DB :)
const emails: string[] = [];
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function addEmailToDB(email: string) {
  await delay(250);

  emails.push(email);
}

export async function getAllEmailFromDB() {
  await delay(250);

  return emails;
}
