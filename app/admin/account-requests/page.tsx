const demoAccountRequests = [
  {
    name: "Olivia Morgan",
    email: "olivia.morgan@lumina.edu",
    universityId: "20260102",
    submittedAt: "Mar 2, 2026",
    status: "Pending Verification",
  },
  {
    name: "Mason Rivera",
    email: "mason.rivera@lumina.edu",
    universityId: "20260095",
    submittedAt: "Mar 1, 2026",
    status: "Needs Review",
  },
  {
    name: "Isabella Ward",
    email: "isabella.ward@lumina.edu",
    universityId: "20260073",
    submittedAt: "Feb 27, 2026",
    status: "Approved",
  },
];

const AdminAccountRequestsPage = () => {
  return (
    <div className="space-y-6">
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9">
        <div className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-primary-admin/50 blur-[90px]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-admin">Admin Verification</p>
          <h1 className="mt-3 font-bebas-neue text-5xl tracking-[0.08em] text-white sm:text-6xl">
            Account Requests
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-light-100/80 sm:text-base">
            Demo account request workflow UI with sample data only.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            New Applications
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">27</p>
        </article>
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">Needs Review</p>
          <p className="mt-2 text-3xl font-semibold text-white">8</p>
        </article>
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Verified This Week
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">34</p>
        </article>
      </section>

      <section className="glass-morphism rounded-3xl border border-white/10 p-6 sm:p-8">
        <h2 className="font-bebas-neue text-3xl tracking-[0.08em] text-white">Verification Queue (Demo)</h2>
        <div className="mt-5 grid gap-4">
          {demoAccountRequests.map((request) => (
            <article
              key={request.email}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-white">{request.name}</p>
                  <p className="text-sm text-light-100/80">{request.email}</p>
                </div>
                <span className="rounded-full border border-primary-admin/40 bg-primary-admin/15 px-2.5 py-1 text-[11px] text-primary-admin">
                  {request.status}
                </span>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-light-100/85 sm:grid-cols-2">
                <p>University ID: {request.universityId}</p>
                <p>Submitted: {request.submittedAt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminAccountRequestsPage;
