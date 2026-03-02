const demoUsers = [
  {
    name: "Ava Jordan",
    email: "ava.jordan@lumina.edu",
    status: "ACTIVE",
    role: "Student",
    joined: "Jan 12, 2026",
  },
  {
    name: "Noah Patel",
    email: "noah.patel@lumina.edu",
    status: "PENDING",
    role: "Student",
    joined: "Jan 28, 2026",
  },
  {
    name: "Mia Thompson",
    email: "mia.thompson@lumina.edu",
    status: "ACTIVE",
    role: "Librarian",
    joined: "Feb 03, 2026",
  },
  {
    name: "Liam Chen",
    email: "liam.chen@lumina.edu",
    status: "REVIEW",
    role: "Student",
    joined: "Feb 21, 2026",
  },
  {
    name: "Sophia Reed",
    email: "sophia.reed@lumina.edu",
    status: "ACTIVE",
    role: "Admin Assistant",
    joined: "Feb 24, 2026",
  },
];

const getStatusClassName = (status: string) => {
  if (status === "ACTIVE") return "border-emerald-300/30 bg-emerald-400/10 text-emerald-200";
  if (status === "PENDING") return "border-amber-300/30 bg-amber-400/10 text-amber-100";
  return "border-sky-300/30 bg-sky-400/10 text-sky-100";
};

const AdminUsersPage = () => {
  return (
    <div className="space-y-6">
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9">
        <div className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-primary-admin/50 blur-[90px]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-admin">Dashboard</p>
          <h1 className="mt-3 font-bebas-neue text-5xl tracking-[0.08em] text-white sm:text-6xl">
            All Users
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-light-100/80 sm:text-base">
            Demo analytics and sample users UI for admin preview only.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">Total Users</p>
          <p className="mt-2 text-3xl font-semibold text-white">1,284</p>
          <p className="mt-1 text-xs text-emerald-200">+8.2% vs last month</p>
        </article>

        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">Active Today</p>
          <p className="mt-2 text-3xl font-semibold text-white">326</p>
          <p className="mt-1 text-xs text-emerald-200">+3.4% daily retention</p>
        </article>

        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">
            Pending Approvals
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">41</p>
          <p className="mt-1 text-xs text-amber-200">Needs review queue</p>
        </article>

        <article className="glass-morphism rounded-2xl border border-white/10 p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light-100/60">New This Week</p>
          <p className="mt-2 text-3xl font-semibold text-white">112</p>
          <p className="mt-1 text-xs text-sky-200">Spring semester spike</p>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <article className="glass-morphism rounded-3xl border border-white/10 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-bebas-neue text-3xl tracking-[0.08em] text-white">
              User Growth (Demo)
            </h2>
            <span className="rounded-full border border-primary-admin/40 bg-primary-admin/15 px-3 py-1 text-xs text-primary-admin">
              Last 6 Months
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-dark-300/60 p-4">
            <svg
              viewBox="0 0 640 260"
              className="h-[220px] w-full"
              role="img"
              aria-label="Demo users growth chart"
            >
              <line x1="40" y1="220" x2="620" y2="220" stroke="rgba(255,255,255,0.16)" />
              <line x1="40" y1="170" x2="620" y2="170" stroke="rgba(255,255,255,0.08)" />
              <line x1="40" y1="120" x2="620" y2="120" stroke="rgba(255,255,255,0.08)" />
              <line x1="40" y1="70" x2="620" y2="70" stroke="rgba(255,255,255,0.08)" />
              <polyline
                fill="none"
                stroke="#5f7df4"
                strokeWidth="4"
                points="40,190 136,176 232,158 328,138 424,112 520,90 620,68"
              />
              <polyline
                fill="rgba(95,125,244,0.16)"
                stroke="none"
                points="40,190 136,176 232,158 328,138 424,112 520,90 620,68 620,220 40,220"
              />
              <circle cx="40" cy="190" r="4.5" fill="#8fa3ff" />
              <circle cx="136" cy="176" r="4.5" fill="#8fa3ff" />
              <circle cx="232" cy="158" r="4.5" fill="#8fa3ff" />
              <circle cx="328" cy="138" r="4.5" fill="#8fa3ff" />
              <circle cx="424" cy="112" r="4.5" fill="#8fa3ff" />
              <circle cx="520" cy="90" r="4.5" fill="#8fa3ff" />
              <circle cx="620" cy="68" r="4.5" fill="#8fa3ff" />
            </svg>
          </div>
        </article>

        <article className="glass-morphism rounded-3xl border border-white/10 p-6 sm:p-8">
          <h2 className="font-bebas-neue text-3xl tracking-[0.08em] text-white">
            Roles Breakdown
          </h2>
          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-xs text-light-100/70">
                <span>Students</span>
                <span>78%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-xs text-light-100/70">
                <span>Librarians</span>
                <span>15%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-[15%] rounded-full bg-primary-admin" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-xs text-light-100/70">
                <span>Admins</span>
                <span>7%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-[7%] rounded-full bg-sky-300" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="glass-morphism rounded-3xl border border-white/10 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bebas-neue text-3xl tracking-[0.08em] text-white">
            Recent Users (Demo)
          </h2>
          <span className="text-xs uppercase tracking-[0.18em] text-light-100/60">
            Preview Table
          </span>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-light-100/70">
                <th className="px-3 py-3 font-medium">Name</th>
                <th className="px-3 py-3 font-medium">Email</th>
                <th className="px-3 py-3 font-medium">Role</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {demoUsers.map((user) => (
                <tr key={user.email} className="border-b border-white/5 text-light-100">
                  <td className="px-3 py-3 font-medium text-white">{user.name}</td>
                  <td className="px-3 py-3 text-light-100/80">{user.email}</td>
                  <td className="px-3 py-3">{user.role}</td>
                  <td className="px-3 py-3">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${getStatusClassName(
                        user.status,
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-light-100/80">{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminUsersPage;
