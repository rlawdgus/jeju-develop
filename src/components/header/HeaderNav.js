import React from 'react'

import YouTube from '../../static/img/ic_youtube.png'
import Facebook from '../../static/img/ic_facebook.png'
import Instagram from '../../static/img/ic_instagram.png'
import HeaderNavItem from './HeaderNavItem'

export default ({ language, navList, selected }) => {
    return (
        <div id="lnb">
            <span>
                <a href="https://www.youtube.com/channel/UCrVe4zDkzenuAjrH-6ukEjw" target="_blank" rel="noopener noreferrer" ><img src={YouTube} alt="" /></a>
                <a href="https://www.facebook.com/6%EC%B0%A8%EC%82%B0%EC%97%85%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EB%B0%95%EB%9E%8C%ED%9A%8C-112819440075222" target="_blank" rel="noopener noreferrer" ><img src={Facebook} alt="" /></a>
                <a href="https://www.instagram.com/farmingplus_jeju/" target="_blank" rel="noopener noreferrer" ><img src={Instagram} alt="" /></a>
            </span>
            <ul>
                {navList.map(item => (
                    <HeaderNavItem key={item.id} onClick={selected} item={item} language={language} />
                ))}
            </ul>
        </div>
    )
}