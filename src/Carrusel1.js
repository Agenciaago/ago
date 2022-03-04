
import './carrusel1.css';
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import img1 from './img/carrusel1/1.jpg';

import img3 from './img/carrusel1/3.jpg';
import img4 from './img/carrusel1/4.jpg';
import img5 from './img/carrusel1/5.jpg';
import img6 from './img/carrusel1/6.jpg';


export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
     
    };
    return (
      <div>
         


        {/* ------SLIDER PRO REACT------ */}
      <div className='slider_react'>
             
              <Slider {...settings}>
           
              
         
         
           
                <div className="img_carousel">
                  <img src={img3} alt=""></img>
                </div>
                <div className="img_carousel">
                  <img src={img4} alt=""></img>
                </div>
                <div className="img_carousel">
                  <img src={img3} alt=""></img>
                </div>
                <div className="img_carousel">
                  <img src={img5} alt=""></img>
                </div>
                <div className="img_carousel">
                  <img src={img6} alt=""></img>
                </div>
                <div className="img_carousel">
                  <img src={img6} alt=""></img>
                </div>
                <div className="img_carousel">
                  <img src={img6} alt=""></img>
                </div>
           
              </Slider>
            </div>
      
      </div>
      
      );
    }
  }