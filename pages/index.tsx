import type { NextPage } from "next";
import Head from "next/head";
import storeProducts from '../data/products.json';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BOHEMIA INTERACTIVE</title>
        <meta
          name="description"
          content="Created by mrtnprzk for BOHEMIA INTERACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {storeProducts.map(product => (
        <img key={product.name} src={product.image.src} alt={product.image.alt} />
      ))}
    </div>
  );
};

export default Home;
