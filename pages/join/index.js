import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
import JoinForm from "../../components/JoinForm";

const Join = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const joinPage = await axios(
                'https://backend.paddywackgifts.com/public/api/join-page'
            );

            setPage(joinPage.data.data[0]);
        };

        fetchData();
    }, [page]);

    return (
        <>
            <Head>
                <title>Join Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content="If you have an artistic talent that you want to share with the world and you are interested in joining Paddy Wack Homemade Gifts, we are interested in you. Join our team of talented artists today!" />
                <meta name="keywords" content="join, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/join" />
                <meta property="og:title" content="Join Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="og:description" content="If you have an artistic talent that you want to share with the world and you are interested in joining Paddy Wack Homemade Gifts, we are interested in you. Join our team of talented artists today!" />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/join" />
                <meta property="twitter:title" content="Join Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="twitter:description" content="If you have an artistic talent that you want to share with the world and you are interested in joining Paddy Wack Homemade Gifts, we are interested in you. Join our team of talented artists today!" />
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
                <div className="row">
                    <div className="col">
                        <h2 className="display-1">{page.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col" dangerouslySetInnerHTML={{__html: page.page_content}} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <JoinForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join;