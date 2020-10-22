import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'

import {Paths} from '../paths/index'

export default () => {
    const history = useHistory();

    const onClick = useCallback(() => {
        history.push(Paths.session + '/congraturation');
    }, [history]);

    return (
        <section id="main_container">
            <div className="tab">
                <ul>
                    <li><Link to={Paths.session}>환영사</Link></li>
                    <li><Link className="on" onClick={onClick}>축사</Link></li>
                </ul>
            </div>
            <div className="main_content">
                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_speech.png")} alt="" />
                    <a href=""><img src={require("../static/img/bt_moviego.png")} alt="" /></a>
                    <span> {'<'}이름{'('}소속{')>'} </span>
                </div>

                <div className="speech">
                    <i></i>
                    <img src={require("../static/img/bg_speech.png")} alt="" />
                    <a href=""><img src={require("../static/img/bt_moviego.png")} alt="" /></a>
                    <span> {'<'}이름{'('}소속{')>'} </span>
                </div>
            </div>
        </section>
    )
}