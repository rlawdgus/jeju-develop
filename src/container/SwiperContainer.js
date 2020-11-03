import React from 'react';
import { useSelector } from 'react-redux';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../static/stylesheets/Swiper.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import ErrorImage from '../../public/img/ic_check_on.png';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default ({ dataSet, firstOpen }) => {
    const URL = 'http://14.63.174.102:84';

    const language = useSelector(state => state.language.current);
    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: ""
        },
        en: {
            css: " language-en"
        },
        cn: {
            css: " language-cn"
        },
        jp: {
            css: " language-jp"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //-------------------------------------------------------------------------------------


    return (
        <>
            {dataSet === 'Error' ? (
                <Swiper>
                    <SwiperSlide>
                        <img
                            className={"error" + current_pack.css}
                            src={(`${process.env.PUBLIC_URL}/img/ic_check_on.png`)}
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            ) : (
                    <Swiper
                        slidesPerView={3} // 보이는 슬라이드 수
                        slidesPerGroup={3} // 슬라이드 할때 몇개를 슬라이드 할것이냐
                        loop={dataSet.length > 3 ? true : false}
                        loopedSlides={3} // 루프를 하면 몇개를 할것인지
                        initialSlide={0}
                        navigation
                        watchOverflow={true}
                        loopPreventsSlide // 활성화되면 전환이 이미 진행 중일 때 스 와이퍼 슬라이드 이전 / 다음 전환을 방지
                        delay={300}
                    >
                        {dataSet.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div>
                                    <em>{language === 'en' ? data.contents_en : data.contents}</em>
                                    <img src={URL + data.photo_2} alt="no_image" onClick={() => firstOpen(data.id)} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
            }
        </>
    );
};
