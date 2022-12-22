import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Transition from '../components/Transition';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="full-height">
      <Head>
        <title>Paddy Wack Homemade Gifts</title>
        <meta name="description" content="Custom handmade gifts for you or your loved one for any and every occassion." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <div className="my-5 py-5">&nbsp;</div>
      <Footer />
    </div>
  )
}

export default MyApp;
