import { auth, signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { db } from "@/database/db";
import { users } from "@/database/schema";
import { booksCatalog } from "@/lib/books";
import { eq } from "drizzle-orm";

const MyProfilePage = async () => {
  const session = await auth();

  const currentUser = session?.user?.id
    ? await db
        .select({
          fullName: users.fullName,
          email: users.email,
          universityId: users.universityId,
          status: users.status,
          createdAt: users.createdAt,
          universityCard: users.universityCard,
        })
        .from(users)
        .where(eq(users.id, session.user.id))
        .limit(1)
    : [];

  const user = currentUser[0];

  const borrowedBooks = booksCatalog.slice(0, 3);
  const recommendedBooks = booksCatalog.slice(3, 8);
  const availableBooks = booksCatalog.filter(
    (book) => book.availableCopies > 0,
  ).length;

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  return (
    <>
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary/70">
                Student Profile
              </p>
              <h1 className="font-bebas-neue mt-2 text-5xl tracking-widest text-white sm:text-6xl">
                {user?.fullName || session?.user?.name || "Library Member"}
              </h1>
              <p className="mt-2 text-sm text-light-100/80 sm:text-base">
                {user?.email || session?.user?.email}
              </p>
            </div>

            <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <Button className="cursor-pointer bg-white/5 text-light-100 hover:bg-white/10">
                Logout
              </Button>
            </form>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
                University ID
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {user?.universityId ?? "N/A"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
                Account Status
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {user?.status || "PENDING"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
                Available Library Books
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {availableBooks}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
                Member Since
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">{joinedDate}</p>
            </div>
          </div>

          <p className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-light-100">
            {user?.universityCard
              ? "University card uploaded. You can borrow books from your dashboard."
              : "Upload your university card to speed up borrowing verification."}
          </p>
        </div>
      </section>

      <BookList title="Currently Borrowed" books={borrowedBooks} containerClassName="mt-16" />

      <BookList
        title="Recommended For You"
        books={recommendedBooks}
        containerClassName="mt-16"
      />
    </>
  );
};

export default MyProfilePage;
