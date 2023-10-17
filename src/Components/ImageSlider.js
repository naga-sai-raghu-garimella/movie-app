import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IMAGE_URL } from "./ApiLinks/constants";

const ImageSlider = () => {
  const [imgcount, setImgCount] = useState(0);

  const couraselImages = [
    IMAGE_URL + "hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    IMAGE_URL + "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    IMAGE_URL + "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
    IMAGE_URL + "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    IMAGE_URL + "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
  ];

  //courasel - auto-slider__Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (imgcount === couraselImages.length - 1) {
        setImgCount(0);
      } else {
        setImgCount(imgcount + 1);
      }
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imgcount]);

  const prevBtnClickHandler = () => {
    if (imgcount === 0) {
      setImgCount(couraselImages.length - 1);
    } else {
      setImgCount(imgcount - 1);
    }
  };

  const nextBtnClickHandler = () => {
    if (imgcount === couraselImages.length - 1) {
      setImgCount(0);
    } else {
      setImgCount(imgcount + 1);
    }
  };

  return (
    couraselImages && (
      <div>
        <div className="pt-20 mr-6">
          {/* slider */}

          <div className="">
            <button
              className="absolute top-[25%] left-[15%] text-3xl font-semibold text-white hover:scale-x-50"
              onClick={prevBtnClickHandler}
            >
              <IoIosArrowBack />
            </button>
            <div className="pt-3">
              <img
                className="h-52 w-[80%] mx-auto rounded-lg"
                src={couraselImages[imgcount]}
                alt=""
              />
            </div>

            <button
              className="absolute top-[25%] left-[84%] text-3xl font-semibold text-white hover:scale-x-50"
              onClick={nextBtnClickHandler}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    )
  );
};
export default ImageSlider;
