import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Paths } from '../paths/index'

export default () => {

    const language = useSelector(state => state.language.current);

    const history = useHistory();

    const onClick = useCallback(() => {
        history.push(Paths.session + '/congraturation');
    }, [history]);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        ko:{
            title: "환영사",
            title2: "축사",
            name: "이름(소속)",
            name2: "이름(소속)"
        },
        en:{
            title: "Welcome Address",
            title2: "Congratulatory message",
            name: "name()",
            name2: "name()"
        },
        ch:{
            title: "중국어",
            title2: "중국어",
            name: "중국어",
            name2: "중국어"
        },
        ja:{
            title: "일본어",
            title2: "일본어",
            name: "일본어",
            name2: "일본어"
        }
    }
    
    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["ko"]
    //--------------------------------------------------------------------------------------

    return (
        <section id="main_container">
            <div className="tab">
                <ul>
                    <li><Link to={Paths.session}>{current_pack.title}</Link></li>
                    <li><Link className="on" onClick={onClick}>{current_pack.title2}</Link></li>
                </ul>
            </div>
            <div className="main_content">
                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_speech.png")} alt="" />
                    <Link href=""><img src={require("../static/img/bt_moviego.png")} alt="" /></Link>
                    <span> {current_pack.name} </span>
                </div>

                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_speech.png")} alt="" />
                    <Link href=""><img src={require("../static/img/bt_moviego.png")} alt="" /></Link>
                    <span> {current_pack.name2} </span>
                </div>
            </div>
        </section>
    )
}