import { sampleBooks } from "@/constants";

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverImage: string;
}

const normalizeBook = (book: (typeof sampleBooks)[number]): LibraryBook => ({
  id: String(book.id),
  title: book.title,
  author: book.author,
  genre: book.genre,
  rating: book.rating,
  totalCopies: book.total_copies,
  availableCopies: book.available_copies,
  description: book.description,
  coverImage: book.cover,
});

export const booksCatalog = sampleBooks.map(normalizeBook);

export const getBookById = (id: string) =>
  booksCatalog.find((book) => book.id === id);
