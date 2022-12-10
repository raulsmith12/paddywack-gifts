import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';
import Header from '../components/Header';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>Paddy Wack Homemade Gifts</title>
        <meta name="description" content="Custom handmade gifts for you or your loved one for any and every occassion." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="container-fluid px-0">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp;
