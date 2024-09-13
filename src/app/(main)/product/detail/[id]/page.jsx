"use client";

import UserCard from "@/components/common/userCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  CreditCardIcon,
  FlagIcon,
  HomeIcon,
  MailOpenIcon,
  StampIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ReactImageGallery from "react-image-gallery";

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

  return (
    <main className=" bg-[#f5f5f5]">
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
            <ReactImageGallery
              showBullets={false}
              showFullscreenButton={false}
              showPlayButton={false}
              items={images}
            />
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
      </div>
    </main>
  );
};

export default page;
