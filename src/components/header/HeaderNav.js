import React, { useCallback, useState } from 'react'

import YouTube from '../../static/img/ic_youtube.png'
import Facebook from '../../static/img/ic_facebook.png'
import Instagram from '../../static/img/ic_instagram.png'
import HeaderNavItem from './HeaderNavItem'

export default ({ language }) => {
    const [navList, setNavList] = useState([
        {
            id: 1,
            ko: "오프닝세션",
            en: "Opening-Session",
            ch: "중국어",
            ja: "일본어",
            checked: false
        },
        {
            id: 2,
            ko: "컨퍼런스",
            en: "Conference",
            ch: "중국어",
            ja: "일본어",
            checked: false
        },
        {
            id: 3,
            ko: "온라인전시관",
            en: "Online-Exhibition",
            ch: "중국어",
            ja: "일본어",
            checked: false
        },
        {
            id: 4,
            value: "ko",
            ko: "공지 및 이벤트",
            en: "Notice",
            ch: "중국어",
            ja: "일본어",
            checked: false
        },
        {
            id: 5,
            value: "ko",
            ko: "SNS",
            en: "SNS",
            ch: "중국어",
            ja: "일본어",
            checked: false
        }
    ])

    const selected = useCallback(id => {
        setNavList(
            navList.map(item =>
                item.id === id ? {...item, checked:true} : {...item, checked:false}
            )
        )

        console.log(navList)
    }, [navList])

    return (
        <div id="lnb">
            <span>
                <a href="https://www.youtube.com/channel/UCrVe4zDkzenuAjrH-6ukEjw" target="_blank" rel="noopener noreferrer" ><img src={YouTube} alt="" /></a>
                <a href="https://www.instagram.com/farmingplus_jeju/" target="_blank" rel="noopener noreferrer" ><img src={Facebook} alt="" /></a>
                <a href="https://www.facebook.com/6%EC%B0%A8%EC%82%B0%EC%97%85%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EB%B0%95%EB%9E%8C%ED%9A%8C-112819440075222" target="_blank" rel="noopener noreferrer" ><img src={Instagram} alt="" /></a>
            </span>
            <ul>
                {navList.map(item => (
                    <HeaderNavItem key={item.id} onClick={selected} item={item} language={language} />
                ))}
            </ul>
        </div>
    )
}