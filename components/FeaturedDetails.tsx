import Image from "next/image";
import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
}

const FeaturedDetails = ({ product }: Props) => {
  const calculateSize = (size: number | undefined) => {
    if (size) {
      return size / 1000;
    }
  };

  return (
    <div className="text-right w-2/5 ml-10">
      <h4 className="font-bold mb-7">People also buy</h4>
      <div className="flex justify-end gap-8 mb-14">
        {product.details?.recommendations.map((image) => (
          <Image src={image.src} alt={image.alt} height={170} width={120} />
        ))}
      </div>
      <h4 className="font-bold mb-2">Details</h4>
      <div className=" text-gray-500 text-base">
          <p>
            Size: {product.details?.dimmentions.width} x{" "}
            {product.details?.dimmentions.height} pixel
          </p>
          <p>Size: {calculateSize(product.details?.size)} mb</p>
      </div>
    </div>
  );
};

export default FeaturedDetails;
