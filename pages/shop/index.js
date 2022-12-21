import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const shopItems = await axios(
                'https://backend.paddywackgifts.com/public/api/shop'
            );

            setItems(shopItems.data.data.reverse());
        }

        fetchData();
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h2 className="display-1">Shop</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container">
                        <div className="row justify-content-center">
                            {items.map(i => (
                                <div className="col-4 text-center" key={i.id}>
                                    <div className="card bg-primary text-white my-3">
                                        <div className="card-img-placeholder">
                                            <img src={i.images[0].thumbnail_url} width="100%" alt={i.name} className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{i.name}</h5>
                                            <Link href="/" className="btn btn-secondary">Show More</Link>
                                        </div>
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

export default Shop;