import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const FeaturedImage = ({ src, alt }: Props) => {
  return (
    <div className="relative mt-7 lg:mb-12">
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={1000}
        className="object-cover"
      />
      <p className="bg-white absolute left-0 bottom-0 text-xl font-bold px-12 py-5 lg:px-14 lg:py-6">
        Photo of the day
      </p>
    </div>
  );
};

export default FeaturedImage;
