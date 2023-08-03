import * as z from "zod";

export const emailSchema = z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email.");
