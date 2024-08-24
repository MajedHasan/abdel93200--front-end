import {
  Compass,
  MenuSquare,
  MessageSquareText,
  PlusCircle,
  Star,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  const NavItems = () => (
    <>
      <Link
        href={"/blog"}
        className="py-1 px-3 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
      >
        <span>Blog</span>
      </Link>
      <Link
        href={"/forums"}
        className="py-1 px-3 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
      >
        <span>Forums</span>
      </Link>
      <Link
        href={"/companies"}
        className="py-1 px-3 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
      >
        <span>Companies</span>
      </Link>
      <Link
        href={"/dashboard/favorite"}
        className="py-1 px-3 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
      >
        <Star className="w-4" />
        <span>Favorite</span>
      </Link>
      <Link
        href={"/dashboard/message"}
        className="py-1 px-3 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
      >
        <MessageSquareText className="w-4" />
        <span>Message</span>
      </Link>
      <Button
        variant="ghost"
        className="py-1 px-3 hover:bg-slate-300 text-sm transition-all flex items-center gap-2 justify-start lg:justify-center"
      >
        <Compass className="w-4" />
        <span>Location</span>
      </Button>

      <Link
        href={"/dashboard"}
        className="py-1 px-3 bg-slate-100 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
      >
        <UserCircle className="w-5" />
        <span>My Account</span>
      </Link>
      <Link
        href={"/"}
        className="py-1 px-3 bg-blue-800 hover:bg-blue-600 text-white text-sm rounded transition-all flex items-center gap-2"
      >
        <PlusCircle className="w-5" />
        <span>Place an ad</span>
      </Link>
    </>
  );

  return (
    <header className="py-2 px-2 md:px-0">
      <div className="container mx-auto flex items-center justify-between gap-6">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-full max-w-[150px] h-fit"
            />
          </Link>
        </div>
        <div>
          <nav className="hidden lg:flex items-center gap-2">
            <NavItems />
          </nav>
          <Sheet>
            <SheetTrigger asChild className="block lg:hidden">
              <MenuSquare className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-5">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
