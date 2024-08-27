import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";

const Favorited = () => {
  return (
    <section className="bg-[#f5f5f5] py-6">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between gap-10">
          <h2 className="lg:text-xl text-lg font-semibold mb-4">
            Most favorited listings
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Star className="w-5" />
            Manage your favorites (0)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Favorited;
