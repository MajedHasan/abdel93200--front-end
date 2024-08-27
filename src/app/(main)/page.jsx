import Image from "next/image";
import Hero from "./_components/hero";
import Search from "./_components/search";
import Categories from "./_components/categories";
import Premium from "./_components/premium";
import Favorited from "./_components/favorited";
import Latest from "./_components/latest";
import RecentlyViewed from "./_components/recentlyViewed";

export default function Home() {
  return (
    <>
      <Hero />
      <Search />
      <Categories />
      <Premium />
      <Favorited />
      <Latest />
      <RecentlyViewed />
    </>
  );
}
