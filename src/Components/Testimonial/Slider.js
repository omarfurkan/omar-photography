import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideDiv from './SlideDiv';

const Slider = () => {
    const img = 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1660106232~exp=1660106832~hmac=277bd6473c9640e1cbda3cede0db94a35a0c363f363a00cc863de241468a5472'
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} >
            <SlideDiv img={img} />
            <SlideDiv img={img} />
            <SlideDiv img={img} />
            <SlideDiv img={img} />
        </Carousel>
    );
};

export default Slider;