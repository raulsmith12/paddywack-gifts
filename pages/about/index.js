import axios from "axios";
import { useEffect, useState } from "react";
import Transition from '../../components/Transition';

const About = () => {
    const [aboutPage, setAboutPage] = useState();
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const abouts = await axios(
                'https://backend.paddywackgifts.com/public/api/about'
            );

            setAboutPage(abouts.data.data[0]);

            const getArtists = await axios(
                'https://backend.paddywackgifts.com/public/api/artist'
            );

            setArtists(getArtists.data.data);
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
                    <div className="row pt-2">
                        <div className="col-10 offset-1">
                            <h3 className="display-4">Meet the Artists</h3>
                        </div>
                    </div>
                    {artists.map(i => (
                        <div className="row pt-2" key={i.id}>
                            <div className="col-3 offset-1">
                                <img src={i.image_url} width="65%" alt={i.name} />
                            </div>
                            <div className="col-7">
                                <h4 className="display-5">
                                    {i.name}
                                </h4>
                                <p>{i.description}</p>
                            </div>
                        </div>
                    ))}
                </Transition>
            )}
        </div>
    )
}

export default About;