import { auth } from "@/auth";
import { db } from "@/database/db";
import { users } from "@/database/schema";
import { getBookById } from "@/lib/books";
import config from "@/lib/config";
import { workflowClient } from "@/lib/workflow";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

type BorrowPayload = {
  bookId?: string;
};

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as BorrowPayload;

    if (!body?.bookId) {
      return NextResponse.json(
        { message: "Book id is required" },
        { status: 400 },
      );
    }

    const book = getBookById(body.bookId);

    if (!book) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    if (book.availableCopies <= 0) {
      return NextResponse.json(
        { message: "Book is not available right now" },
        { status: 400 },
      );
    }

    const user = await db
      .select({
        email: users.email,
        fullName: users.fullName,
        universityId: users.universityId,
      })
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1);

    if (user.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (!config.env.apiEndpoint) {
      return NextResponse.json(
        { message: "API endpoint is not configured" },
        { status: 500 },
      );
    }

    workflowClient
      .trigger({
        url: `${config.env.apiEndpoint}/api/workflow/borrow-book`,
        body: {
          email: user[0].email,
          fullName: user[0].fullName,
          universityId: user[0].universityId,
          bookTitle: book.title,
        },
      })
      .catch((error) => {
        // biome-ignore lint/suspicious/noConsole: log for debugging
        console.error("Borrow workflow trigger failed:", error);
      });

    return NextResponse.json({
      message:
        "Book borrowed successfully. A confirmation email has been sent with pickup instructions.",
    });
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: debugging server failures
    console.error("Borrow flow failed", error);
    return NextResponse.json(
      { message: "Unable to process borrowing right now" },
      { status: 500 },
    );
  }
}
