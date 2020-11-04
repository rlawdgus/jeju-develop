import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Paths } from '../paths/index'

export default () => {

    const language = useSelector(state => state.language.current);


    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            title: "환영사",
            title2: "축사",
            catagory: "오프닝세션",
            name: "이름(소속)",
            name2: "이름(소속)"
        },
        en: {
            css: " language-en",
            title: "Welcome Address",
            title2: "Congratulatory message",
            catagory: "OpeningSession",
            name: "name()",
            name2: "name()"
        },
        cn: {
            css: " language-cn",
            title: "중국어",
            title2: "중국어",
            catagory: "",
            name: "중국어",
            name2: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어",
            title2: "일본어",
            catagory: "",
            name: "일본어",
            name2: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';
    return (
        <section id="main_container" className={current_pack.css}>
            <div className={"subnavi" + current_pack.css}>
                <ul>
                    <li>{current_pack.catagory}</li>
                    <li>
                        <label for="touch">{current_pack.title2}</label>
                        <input type="checkbox" id="touch"/> 
                        <div class="submenu sm">
                            <Link to={LANGUAGE_PATH + Paths.session}>{current_pack.title}</Link>
                            <Link to={LANGUAGE_PATH + Paths.session + "/congraturation"}>{current_pack.title2}</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={"main_content" + current_pack.css}>
                <h3 className={"h3tit pt20" + current_pack.css}>{current_pack.title2}</h3>
                <div className={"movie wr" + current_pack.css}>
                    {/* <i></i>
                    <img src={(`${process.env.PUBLIC_URL}/img/bg_mo_movie.png`)} alt="" /> */}
                    <iframe
                        title="youtube"
                        width="100%"
                        height="220px"
                        src="https://www.youtube.com/embed/D6B7JTYF3fQ" //비디오 링크가  cms에 추가하는 것이 없음
                        alt=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* <span> {'<'}이름{'('}소속{')>'} </span> */}
                </div>
                <div className={"movie wr" + current_pack.css}>
                    {/* <i></i>
                    <img src={(`${process.env.PUBLIC_URL}/img/bg_mo_movie.png`)} alt="" /> */}
                    <iframe
                        title="youtube"
                        width="100%"
                        height="220px"
                        src="https://www.youtube.com/embed/ygVM4k7lZck" //비디오 링크가  cms에 추가하는 것이 없음
                        alt=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* <span> {'<'}이름{'('}소속{')>'} </span> */}
                </div>
            </div>
        </section>
    )
}