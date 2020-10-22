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

    return (
        <section id="main_container">
            <div className="tab">
                <ul>
                    <li><Link to={Paths.session} className="on">{language === 'ko' ? "환영사" : "Welcome Address"}</Link></li>
                    <li><Link onClick={onClick}>{language === 'ko' ? "축사" : "Congratulatory message"}</Link></li>
                </ul>
            </div>
            <div className="main_content">
                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_welcoming.png")} alt="" />
                    <a href=""><img src={require("../static/img/bt_moviego.png")} alt="" /></a>
                    <span> {language === 'ko' ? "이름(소속)" : "Title"} </span>
                </div>
            </div>
        </section>
    )
}