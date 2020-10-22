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
    console.log(dataSet)
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
      <SwiperSlide>{dataSet.title}</SwiperSlide>
    </Swiper>
  );
};