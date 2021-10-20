import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
            {/* <div>
           1
            </div> */}
            <div className="slider">
            <img src="/car1.jpg" />
            </div>
            {/* <div>
            <img src="/car2.png" />
            </div> */}
            <div className="slider">
            <img src="/car1.jpg" />
            </div>
            {/* <div>
            <img src="/car2.png" />
            </div> */}
            <div className="slider">
            <img src="/car1.jpg" />
            </div>
        </Slider>
      </div>
    );
  }
}