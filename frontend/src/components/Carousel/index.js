import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="carouselOuterShell">
      <div className="carouselTitleShell">
        <div className="carouselTitle">ValHeim</div>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className="carouselInnerShell"
      >
        <ButtonBack className="carouselButton">
          <i className="fas fa-angle-left"></i>
        </ButtonBack>
        <Slider className="carouselSlider">
          <Slide className="carouselSlide" index={0}>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
          </Slide>
          <Slide className="carouselSlide" index={1}>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
            <img
              className="slide"
              src="https://netsteambucket.s3.amazonaws.com/header.jpg"
            ></img>
          </Slide>
          <Slide className="carouselSlide" index={2}>
            I am the third Slide.
          </Slide>
        </Slider>
        <ButtonNext className="carouselButton">
          <i className="fas fa-angle-right"></i>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
