import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
import CommissionForm from "../../components/CommissionForm";

const Commission = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const commissionPage = await axios(
                'https://backend.paddywackgifts.com/public/api/commission-page'
            );

            setPage(commissionPage.data.data[0]);
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Custom Commission Creator - Paddy Wack Homemade Gifts - Create and Submit Your Custom Commission Today</title>
                <meta name="description" content="Upload your favorite image, select the size and shape of your custom commission cross-stitch, and upload to our server, where one of our talented artists will create your amazing custom piece." />
                <meta name="keywords" content="custom commission, creator, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/creator" />
                <meta property="og:title" content="Custom Commission Creator - Paddy Wack Homemade Gifts - Create and Submit Your Custom Commission Today" />
                <meta property="og:description" content="Upload your favorite image, select the size and shape of your custom commission cross-stitch, and upload to our server, where one of our talented artists will create your amazing custom piece." />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/creator" />
                <meta property="twitter:title" content="Custom Commission Creator - Paddy Wack Homemade Gifts - Create and Submit Your Custom Commission Today" />
                <meta property="twitter:description" content="Upload your favorite image, select the size and shape of your custom commission cross-stitch, and upload to our server, where one of our talented artists will create your amazing custom piece." />
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
                                    <CommissionForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Commission;