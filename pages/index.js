import HomeSlider from "../components/HomeSlider";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeSection from "../components/HomeSection";
import Head from "next/head";

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
    <div className="container-fluid px-0">
      <Head>
        <title>Paddy Wack Homemade Gifts</title>
        <meta name="description" content="Custom handmade gifts for you or your loved one for any and every occassion." />
        <link rel="icon" href="favicon.ico" />
      </Head>
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
  )
}

export default Home;
