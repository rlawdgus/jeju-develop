import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <section id="main_container">
        <div class="tab">
            <ul>
                <li><Link to="#!" class="on">컨퍼런스</Link></li>
            </ul>
        </div>
        <div class="main_content">
            <div class="speech">
                <i></i>
                <img src={require("../static/img/bg_speech.png")} alt="" />
                <a href="#!"><img src={require("../static/img/bt_moviego.png")} alt="" /></a>
                <span> {'<'}이름{'('}소속{')>'} </span>
            </div>
        </div>
    </section>
    )
}