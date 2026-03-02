"use client";

import { adminSideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();
  const hasExactMatch = adminSideBarLinks.some((item) => item.route === pathname);

  return (
    <aside className="glass-morphism h-fit rounded-3xl border border-white/10 p-4">
      <p className="px-3 text-xs uppercase tracking-[0.2em] text-light-100/60">Admin</p>
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
    </aside>
  );
};

export default AdminSidebar;
