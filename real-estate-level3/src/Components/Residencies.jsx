import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../Utility/Houses.json"
import Cardss from './Cardss';

const Residencies = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div>
      <div className="slider-container mt-10">
      <div className="flex-row items-start mb-5 ml-4">
            <h2 className="text-2xl text-orange">Best Choices</h2>
            <h2 className="text-4xl text-[#1f3e72]">Popular Residencies</h2>
        </div>
      <Slider {...settings}>
       {
        data.map((item, i) =>(
          <div className='text-start font-body'>
            <Cardss key={i} item={item}/>
          </div>
        ))
       }
      </Slider>
    </div>
    </div>
  )
}

export default Residencies