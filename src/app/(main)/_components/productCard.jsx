import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CameraIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product, classes, hideMeta = false }) => {
  return (
    <Card className={`group/card ${classes}`}>
      <CardHeader className="relative rounded overflow-hidden p-3">
        <Link href={`/product/${product?.id}`} className="w-full block">
          <img
            src={product.images[0]}
            alt="Product Image"
            className="rounded-lg w-full"
          />

          <div className="absolute top-0 left-0 w-full h-fit py-5 px-7 hidden group-hover/card:flex transition-all">
            <Button
              variant="outline"
              className="px-2 bg-black/20 ms-auto group/button"
            >
              <StarIcon className="text-white group-hover/button:text-black" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-fit py-6 px-8 flex items-end justify-between gap-6">
            <div>
              {product?.isPremium && (
                <Badge className="bg-yellow-500 rounded text-black hover:text-white">
                  Premium
                </Badge>
              )}
              <h2 className="text-lg font-semibold text-white mt-1">
                {product.price} $
              </h2>
            </div>
            <div className="flex items-center gap-1 text-white">
              <CameraIcon className="w-3" />
              <span className="text-xs">{product?.images?.length}x</span>
            </div>
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        <Link href={`/product/${product?.id}`} className="w-full block">
          <CardTitle className="text-xl hover:underline">
            {product.name}
          </CardTitle>
        </Link>
      </CardContent>
      {!hideMeta && (
        <>
          <CardFooter>
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <span>{product?.startDate}</span>{" "}
              <span className="font-bold">|</span>
              {product?.categories?.map((category) => (
                <>
                  <span>{category},</span>
                </>
              ))}
              <span className="font-bold">|</span>
              <span>{product?.views} people viewed</span>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
