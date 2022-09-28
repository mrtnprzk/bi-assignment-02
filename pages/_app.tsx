import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { DataProvider } from "../context/DataContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </DataProvider>
  );
}

export default MyApp;
