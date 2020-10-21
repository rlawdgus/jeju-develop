import React, { useCallback } from 'react';

import PeoLeft from '../static/img/img_peo_left.png';
import PeoRight from '../static/img/img_peo_right.png';
import A4 from '../static/img/img_a4.jpg';
import CenterBooth from '../static/img/img_center_booth.png';
import { useHistory } from 'react-router-dom';
import { Paths } from '../paths';
// import Ytube from 'https://www.youtube.com/embed/G9ntaxClfrA'

const OnlineExhibitionContainer = () => {

    const history = useHistory();

    const onClick = useCallback(() => {
        history.push(Paths.exhibition + '/list');
    }, []);

    return (
        <section id="ex_container">
            <h2>화장품관ㅣ(주)마사플래닛</h2>
            <div className="people">
                <span>
                    <img src={PeoLeft} alt="" />
                </span>
                <span>
                    <img src={PeoRight} alt="" />
                </span>
            </div>
            <div className="left">
                <img src={A4} alt="" />
            </div>
            <div className="right">
                <img src={A4} alt="" />
            </div>
            <div className="spot">
                <span>
                    <img src={CenterBooth} alt="" />
                </span>
                <div className="center">
                    <iframe
                        width="660"
                        height="376"
                        src="https://www.youtube.com/embed/G9ntaxClfrA"
                        alt=""
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <button className="buy" onClick={onClick}>
                    제품 구매하러 가기 {'>'}
                </button>
            </div>
        </section>
    );
};

export default OnlineExhibitionContainer;