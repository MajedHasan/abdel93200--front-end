import { MenuSquare, PlusCircle, UserCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="py-2 px-2 md:px-0">
      <div className="container mx-auto flex items-center justify-between gap-6">
        <div>
          <Link href={"/"}>Logo</Link>
        </div>
        <div>
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href={"/"}
              className="py-1 px-3 hover:bg-slate-300 text-sm border-r border-r-slate-500 transition-all flex items-center gap-2"
            >
              <span>News</span>
            </Link>
            <Link
              href={"/"}
              className="py-1 px-3 hover:bg-slate-300 text-sm border-r border-r-slate-500 transition-all flex items-center gap-2"
            >
              <span>Blog</span>
            </Link>

            <Link
              href={"/"}
              className="py-1 px-3 bg-slate-100 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
            >
              <UserCircle className="w-5" />
              <span>My Account</span>
            </Link>
            <Link
              href={"/"}
              className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-all flex items-center gap-2"
            >
              <PlusCircle className="w-5" />
              <span>Add Item</span>
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="block md:hidden">
              <MenuSquare className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-5">
                <Link
                  href={"/"}
                  className="py-1 px-3 hover:bg-slate-300 text-sm border-b border-b-slate-500 transition-all flex items-center gap-2"
                >
                  <span>News</span>
                </Link>
                <Link
                  href={"/"}
                  className="py-1 px-3 hover:bg-slate-300 text-sm  transition-all flex items-center gap-2"
                >
                  <span>Blog</span>
                </Link>

                <Link
                  href={"/"}
                  className="py-1 px-3 bg-slate-100 hover:bg-slate-300 text-sm transition-all flex items-center gap-2"
                >
                  <UserCircle className="w-5" />
                  <span>My Account</span>
                </Link>
                <Link
                  href={"/"}
                  className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-all flex items-center gap-2"
                >
                  <PlusCircle className="w-5" />
                  <span>Add Item</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
