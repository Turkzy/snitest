import React, { useState, useEffect } from 'react';
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import slide4 from "../../img/slide4.jpg";
import slide5 from "../../img/slide5.jpg";
import "./Slide.css"

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide === 4 ? 0 : prevSlide + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Newsletter-container">
      <div className='container'>
        <div className="wrapper">
          <img className="slide-image" src={currentSlide === 0 ? slide1 : 
            currentSlide === 1 ? slide2 : 
            currentSlide === 2 ? slide3 : 
            currentSlide === 3 ? slide4 : slide5} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>
    </div>
  );
}

export default Slide;
