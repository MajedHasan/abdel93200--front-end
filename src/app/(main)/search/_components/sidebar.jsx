import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, HomeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const categories = [
    {
      id: 1,
      name: "For Sale",
      result: 422,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/1.png",
    },
    {
      id: 2,
      name: "Vehicles",
      result: 136,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/2.png",
    },
    {
      id: 3,
      name: "Classes",
      result: 0,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/3.png",
    },
    {
      id: 4,
      name: "Real estate",
      result: 0,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/4.png",
    },
    {
      id: 5,
      name: "Services",
      result: 0,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/5.png",
    },
    {
      id: 6,
      name: "Community",
      result: 0,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/6.png",
    },
    {
      id: 7,
      name: "Personals",
      result: 0,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/7.png",
    },
    {
      id: 8,
      name: "Jobs",
      result: 0,
      img: "https://epsilon.mb-themes.com/oc-content/themes/epsilon/images/small_cat/sample/8.png",
    },
  ];

  return (
    <aside className="lg:w-[230px] w-full">
      <div className="flex items-center gap-2 mb-4">
        <HomeIcon className="bg-black text-white rounded-lg" />
        <p className="flex items-center text-xs gap-1">
          <Link href={"/"} className="font-semibold hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4" />
          <span>Search results</span>
        </p>
      </div>
      <Form>
        <form
          action=""
          className="hidden lg:flex flex-col gap-3 bg-slate-50 p-3 rounded border"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Keyword</Label>
            <Input type="text" id="email" placeholder="Keyword..." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Location</Label>
            <Input type="text" id="email" placeholder="Region, city..." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Condition</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Transaction</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                  <SelectItem value="exchange">Exchange</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Price range ($)</Label>
            <div className="grid grid-cols-2 w-full gap-1 border rounded">
              <Input type="text" placeholder="Min" />
              <Input type="text" placeholder="Max" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="check-with-seller" />
              <label
                htmlFor="check-with-seller"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Check with seller
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="free" />
              <label
                htmlFor="free"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Free
              </label>
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Period</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="last-week">Last Week</SelectItem>
                  <SelectItem value="last-2-week">Last 2 Week</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Checkbox id="with-picture-only" />
              <label
                htmlFor="with-picture-only"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                With Picture Only
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="premium-items-only" />
              <label
                htmlFor="premium-items-only"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Premium Items Only
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="with-phone-number" />
              <label
                htmlFor="with-phone-number"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                With Phone Number
              </label>
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Radius</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select radius" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1km">1 km</SelectItem>
                  <SelectItem value="5km">5 km</SelectItem>
                  <SelectItem value="10km">10 km</SelectItem>
                  <SelectItem value="50km">50 km</SelectItem>
                  <SelectItem value="100km">100 km</SelectItem>
                  <SelectItem value="500km">500 km</SelectItem>
                  <SelectItem value="2000km">2000 km</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Button className="bg-blue-700 text-white gap-3">
              <SearchIcon />
              <span>Serach</span>
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-4 hidden lg:block">
        <h2 className="text-lg font-semibold">Select category</h2>
        <div className="mt-2 flex flex-col gap-1">
          {categories?.map((category) => (
            <Link
              href={`/`}
              className="flex items-center hover:bg-[#3b49df1f] hover:text-[#2f3ab2] p-1 rounded"
            >
              <img
                src={category?.img}
                alt=""
                className="rounded-full w-8 h-8 p-[5px] bg-white shadow"
              />
              <span className="text-sm">{category?.name}</span>
              <span className="text-xs text-gray-400">
                {category?.result < 1 ? "" : category?.result}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
