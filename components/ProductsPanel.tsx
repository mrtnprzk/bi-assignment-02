import React from "react";
import Image from "next/image";
import storeProducts from "../data/products.json";

const ProductsPanel = () => {

  const products = storeProducts.filter((product) => !product.featured);

  return (
    <div className="w-5/6 grid gap-12 grid-cols-3 ml-12">
      {products.map((product) => (
        <Image
          key={product.name}
          src={product.image.src}
          alt={product.image.alt}
          width={1100}
          height={1600}
        />
      ))}
    </div>
  );
};

export default ProductsPanel;
