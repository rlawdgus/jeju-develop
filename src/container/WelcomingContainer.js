import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Paths } from '../paths/index'

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

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    return (
        <section id="main_container" className={current_pack.css}>
            <div className={"tab" + current_pack.css}>
                <ul>
                    <li><Link to={LANGUAGE_PATH + Paths.session} className={"on" + current_pack.css}>{current_pack.title}</Link></li>
                    <li><Link to={LANGUAGE_PATH + Paths.session + '/congraturation'}>{current_pack.title2}</Link></li>
                </ul>
            </div>
            <div className={"main_content" + current_pack.css}>
                <div className={"speech" + current_pack.css}>
                    <i></i>
                    <img src={`${process.env.PUBLIC_URL}/img/bg_welcoming.png`} alt="" />
                    <Link to=""><img src={`${process.env.PUBLIC_URL}/img/bt_moviego.png`} alt="" /></Link>
                    <span> {current_pack.name} </span>
                </div>
            </div>
        </section>
    )
}