"use client";

import { adminSideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminMobileNav = () => {
  const pathname = usePathname();
  const hasExactMatch = adminSideBarLinks.some((item) => item.route === pathname);

  return (
    <nav className="glass-morphism rounded-2xl border border-white/10 p-2 lg:hidden">
      <ul className="flex gap-2 overflow-x-auto pb-1">
        {adminSideBarLinks.map((item) => {
          const isActive =
            pathname === item.route ||
            (!hasExactMatch && pathname.startsWith(`${item.route}/`));

          return (
            <li key={item.route} className="shrink-0">
              <Link
                href={item.route}
                className={cn(
                  "block rounded-lg border px-3 py-2 text-xs whitespace-nowrap transition-colors",
                  isActive
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-white/10 text-light-100/90 hover:bg-white/5",
                )}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AdminMobileNav;
