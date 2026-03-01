import BookList from "@/components/BookList";
import { booksCatalog } from "@/lib/books";

const LibraryPage = () => {
  return (
    <section>
      <BookList title="Library Collection" books={booksCatalog} />
    </section>
  );
};

export default LibraryPage;
