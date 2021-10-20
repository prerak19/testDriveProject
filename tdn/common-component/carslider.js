// src/reusable/image-gallery.component.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useCarData } from './../contexts/CarDataContext';

export default function ImageGallaryComponent(props) {
  const [carDetails, setCarDetails] = React.useState(useCarData());

  const tempCarData = useCarData();
  if (props.isActive && carData.fields.Name !== tempCarData.fields.Name) {
    setCarDetails(useCarData());
  }
  const settings = {
    showIndicators: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    showArrows: false,
    showStatus: false,
    // centerMode:true,
    legend: false,
    autoPlay: false,
    interval: '5000',
    infiniteLoop: true,
    transitionTime: '1000',
  };

  return (
    <div className="carSlidercss">
      <div className="pickcar">
        <p>I want to drive a</p>
      </div>
      {/* <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000" */}
      <Carousel
        // onChange={this.onChangeEvent}
        // onClickItem={this.onClickItemEvent}
        // onClickThumb={this.onClickThumbEvent}
        // onSwipeStart={this.onSwipeStartEvent}
        // onSwipeEnd={this.onSwipeEndEvent}
        // onSwipeMove={this.onSwipeMoveEvent}
        {...settings}
      >
        <div>
          <img
            src={
              carDetails && carDetails.fields.Image
                ? carDetails.fields.Image[0].thumbnails.large.url
                : ''
            }
          />
          <p className="legend">{carDetails.fields.Name}</p>
        </div>
        <div>
          <img
            src={
              carDetails && carDetails.fields.Image
                ? carDetails.fields.Image[0].thumbnails.large.url
                : ''
            }
          />
          <p className="legend">{carDetails.fields.Name}</p>
        </div>
        <div>
          <img
            src={
              carDetails && carDetails.fields.Image
                ? carDetails.fields.Image[0].thumbnails.large.url
                : ''
            }
          />
          <p className="legend">{carDetails.fields.Name}</p>
        </div>
      </Carousel>
    </div>
  );
}

// class ImageGallaryComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { carDetails: props.carData };
//   }

//   render() {
//     // const settings = {
//     //     dots: false,
//     //     infinite: true,
//     //     speed: 500,
//     //     responsive: [
//     //       {
//     //         breakpoint: 700,
//     //         settings: {
//     //           arrows: false,
//     //           slidesToShow: 3
//     //         }
//     //       },
//     //       {
//     //         breakpoint: 500,
//     //         settings: {
//     //           arrows: false,
//     //           slidesToShow: 2
//     //         }
//     //       },
//     //       {
//     //         breakpoint: 400,
//     //         settings: {
//     //           arrows: false,
//     //           slidesToShow: 1
//     //         }
//     //       }
//     //     ]
//     //   };
//     const settings = {
//       showIndicators: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       showArrows: false,
//       showStatus: false,
//       // centerMode:true,
//       legend: false,
//       autoPlay: false,
//       interval: '5000',
//       infiniteLoop: true,
//       transitionTime: '1000',
//     };

//     return (
//       <div className="carSlidercss">
//         <div className="pickcar">
//           <p>I want to drive a</p>
//         </div>
//         {/* <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000" */}
//         <Carousel
//           // onChange={this.onChangeEvent}
//           // onClickItem={this.onClickItemEvent}
//           // onClickThumb={this.onClickThumbEvent}
//           // onSwipeStart={this.onSwipeStartEvent}
//           // onSwipeEnd={this.onSwipeEndEvent}
//           // onSwipeMove={this.onSwipeMoveEvent}
//           {...settings}
//         >
//           <div>
//             <img
//               src={
//                 this.state.carDetails && this.state.carDetails.fields.Image
//                   ? this.state.carDetails.fields.Image[0].thumbnails.large.url
//                   : ''
//               }
//             />
//             <p className="legend">{this.state.carDetails.fields.Name}</p>
//           </div>
//           <div>
//             <img
//               src={
//                 this.state.carDetails && this.state.carDetails.fields.Image
//                   ? this.state.carDetails.fields.Image[0].thumbnails.large.url
//                   : ''
//               }
//             />
//             <p className="legend">{this.state.carDetails.fields.Name}</p>
//           </div>
//           <div>
//             <img
//               src={
//                 this.state.carDetails && this.state.carDetails.fields.Image
//                   ? this.state.carDetails.fields.Image[0].thumbnails.large.url
//                   : ''
//               }
//             />
//             <p className="legend">{this.state.carDetails.fields.Name}</p>
//           </div>
//         </Carousel>
//       </div>
//     );
//   }
// }

// export default ImageGallaryComponent;
