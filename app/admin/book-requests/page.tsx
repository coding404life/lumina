const demoBorrowRequests = [
  {
    name: "Ethan Blake",
    universityId: "20260018",
    book: "Clean Code",
    requestedAt: "Mar 1, 2026",
    status: "Pending",
  },
  {
    name: "Amelia Carter",
    universityId: "20260042",
    book: "Deep Work",
    requestedAt: "Mar 1, 2026",
    status: "Approved",
  },
  {
    name: "Lucas Bennett",
    universityId: "20260087",
    book: "Atomic Habits",
    requestedAt: "Feb 28, 2026",
    status: "Pending",
  },
];

const AdminBorrowRequestsPage = () => {
  return (
    <div className="space-y-6">
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9">
        <div className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-primary-admin/50 blur-[90px]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-admin">
            Admin Queue
          </p>
          <h1 className="mt-3 font-bebas-neue text-5xl tracking-[0.08em] text-white sm:text-6xl">
            Borrow Requests
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-light-100/80 sm:text-base">
            Demo request management design only. No backend operations are
            connected.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Total Requests
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">124</p>
        </article>
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Pending
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">19</p>
        </article>
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Approved Today
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">11</p>
        </article>
      </section>

      <section className="glass-morphism rounded-3xl border border-white/10 p-6 sm:p-8">
        <h2 className="font-bebas-neue text-3xl tracking-[0.08em] text-white">
          Latest Requests
        </h2>
        <div className="mt-5 grid gap-4">
          {demoBorrowRequests.map((request) => (
            <article
              key={`${request.universityId}-${request.book}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-white">
                    {request.name}
                  </p>
                  <p className="text-sm text-light-100/80">
                    ID: {request.universityId}
                  </p>
                </div>
                <span className="rounded-full border border-primary-admin/40 bg-primary-admin/15 px-2.5 py-1 text-[11px] text-primary-admin">
                  {request.status}
                </span>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-light-100/85 sm:grid-cols-2">
                <p>Requested Book: {request.book}</p>
                <p>Date: {request.requestedAt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminBorrowRequestsPage;
