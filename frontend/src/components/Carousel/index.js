import React, { useState, useEffect } from "react";
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

function Carousel({ title, focusId, setFocusId, videos }) {
  function videoMap(videos) {
    videos = Object.values(videos);
    let count = Math.ceil(videos.length / 5);
    let index = 0;
    let slideCount = 0;
    const returnArr = [];
    while (count) {
      let slides = [];
      while (slideCount < videos.length) {
        slides.push(
          <img className="slide" src={videos[slideCount]?.imageURL}></img>
        );
        slideCount++;
      }
      returnArr.push(
        <Slide className="carouselSlide" index={index}>
          {slides}
        </Slide>
      );
      index += 1;
      count--;
    }
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
