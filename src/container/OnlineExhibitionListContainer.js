import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDocumentList } from '../api/GetDocumentList';

import { firstModalOpen } from '../store/modal';

const OnlineExhibitionListContainer = () => {

    const language = useSelector(state => state.language.current);

    const leftLists = [
        {
            num: 1,
            id: "c8",
            ko_text: "음료,차류",
            en_text: "Beverages/Tea"
        },
        {
            num: 2,
            id: "c6",
            ko_text: "전통식품",
            en_text: "Traditional Foods"
        },
        {
            num: 3,
            id: "c2",
            ko_text: "가공식품",
            en_text: "Processed Foods"
        },
        {
            num: 4,
            id: "c4",
            ko_text: "건강식품",
            en_text: "Healthy Foods & supplements"
        },
        {
            num: 5,
            id: "c7",
            ko_text: "주류",
            en_text: "Alcoholic drinks"
        },
        {
            num: 6,
            id: "c3",
            ko_text: "간식",
            en_text: "Snacks"
        },
        {
            num: 7,
            id: "c10",
            ko_text: "화장품",
            en_text: "Cosmetics"
        },
        {
            num: 8,
            id: "c9",
            ko_text: "천연염색",
            en_text: "Dyed products"
        },
        {
            num: 9,
            id: "c5",
            ko_text: "마을공동체",
            en_text: "Local community"
        }
    ]

    const [type, setType] = useState(0);
    const dispatch = useDispatch();

    const firstOpen = useCallback(() => dispatch(firstModalOpen()), [dispatch]);

    const listClick = async (e) => {
        setType(e.target.value);
        const res = await getDocumentList(e.target.value);
        console.log(res);
    }

    return (
        <>
            <section id="on_ex_container">
                <div className="left_section">
                    <h2>
                        <input type="checkbox" id="c1" name="" className="leftch" value={0} onClick={listClick} />
                        <label htmlFor="c1"><span></span>{language === 'ko' ? "온라인 전시관" : "Online-Exhibition"}</label>
                    </h2>
                    <ul>
                        {leftLists.map(list => (
                            <li key={list.num}>
                                <input type="checkbox" id={list.id} name="" className="leftch" value={list.num} onClick={listClick} />
                                <label htmlFor={list.id}><span></span>{language === 'ko' ? list.ko_text : list.en_text}</label>
                            </li>
                        ))}
                    </ul>
                    <div className="search">
                        <h3>{language === 'ko' ? "부스명 검색" : "Booth name search"}</h3>
                        <span>
                            <input type="text" />
                            <button type="submit"><img src={require("../static/img/ic_search.png")} alt="" /></button>
                        </span>
                    </div>
                    <p><img src={require("../static/img/img_com.png")} alt="" /></p>
                </div>
                <div className="right_section">
                    <div className="content">
                        <div className="subtop menu01">
                            <h3><strong>건강식품</strong>관 </h3>
                        </div>
                        <div className="csslider infinity" id="slider1">
                            <i className="leftbg"></i>
                            <i className="rightbg"></i>
                            <input type="radio" name="slides" id="slides_1" />
                            <input type="radio" name="slides" checked="checked" id="slides_2" readOnly />
                            <input type="radio" name="slides" id="slides_3" />
                            <ul>
                                <li>
                                    <div><em>㈜휴럼</em><img src={require("../static/img/img_brand_sm01.png")} alt="" /></div>
                                    <div><em>㈜시루에 담은 꿈</em><img src={require("../static/img/img_brand_sm02.png")} alt="" /></div>
                                    <div><em>㈜제주자연초</em><img src={require("../static/img/img_brand_sm03.png")} alt="" /></div>
                                    <div><em>㈜에버그린</em><img src={require("../static/img/img_brand_sm04.png")} alt="" /></div>
                                    <div><em>㈜제주자연식품</em><img src={require("../static/img/img_brand_sm05.png")} alt="" /></div>
                                </li>
                                <li>
                                    <div><em>㈜휴럼</em><img src={require("../static/img/img_brand_sm01.png")} alt="" /></div>
                                    <div><em>㈜시루에 담은 꿈</em><img src={require("../static/img/img_brand_sm02.png")} alt="" /></div>
                                    <div><em>㈜제주자연초</em><img src={require("../static/img/img_brand_sm03.png")} alt="" /></div>
                                    <div><em>㈜에버그린</em><img src={require("../static/img/img_brand_sm04.png")} alt="" /></div>
                                    <div><em>㈜제주자연식품</em><img src={require("../static/img/img_brand_sm05.png")} alt="" /></div>
                                </li>
                                <li>
                                    <div><em>㈜휴럼</em><img src={require("../static/img/img_brand_sm01.png")} alt="" /></div>
                                    <div><em>㈜시루에 담은 꿈</em><img src={require("../static/img/img_brand_sm02.png")} alt="" /></div>
                                    <div><em>㈜제주자연초</em><img src={require("../static/img/img_brand_sm03.png")} alt="" /></div>
                                    <div><em>㈜에버그린</em><img src={require("../static/img/img_brand_sm04.png")} alt="" /></div>
                                    <div><em>㈜제주자연식품</em><img src={require("../static/img/img_brand_sm05.png")} alt="" /></div>
                                </li>
                            </ul>
                            <div className="arrows">
                                <label htmlFor="slides_1"></label>
                                <label htmlFor="slides_2"></label>
                                <label htmlFor="slides_3"></label>
                                <label className="goto-first" htmlFor="slides_1"></label>
                                <label className="goto-last" htmlFor="slides_3"></label>
                            </div>
                        </div>
                        <div className="bigimg">
                            <ul>
                                <li><em>㈜태반의땅 제주 </em><img src={require("../static/img/img_brand_big01.png")} alt="" onClick={firstOpen} /></li>
                                <li><em>㈜제주자연식품 </em><img src={require("../static/img/img_brand_big02.png")} alt="" /></li>
                                <li><em>㈜시루에 담은 꿈</em><img src={require("../static/img/img_brand_big03.png")} alt="" /></li>
                                <li><em>㈜태반의땅 제주 </em><img src={require("../static/img/img_brand_big01.png")} alt="" /></li>
                                <li><em>㈜제주자연식품 </em><img src={require("../static/img/img_brand_big02.png")} alt="" /></li>
                                <li><em>㈜시루에 담은 꿈</em><img src={require("../static/img/img_brand_big03.png")} alt="" /></li>
                                <li><em>㈜태반의땅 제주 </em><img src={require("../static/img/img_brand_big01.png")} alt="" /></li>
                                <li><em>㈜제주자연식품 </em><img src={require("../static/img/img_brand_big02.png")} alt="" /></li>
                                <li><em>㈜시루에 담은 꿈</em><img src={require("../static/img/img_brand_big03.png")} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineExhibitionListContainer;