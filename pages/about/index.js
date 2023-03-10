import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
import Transition from '../../components/Transition';

const About = () => {
    const [aboutPage, setAboutPage] = useState();
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const abouts = await axios(
                'https://backend.paddywackgifts.com/public/api/about'
            );

            setAboutPage(abouts.data.data[0]);

            const getArtists = await axios(
                'https://backend.paddywackgifts.com/public/api/artist'
            );

            setArtists(getArtists.data.data);
        };

        fetchData();
    }, [])

    return (
        <>
            <Head>
                <title>About Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content="Learn more about both the company and the artists behind Paddy Wack Homemade Gifts. Paddy Wack Homemade Gifts is dedicated to delivering high quality custom handmade gifts no matter the occasion." />
                <meta name="keywords" content="Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/about" />
                <meta property="og:title" content="About Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="og:description" content="Learn more about both the company and the artists behind Paddy Wack Homemade Gifts. Paddy Wack Homemade Gifts is dedicated to delivering high quality custom handmade gifts no matter the occasion." />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/about" />
                <meta property="twitter:title" content="About Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="twitter:description" content="Learn more about both the company and the artists behind Paddy Wack Homemade Gifts. Paddy Wack Homemade Gifts is dedicated to delivering high quality custom handmade gifts no matter the occasion." />
                <meta property="twitter:image" content="https://paddywackgifts.com/img/banner_white.png" />
                <link rel="icon" href="favicon.ico" />
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
            <div className="container-fluid">
                {aboutPage && (
                    <Transition>
                        <div className="row pt-2">
                            <div className="col-md-7 col-sm-12 offset-md-1">
                                <h2 className="display-3">{aboutPage.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: aboutPage.description }} />
                            </div>
                            <div className="col-3 d-none d-md-block">
                                <img src={aboutPage.image_url} width="80%" alt="About Paddy Wack Gifts" />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-10 offset-1">
                                <h3 className="display-4">Meet the Artists</h3>
                            </div>
                        </div>
                        {artists.map(i => (
                            <div className="row pt-2" key={i.id}>
                                <div className="col-3 offset-1">
                                    <img src={i.image_url} width="85%" alt={i.name} />
                                </div>
                                <div className="col-7">
                                    <h4 className="display-5">
                                        {i.name}
                                    </h4>
                                    <p>{i.description}</p>
                                </div>
                            </div>
                        ))}
                    </Transition>
                )}
            </div>
        </>
    )
}

export default About;