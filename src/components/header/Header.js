import React, { useRef } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { Paths } from '../../paths/index'

// import { useHistory, useLocation } from 'react-router-dom';

// const LANGUAGE_URL_LIST = ['/kr', '/en', '/cn', '/jp'];

const Header = () => {
    const autoClose = useRef()
    // const location = useLocation();
    // const history = useHistory();

    // const language = useSelector(state => state.language);
    // console.log(language);

    // const selectLanguage = useCallback(e => {
    //     // 언어 변경
    //     const pathbase = LANGUAGE_URL_LIST.reduce((prev, cur) => {
    //         return prev.replace(cur, '');
    //     }, location.pathname);
    //     history.push(`/${e.target.value}` + pathbase + location.search);
    // }, [location, history]);

    // const [navList, setNavList] = useState([
    //     {
    //         id: 1,
    //         kr: "오프닝세션",
    //         en: "Opening-Session",
    //         cn: "중국어",
    //         jp: "일본어",
    //         path: Paths.session,
    //         checked: false
    //     },
    //     {
    //         id: 2,
    //         kr: "컨퍼런스",
    //         en: "Conference",
    //         cn: "중국어",
    //         jp: "일본어",
    //         path: Paths.conference,
    //         checked: false
    //     },
    //     {
    //         id: 3,
    //         kr: "온라인전시관",
    //         en: "Online-Exhibition",
    //         cn: "중국어",
    //         jp: "일본어",
    //         path: Paths.exhibition,
    //         checked: false
    //     },
    //     {
    //         id: 4,
    //         kr: "공지 및 이벤트",
    //         en: "Notice",
    //         cn: "중국어",
    //         jp: "일본어",
    //         path: Paths.notice,
    //         checked: false
    //     },
    //     {
    //         id: 5,
    //         kr: "SNS",
    //         en: "SNS",
    //         cn: "중국어",
    //         jp: "일본어",
    //         path: Paths.sns,
    //         checked: false
    //     }
    // ])

    // const selected = useCallback(id => {
    //     setNavList(
    //         navList.map(item =>
    //             item.id === id ? { ...item, checked: true } : { ...item, checked: false }
    //         )
    //     )
    // }, [navList])

    // const setDefault = () => setNavList(navList.map(item => ({ ...item, checked: false })))

    return (
        <header>
            <h1>
                <Link to={Paths.index}>
                    <img src={(`${process.env.PUBLIC_URL}/img/h1_logo.png`)} alt="" />
                    <img
                        src={(`${process.env.PUBLIC_URL}/img/h1_logo_txt.png`)}
                        alt=""
                    />
                </Link>
            </h1>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" ref={autoClose} />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li>
                            <Link
                                to={Paths.session}
                                onClick={() => autoClose.current.click()}
                            >
                                오프닝세션
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Paths.conference}
                                onClick={() => autoClose.current.click()}
                            >
                                컨퍼런스
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Paths.exhibition}
                                onClick={() => autoClose.current.click()}
                            >
                                온라인전시관
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Paths.notice}
                                onClick={() => autoClose.current.click()}
                            >
                                공지 및 이벤트
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Paths.sns}
                                onClick={() => autoClose.current.click()}
                            >
                                SNS
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;