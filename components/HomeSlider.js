import { Carousel } from "react-bootstrap";

const HomeSlider = ({ image, carouselId }) => {
    return (
        <div className="col-4">
            <Carousel fade controls={false} indicators={false} interval={7500} pause={false}>
                <Carousel.Item>
                    <img src="https://paddywackgifts.com/img/blank.png" className="d-block w-100" alt="Blank image" />
                </Carousel.Item>
                {carouselId === 1 ? (
                    <Carousel.Item>
                        <img src={image} className="d-block w-100" alt="Slider image" />
                    </Carousel.Item>
                ) : (
                    <Carousel.Item>
                        <img src="https://paddywackgifts.com/img/blank.png" className="d-block w-100" alt="Blank image" />
                    </Carousel.Item>
                )}
                {carouselId === 2 ? (
                    <Carousel.Item>
                        <img src={image} className="d-block w-100" alt="Slider image" />
                    </Carousel.Item>
                ) : (
                    <Carousel.Item>
                        <img src="https://paddywackgifts.com/img/blank.png" className="d-block w-100" alt="Blank image" />
                    </Carousel.Item>
                )}
                {carouselId === 3 ? (
                    <Carousel.Item>
                        <img src={image} className="d-block w-100" alt="Slider image" />
                    </Carousel.Item>
                ) : (
                    <Carousel.Item>
                        <img src="https://paddywackgifts.com/img/blank.png" className="d-block w-100" alt="Blank image" />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

export default HomeSlider;