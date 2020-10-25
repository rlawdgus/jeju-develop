import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Paths } from '../paths/index'

export default () => {

    const language = useSelector(state => state.language.current);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            title: "환영사",
            title2: "축사",
            name: "이름(소속)"
        },
        en: {
            title: "Welcome Address",
            title2: "Congratulatory message",
            name: "name()"
        },
        cn: {
            title: "중국어",
            title2: "중국어",
            name: "중국어"
        },
        jp: {
            title: "일본어",
            title2: "일본어",
            name: "일본어"
        }
    }
    
    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    return (
        <section id="main_container">
            <div className="tab">
                <ul>
                    <li><Link to={LANGUAGE_PATH + Paths.session} className="on">{current_pack.title}</Link></li>
                    <li><Link to={LANGUAGE_PATH + Paths.session + '/congraturation'}>{current_pack.title2}</Link></li>
                </ul>
            </div>
            <div className="main_content">
                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_welcoming.png")} alt="" />
                    <Link to=""><img src={require("../static/img/bt_moviego.png")} alt="" /></Link>
                    <span> {current_pack.name} </span>
                </div>
            </div>
        </section>
    )
}