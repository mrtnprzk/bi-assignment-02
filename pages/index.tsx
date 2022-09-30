import type { NextPage } from "next";
import Head from "next/head";
import FeaturedSection from "../components/FeaturedSection";
import Header from "../components/Header";
import ProductsSection from "../components/ProductsSection";

const Home: NextPage = () => {
  return (
    <div className="max-w-[120rem]">
      <Head>
        <title>SHOP</title>
      </Head>
      <Header />
      <FeaturedSection />
      <ProductsSection />
    </div>
  );
};

export default Home;
