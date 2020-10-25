import React from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '../paths/index'

export default () => {
    return (
        <section id="main_container">
        <div class="tab">
            <ul>
                <li><Link to={Paths.sns} class="on">sns</Link></li>
            </ul>
        </div>
           <div class="snsbox">
               <ul>
                   <li><a href="https://www.youtube.com/channel/UCrVe4zDkzenuAjrH-6ukEjw" target="_blank"><i><img src={require("../static/img/img_youtube.png")} /></i>유튜브 바로가기</a></li>
                   <li><a href="https://www.facebook.com/6%EC%B0%A8%EC%82%B0%EC%97%85%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EB%B0%95%EB%9E%8C%ED%9A%8C-112819440075222" target="_blank"><i><img src={require("../static/img/img_facebook.png")} /></i>페이스북 바로가기</a></li>
                   <li><a href="https://www.instagram.com/farmingplus_jeju/" target="_blank"><i><img src={require("../static/img/img_instagram.png")} /></i>인스타그램 바로가기</a></li>
               </ul>
           </div>
       
    </section>
    )
}