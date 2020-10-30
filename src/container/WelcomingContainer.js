import React from 'react'
import { useSelector } from 'react-redux'

// import { Paths } from '../paths/index'

export default () => {

    const language = useSelector(state => state.language.current);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            title: "환영사",
            title2: "축사",
            name: "이름(소속)"
        },
        en: {
            css: " language-en",
            title: "Welcome Address",
            title2: "Congratulatory message",
            name: "name()"
        },
        cn: {
            css: " language-cn",
            title: "중국어",
            title2: "중국어",
            name: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어",
            title2: "일본어",
            name: "일본어"
        }
    }
    
    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    // const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    return (
        <section id="main_container" className={current_pack.css}>
        <div className={"subnavi" + current_pack.css}>
            <ul>
                <li>오프닝세션</li>
                <li>환영사</li>
            </ul>
        </div>
        <div className={"main_content" + current_pack.css}>
            <h3 className={"h3tit" + current_pack.css}>환영사</h3>
            <div className={"movie wr" + current_pack.css}>
                {/* <i></i>
                <img src={(`${process.env.PUBLIC_URL}/img/bg_mo_movie.png`)} alt=""/> */}
                <iframe
                        title="youtube"
                        width="100%"
                        height="220px"
                        src="https://www.youtube.com/embed/KV5xCWgDiZs" //비디오 링크가  cms에 추가하는 것이 없음
                        alt=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                <span> {'<'}이름{'('}소속{')>'} </span>
            </div>
        </div>
    </section>
        
    )
}