"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="glass-morphism mt-5 flex w-full justify-between items-center gap-5 px-6 py-3 rounded-2xl shadow-2xl">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/icons/knowledge.svg" alt="logo" width={32} height={32} />
          <span className="font-bebas-neue text-lg sm:text-2xl text-white tracking-widest ">
            LUMINA
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-4 sm:gap-10">
        <ul className="flex flex-row items-center gap-4 sm:gap-8">
          <li>
            <Link
              href="/library"
              className={cn(
                "text-sm font-medium transition-all hover:text-primary",
                pathname === "/library"
                  ? "text-primary text-glow"
                  : "text-light-100",
              )}
            >
              Library
            </Link>
          </li>
          {session.user?.role === "ADMIN" && (
            <li>
              <Link
                href="/admin/users"
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary-admin",
                  pathname.startsWith("/admin")
                    ? "text-primary-admin"
                    : "text-light-100",
                )}
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        <div className="relative flex items-center gap-2 sm:gap-4 border-l border-white/10 pl-4 sm:pl-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 text-white cursor-pointer"
              >
                <Avatar className="size-8 sm:size-9 ring-2 ring-primary/20 transition-all hover:ring-primary/50">
                  <AvatarFallback className="bg-amber-100 text-dark-100 font-bold text-xs sm:text-base">
                    {getInitials(session.user?.name || "IN")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-light-100 text-sm font-medium hidden lg:block">
                  {session.user?.name}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-44 border-white/10 bg-dark-300 text-light-100"
            >
              <DropdownMenuItem
                asChild
                className="cursor-pointer focus:bg-white/5 focus:text-white"
              >
                <Link href="/my-profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem
                onClick={() => signOut({ callbackUrl: "/sign-in" })}
                className="cursor-pointer focus:bg-white/5 focus:text-white"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
