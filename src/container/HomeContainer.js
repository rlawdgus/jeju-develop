import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Paths } from '../paths/index'

import BgMovie from '../static/img/bg_movie.png'
import BtMovieGo from '../static/img/bt_moviego.png'
import BgOnlineGo from '../static/img/bg_onlinego.png'
import BgConfGo from '../static/img/bg_confgo.png'


export default () => {

    const language = useSelector(state => state.language.current);

    return (
        <section id="main_container">
            <div className="main_content">
                <div className="movie">
                    <i></i>
                    <img src={BgMovie} alt="" />
                    <a href="#!"><img src={BtMovieGo} alt="" /></a>
                    <span> {'<'}제 2회 6차산업제주국제박람회{'>'} </span>
                </div>
                <div className="right">
                    <Link to={Paths.exhibition} >
                        <div className="onlinego">
                            <i></i>
                            <img src={BgOnlineGo} alt="" />
                            <h3>{language === 'ko' ? "온라인전시관" : "Online-exhibition"}</h3>
                            <span>{language === 'ko' ? "바로가기" : "GO"}  {'>'}</span>
                        </div>
                    </Link>
                    <Link to={Paths.conference} >
                        <div className="confgo">
                            <i></i>
                            <img src={BgConfGo} alt="" />
                            <h3>{language === 'ko' ? "컨퍼런스관" : "Conference"}</h3>
                            <span>{language === 'ko' ? "바로가기" : "GO"}  {'>'}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}