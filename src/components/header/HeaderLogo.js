import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../static/img/h1_logo.png';
import LogoText from '../../static/img/h1_logo_txt.png';

export default ({ selectLanguage, setDefault }) => {
    const language = useSelector(state => state.language.current);
    return (
        <>
            <h1>
                <Link to="/" onClick={setDefault} >
                    <img src={Logo} alt="" />
                    <img src={LogoText} alt="" />
                </Link>
            </h1>
            <div className="select">
                <select onChange={selectLanguage} value={language} className="select-option">
                    <option value="kr">한국어</option>
                    <option value="en">english</option>
                    <option value="cn">china</option>
                    <option value="jp">japan</option>
                </select>
                <div className="select__arrow"></div>
            </div>
        </>
    );
};
