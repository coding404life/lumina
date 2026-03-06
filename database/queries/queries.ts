import { db } from "@/database/db";
import { books } from "@/database/schema";

export const getBooks = async () => {
  const allBooks = await db.select().from(books);
  return allBooks;
};
