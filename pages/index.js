import HomeSlider from "../components/HomeSlider";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeSection from "../components/HomeSection";
import Head from "next/head";
import Script from 'next/script';

const Home = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const sliderList = await axios(
              'https://backend.paddywackgifts.com/public/api/home-sliders'
          );

          setSliders(sliderList.data.data);
      }

      fetchData();
  }, [])

  return (
    <>
        <Head>
            <title>Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
            <meta name="description" content="Paddy Wack Homemade Gifts is the home of custom diamond painting or cross-stitch gifts for you or your loved one. Funny, serious, sentimental, sarcastic, if you can think of a gift in your head, there's a good chance Paddy Wack Homemade Gifts can create it for you." />
            <meta name="keywords" content="Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />
            <meta name="robots" content="all" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://paddywackgifts.com" />
            <meta property="og:title" content="Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
            <meta property="og:description" content="Paddy Wack Homemade Gifts is the home of custom diamond painting or cross-stitch gifts for you or your loved one. Funny, serious, sentimental, sarcastic, if you can think of a gift in your head, there's a good chance Paddy Wack Homemade Gifts can create it for you." />
            <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://paddywackgifts.com" />
            <meta property="twitter:title" content="Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
            <meta property="twitter:description" content="Paddy Wack Homemade Gifts is the home of custom diamond painting or cross-stitch gifts for you or your loved one. Funny, serious, sentimental, sarcastic, if you can think of a gift in your head, there's a good chance Paddy Wack Homemade Gifts can create it for you." />
            <meta property="twitter:image" content="https://paddywackgifts.com/img/banner_white.png" />
            <link rel="icon" href="favicon.ico" />
            <link rel="manifest" href="manifest.json" />
        </Head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-S1GM0NB8JS"/>
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S1GM0NB8JS', {
                page_path: window.location.pathname,
                });
            `,
            }}
        />
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="col px-0">
              <div className="home-slider-container">
                <img src="https://paddywackgifts.com/img/banner_white.png" width="50%" alt="Paddy Wack Homemade Gifts" />
                <div className="container-fluid">
                  <div className="row carousel-container">
                    {sliders.map(i => (
                      <HomeSlider image={i.image_url} key={i.id} carouselId={i.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HomeSection />
        </div>
    </>
  )
}

export default Home;
