"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import type { Session } from "next-auth";

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
        </ul>

        <div className="flex items-center gap-2 sm:gap-4 border-l border-white/10 pl-4 sm:pl-10">
          <Link
            href="/my-profile"
            className="flex items-center gap-2 text-white"
          >
            <Avatar className="size-8 sm:size-9 ring-2 ring-primary/20 transition-all hover:ring-primary/50">
              <AvatarFallback className="bg-amber-100 text-dark-100 font-bold text-xs sm:text-base">
                {getInitials(session.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
            <span className="text-light-100 text-sm font-medium hidden lg:block">
              {session.user?.name}
            </span>
          </Link>

          {/*
          <Button
            onClick={signOut}
            variant="ghost"
            className="group text-light-100 hover:text-white hover:bg-white/5 transition-all size-9 p-0 md:w-auto md:h-9 md:px-3 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Image
              src="/icons/logout.svg"
              alt="logout"
              width={20}
              height={20}
              className="md:hidden opacity-70 group-hover:opacity-100"
            />
            <span className="hidden md:block">Sign Out</span>
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
