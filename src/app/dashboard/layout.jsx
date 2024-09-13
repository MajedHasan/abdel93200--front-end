import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { ChevronRight, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-8 lg:px-0 px-2">
        <div className="container mx-auto w-full max-w-[1280px]">
          <div className="w-full flex lg:flex-row flex-col gap-8">
            <div className="w-full lg:max-w-[170px] max-w-full">
              <div className="flex items-center gap-2">
                <HomeIcon className="bg-black text-white rounded-lg" />
                <p className="flex items-center text-xs gap-1">
                  <Link href={"/"} className="font-semibold hover:underline">
                    Home
                  </Link>
                  <ChevronRight className="w-4" />
                  <span>Dashboard</span>
                </p>
              </div>
              <Sidebar />
            </div>
            <div className="flex-1 w-full">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
