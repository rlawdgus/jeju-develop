import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom'

import { Paths } from '../../paths/index'

const LANGUAGE_URL_LIST = ['/kr', '/en', '/cn', '/jp'];

const Header = () => {
    const autoClose = useRef();
    const location = useLocation();
    const history = useHistory();

    const selectLanguage = useCallback(e => {
        // 언어 변경
        const pathbase = LANGUAGE_URL_LIST.reduce((prev, cur) => {
            return prev.replace(cur, '');
        }, location.pathname);
        history.push(`/${e.target.value}` + pathbase + location.search);
    }, [location, history]);
    const language = useSelector(state => state.language.current);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            title: "오프닝세션",
            title2: "컨퍼런스",
            title3: "온라인전시관",
            title4: "공지 및 이벤트",
            title5: "SNS",
            title6: "한국어"
        },
        en: {
            css: " language-en",
            title: "Opening-Session",
            title2: "Conference",
            title3: "Online-Exhibition",
            title4: "Notice",
            title5: "SNS",
            title6: "english"
        },
        cn: {
            css: " language-cn",
            title: "중국어",
            title2: "중국어",
            title3: "중국어",
            title4: "중국어",
            title5: "중국어",
            title6: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어",
            title2: "일본어",
            title3: "일본어",
            title4: "일본어",
            title5: "일본어",
            title6: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    useEffect(() => {
        if (autoClose.current) {
            autoClose.current.checked = false;
        }
    }, [location]);

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

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
                                to={LANGUAGE_PATH + Paths.session}
                            >
                                {current_pack.title}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={LANGUAGE_PATH + Paths.conference}
                            >
                                {current_pack.title2}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={LANGUAGE_PATH + Paths.exhibition}
                            >
                                {current_pack.title3}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={LANGUAGE_PATH + Paths.notice}
                            >
                                {current_pack.title4}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={LANGUAGE_PATH + Paths.sns}
                            >
                                {current_pack.title5}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={"select" + current_pack.css}>
                <select onChange={selectLanguage} value={language} className={"select-option" + current_pack.css}>
                    <option value="">lang</option>
                    <option value="kr">kr</option>
                    <option value="en">en</option>
                </select>
                <div className={"select__arrow" + current_pack.css}></div>
            </div>
        </header>
    );
};

export default Header;