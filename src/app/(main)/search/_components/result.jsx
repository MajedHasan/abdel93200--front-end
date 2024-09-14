"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../_components/productCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ClockIcon, Grid3X3Icon, MenuIcon, MenuSquareIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Result = () => {
  const premiumProducts = [
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
    {
      id: 6,
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
    {
      id: 7,
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [viewType, setViewType] = useState("grid");

  return (
    <section className="flex-1 w-full overflow-hidden p-2">
      <div className="w-full overflow-hidden">
        <h2 className="lg:text-3xl text-xl font-semibold">33 results found</h2>
        <h3 className="lg:text-lg text-md font-semibold">Premium listings</h3>
        <div className="w-full">
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-40-px !w-[220px]"
          >
            {premiumProducts?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-2 justify-between items-center mt-7">
        <Button className="bg-blue-700 gap-2">
          <ClockIcon className="w-5" />
          <span>Create alert</span>
        </Button>
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <RadioGroup defaultValue="grid" className="flex gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="grid"
                id="grid"
                onClick={() => setViewType("grid")}
                hidden
              />
              <Label
                htmlFor="grid"
                className={`flex items-center gap-1 p-1 rounded border-2 ${
                  viewType === "grid" ? "border-blue-700  text-blue-700" : ""
                }`}
              >
                <Grid3X3Icon />
                <span>Grid</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="list"
                id="list"
                onClick={() => setViewType("list")}
                hidden
              />
              <Label
                htmlFor="list"
                className={`flex items-center gap-1 p-1 rounded border-2 ${
                  viewType === "list" ? "border-blue-700  text-blue-700" : ""
                }`}
              >
                <MenuIcon />
                <span>List</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="detail"
                id="detail"
                onClick={() => setViewType("detail")}
                hidden
              />
              <Label
                htmlFor="detail"
                className={`flex items-center gap-1 p-1 rounded border-2 ${
                  viewType === "detail" ? "border-blue-700  text-blue-700" : ""
                }`}
              >
                <MenuSquareIcon />
                <span>Detail</span>
              </Label>
            </div>
          </RadioGroup>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Short" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newly-listed">Newly Listed</SelectItem>
                <SelectItem value="lower-price-first">
                  Lower Price First
                </SelectItem>
                <SelectItem value="higher-price-first">
                  Higher Price First
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Tabs defaultValue="all" className="w-full mt-4">
          <TabsList>
            <TabsTrigger value="all">All Listings</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {premiumProducts?.map((product) =>
                viewType === "grid" ? (
                  <ProductCard product={product} />
                ) : viewType === "list" ? (
                  <>
                    Product List will be here <br />
                  </>
                ) : (
                  <>
                    Product Detail will be here <br />
                  </>
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="personal">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {premiumProducts?.map((product) =>
                viewType === "grid" ? (
                  <ProductCard product={product} />
                ) : viewType === "list" ? (
                  <>
                    Product List will be here <br />
                  </>
                ) : (
                  <>
                    Product Detail will be here <br />
                  </>
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="company">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {premiumProducts?.map((product) =>
                viewType === "grid" ? (
                  <ProductCard product={product} />
                ) : viewType === "list" ? (
                  <>
                    Product List will be here <br />
                  </>
                ) : (
                  <>
                    Product Detail will be here <br />
                  </>
                )
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
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
    </section>
  );
};

export default Result;
