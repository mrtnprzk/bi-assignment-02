import { Product } from "../types";
import storeProducts from "./products.json";

export const featuredProduct: Product = storeProducts.find(
  (product) => product.featured
) as Product;

export const allProducts: Product[] = storeProducts.filter(
  (product) => !product.featured
) as Product[];
