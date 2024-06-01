// About.jsx

import React from 'react';
import './about.css';
import Slide from '../Slide/Slide';

const About = () => {
  return (
    <div className="about-container">
      <div className="wrapper-container">
        <div className="about-content">
          <h2 className="about-heading">About R Laroya Construction Supply</h2>
          <p>R Laroya Construction Supply is a leading provider of construction materials, tools, and equipment in our region. With years of experience in the industry, we have built a strong reputation for delivering high-quality products and excellent customer service.</p>
          <p>Our mission is to support construction projects of all sizes by providing reliable supplies and equipment that meet the highest standards of quality and durability. Whether you're a contractor, builder, or DIY enthusiast, we have everything you need to get the job done efficiently.</p>
          <p>At R Laroya Construction Supply, we are committed to meeting the needs of our customers and exceeding their expectations. We continuously strive to expand our product range and improve our services to better serve the construction community.</p>
          <p>Contact us today to learn more about how we can help with your construction needs!</p>
        </div>
        <div className="slideshow-container">
          <Slide />
        </div>
      </div>
    </div>
  );
}

export default About;
