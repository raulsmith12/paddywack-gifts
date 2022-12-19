import axios from "axios";
import { useEffect, useState } from "react";
import Transition from '../../components/Transition';

const About = () => {
    const [aboutPage, setAboutPage] = useState();

    useEffect(() => {
        async function fetchData() {
            const abouts = await axios(
                'https://backend.paddywackgifts.com/public/api/about'
            );

            setAboutPage(abouts.data.data[0]);
        };

        fetchData();
    }, [])

    return (
        <div className="container-fluid">
            {aboutPage && (
                <Transition>
                    <div className="row pt-2">
                        <div className="col-7 offset-1">
                            <h2 className="display-3">{aboutPage.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: aboutPage.description }} />
                        </div>
                        <div className="col-3">
                            <img src={aboutPage.image_url} width="80%" alt="About Paddy Wack Gifts" />
                        </div>
                    </div>
                </Transition>
            )}
        </div>
    )
}

export default About;