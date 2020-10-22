import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

import '../../static/stylesheets/Header.css';
import { setLanguage } from '../../store/language';

const Header = () => {
    const language = useSelector(state => state.language);
    const reduxDispatch = useDispatch();

    // console.log(language);

    const selectLanguage = useCallback(e => {
        // 언어 변경
        reduxDispatch(setLanguage(e.target.value));
    }, []);

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
                item.id === id ? { ...item, checked: true } : { ...item, checked: false }
            )
        )
    }, [navList])

    const setDefault = () => setNavList(navList.map(item => ({ ...item, checked: false })))

    return (
        <header>
            <HeaderLogo selectLanguage={selectLanguage} setDefault={setDefault} />
            <HeaderNav language={language.current} navList={navList} selected={selected} />
        </header>
    );
};

export default Header;