import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { booksCatalog } from "@/lib/books";

export default function Home() {
  return (
    <>
      <BookOverview {...booksCatalog[5]} />

      <BookList
        title="Latest Books"
        books={booksCatalog}
        containerClassName="mt-28"
      />
    </>
  );
}
