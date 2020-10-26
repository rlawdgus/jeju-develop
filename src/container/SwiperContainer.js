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
                            src={ErrorImage}
                            alt=""
                        />{' '}
                    </SwiperSlide>
                </Swiper>
            ) : (
                    <Swiper
                        slidesPerView={5} // 보이는 슬라이드 수
                        slidesPerGroup={5} // 슬라이드 할때 몇개를 슬라이드 할것이냐
                        loop={dataSet.length > 5 ? true : false}
                        loopFillGroupWithBlank={true} // 빈공간은 빈 슬라이드로 채움
                        loopedSlides={5} // 루프를 하면 몇개를 할것인지
                        initslide={0}
                        navigation
                        watchOverflow={true}
                        loopPreventsSlide={true} // 활성화되면 전환이 이미 진행 중일 때 스 와이퍼 슬라이드 이전 / 다음 전환을 방지
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
