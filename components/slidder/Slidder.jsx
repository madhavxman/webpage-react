import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
//import swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slidder.css";

import { SliderProducts } from "../../data/products";

const Slidder = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640:{
            sliderPerview:3
          },
          0:{
            sliderPerview:1
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          
          <SwiperSlide key={slide.id}>
            
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
              <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slidder;
