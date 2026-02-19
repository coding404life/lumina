import Image from "next/image";

import type { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <main className="auth-container relative min-h-screen overflow-hidden bg-dark-100">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10 -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[40%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <section className="auth-form relative z-10 flex-1 flex items-center justify-center px-5 py-10 lg:px-20">
        <div className="auth-box glass-morphism w-full max-w-lg border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/knowledge.svg"
                alt="logo"
                width={48}
                height={48}
                className="glow-effect rounded-xl"
              />
              <h1 className="text-3xl font-bebas-neue tracking-widest text-white text-glow">
                Lumina
              </h1>
            </div>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          <div className="w-full">{children}</div>
        </div>
      </section>

      <section className="auth-illustration hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-linear-to-r from-dark-100 to-transparent z-10 w-40" />
        <Image
          src="/images/auth-illustration3.jpg"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="size-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-x-0 bottom-0 p-20 z-20 bg-linear-to-t from-dark-100 via-transparent to-transparent">
          <h2 className="text-5xl font-bebas-neue text-white tracking-widest leading-tight mb-4">
            Digital Sanctuary <br /> for Lumina
          </h2>
          <p className="text-light-100 text-lg max-w-md font-light">
            Access a world-class collection of resources and manage your
            learning journey with ease.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Layout;
