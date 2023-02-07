import axios from "axios";
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
    });

    const filteredItems = items.filter((item) => {
        return item.name.toLocaleLowerCase().includes(search);
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h2 className="display-1">Shop</h2>
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                    <div className="container">
                        <div className="row mx-5 px-5">
                            <div className="col-12 mx-5 px-5">
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
    )
}

export default Shop;