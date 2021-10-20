// src/reusable/image-gallery.component.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

class Setcarslider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      autoPlay: true,
    };
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    const settings = {
      showIndicators: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      showArrows: false,
      showStatus: false,
      centerMode: true,
      legend: false,
      autoPlay: false,
      infiniteLoop: true,
      showThumbs: false,
      centerSlidePercentage: 33,
      transitionTime: 300,
    };

    const settingMobile = {
      showIndicators: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      showArrows: true,
      showStatus: false,
      legend: false,
      autoPlay: false,
      infiniteLoop: true,
      showThumbs: false,
      transitionTime: 300,
    };

    return (
      <div className="setcarSlidercss">
        <div className="hideContent display-flex">
          <button className="carousel-btn left" onClick={this.prev}>
            <FontAwesomeIcon icon={faChevronLeft} size="1x" />
          </button>
          <Carousel
            {...settings}
            selectedItem={this.state.currentSlide}
            onChange={this.updateCurrentSlide}
          >
            <div>
              <img
                src={
                  this.props.selectedCarData &&
                  this.props.selectedCarData.fields &&
                  this.props.selectedCarData.fields.Image[0].thumbnails.large
                    .url
                }
              />
            </div>
            <div>
              <img
                src={
                  this.props.selectedCarData &&
                  this.props.selectedCarData.fields &&
                  this.props.selectedCarData.fields.Image[0].thumbnails.large
                    .url
                }
              />
            </div>
            <div>
              <img
                src={
                  this.props.selectedCarData &&
                  this.props.selectedCarData.fields &&
                  this.props.selectedCarData.fields.Image[0].thumbnails.large
                    .url
                }
              />
            </div>
          </Carousel>
          <button className="carousel-btn right" onClick={this.next}>
            <FontAwesomeIcon icon={faChevronRight} size="1x" />{' '}
          </button>
        </div>
        {/* for mobile responsive slider  */}

        <Carousel className="hideForMobile" {...settingMobile}>
          <div>
            <img
              src={
                this.props.selectedCarData &&
                this.props.selectedCarData.fields &&
                this.props.selectedCarData.fields.Image[0].thumbnails.large.url
              }
            />
          </div>
          <div>
            <img
              src={
                this.props.selectedCarData &&
                this.props.selectedCarData.fields &&
                this.props.selectedCarData.fields.Image[0].thumbnails.large.url
              }
            />
          </div>
          <div>
            <img
              src={
                this.props.selectedCarData &&
                this.props.selectedCarData.fields &&
                this.props.selectedCarData.fields.Image[0].thumbnails.large.url
              }
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Setcarslider;
