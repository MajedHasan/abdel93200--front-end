import { Button } from "@/components/ui/button";
import { LogOutIcon, LucideExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const currentPage = "Dashboard";

  const navLinks = [
    { id: 1, name: "Dashboard", url: "/" },
    { id: 2, name: "Active Listing", url: "/item?itemType=active" },
    { id: 3, name: "Subscriptions", url: "/alerts" },
    { id: 4, name: "My Profile", url: "/profile" },
    { id: 5, name: "Favorite Listings", url: "/favorite" },
    { id: 6, name: "Offers", url: "/offers" },
    { id: 7, name: "Messages", url: "/messages" },
    { id: 8, name: "Ratings", url: "/ratings" },
  ];

  return (
    <div className="lg:flex hidden flex-col gap-6">
      <Button asChild className="mt-6">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-3 text-sm"
        >
          <span>Public Profile</span>
          <LucideExternalLink className="w-4" />
        </Link>
      </Button>
      <div className="flex flex-col gap-2">
        {navLinks?.map((link) => (
          <Link
            href={`/dashboard${link?.url}`}
            key={link?.id}
            className={` py-1 pl-4 font-semibold text-sm border-l-4 ${
              currentPage === link?.name
                ? "bg-[#f2f4f8] border-l-[#3b49df]"
                : "border-l-transparent hover:bg-[#f2f4f8]"
            }`}
          >
            {link?.name}
          </Link>
        ))}
      </div>
      <Button variant="ghost" className="justify-start gap-2 font-bold">
        <LogOutIcon />
        <span>Logout</span>
      </Button>
    </div>
  );
};

export default Sidebar;
