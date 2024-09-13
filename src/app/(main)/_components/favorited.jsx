import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";
import ProductCard from "./productCard";

const Favorited = () => {
  const favoritedProducts = [
    {
      id: 1,
      name: "My Test Product",
      price: 75.0,
      startDate: "1 month ago",
      views: 91,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/0/244_thumbnail.jpg",
      ],
      isPremium: false,
      categories: ["new", "car parts"],
      tags: [""],
    },
    {
      id: 2,
      name: "My Test Easy",
      price: 50.0,
      startDate: "3 week ago",
      views: 109,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1242_thumbnail.jpg",
      ],
      isPremium: false,
      categories: ["new", "car parts"],
      tags: [""],
    },
    {
      id: 3,
      name: "Samsung S8 Pro",
      price: 999,
      startDate: "3 week ago",
      views: 109,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/0/248_thumbnail.jpg",
      ],
      isPremium: false,
      categories: ["Ireton", "United States"],
      tags: [""],
    },
  ];

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
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {favoritedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              classes={"p-0 bg-[#ffffff80]"}
              hideMeta={true}
              imageHeight={"150px"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorited;
