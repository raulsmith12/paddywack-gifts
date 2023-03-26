import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";

const Shop = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const shopItems = await axios(
                'https://backend.paddywackgifts.com/public/api/shop'
            );

            setItems(shopItems.data.data.reverse());
        }

        fetchData();
    }, [items]);

    const filteredItems = items.filter((item) => {
        return item.name.toLocaleLowerCase().includes(search);
    });

    return (
        <>
            <Head>
                <title>Shop - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content="Shop our online shopping center to find that one-of-a-kind diamond painting or cross-stitch gift for you or your loved one. Whether it's an upcoming anniversary, a birthday, Christmas, or really any occasion, Paddy Wack Homemade Gifts has you covered." />
                <meta name="keywords" content="shop, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/shop" />
                <meta property="og:title" content="Shop - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="og:description" content="Shop our online shopping center to find that one-of-a-kind diamond painting or cross-stitch gift for you or your loved one. Whether it's an upcoming anniversary, a birthday, Christmas, or really any occasion, Paddy Wack Homemade Gifts has you covered." />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/shop" />
                <meta property="twitter:title" content="Shop - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You" />
                <meta property="twitter:description" content="Shop our online shopping center to find that one-of-a-kind diamond painting or cross-stitch gift for you or your loved one. Whether it's an upcoming anniversary, a birthday, Christmas, or really any occasion, Paddy Wack Homemade Gifts has you covered." />
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
                        <h2 className="display-1">Shop</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-right">
                        <div className="container">
                            <div className="row">
                                <div className="col-8 offset-2">
                                    <SearchBox searchChange={setSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row justify-content-center">
                                {filteredItems.map(i => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 text-center" key={i.id}>
                                        <div className="card bg-primo text-white my-3">
                                            <div className="card-img-placeholder">
                                                <img src={i.images[0].thumbnail_url} width="100%" alt={i.name} className="card-img-top" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{i.name}</h5>
                                                <Link href={"/shop/" + i.id} className="btn btn-segundo">Show More</Link>
                                            </div>
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

export default Shop;