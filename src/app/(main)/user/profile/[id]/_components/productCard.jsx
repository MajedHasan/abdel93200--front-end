import { Button } from "@/components/ui/button";
import { CameraIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative flex items-center gap-2 group">
      <div className="relative">
        <img
          src={product?.images[0]}
          alt=""
          className="w-full max-w-[100px] h-fit object-cover rounded"
        />
        <div className="bg-black/40 text-white text-xs p-1 rounded absolute left-0 right-0 bottom-0 flex items-center gap-1">
          <CameraIcon className="w-4" />
          <span>{product?.images?.length}x</span>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xs">{product?.address}</p>
        <h2 className="text-md font-semibold my-1">
          <Link href={product?.link}>{product?.name}</Link>
          <Link href={product?.link} className="sm:hidden block">
            {product?.price}
          </Link>
        </h2>
        <div className="flex items-center sm:gap-2 gap-[1px] flex-wrap text-sm">
          <span>{product?.startDate}</span>
          {product?.categories?.map((category) => (
            <>
              <span>{category} - </span>
            </>
          ))}
          <span>{product?.views} people viewed</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <h2 className="text-md font-semibold hidden sm:block">
          {product?.price} $
        </h2>
        <Button
          size="icon"
          variant="icon"
          className="invisible group-hover:visible bg-[#c4c4c4] text-white"
        >
          <StarIcon className="w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
