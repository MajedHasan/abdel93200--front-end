import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { MapIcon, PhoneIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const UserCard = () => {
  return (
    <Card className="mt-4 mb-2">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Badge className="absolute top-1 right-1 w-4 h-4 p-0 bg-green-600 border-2 border-white"></Badge>
            <img
              src="https://epsilon.mb-themes.com/oc-content/uploads/user-images/2_Wp30T_20220323.png"
              alt=""
              className="rounded-full w-full max-w-[75px]"
            />
          </div>
          <div className="flex-1">
            <CardTitle>John Doe</CardTitle>
            <CardDescription>203 active listings</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-1">
          <StarIcon className="bg-green-600 text-white rounded p-1" />
          <StarIcon className="bg-green-600 text-white rounded p-1" />
          <StarIcon className="bg-green-600 text-white rounded p-1" />
          <StarIcon className="bg-green-600 text-white rounded p-1" />
          <StarIcon className="bg-green-600 text-white rounded p-1" />
          <span className="text-xs">4.5</span>
        </div>
        <Button variant="ghost" className="hover:underline">
          Rate this-user
        </Button>
        <div className="mt-1 text-sm">
          <p>Last online 10 months ago</p>
          <p>Registered for 2+ years</p>
          <div className="flex items-center gap-2 mt-3">
            <MapIcon className="w-5" />
            <span> Krasnaya Poyma</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <Link
          href={"/"}
          className="bg-[#3b49df1a] text-[#3b49df] flex w-fit py-1 px-4 rounded text-sm"
        >
          <PhoneIcon className="w-4" />
          <span className=""> +21232xxxx</span>
        </Link>
        <Link
          href={"/"}
          className="bg-[#3b49df1a] text-[#3b49df] flex w-fit py-1 px-4 rounded text-sm"
        >
          <PhoneIcon className="w-4" />
          <span className=""> +99212xxxx</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
