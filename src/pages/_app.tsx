import { AppProps } from 'next/app';
import Head from 'next/head';
import '~/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script
          defer
          src="https://analytics.lirena.xyz/script.js"
          data-website-id="7d9f0467-9f61-4fb1-ac4f-6d712106dec5"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
