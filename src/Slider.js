import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slider%201"
            alt="Slider 1"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slider%202"
            alt="Slider 2"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slider%203"
            alt="Slider 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
