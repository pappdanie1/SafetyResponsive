import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="App">
            <Slider className="slide-container" {...settings}>
                <div>
                    <img src="/src/assets/img1.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="/src/assets/img2.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="/src/assets/img3.jpg" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel