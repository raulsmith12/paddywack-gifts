import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/owl.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Transition from '../components/Transition';
import { useEffect } from 'react';
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        buttonStyle={{ backgroundColor: "#216093", color: "white" }}
        style={{ backgroundColor: "#922667", zIndex: 9999 }}
      >
        Your privacy is of the utmost importance. We use cookies to enhance the web experience for our customers and will not sell your information to third party advertisers. Please refer to the Paddy Wack Homemade Gifts privacy policy for more details.
      </CookieConsent>
    </div>
  )
}

export default MyApp;
