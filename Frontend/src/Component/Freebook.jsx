import React from 'react'
import list from '../assets/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card1 from './Card1';

export default function Freebook() {
  console.log(list);
  const filterdata = list.filter((data) => data.category === 'Free');
  console.log(filterdata);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="text-3xl font-bold mb-2">Free Offered Courses</h1>
      <p className="mb-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et ex quas, porro nobis fugiat minima, ipsa, minus sequi unde deserunt officia consectetur reprehenderit voluptatum nisi quidem a ab repellat.
      </p>

      <div className="slider-container">
        <Slider {...settings}>
          {filterdata.map((item) => (
            <Card1 item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
