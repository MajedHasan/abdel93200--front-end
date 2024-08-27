import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "For sale",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/1.png",
      link: "",
    },
    {
      name: "Vehicles",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/2.png",
      link: "",
    },
    {
      name: "Classes",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/3.png",
      link: "",
    },
    {
      name: "Real estate",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/4.png",
      link: "",
    },
    {
      name: "Services",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/5.png",
      link: "",
    },
    {
      name: "Community",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/6.png",
      link: "",
    },
    {
      name: "Personals",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/7.png",
      link: "",
    },
    {
      name: "Jobs",
      icon: "https://easycasse.fr/oc-content/themes/epsilon/images/small_cat/8.png",
      link: "",
    },
  ];

  return (
    <section className="mt-8 mb-12">
      <div className="container mx-auto ">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href={"/"}
            className="py-3 px-4 rounded-lg bg-[#3b49df08] shadow-[0 0 0 1px #00000008 inset] flex flex-col gap-2 items-center w-full max-w-[110px]"
          >
            <img src="" alt="" />
            <p className="text-sm">All</p>
          </Link>
          {categories.map((category) => (
            <Link
              href={category.link}
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
