import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "For sale",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/1.png",
    },
    {
      name: "Vehicles",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/2.png",
    },
    {
      name: "Classes",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/3.png",
    },
    {
      name: "Real estate",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/4.png",
    },
    {
      name: "Services",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/5.png",
    },
    {
      name: "Community",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/6.png",
    },
    {
      name: "Personals",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/7.png",
    },
    {
      name: "Jobs",
      icon: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/8.png",
    },
  ];

  return (
    <section className="mt-8 mb-12">
      <div className="container mx-auto ">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href={"/search"}
            className="py-3 px-4 rounded-lg bg-[#3b49df08] shadow-[0 0 0 1px #00000008 inset] flex flex-col gap-2 items-center w-full max-w-[110px]"
          >
            <img src="" alt="" />
            <p className="text-sm">All</p>
          </Link>
          {categories.map((category) => (
            <Link
              href={`/search?category=${category.name}`}
              className="py-3 px-4 rounded-lg hover:bg-[#3b49df1a] flex flex-col gap-2 items-center w-full max-w-[110px]"
            >
              <img src={category.icon} alt="" />
              <p className="text-sm">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
