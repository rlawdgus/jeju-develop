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
            title: "컨퍼런스"
        },
        en: {
            css: " language-en",
            title: "Conference"
        },
        cn: {
            css: " language-cn",
            title: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';
    return (
        <section id="main_container" className={current_pack.css}>
            <div className={"tab" + current_pack.css}>
                <ul>
                    <li><Link to={LANGUAGE_PATH + Paths.conference} className={"on" + current_pack.css}>{current_pack.title}</Link></li>
                </ul>
            </div>
            <div className={"main_content" + current_pack.css}>
                <div className={"speech" + current_pack.css}>
                    {/* <i></i> */}
                    {/* <img src={`${process.env.PUBLIC_URL}/img/bg_speech.png`} alt="" /> */}
                    <iframe
                        title="youtube"
                        width="110%"/*100%에서 수정 ***************** */
                        height="551px"
                        // src="http://www.jejusoritv.net/p/index.asp" //비디오 링크가  cms에 추가하는 것이 없음
                        src="https://i.ytimg.com/vi_webp/RIweUEaE2xw/sddefault.webp" //비디오 링크가  cms에 추가하는 것이 없음 //추가 수정됨
                        alt=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* <span> {'<'}이름{'('}소속{')>'} </span> */}
                    <a href="/Conference.pdf"
                       style="color:#fff;background:#f3be38;font-size:16px;display:inline-block;padding:8px 16px;"
                       target="_blank"
                    >컨퍼런스 자료집</a>
                </div>
               
            </div>
        </section>
    )
}