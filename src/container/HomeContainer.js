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

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        ko:{
            movie_name: "<제 2회 6차산업제주국제박람회>",
            online_go: "온라인전시관",
            conference_go: "컨퍼런스",
            go: "바로가기"
        },
        en:{
            movie_name: "<title>",
            online_go: "Online-Exhibition",
            conference_go: "Conference",
            go: "Go"
        },
        ch:{
            movie_name: "중국어",
            online_go: "중국어",
            conference_go: "중국어",
            go: "중국어"
        },
        ja:{
            movie_name: "일본어",
            online_go: "일본어",
            conference_go: "일본어",
            go: "일본어"
        }
    }
    
    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["ko"]
    //--------------------------------------------------------------------------------------

    return (
        <section id="main_container">
            <div className="main_content">
                <div className="movie">
                    <i></i>
                    <img src={BgMovie} alt="" />
                    <a href="#!"><img src={BtMovieGo} alt="" /></a>
                    <span> {current_pack.movie_name} </span>
                </div>
                <div className="right">
                    <Link to={Paths.exhibition} >
                        <div className="onlinego">
                            <i></i>
                            <img src={BgOnlineGo} alt="" />
                            <h3>{current_pack.online_go}</h3>
                            <span>{current_pack.go}  {'>'}</span>
                        </div>
                    </Link>
                    <Link to={Paths.conference} >
                        <div className="confgo">
                            <i></i>
                            <img src={BgConfGo} alt="" />
                            <h3>{current_pack.conference_go}</h3>
                            <span>{current_pack.go}  {'>'}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}