import BookCard from "./BookCard";

interface BookListProps {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: BookListProps) => {
  if (books.length < 2) return;

  return (
    <section className={containerClassName}>
      <div className="flex flex-col gap-2 mb-8 sm:mb-10">
        <h2 className="font-bebas-neue text-3xl sm:text-5xl text-white tracking-widest text-glow">
          {title}
        </h2>
        <div className="w-12 sm:w-20 h-1 bg-primary rounded-full" />
      </div>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};
export default BookList;
