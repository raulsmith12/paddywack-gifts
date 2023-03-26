import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const contactPage = await axios(
                'https://backend.paddywackgifts.com/public/api/contact-page'
            );

            setPage(contactPage.data.data[0]);
        };

        fetchData();
    }, [page]);

    return (
        <>
            <Head>
                <title>Contact Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content="Contact the talented artists at Paddy Wack Homemade Gifts today for your custom diamond painting or cross-stitch gifts for you or your loved one. Funny, serious, sentimental, sarcastic, if you can think of a gift in your head, there's a good chance Paddy Wack Homemade Gifts can create it for you." />
                <meta name="keywords" content="contact, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/contact" />
                <meta property="og:title" content="Contact Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="og:description" content="Contact the talented artists at Paddy Wack Homemade Gifts today for your custom diamond painting or cross-stitch gifts for you or your loved one. Funny, serious, sentimental, sarcastic, if you can think of a gift in your head, there's a good chance Paddy Wack Homemade Gifts can create it for you." />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/contact" />
                <meta property="twitter:title" content="Contact Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="twitter:description" content="Contact the talented artists at Paddy Wack Homemade Gifts today for your custom diamond painting or cross-stitch gifts for you or your loved one. Funny, serious, sentimental, sarcastic, if you can think of a gift in your head, there's a good chance Paddy Wack Homemade Gifts can create it for you." />
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
                                <div className="col text-center" dangerouslySetInnerHTML={{__html: page.page_content}} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;