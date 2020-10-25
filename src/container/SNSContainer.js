import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { Paths } from '../paths/index'

export default () => {
    const language = useSelector(state => state.language.current);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        ko: {
            title: "SNS",
            youtube: "유튜브 바로가기",
            facebook: "페이스북 바로가기",
            instagram: "인스타그램 바로가기"
        },
        en: {
            title: "SNS",
            youtube: "You Tube Link",
            facebook: "Facebook Link",
            instagram: "Instagram Link"
        },
        ch: {
            title: "중국어",
            youtube: "중국어",
            facebook: "중국어",
            instagram: "중국어"
        },
        ja: {
            title: "일본어",
            youtube: "일본어",
            facebook: "일본어",
            instagram: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["ko"]
    //--------------------------------------------------------------------------------------

    return (
        <section id="main_container">
            <div className="tab">
                <ul>
                    <li><Link to={Paths.sns} className="on">{current_pack.title}</Link></li>
                </ul>
            </div>
            <div className="snsbox">
                <ul>
                    <li><a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCrVe4zDkzenuAjrH-6ukEjw" target="_blank"><i><img src={require("../static/img/img_youtube.png")} alt="youtube" /></i>{current_pack.youtube}</a></li>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/6%EC%B0%A8%EC%82%B0%EC%97%85%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EB%B0%95%EB%9E%8C%ED%9A%8C-112819440075222" target="_blank"><i><img src={require("../static/img/img_facebook.png")} alt="facebook" /></i>{current_pack.facebook}</a></li>
                    <li><a rel="noopener noreferrer" href="https://www.instagram.com/farmingplus_jeju/" target="_blank"><i><img src={require("../static/img/img_instagram.png")} alt="instagram" /></i>{current_pack.instagram}</a></li>
                </ul>
            </div>
        </section>
    );
};