"use client";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface Props {
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleBorrowBook = () => {
    if (!isEligible) {
      toast.error(message);
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/borrow", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bookId }),
        });

        const data = (await response.json()) as { message?: string };

        if (!response.ok) {
          throw new Error(data.message || "Could not borrow this book");
        }

        toast.success(
          data.message ||
            "Book borrowed successfully. Check your inbox for details.",
        );
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        toast.error(errorMessage);
      }
    });
  };

  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrowBook}
      disabled={isPending}
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        {isPending ? "Borrowing..." : "Borrow Book"}
      </p>
    </Button>
  );
};

export default BorrowBook;
