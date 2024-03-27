/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './model.css';
import car from '../assets/car1.png';

function Model() {
  const sliderRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPos({ x: clientX, y: clientY });
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true, // Enable dragging
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd
  };

  return (
    <div className="cmp cmp-s300-product-carousel aem-GridColumn aem-GridColumn--default--12">
      <h3 className="model-heading">AVAILABLE MODELS</h3>

      <Slider
        ref={sliderRef}
        {...settings}
        className={isDragging ? 'model-slider dragging' : 'model-slider'}
        onMouseMove={handleMouseMove}
      >
        <div>
          <img src={car} alt="Slide 1" />
        </div>
        <div>
          <img src="src/assets/car2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="src/assets/car3.png" alt="Slide 3" />
        </div>
      </Slider>

      <div className="center-align">
        <img src="src/assets/text.png" alt="Car" />
      </div>

      <div className="buttons2">
        <button className="discover-btn">DISCOVER</button>
        <button className="view-all-btn">VIEW ALL MODELS</button>
      </div>

      <div className="bar-container">
        <div className="bar" style={{ width: '20%', backgroundColor: '#ff8000' }}></div>
        <div className="bar" style={{ width: '80%', backgroundColor: '#ccc' }}></div>
      </div>

      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{ left: cursorPos.x - 20, top: cursorPos.y - 20 }}
      >
        <p>Drag</p>
      </div>
    </div>
  );
}

export default Model;
