import axios from "axios";
import Head from "next/head";
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
        <div className="container-fluid">
            <Head>
                <title>Gallery - Paddy Wack Homemade Gifts</title>
                <meta name="description" content="Custom handmade gifts for you or your loved one for any and every occassion." />
                <link rel="icon" href="favicon.ico" />
            </Head>
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
    )
}

export default Gallery;