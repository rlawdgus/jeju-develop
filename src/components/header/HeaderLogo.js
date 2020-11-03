import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default ({ selectLanguage, setDefault }) => {
    const language = useSelector(state => state.language.current);
    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: ""
        },
        en: {
            css: " language-en"
        },
        cn: {
            css: " language-cn"
        },
        jp: {
            css: " language-jp"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    return (
        <>
            <h1>
                <Link to="/" onClick={setDefault} >
                    <img src={`${process.env.PUBLIC_URL}/img/h1_logo.png`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/img/h1_logo_txt.png`} alt="" />
                </Link>
            </h1>
            <div className={"select" + current_pack.css}>
                <select onChange={selectLanguage} value={language} className={"select-option" + current_pack.css}>
                    <option value="kr">한국어</option>
                    <option value="en">english</option>
                    {/* <option value="cn">china</option>
                    <option value="jp">japan</option> */}
                </select>
                <div className={"select__arrow" + current_pack.css}></div>
            </div>
        </>
    );
};
