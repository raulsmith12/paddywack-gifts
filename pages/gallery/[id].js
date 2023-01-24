import axios from "axios";
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
                            <div className="col-3">
                                <Link href="/gallery">Back to Gallery</Link><br /><br />
                                <p className="display-6">{image.description}</p>
                            </div>
                            <div className="col-9">
                                <img src={image.image_url} width="100%" alt={image.description} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;