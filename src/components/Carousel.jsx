import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";

const Carousel = ({ setNormalisedIdx }) => {
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [nIdx, setNIdx] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    beforeChange: (current, next) => setCenterIndex(next),
  };

  const items = [
    { img: "./3.svg", name: "Naruto" },
    { img: "./4.svg", name: "SRK" },
    { img: "./6.svg", name: "Elon Musk" },
    { img: "./7.svg", name: "Anime" },
    { img: "./8.svg", name: "Village Girl" },
    { img: "./10.jpg", name: "Celia" },
    { img: "./11.jpg", name: "Shasha" },
    { img: "./12.jpg", name: "Elda" },
    // { img: "./13.jpg", name: "Klema" },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      setCenterIndex(sliderRef.current.innerSlider.state.currentSlide);
    }
  }, []);
  const getNormalisedIdx = (idx) => {
    const normalizedIdx = (idx - centerIndex + items.length) % items.length;
    return normalizedIdx;
  };

  const getMarginClass = (idx) => {
    const normalizedIdx = (idx - centerIndex + items.length) % items.length;
    if (normalizedIdx === 0) return "mt-28";
    if (normalizedIdx === 1 || normalizedIdx === items.length - 1)
      return "mt-14";
    return "";
  };

  return (
    <div className="w-full max-w-[100vw] lg:-mt-28 -mt-16 max-lg:mb-5 ">
      <Slider ref={sliderRef} {...settings} className="flex gap-5">
        {items.map((item, idx) => {
          setNormalisedIdx(getNormalisedIdx(idx));
          return (
            <div
              key={idx}
              className={`relative  transition-transform !flex items-center flex-col justify-center duration-500 ease-in-out ${getMarginClass(
                idx
              )}`}
            >
              <img
                src={item.img}
                alt={item.name}
                className={cn(
                  "lg:w-60 w-40  lg:rounded-[80px] rounded-[60px] z-10 aspect-square h-auto"
                )}
              />
              {getNormalisedIdx(idx) === 0 && (
                <div className="bg-white lg:-mt-10 -mt-5 z-[500] flex items-center justify-center rounded-full gap-3 text-xl py-2 w-max px-5 ml-[4%] relative">
                  {" "}
                  <img
                    src={item.img}
                    alt={item.name}
                    className={cn(
                      "lg:w-10 lg:h-10 w-7 h-7 rounded-[80px] aspect-square h-auto"
                    )}
                  />
                  <span className="lg:text-base text-sm "> {item.name}</span>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
