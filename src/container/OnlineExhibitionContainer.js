import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { getShowDocument } from '../api/OnlineExhibitionAPI'

import PeoLeft from '../static/img/img_peo_left.png';
import PeoRight from '../static/img/img_peo_right.png';
import A4 from '../static/img/img_a4.jpg';
import CenterBooth from '../static/img/img_center_booth.png';

import { Paths } from '../paths';
import { useSelector } from 'react-redux';

const OnlineExhibitionContainer = () => {

    const language = useSelector(state => state.language.current);

    const history = useHistory();

    const onClick = useCallback(() => {
        history.push(Paths.exhibition + '/list');
    }, [history]);

    const showingDocument = useCallback(async (id) => {
        const result = await getShowDocument(id)

        console.log(result)
    }, [])

    return (
        <section id="ex_container">
            <h2>화장품관ㅣ(주)마사플래닛</h2>
            <div onClick={() => showingDocument(1)} className="api-test">API TEST</div>
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
                        title="youtube"
                        width="660"
                        height="376"
                        src="https://www.youtube.com/embed/G9ntaxClfrA"
                        alt=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <button className="buy" onClick={onClick}>
                    {language === 'ko' ? "제품 구매하러 가기" : "Purchase"} {'>'}
                </button>
            </div>
        </section>
    );
};

export default OnlineExhibitionContainer;