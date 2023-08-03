"use server";
import { getAllEmailFromDB } from "@/db";

export async function getAllEmails() {
  try {
    const emailAdded = await getAllEmailFromDB();

    return emailAdded;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
