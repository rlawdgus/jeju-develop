import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../static/img/h1_logo.png';
import LogoText from '../../static/img/h1_logo_txt.png';

export default ({ selectLanguage, setDefault }) => {
    return (
        <>
            <h1>
                <Link to="/" onClick={setDefault} >
                    <img src={Logo} alt="" />
                    <img src={LogoText} alt="" />
                </Link>
            </h1>
            <div className="select">
                <select onChange={selectLanguage} className="select-option">
                    <option value="ko">한국어</option>
                    <option value="en">english</option>
                    <option value="ch">china</option>
                    <option value="ja">japan</option>
                </select>
                <div className="select__arrow"></div>
            </div>
        </>
    );
};
