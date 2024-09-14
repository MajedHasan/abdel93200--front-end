"use client";

import ProductCard from "@/app/(main)/_components/productCard";
import UserCard from "@/components/common/userCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  CreditCardIcon,
  FlagIcon,
  HomeIcon,
  MailOpenIcon,
  MapPinnedIcon,
  StampIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const page = () => {
  // const images = [
  //   {
  //     original:
  //       "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     thumbnail:
  //       "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     original:
  //       "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     thumbnail:
  //       "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     original:
  //       "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     thumbnail:
  //       "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     original:
  //       "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     thumbnail:
  //       "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     original:
  //       "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     thumbnail:
  //       "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  // ];

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const relatedProducts = [
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

  return (
    <main className=" bg-[#f5f5f5]" id="product-detail-page">
      <div className="container mx-auto py-6 w-full max-w-[1280px]">
        <div className="w-full flex xl:flex-row flex-col justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <HomeIcon className="bg-black text-white rounded-lg" />
              <p className="flex items-center text-xs gap-1">
                <Link href={"/"} className="font-semibold hover:underline">
                  Home
                </Link>
                <ChevronRight className="w-4" />
                <Link
                  href={"/search?category=electronics"}
                  className="font-semibold hover:underline"
                >
                  Electronics
                </Link>
                <ChevronRight className="w-4" />
                <span> New iPhone XS 2019, 1199.00 $</span>
              </p>
            </div>
            <div className="mt-4">
              <ReactImageGallery
                showBullets={false}
                showFullscreenButton={false}
                showPlayButton={false}
                items={images}
              />
              <div className="flex justify-between gap-4">
                <div className="flex-1 flex flex-col gap-2 items-start">
                  <h2 className="text-xl font-semibold">New iPhone XS 2019</h2>
                  <Badge className="bg-[#e4d51b] rounded text-black hover:text-white">
                    Premium
                  </Badge>
                  <div className="flex items-center flex-wrap gap-2 text-sm">
                    <span>Electronics</span>, <span>4653 views</span>,
                    <span>ID: 63</span>
                  </div>
                  <h2 className="text-xl font-semibold">1199.00 $</h2>
                  <Button variant="outline" className="underline">
                    Make price offer
                  </Button>
                  <p className="text-xs text-gray-500">
                    Published on 2022/03/23
                  </p>
                </div>
                <div>
                  <Button size="icon" variant="icon" className="bg-[#c4c4c4]">
                    <StarIcon className="w-5 text-white" />
                  </Button>
                </div>
              </div>
              <hr className="mt-5" />
              <div className="flex justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">Description</h2>
                  <p className="text-sm">
                    Donec consectetur dolor non purus ornare dignissim. In vel
                    porttitor augue. a non placerat urna. Maecenas ut sapien
                    molestie, iaculis enim a, fringilla massa. Donec lacus
                    massa, ornare id ante nec, rutrum volutpat dolor. Vivamus
                    placerat efficitur ipsum, convallis suscipit risus rhoncus
                    consequat. Fusce suscipit ultricies auctor. Sed vel odio
                    imperdiet, ornare nunc at, malesuada sapien. Quisque id ante
                    nec est hendrerit tincidunt. Fusce lobortis ligula a
                    volutpat ultrices. Vestibulum imperdiet tempor felis ut
                    pulvinar. Maecenas vel massa commodo, interdum odio a,
                    suscipit sem. Ut fermentum sed orci condimentum sagittis.
                    Fusce gravida molestie mauris, a maximus felis ultrices ut.
                    am dictum vel a sit amet convallis. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Aenean euismod, mauris et dignissim molestie, est
                    turpis pretium purus, nec vulputate justo nisl rutrum velit.
                    In eleifend orci id erat sodales, gravida dapibus nisi
                    efficitur. Phasellus non tempus ante, at sodales mi.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                </div>
                <div className="border-l-2 border-l-blue-600 p-2">
                  <div className="flex items-center gap-2 ">
                    <MapPinnedIcon className="w-5" />
                    <span className="font-semibold"> Location</span>
                  </div>
                  <p className="text-sm">
                    Ireton <br /> Iowa <br /> United States
                  </p>
                  <p className="text-xs my-3">
                    42.9747053, <br /> -96.3183457
                  </p>
                  <Link
                    href={"https://maps.google.com"}
                    className="hover:underline text-blue-600 font-semibold text-sm"
                  >
                    Get Direction
                  </Link>
                </div>
              </div>
              <div className="mt-6 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96777825177!2d2.2646352287659353!3d48.858825492593304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sbd!4v1726318871548!5m2!1sen!2sbd"
                  height="300"
                  style={{ border: 0, width: "100%" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold">Comments</h2>
                <p className="text-sm text-gray-400">
                  No comments has been added yet
                </p>
              </div>
              <hr className="mt-5" />
            </div>
          </div>
          <div className="w-full lg:max-w-xs">
            <Button className="w-full bg-[#3b49df]">
              <MailOpenIcon className="mr-2 h-4 w-4" /> Send message
            </Button>
            <UserCard />
            <Button
              className="w-full my-2 bg-transparent hover:bg-white text-black border border-[#ccc]"
              asChild
            >
              <Link href={`/user/profile/1`}>Seller's Profile</Link>
            </Button>
            <Button
              className="w-full my-2 bg-transparent hover:bg-white text-black border border-[#ccc]"
              asChild
            >
              <Link href={`/search?userId=1`}>All seller items (203)</Link>
            </Button>
            <Card>
              <CardHeader>
                <CardTitle>Be careful!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative bg-[#3b49df26] p-2 rounded">
                    <CreditCardIcon className="text-[#3b49df]" />
                    <hr className="absolute top-0 right-0 left-0 h-1 w-full bg-[#3b49df] mt-[18px] -rotate-45" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      Never pay down a deposit in a bank account until you have
                      met the seller, seen signed a purchase agreement.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative bg-[#3b49df26] p-2 rounded">
                    <StampIcon className="text-[#3b49df]" />
                    <hr className="absolute top-0 right-0 left-0 h-1 w-full bg-[#3b49df] mt-[18px] -rotate-45" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      No serious private advertisers ask for a down payment
                      before you meet.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative bg-[#3b49df26] p-2 rounded">
                    <UserIcon className="text-[#3b49df]" />
                    <hr className="absolute top-0 right-0 left-0 h-1 w-full bg-[#3b49df] mt-[18px] -rotate-45" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      Receiving an email with an in-scanned ID does not mean
                      that you have identified the sender. You do this on the
                      spot, when you sign a purchase agreement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full my-2 bg-transparent hover:bg-white text-black border border-[#ccc] gap-3">
              <FlagIcon className="w-4" />
              <span>Report listing</span>
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-4">Related items</h2>
          <div>
            <Carousel
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              {relatedProducts?.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
