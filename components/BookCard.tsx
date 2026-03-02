import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import type { LibraryBook } from "@/lib/books";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverImage,
  isLoanedBook = false,
}: LibraryBook & { isLoanedBook?: boolean }) => (
  <li
    className={cn(
      "group transition-all duration-300",
      isLoanedBook ? "xs:w-52 w-full" : "",
    )}
  >
    <Link
      href={`/books/${id}`}
      className={cn(
        "flex flex-col items-center p-3 rounded-2xl transition-all duration-200 group-hover:glass-morphism group-hover:shadow-2xl",
        isLoanedBook ? "w-full" : "",
      )}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <BookCover
          coverColor={coverColor}
          coverImage={coverImage}
          className="shadow-lg group-hover:shadow-primary/20 transition-shadow"
        />
      </div>

      <div
        className={cn(
          "mt-5 flex flex-col items-center text-center",
          !isLoanedBook ? "xs:max-w-40 max-w-28" : "w-full",
        )}
      >
        <p className="book-title text-base font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </p>
        <p className="book-genre text-xs text-light-100/60 italic mt-1 uppercase tracking-wider">
          {genre}
        </p>
      </div>

      {isLoanedBook && (
        <div className="mt-4 w-full border-t border-white/5 pt-4">
          <div className="book-loaned flex justify-center gap-2">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={16}
              height={16}
              className="opacity-60"
            />
            <p className="text-xs text-light-100/80">11 days left</p>
          </div>

          <Button className="book-btn mt-4 h-10 text-xs font-bold tracking-widest uppercase">
            Receipt
          </Button>
        </div>
      )}
    </Link>
  </li>
);

export default BookCard;
