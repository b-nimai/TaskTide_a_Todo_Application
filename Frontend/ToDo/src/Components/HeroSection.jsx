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
    autoplaySpeed: 3000,
  };

  const images = [
    slider1,
    slider2,
    slider3,
    slider4
  ];

  return (
    <section className="hero-section mt-20">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative h-96 w-1/2">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-96 flex justify-around items-center" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              {/* <h2 className="text-white text-4xl font-bold">Slide {index + 1}</h2> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
