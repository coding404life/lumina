import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, "Fullname must be at least 3 characters long"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  universityId: z.coerce.number().min(1, "University ID must be a number"),
  universityCard: z.string().optional(),
});

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const addBookSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    genre: z.string().min(1, "Genre is required"),
    rating: z.coerce.number().min(1, "Rating must be at least 1").max(5),
    totalCopies: z.coerce.number().min(1, "Total copies must be at least 1"),
    availableCopies: z.coerce
      .number()
      .min(1, "Available copies must be at least 1"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long"),
    coverImage: z.string().min(1, "Book cover image is required"),
  })
  .refine((data) => data.availableCopies <= data.totalCopies, {
    message: "Available copies cannot exceed total copies",
    path: ["availableCopies"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

export type SignInSchema = z.infer<typeof signInSchema>;

export type AddBookSchema = z.infer<typeof addBookSchema>;
