import React from "react";
import Sidebar from "./_components/sidebar";
import Result from "./_components/result";

const page = () => {
  return (
    <main className="container mx-auto my-6 flex gap-10">
      <Sidebar />
      <Result />
    </main>
  );
};

export default page;
