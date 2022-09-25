import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const FeaturedImage = ({ src, alt }: Props) => {
  return (
    <div className="relative mt-7 mb-12">
      <Image src={src} alt={alt} width={4000} height={2400} />
      <p className="bg-white absolute left-0 bottom-0 text-xl font-bold px-14 py-6">Photo of the day</p>
    </div>
  );
};

export default FeaturedImage;
