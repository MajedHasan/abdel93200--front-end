import React from "react";
import ProductCard from "./productCard";

const RecentlyViewed = () => {
  const recentlyProducts = [
    {
      id: 1,
      name: "My Test Product",
      price: 75.0,
      startDate: "1 month ago",
      views: 91,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/2/1074_thumbnail.jpg",
      ],
      isPremium: true,
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
        "https://epsilon.mb-themes.com/oc-content/uploads/2/1097_thumbnail.jpg",
      ],
      isPremium: false,
      categories: ["new", "car parts"],
      tags: [""],
    },
    {
      id: 3,
      name: "My Test Easy",
      price: 50.0,
      startDate: "3 week ago",
      views: 109,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/2/997_thumbnail.jpg",
      ],
      isPremium: false,
      categories: ["new", "car parts"],
      tags: [""],
    },
    {
      id: 4,
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
      id: 5,
      name: "My Test Easy",
      price: 50.0,
      startDate: "3 week ago",
      views: 109,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/2/892_thumbnail.jpg",
      ],
      isPremium: false,
      categories: ["new", "car parts"],
      tags: [""],
    },
  ];

  return (
    <section className=" py-6">
      <div className="container mx-auto ">
        <h2 className="lg:text-xl text-lg font-semibold mb-4">
          Recently viewed listings
        </h2>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {recentlyProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              classes={"p-0 bg-[#ffffff80]"}
              hideMeta={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
