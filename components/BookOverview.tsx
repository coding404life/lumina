import Image from "next/image";
import BookCover from "@/components/BookCover";
import BorrowBook from "./BorrowBook";
import { cn } from "@/lib/utils";
import type { LibraryBook } from "@/lib/books";

const BookOverview = ({
  id,
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverImage,
}: LibraryBook) => {
  const borrowingEligibility = {
    isEligible: availableCopies > 0,
    message: availableCopies <= 0 ? "Book is not available" : "",
  };

  return (
    <section className="book-overview mt-5 sm:mt-10 p-5 sm:p-10 glass-morphism rounded-2xl sm:rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />

      <div className="flex flex-1 flex-col gap-5 sm:gap-7 z-10">
        <h1 className="text-glow tracking-tight leading-[1.1] text-4xl sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs uppercase tracking-widest text-light-100 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-primary/50 text-[10px] sm:text-xs">BY</span>
            <span className="text-white text-sm sm:text-base font-semibold">
              {author}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary/50 text-[10px] sm:text-xs">
              GENRE
            </span>
            <span className="text-white text-sm sm:text-base font-semibold">
              {genre}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10">
            <Image
              src="/icons/star.svg"
              alt="star"
              width={14}
              height={14}
              className="sm:w-4 sm:h-4"
            />
            <span className="text-primary font-bold">{rating}</span>
          </div>
        </div>

        <p className="book-description text-base sm:text-xl text-light-100/90 leading-relaxed max-w-2xl line-clamp-4 sm:line-clamp-none">
          {description}
        </p>

        <div className="flex flex-row gap-10 py-2 border-y border-white/5 w-fit">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-primary/60 font-bold uppercase tracking-tighter">
              Availability
            </span>
            <p className="text-2xl font-bebas-neue text-white tracking-widest">
              {availableCopies}{" "}
              <span className="text-sm font-sans text-light-100 font-normal">
                OF
              </span>{" "}
              {totalCopies}
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-primary/60 font-bold uppercase tracking-tighter">
              Status
            </span>
            <p
              className={cn(
                "text-xl font-bebas-neue tracking-widest uppercase",
                availableCopies > 0 ? "text-green-400" : "text-red-400",
              )}
            >
              {availableCopies > 0 ? "In Stock" : "Borrowed"}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <BorrowBook bookId={id} borrowingEligibility={borrowingEligibility} />
        </div>
      </div>

      <div className="relative flex flex-1 justify-center z-10">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
          <BookCover
            variant="wide"
            className="z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform group-hover:scale-[1.02] group-hover:-rotate-1"
            coverColor={coverColor}
            coverImage={coverImage}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-30 max-sm:hidden -z-10 blur-[1px]">
            <BookCover
              variant="wide"
              coverColor={coverColor}
              coverImage={coverImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
