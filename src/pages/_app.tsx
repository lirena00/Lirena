import { type AppType } from "next/app";
import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
    <script defer src="https://analytics.lirena.xyz/script.js" data-website-id="7d9f0467-9f61-4fb1-ac4f-6d712106dec5"></script>
    </Head>
      <Component {...pageProps} />

    </>
  );
};

export default MyApp;