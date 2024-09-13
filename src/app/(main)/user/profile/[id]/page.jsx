import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, HomeIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "./_components/productCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import UserCard from "@/components/common/userCard";

const page = () => {
  const products = [
    {
      id: 1,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 2,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 3,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 4,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 5,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 6,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 7,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 8,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 9,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
    {
      id: 10,
      name: "Admiral ZAX",
      address: "Sergeantsville, United States",
      price: 980,
      images: [
        "https://epsilon.mb-themes.com/oc-content/uploads/3/1218_thumbnail.jpg",
        "",
        "",
        "",
      ],
      startDate: "2 years ago",
      categories: ["Sporting Goods", "Bicycles"],
      views: 36253,
      link: "/",
    },
  ];

  return (
    <main className="py-8 lg:px-0 px-2 bg-[#f5f5f5]">
      <div className="container mx-auto w-full max-w-[1280px]">
        <div className="w-full flex lg:flex-row flex-col gap-8">
          <div className="w-full lg:max-w-xs max-w-full">
            <div className="flex items-center gap-2">
              <HomeIcon className="bg-black text-white rounded-lg" />
              <p className="flex items-center text-xs gap-1">
                <Link href={"/"} className="font-semibold hover:underline">
                  Home
                </Link>
                <ChevronRight className="w-4" />
                <span>John Doe's profile</span>
              </p>
            </div>
            <UserCard />
            <Button className="w-full bg-[#3b49df]">
              <MailIcon className="mr-2 h-4 w-4" /> Send message
            </Button>
            <Button className="w-full my-2 bg-transparent hover:bg-white text-black border border-[#ccc]">
              All seller items (203)
            </Button>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About seller</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  eget lacus maximus, varius quam eu, pharetra est. Quisque
                  ipsum purus, feugiat a faucibus ut, commodo nec massa.
                  Pellentesque vitae gravida erat. Nam id est ipsum. Cras
                  tristique tellus nibh, non placerat nisl auctor nec. Cras ex
                  odio, accumsan et pulvinar lobortis, auctor scelerisque est.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-xl font-bold mt-10">John Doe's listings</h2>
            <div className="flex flex-col gap-3 mt-4">
              {products?.map((product) => (
                <>
                  <ProductCard product={product} />
                  <hr />
                </>
              ))}
            </div>
            <div className="mt-3">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
