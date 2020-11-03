import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Loading from '../components/assets/Loading'

import { getShowDocument } from '../api/OnlineExhibitionAPI'

import { Paths } from '../paths/index'
import { useHistory } from 'react-router-dom';



const OnlineExhibitionContainer = ({ viewId, type }) => {
    const URL = "http://14.63.174.102:84";

    const history = useHistory();

    const [booth, setBooth] = useState({})

    const language = useSelector(state => state.language.current);

    const [loading, setLoading] = useState(false);

    const showingDocument = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getShowDocument(viewId)
            setBooth(res)
        } catch (e) {
            alert('찾으시는 부스가 존재하지 않습니다.')
        }
        setLoading(false);
    }, [viewId])



    useEffect(() => {
        try {
            showingDocument();
        } catch (e) {
            alert('서버에 오류가 발생했습니다.');
        }
    }, [showingDocument]);

    const leftLists = [
        {
            num: 0,
            kr_text: "온라인 전시",
            en_text: "Online-Exhibition",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 1,
            id: "c8",
            kr_text: "음료,차류",
            en_text: "Beverages/Tea",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 2,
            id: "c6",
            kr_text: "전통식품",
            en_text: "Traditional Foods",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 3,
            id: "c2",
            kr_text: "가공식품",
            en_text: "Processed Foods",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 4,
            id: "c4",
            kr_text: "건강식품",
            en_text: "Healthy Foods & supplements",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 5,
            id: "c7",
            kr_text: "주류",
            en_text: "Alcoholic drinks",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 6,
            id: "c3",
            kr_text: "간식",
            en_text: "Snacks",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 7,
            id: "c10",
            kr_text: "화장품",
            en_text: "Cosmetics",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 8,
            id: "c9",
            kr_text: "천연염색",
            en_text: "Dyed products",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 9,
            id: "c5",
            kr_text: "마을공동체",
            en_text: "Local community",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 10,
            id: "c11",
            kr_text: "유제품",
            en_text: "Dairy products",
            cn_text: "중국어",
            jp_text: "일본어"
        }
    ]

    const type2 = []
    if (booth.type === 0) {
        type2.push('온라인 전시')
        type2.push('Online-Exhibition')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 1) {
        type2.push('음료,차류')
        type2.push('Beverages/Tea')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 2) {
        type2.push('전통식품')
        type2.push('Traditional Foods')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 3) {
        type2.push('가공식품')
        type2.push('Processed Foods')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 4) {
        type2.push('건강식품')
        type2.push('Healthy Foods & supplements')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 5) {
        type2.push('주류')
        type2.push('Alcoholic drinks')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 6) {
        type2.push('간식')
        type2.push('Snacks')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 7) {
        type2.push('화장품')
        type2.push('Cosmetics')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 8) {
        type2.push('천연염색')
        type2.push('Dyed products')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 9) {
        type2.push('마을공동체')
        type2.push('Local community')
        type2.push('중국어')
        type2.push('일본어')
    }
    else if (booth.type === 10) {
        type2.push('유제품')
        type2.push('Dairy products')
        type2.push('중국어')
        type2.push('일본어')
    }

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            navTitle: "온라인전시관"
        },
        en: {
            css: " language-en",
            navTitle: "OnlineExhibition"
        },
        cn: {
            css: " language-cn",
            navTitle: "중국어"
        },
        jp: {
            css: " language-jp",
            navTitle: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    const listClick = (num) => { history.push(LANGUAGE_PATH + Paths.exhibition + '?type=' + parseInt(num)); };

    const videoType = (link) => {
        const LINK = String(link)

        if (LINK.lastIndexOf("embed") !== -1) {    //유튜브 embed링크로 넘어오는 경우
            return <iframe
                title="youtube"
                width="100%"
                height="300"
                src={link} //비디오 링크가  cms에 추가하는 것이 없음
                alt=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        }
        else if (LINK.length !== 0) {  //유튜브 링크로 넘어오는 경우
            const lastSlash = LINK.lastIndexOf('/')
            const videoID = LINK.slice(lastSlash, LINK.length)
            return <iframe
                title="youtube"
                width="660"
                height="376"
                src={`https://www.youtube.com/embed${videoID}`}
                alt=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        }
        else {  //파일, 링크 두 가지 다 없는 경우 => 
            return <img src={(`${process.env.PUBLIC_URL}/img/ic_check_on.png`)} alt="" width="100%" height="300" />
        }
    }

    return (
        <section id="on_ex_container" className={current_pack.css}>
            {!loading &&
                <>
                    <div className={"subnavi" + current_pack.css}>
                        <ul>
                            <li>{current_pack.navTitle}</li>
                            <li>
                                <label for="touch">{language === 'en' ? <><strong>{language === 'en' ? type2[1]
                                    : language === 'cn' ? type2[2]
                                        : language === 'jp' ? type2[3]
                                            : type2[0]}</strong>{current_pack.unit} </>
                                    : language === 'cn' ? <><strong>{language === 'en' ? type2[1]
                                        : language === 'cn' ? type2[2]
                                            : language === 'jp' ? type2[3]
                                                : type2[0]}</strong>{current_pack.unit} </>
                                        : language === 'jp' ? <><strong>{language === 'en' ? type2[1]
                                            : language === 'cn' ? type2[2]
                                                : language === 'jp' ? type2[3]
                                                    : type2[0]}</strong>{current_pack.unit} </>
                                            : <><strong>{language === 'en' ? type2[1]
                                                : language === 'cn' ? type2[2]
                                                    : language === 'jp' ? type2[3]
                                                        : type2[0]}</strong>{current_pack.unit} </>}</label>
                                <input type="checkbox" id="touch" />
                                <div className={"submenu" + current_pack.css}>
                                    {leftLists.map(list => (
                                        list.num !== 0 &&
                                        <div onClick={() => { listClick(list.num); }} id={list.id} >{language === 'en' ? list.en_text : language === 'cn' ? list.cn_text : language === 'jp' ? list.jp_text : list.kr_text}</div>
                                    ))}
                                </div>
                            </li>
                            <li>{booth.title}</li>
                        </ul>
                        <span><button type="submit"><img src={(`${process.env.PUBLIC_URL}/img/ic_mo_search.png`)} alt="" /></button></span>
                    </div>

                    <section id="ex_container" className={current_pack}>
                        <h2>{language === 'en' ? type2[1]
                            : language === 'cn' ? type2[2]
                                : language === 'jp' ? type2[3]
                                    : type2[0]}ㅣ{booth.title}</h2>

                        <div className={"spot" + current_pack.css}>
                            <span>
                                <img src={URL + booth.photo_1} alt="" />
                            </span>
                            <div className={"center" + current_pack.css}>
                                {videoType(booth.youtube_link)}
                            </div>
                            <div className={"mobuy" + current_pack.css}>
                                <button type="submit" className={"buy" + current_pack.css} onClick={() => window.open(booth.link)}>
                                    {language === 'en' ? "Purchase"
                                        : language === 'cn' ? "중국어"
                                            : language === 'jp' ? "일본어"
                                                : "구매하러 가기"} {'>'}
                                </button>
                            </div>
                            <div className={"mowelcome" + current_pack.css}><a href="#!"><img src={URL + booth.photo_3} alt="no photo_3" /></a></div>
                        </div>

                    </section>



                </>}
            <Loading open={loading} />
        </section>
    );
};

export default OnlineExhibitionContainer;