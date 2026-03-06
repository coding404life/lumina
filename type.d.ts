/** biome-ignore-all lint/correctness/noUnusedVariables: false positive */
interface Book {
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

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard?: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverImage: string;
  availableCopies: number;
  description?: string;
  totalCopies: number;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}
