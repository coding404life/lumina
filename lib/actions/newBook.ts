"use server";

import { books } from "@/database/schema";
import { db } from "@/database/db";

export const createNewBook = async (params: BookParams) => {
  const {
    title,
    author,
    genre,
    rating,
    coverImage,
    availableCopies,
    description,
    totalCopies,
  } = params;

  try {
    await db.insert(books).values({
      title,
      author,
      genre,
      rating,
      coverImage,
      availableCopies,
      description,
      totalCopies,
      status: "IN_STOCK",
    });

    return { success: true, message: "Book created successfully" };
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: false positive
    console.log(error, "Error creating new book");
    return { success: false, error: "Failed to create new book" };
  }
};
