import React from "react";
import { useDispatch } from "react-redux";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { setFocusModal } from "../../store/Modals";
import { getVideoComments } from "../../store/reviews";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css";

function Carousel({ title, focusId, setFocusId, videos }) {
  const dispatch = useDispatch();
  const onClick1 = (id) => {
    setFocusId(id);
  };
  const onClick2 = (id) => {
    dispatch(setFocusModal(id));
    dispatch(getVideoComments(id));
  };

  function videoMap(videos) {
    let count = Math.ceil(videos.length / 5);
    let index = 0;
    let slideTotal = 0;
    let slideCount = 1;
    let returnArr = [];
    while (count) {
      let slides = [];
      while (slideTotal < videos.length && slideCount % 6 !== 0) {
        const currentSlide = slideTotal;
        slides.push(
          <img
            className="slide"
            alt={`slide${slideCount}`}
            src={videos[slideTotal]?.imageURL}
            onClick={() => onClick2(videos[currentSlide]?.id)}
            onMouseEnter={
              title === "Trending" ? () => onClick1(currentSlide) : null
            }
          ></img>
        );
        slideCount++;
        slideTotal++;
      }
      returnArr.push(
        <Slide className="carouselSlide" index={index}>
          {slides}
        </Slide>
      );
      slideCount = 1;
      index++;
      count--;
    }
    returnArr = [...returnArr];
    return returnArr;
  }
  return (
    <div className="carouselOuterShell">
      <div className="carouselTitleShell">
        <div className="carouselTitle">{title}</div>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={videos ? Math.ceil(Object.values(videos).length / 5) : 1}
        infinite={true}
        className="carouselInnerShell"
      >
        <ButtonBack className="carouselButton cbLeft">
          <i className="fas fa-angle-left arrowLeft"></i>
        </ButtonBack>
        <Slider className="carouselSlider">{videos && videoMap(videos)}</Slider>
        <ButtonNext className="carouselButton cbRight">
          <i className="fas fa-angle-right arrowRight"></i>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
