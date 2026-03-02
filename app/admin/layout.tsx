import { auth } from "@/auth";
import AdminMobileNav from "@/components/AdminMobileNav";
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
    <main className="root-container relative overflow-x-hidden px-3! xs:px-4! md:px-8!">
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary-admin/20 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl py-4 sm:py-6">
        <AdminMobileNav />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-4 pb-6 sm:gap-6 sm:pb-8 lg:grid-cols-[260px_1fr]">
        <div className="hidden lg:block">
          <AdminSidebar />
        </div>
        <section className="min-w-0">{children}</section>
      </div>
    </main>
  );
};

export default AdminLayout;
