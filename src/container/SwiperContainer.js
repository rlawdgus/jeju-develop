import React from 'react';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../static/stylesheets/Swiper.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import ErrorImage from '../static/img/ic_check_on.png';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default ({ dataSet }) => {
    const URL = 'http://14.63.174.102:84';

    return (
        <>
            {dataSet === 'Error' ? (
                <Swiper>
                    <SwiperSlide>
                        <img
                            className="error"
                            style={{ width: '100%', height: '200px' }}
                            src={ErrorImage}
                            alt=""
                        />{' '}
                    </SwiperSlide>
                </Swiper>
            ) : (
                    <Swiper
                        spaceBetween={10} // 슬라이드 간 거리
                        slidesPerView={5} // 보이는 슬라이드 수
                        slidesPerGroup={5} // 슬라이드 할때 몇개를 슬라이드 할것이냐
                        // loop={true} // 반복
                        // loopFillGroupWithBlank={true} // 빈공간은 빈 슬라이드로 채움
                        // loopedSlides={5} // 루프를 하면 몇개를 할것인지
                        // pagination={{ clickable: true }}
                        navigation
                        delay={2500}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {' '}
                        {dataSet.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div>
                                    <em>{data.title}</em>
                                    <img src={URL + data.photo_1} alt="no_image" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
        </>
    );
};
