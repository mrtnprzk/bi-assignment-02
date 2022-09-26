import Image from "next/image";
import React from "react";
import { Product } from "../types";
import { calculateSize } from "../utilities/functions";

interface Props {
  product: Product;
}

const FeaturedDetails = ({ product }: Props) => {
  return (
    <div className="lg:text-right lg:w-2/5 lg:ml-10">
      <h4 className="font-bold mb-7">People also buy</h4>
      <div className="flex lg:justify-end mb-10 gap-6 lg:mb-14 lg:gap-8">
        {product.details?.recommendations.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={170}
            width={120}
          />
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
