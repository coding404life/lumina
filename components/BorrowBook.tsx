"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const handleBorrowBook = () => {
    if (!isEligible) {
      alert(message);
      return;
    }
    alert("Book borrowed (dummy)!");
  };

  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrowBook}
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        Borrow Book
      </p>
    </Button>
  );
};

export default BorrowBook;
