import React, { useState, useEffect } from "react";
import Arrows from "./Arrows";

function CarouselSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container-slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}>
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {children.map((item, index) => (
            <div className="slider-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="container-slider-links">
        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container-slider-links-small container-slider-links-small-active"
                : "container-slider-links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}></button>
        ))}
      </div>

      <button
        className="slider-btn slider-btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}>
        <Arrows direction="right" />
      </button>
      <button
        className="slider-btn slider-btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}>
        <Arrows direction="left" />
      </button>
    </div>
  );
}

export default CarouselSlider;
