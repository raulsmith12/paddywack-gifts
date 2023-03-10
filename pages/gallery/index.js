import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import Link from "next/link";
import { useEffect, useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const galleryImages = await axios(
                'https://backend.paddywackgifts.com/public/api/galleries'
            );

            setImages(galleryImages.data.data.reverse());
        }

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Gallery - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content="Take a look in our gallery at past commission pieces that the artists at Paddy Wack Homemade Gifts have made for customers like you over the years. Our gallery pieces are all one-of-a-kind and custom made by hand." />
                <meta name="keywords" content="gallery, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/gallery" />
                <meta property="og:title" content="Gallery - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="og:description" content="Take a look in our gallery at past commission pieces that the artists at Paddy Wack Homemade Gifts have made for customers like you over the years. Our gallery pieces are all one-of-a-kind and custom made by hand." />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/gallery" />
                <meta property="twitter:title" content="Gallery - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="twitter:description" content="Take a look in our gallery at past commission pieces that the artists at Paddy Wack Homemade Gifts have made for customers like you over the years. Our gallery pieces are all one-of-a-kind and custom made by hand." />
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
                        <h2 className="display-1">Gallery</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row justify-content-center">
                                {images.map(i => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 pb-2 text-center" key={i.id}>
                                        <div className="card-img-placeholder">
                                            <Link href={"/gallery/" + i.id}>
                                                <img src={i.thumbnail_url} width="95%" alt={i.description} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;