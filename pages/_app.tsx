import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import React from "react";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
     <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
    </ThemeProvider>
    </>

      );
    }

export default MyApp;
