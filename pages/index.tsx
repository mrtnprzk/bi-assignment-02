import type { NextPage } from "next";
import Head from "next/head";
import FeaturedSection from "../components/FeaturedSection";
import Header from "../components/Header";
import ProductsSection from "../components/ProductsSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BOHEMIA INTERACTIVE</title>
      </Head>
      <Header />
      <FeaturedSection />
      <ProductsSection />
    </>
  );
};

export default Home;
