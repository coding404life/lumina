import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";
import { getBookById } from "@/lib/books";
import { notFound } from "next/navigation";

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) notFound();

  return (
    <>
      <BookOverview {...book} />

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <article className="glass-morphism rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/70">
            Book Summary
          </p>
          <h2 className="font-bebas-neue mt-3 text-4xl tracking-wide text-white">
            Why You Should Read It
          </h2>
          <p className="mt-4 text-base leading-7 text-light-100/90 sm:text-lg">
            {book.summary}
          </p>
        </article>

        <article className="glass-morphism rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/70">
            Trailer
          </p>
          <h2 className="font-bebas-neue mt-3 text-4xl tracking-wide text-white">
            Quick Preview
          </h2>
          <div className="mt-5">
            <BookVideo videoUrl={book.videoUrl} />
          </div>
        </article>
      </section>
    </>
  );
};

export default BookDetailsPage;
