import React from 'react';
import "../static/stylesheets/App.css";

const OnlineExhibitionListContainer = () => {
    return (
        <>
            <section id="on_ex_container">
                <div className="left_section">
                    <h2>
                        <input type="checkbox" id="c1" name="" className="leftch" />
                        <label for="c1"><span></span>온라인 전시관</label>
                    </h2>
                    <ul>
                        <li><input type="checkbox" id="c2" name="" className="leftch" /><label for="c2"><span></span>가공식품</label></li>
                        <li><input type="checkbox" id="c3" name="" className="leftch" /><label for="c3"><span></span>간식</label></li>
                        <li><input type="checkbox" id="c4" name="" className="leftch" /><label for="c4"><span></span>건강식품</label></li>
                        <li><input type="checkbox" id="c5" name="" className="leftch" /><label for="c5"><span></span>마을공동체</label></li>
                        <li><input type="checkbox" id="c6" name="" className="leftch" /><label for="c6"><span></span>전통식품</label></li>
                        <li><input type="checkbox" id="c7" name="" className="leftch" /><label for="c7"><span></span>주류</label></li>
                        <li><input type="checkbox" id="c8" name="" className="leftch" /><label for="c8"><span></span>음료,차류</label></li>
                        <li><input type="checkbox" id="c9" name="" className="leftch" /><label for="c9"><span></span>천연염색</label></li>
                        <li><input type="checkbox" id="c10" name="" className="leftch" /><label for="c10"><span></span>화장품</label></li>
                    </ul>
                    <div className="search">
                        <h3>부스명 검색</h3>
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
                            <input type="radio" name="slides" checked="checked" id="slides_2" />
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
                                <label for="slides_1"></label>
                                <label for="slides_2"></label>
                                <label for="slides_3"></label>
                                <label className="goto-first" for="slides_1"></label>
                                <label className="goto-last" for="slides_3"></label>
                            </div>
                        </div>
                        <div className="bigimg">
                            <ul>
                                <li><em>㈜태반의땅 제주 </em><img src={require("../static/img/img_brand_big01.png")} alt="" /></li>
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