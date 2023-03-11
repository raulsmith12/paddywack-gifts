import axios from "axios";
import Link from "next/link";
import Script from 'next/script';
// import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalButtonContainer from '../../components/PayPalButtonContainer';
import { PayPalId } from '../../components/PayPalId';
import Head from "next/head";

const Item = () => {
    // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState([]);
    const [images, setImages] = useState([]);
    const [image, setImage] = useState();

    useEffect(() => {
        async function fetchData() {
            const itemSet = await axios(
                `https://backend.paddywackgifts.com/public/api/shop/${id}`
            );

            setItem(itemSet.data.data);
            setImages(itemSet.data.data.images);
            setImage(itemSet.data.data.images[0].image_url);
        };

        fetchData();
    }, []);

    // const createCheckOutSession = async () => {
    //     const stripe = await stripePromise;
    //     const checkoutSession = await axios.post('/api/create-stripe-session', {
    //       item: {
    //         picture: image,
    //         price: Math.ceil(item.price * 100),
    //         title: 'Paddy Wack Gifts - ' + item.name,
    //       }
    //     });
    //     const result = await stripe.redirectToCheckout({
    //       sessionId: checkoutSession.data.id,
    //     });
    //     if (result.error) {
    //       alert(result.error.message);
    //     }
    // };

    const metaurl = `https://paddywackgifts.com/shop/${id}`;
    const metaname = `${item.name} - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You`;

    return (
        <>
            <Head>
                <title>{item.name} - Paddy Wack Homemade Gifts - Custom Handmade Gifts Tailor-Made for You</title>
                <meta name="description" content="Shop our online shopping center to find that one-of-a-kind diamond painting or cross-stitch gift for you or your loved one. Whether it's an upcoming anniversary, a birthday, Christmas, or really any occasion, Paddy Wack Homemade Gifts has you covered." />
                <meta name="keywords" content="shop, Paddy Wack Homemade Gifts, custom gifts, cross-stitch, diamond painting" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={metaurl} />
                <meta property="og:title" content={metaname} />
                <meta property="og:description" content="Shop our online shopping center to find that one-of-a-kind diamond painting or cross-stitch gift for you or your loved one. Whether it's an upcoming anniversary, a birthday, Christmas, or really any occasion, Paddy Wack Homemade Gifts has you covered." />
                <meta property="og:image" content={image} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={metaurl} />
                <meta property="twitter:title" content={metaname} />
                <meta property="twitter:description" content="Shop our online shopping center to find that one-of-a-kind diamond painting or cross-stitch gift for you or your loved one. Whether it's an upcoming anniversary, a birthday, Christmas, or really any occasion, Paddy Wack Homemade Gifts has you covered." />
                <meta property="twitter:image" content={image} />
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
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-md-2 col-sm-12 ps-5">
                        <Link href="/shop">Back to Shop</Link>
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <h1 className="display-2">{item.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="container">
                            <div className="row ms-1">
                                <div className="col px-0 pb-2">
                                    <img src={image} width="100%" alt={item.name} />
                                </div>
                            </div>
                            <div className="row ms-1">
                                {images.map(i => (
                                    <div className="col-2 px-0" key={i.id}>
                                        <a href="#" onMouseOver={() => setImage(i.image_url)}>
                                            <img src={i.thumbnail_url} width="100%" alt="thumbnail" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="container">
                            <div className="row">
                                <div className="col" dangerouslySetInnerHTML={{__html: item.description}} />
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <h4>{item.price}</h4>
                                </div>
                                <div className="col-md-4 col-sm-12 d-grid gap-2">
                                    <PayPalScriptProvider
                                        options={{
                                            "client-id": PayPalId,
                                            components: "buttons",
                                            currency: "USD"
                                        }}
                                    >
                                        <PayPalButtonContainer currency="USD" showSpinner={false} price={item.price} />
                                    </PayPalScriptProvider>
                                    {/* <button className="btn btn-lg btn-segundo" onClick={createCheckOutSession}>
                                        Buy with Stripe
                                    </button> */}
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