import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Camera, IdCardIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="lg:mt-10 mt-3">
      <div className="flex md:flex-row flex-col items-center gap-3">
        <Link
          href={"/dashboard/profile"}
          className="hover:shadow-lg rounded-full border-2 border-transparent hover:border-slate-200 transition-all relative overflow-hidden"
        >
          <img
            src="https://epsilon.mb-themes.com/oc-content/uploads/user-images/5_yQWdL_20240826.png"
            alt=""
            className="rounded-full w-full max-w-[60px]"
          />
          <div className="absolute left-0 right-0 bottom-0 w-full py-[1px] text-center bg-black/40 flex items-center justify-center">
            <Camera className="w-4 text-white" />
          </div>
        </Link>
        <div className="">
          <h2 className="font-semibold text-2xl">Hi Saif Rahaman wave</h2>
          <p>Manage your listings, subscriptions or profile</p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7 mt-5">
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/user/profile/1"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Public Profile</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Your business profile visible to customers, where your
                information, address and listings are shown.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/items?itemType=active"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Active listings </CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Listings that are visible in front and customer can view and
                share them.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/items?itemType=pending_validate"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Validation pending listings</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Listings that are hidden and waiting for yours or
                administrator's validation.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>

        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/items?itemType=expired"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Expired listings</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Listings that are expired and are not visible in front. You can
                renew or recreate them.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/alerts"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Subscriptions</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Notifications you have subscribed to based on specific search
                criteria.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/profile"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>My profile</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Your personal information, profile picture, location, business
                type and others
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>

        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/messages"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Messages</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Instant messages you have recieved & sent to other users.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/dashboard/favorite"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Favorite listings</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Listings you've marked as your favorite.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
        <Card className="bg-slate-50 hover:bg-slate-100">
          <Link href={"/contact-us"}>
            <CardHeader>
              <Button variant="icon" size="icon" className="bg-gray-200">
                <IdCardIcon className="w-24" />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle>Contact us</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Do you have questions regarding our site or need help? Feel free
                to drop us a message.
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
      </div>
    </main>
  );
};

export default page;
