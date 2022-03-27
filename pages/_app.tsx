import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyle";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Toaster />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
