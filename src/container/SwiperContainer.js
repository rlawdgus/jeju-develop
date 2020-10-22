import React from 'react'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import '../static/stylesheets/Swiper.scss'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default ({ dataSet }) => {
  const URL = "http://14.63.174.102:84";
    
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      navigation
      loop
      autoplay
      delay={2500}
    >
      <SwiperSlide>
        {dataSet.title}
        <img style={{ width: 320, height: 200 }} src={URL + dataSet.photo_1} />
      </SwiperSlide>
      <SwiperSlide>
        {dataSet.title}
        <img style={{ width: 320, height: 200 }} src={URL + dataSet.photo_1} />
      </SwiperSlide>
      <SwiperSlide>
        {dataSet.title}
        <img style={{ width: 320, height: 200 }} src={URL + dataSet.photo_1} />
      </SwiperSlide>
      <SwiperSlide>
        {dataSet.title}
        <img style={{ width: 320, height: 200 }} src={URL + dataSet.photo_1} />
      </SwiperSlide>
      <SwiperSlide>
        {dataSet.title}
        <img style={{ width: 320, height: 200 }} src={URL + dataSet.photo_1} />
      </SwiperSlide>
    </Swiper>
  );
};