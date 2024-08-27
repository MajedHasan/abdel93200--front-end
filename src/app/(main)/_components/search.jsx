import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <section className="my-7">
      <div className="container mx-auto">
        <h2 className="lg:text-3xl text-xl font-semibold">
          What would you like to <span className="text-blue-700">rent?</span>
        </h2>
        <div className="flex gap-4 w-full max-w-3xl mt-5">
          <Input name="search" placeholder="Enter keyword...." />
          <Button className="flex items-center gap-2">
            <SearchIcon />
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Search;
