import React from "react";
import ProductCard from "./productCard";

const Premium = () => {
  const premiumProducts = [
    {
      id: 1,
      name: "My Test Product",
      price: 75.0,
      startDate: "1 month ago",
      views: 91,
      images: ["https://easycasse.fr/oc-content/uploads/0/40_thumbnail.webp"],
      isPremium: true,
      categories: ["new", "car parts"],
      tags: [""],
    },
    {
      id: 1,
      name: "My Test Easy",
      price: 50.0,
      startDate: "3 week ago",
      views: 109,
      images: ["https://easycasse.fr/oc-content/uploads/0/46_thumbnail.webp"],
      isPremium: true,
      categories: ["new", "car parts"],
      tags: [""],
    },
  ];

  return (
    <section className="bg-gradient-to-l to-[#cbf3e6] from-[#a8dbe4] py-6">
      <div className="container mx-auto ">
        <h2 className="lg:text-xl text-lg font-semibold mb-4">
          Today's premium selection
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {premiumProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              classes={"p-0 bg-[#ffffff80]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
