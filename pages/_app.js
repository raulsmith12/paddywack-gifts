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
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <div className="my-5 py-5">&nbsp;</div>
      <Footer />
      <div className="alert alert-success alert-dismissible fade show fixed-bottom" role="alert">
        <p>Paddy Wack Homemade Gifts uses cookies to better the web experience for everyone. We have a strict privacy policy that prohibits us from selling user information to third party advertisers.</p>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
      </div>
    </div>
  )
}

export default MyApp;
