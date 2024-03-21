/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './model.css'

function Model() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="cmp cmp-s300-product-carousel aem-GridColumn aem-GridColumn--default--12">
      <h3 className="model-heading">AVAILABLE MODELS</h3>

      <Slider {...settings} className="model-slider">
        <div>
          <img src="public/car1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="public/car2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="public/car3.png" alt="Slide 3" />
        </div>
      </Slider>

      <div className="center-align">
        <img src="../public/text.png" alt="Car" />
      </div>

      <div className="buttons">
        <button className="discover-btn">DISCOVER</button>
        <button className="view-all-btn">VIEW ALL MODELS</button>
      </div>

      <div className="bar-container">
        <div className="bar" style={{ width: '20%', backgroundColor: '#ff8000' }}></div>
        <div className="bar" style={{ width: '80%', backgroundColor: '#ccc' }}></div>
      </div>
    </div>
  );
}

export default Model;
