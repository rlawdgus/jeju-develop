import React from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '../paths/index'

import BgMovie from '../static/img/bg_movie.png'
import BtMovieGo from '../static/img/bt_moviego.png'
import BgOnlineGo from '../static/img/bg_onlinego.png'
import BgConfGo from '../static/img/bg_confgo.png'


export default () => {
    return (
        <section id="main_container">
            <div class="main_content">
                <div class="movie">
                    <i></i>
                    <img src={BgMovie} alt="" />
                    <a href="#!"><img src={BtMovieGo} alt="" /></a>
                    <span> {'<'}제 2회 6차산업제주국제박람회{'>'} </span>
                </div>
                <div class="right">
                    <Link to={Paths.exhibition} >
                        <div class="onlinego">
                            <i></i>
                            <img src={BgOnlineGo} alt="" />
                            <h3>온라인전시관</h3>
                            <span>바로가기  {'>'}</span>
                        </div>
                    </Link>
                    <Link to={Paths.conference} >
                        <div class="confgo">
                            <i></i>
                            <img src={BgConfGo} alt="" />
                            <h3>컨퍼런스관</h3>
                            <span>바로가기  {'>'}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}