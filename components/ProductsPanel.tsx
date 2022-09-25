import React from 'react'
import Image from "next/image";
import storeProducts from "../data/products.json";

const ProductsPanel = () => {
  return (
    <div className='grid gap-4 grid-cols-3'>
        {storeProducts.map((product) => (
        <Image
          key={product.name}
          src={product.image.src}
          alt={product.image.alt}
          width={280}
          height={400}
        />
      ))}
    </div>
  )
}

export default ProductsPanel