// src/components/HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from './../assets/slider_1.png'
import slider2 from './../assets/slider_2.png'
import slider3 from './../assets/slider_3.png'
import slider4 from './../assets/slider_4.png'

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    slider1,
    slider2,
    slider3,
    slider4
  ];

  return (
    <div className='flex justify-center items-center'>
      <div className="hero-section w-11/12 md:w-2/4 flex flex-col justify-center mt-5">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative h-full w-full">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full rounded-xl opacity-80" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              {/* <h2 className="text-white text-4xl font-bold">Slide {index + 1}</h2> */}
            </div>
          </div> 
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default HeroSection;
