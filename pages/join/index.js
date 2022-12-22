import axios from "axios";
import { useEffect, useState } from "react";
import JoinForm from "../../components/JoinForm";

const Join = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const joinPage = await axios(
                'https://backend.paddywackgifts.com/public/api/join-page'
            );

            setPage(joinPage.data.data[0]);
        };

        fetchData();
    }, []);

    return (
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
                            <div className="col" dangerouslySetInnerHTML={{__html: page.page_content}} />
                        </div>
                        <div className="row">
                            <div className="col">
                                <JoinForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;