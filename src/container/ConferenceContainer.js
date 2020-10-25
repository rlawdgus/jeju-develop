import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export default () => {

    const language = useSelector(state => state.language.current);

    return (
        <section id="main_container">
            <div class="tab">
                <ul>
                    <li><Link to="#!" class="on">{language === 'ko' ? "컨퍼런스" : "Conference"}</Link></li>
                </ul>
            </div>
            <div class="main_content">
                <div class="speech">
                    <i></i>
                    <img src={require("../static/img/bg_speech.png")} alt="" />
                    <Link href=""><img src={require("../static/img/bt_moviego.png")} alt="" /></Link>
                    {/* <span> {'<'}이름{'('}소속{')>'} </span> */}
                </div>
            </div>
        </section>
    )
}