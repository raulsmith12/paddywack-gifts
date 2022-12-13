import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeSection = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const sectionList = await axios(
                'https://backend.paddywackgifts.com/public/api/home-sections'
            );

            setSections(sectionList.data.data);
        }

        fetchData();
    }, [])

    return (
        <div className="row mx-0">
            {sections.map(i => (
                <div className="col-md-4 col-sm-12 text-center" key={i.id}>
                    <Link href={i.link_url} className="text-decoration-none">
                        <img src={i.icon_url} width="25%" alt="like" /><br /><br />
                        <h3 className="text-black">{i.description}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HomeSection;