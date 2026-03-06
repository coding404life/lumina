import { getBooks } from "@/database/queries/queries";
import { cn } from "@/lib/utils";

const AdminBooksPage = async () => {
  const books = await getBooks();

  return (
    <div className="space-y-6">
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9">
        <div className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-primary-admin/50 blur-[90px]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-admin">
            Admin Inventory
          </p>
          <h1 className="mt-3 font-bebas-neue text-5xl tracking-[0.08em] text-white sm:text-6xl">
            All Books
          </h1>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Total Titles
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">248</p>
        </article>
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Available Copies
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">1,984</p>
        </article>
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Low Stock Alerts
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">12</p>
        </article>
      </section>

      <section className="glass-morphism rounded-3xl border border-white/10 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bebas-neue text-3xl tracking-[0.08em] text-white">
            Books Table
          </h2>
          <span className="text-xs uppercase tracking-[0.18em] text-light-100/60">
            Preview
          </span>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-light-100/70">
                <th className="px-3 py-3 font-medium">Title</th>
                <th className="px-3 py-3 font-medium">Author</th>
                <th className="px-3 py-3 font-medium">Genre</th>
                <th className="px-3 py-3 font-medium">Total Copies</th>
                <th className="px-3 py-3 font-medium">Available Copies</th>
                <th className="px-3 py-3 font-medium">Rating</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="overflow-x-scroll">
              {books.map((book, index) => (
                <tr
                  key={book.title}
                  className={cn(
                    "text-light-100",
                    index !== books.length - 1 && "border-b border-white/5",
                  )}
                >
                  <td className="px-3 py-3 font-medium text-white">
                    {book.title}
                  </td>
                  <td className="px-3 py-3 text-light-100/80">{book.author}</td>
                  <td className="px-3 py-3">{book.genre}</td>
                  <td className="px-3 py-3">{book.totalCopies}</td>
                  <td className="px-3 py-3">{book.availableCopies}</td>
                  <td className="px-3 py-3">{book.rating}</td>
                  <td className="px-3 py-3">
                    <span
                      className={`px-2.5 py-1 text-[11px] ${
                        book.status === "IN_STOCK"
                          ? "text-green-500"
                          : "text-red-500"
                      } text-center`}
                    >
                      {book.status === "IN_STOCK" ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminBooksPage;
