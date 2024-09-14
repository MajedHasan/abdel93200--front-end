import React from "react";
import Sidebar from "./_components/sidebar";
import Result from "./_components/result";

const page = () => {
  return (
    <div className="bg-[#f5f5f5] py-6">
      <main className="container mx-auto flex lg:flex-row flex-col gap-10 ">
        <Sidebar />
        <Result />
      </main>
    </div>
  );
};

export default page;
