import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export default () => {

    const language = useSelector(state => state.language.current);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            title: "컨퍼런스"
        },
        en: {
            title: "Conference"
        },
        cn: {
            title: "중국어"
        },
        jp: {
            title: "일본어"
        }
    }
    
    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';
    return (
        <section id="main_container">
            <div className="tab">
                <ul>
                    <li><Link to="" className="on">{current_pack.title}</Link></li>
                </ul>
            </div>
            <div className="main_content">
                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_speech.png")} alt="" />
                    <Link to=""><img src={require("../static/img/bt_moviego.png")} alt="" /></Link>
                    {/* <span> {'<'}이름{'('}소속{')>'} </span> */}
                </div>
            </div>
        </section>
    )
}