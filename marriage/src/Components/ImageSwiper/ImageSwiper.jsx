import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./ImageSwiper.css";

const ImageSwiper = () => {
    return (
        <div className="slider-container">
            <Carousel className="carousel-style" autoPlay={true} infiniteLoop={true} interval={2000} showArrows={true} showThumbs={false} showStatus={false}>
                <div className="slider-item-div">
                    <img className="carousel-image" src="assets/wedding-image1.jpg" alt="" />
                </div>
                <div className="slider-item-div">
                    <img className="carousel-image" src="assets/wedding-image2.jpg" alt="" />
                </div>
                <div className="slider-item-div">
                    <img className="carousel-image" src="assets/wedding-image3.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default ImageSwiper;
