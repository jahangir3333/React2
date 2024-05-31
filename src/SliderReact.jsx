import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imag from "./images/slider1.jpg";
import "./sliderreact.css"

export default function SliderReact() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    className:"slider",
    centerPadding:"20px",
    arrows:true,
    
  };
  return (
    
    <div className="slider-div">
      <center>
    <Slider {...settings}>
      <div>
        <img src={imag} alt="alt" />
      </div>
      <div>
      <img src={imag} alt="alt" />

      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider></center>
    </div>
    
  );
}