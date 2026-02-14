import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, "Fullname must be at least 3 characters long"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  universityId: z.coerce.number().min(1, "University ID must be a number"),
  universityCard: z.string().min(1, "University card is required"),
});

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

export type SignInSchema = z.infer<typeof signInSchema>;
