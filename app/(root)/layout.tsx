import type { ReactNode } from "react";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="root-container relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="sticky top-0 z-50 transition-all duration-300">
          <Header session={session} />
        </div>
        <div className="mt-10 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default layout;
