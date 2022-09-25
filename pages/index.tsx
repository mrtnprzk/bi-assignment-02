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
        <meta
          name="description"
          content="Created by mrtnprzk for BOHEMIA INTERACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <FeaturedSection/>
      <ProductsSection/>
    </>
  );
};

export default Home;
