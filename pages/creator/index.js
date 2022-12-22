import axios from "axios";
import { useEffect, useState } from "react";
import CommissionForm from "../../components/CommissionForm";

const Commission = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const commissionPage = await axios(
                'https://backend.paddywackgifts.com/public/api/commission-page'
            );

            setPage(commissionPage.data.data[0]);
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
                                <CommissionForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commission;