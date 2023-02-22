import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const contactPage = await axios(
                'https://backend.paddywackgifts.com/public/api/contact-page'
            );

            setPage(contactPage.data.data[0]);
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <Head>
                <title>Contact Paddy Wack Homemade Gifts</title>
                <meta name="description" content="Custom handmade gifts for you or your loved one for any and every occassion." />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <div className="row">
                <div className="col">
                    <h2 className="display-1">{page.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center" dangerouslySetInnerHTML={{__html: page.page_content}} />
                        </div>
                        <div className="row">
                            <div className="col">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;