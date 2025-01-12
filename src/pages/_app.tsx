import { type AppType } from "next/app";
import Script from "next/script";
import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://analytics-eta-green.vercel.app/script.js"
        data-website-id="7d9f0467-9f61-4fb1-ac4f-6d712106dec5"
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
