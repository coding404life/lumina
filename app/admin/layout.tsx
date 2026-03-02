import { auth } from "@/auth";
import AdminSidebar from "@/components/AdminSidebar";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <main className="root-container relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary-admin/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[260px_1fr] lg:px-0">
        <AdminSidebar />
        <section>{children}</section>
      </div>
    </main>
  );
};

export default AdminLayout;
