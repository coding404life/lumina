"use client";

import { adminSideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();
  const hasExactMatch = adminSideBarLinks.some(
    (item) => item.route === pathname,
  );

  return (
    <aside className="glass-morphism h-fit rounded-3xl border border-white/10 p-4">
      <div className="flex flex-col gap-5 px-3 mb-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icons/knowledge.svg" alt="logo" width={28} height={28} />
          <span className="font-bebas-neue text-xl text-white tracking-widest ">
            LUMINA
          </span>
        </Link>
      </div>

      <p className="px-3 text-xs uppercase tracking-[0.2em] text-light-100/60">
        Admin
      </p>
      <ul className="mt-3 space-y-2">
        {adminSideBarLinks.map((item) => {
          const isActive =
            pathname === item.route ||
            (!hasExactMatch && pathname.startsWith(`${item.route}/`));

          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-transparent text-light-100 hover:border-white/10 hover:bg-white/5",
                )}
              >
                <Image src={item.img} alt={item.text} width={18} height={18} />
                <span>{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 px-3 text-xs uppercase tracking-[0.2em] text-light-100/60">
        Main Website
      </p>
      <ul className="mt-3 space-y-2 pt-4 border-t border-white/10">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-light-100 transition-colors hover:border-white/10 hover:bg-white/5"
          >
            <Image src="/icons/home.svg" alt="home" width={18} height={18} />
            <span>Go back to home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/my-profile"
            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-light-100 transition-colors hover:border-white/10 hover:bg-white/5"
          >
            <Image src="/icons/user.svg" alt="profile" width={18} height={18} />
            <span>My Profile</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
