import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Item = () => {
    const router = useRouter();
    const { id } = router.query;
    const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const galleryImage = await axios(
                `https://backend.paddywackgifts.com/public/api/galleries/${id}`
            );

            setImage(galleryImage.data.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Gallery Item - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content={`${image.description} Take a look in our gallery at past commission pieces that the artists at Paddy Wack Homemade Gifts have made for customers like you over the years. Our gallery pieces are all one-of-a-kind and custom made by hand.`} />
                <meta name="keywords" content="gallery, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://paddywackgifts.com/gallery/${id}`} />
                <meta property="og:title" content="Gallery Item - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="og:description" content={`${image.description} Take a look in our gallery at past commission pieces that the artists at Paddy Wack Homemade Gifts have made for customers like you over the years. Our gallery pieces are all one-of-a-kind and custom made by hand.`} />
                <meta property="og:image" content={image.image_url} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://paddywackgifts.com/gallery/${id}`} />
                <meta property="twitter:title" content="Gallery Item - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="twitter:description" content={`${image.description} Take a look in our gallery at past commission pieces that the artists at Paddy Wack Homemade Gifts have made for customers like you over the years. Our gallery pieces are all one-of-a-kind and custom made by hand.`} />
                <meta property="twitter:image" content={image.image_url} />
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
                        <h2 className="display-1">Gallery Item</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <Link href="/gallery">Back to Gallery</Link><br /><br />
                                    <p className="display-6">{image.description}</p>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <img src={image.image_url} width="100%" alt={image.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;