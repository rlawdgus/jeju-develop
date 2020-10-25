import React from 'react';
import { Link } from 'react-router-dom';

export default ({ onClick, item, language }) => {
    const selectEffect = item.checked ? 'on' : '';
    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';
    return (
        <li>
            <Link to={LANGUAGE_PATH + item.path} className={selectEffect} onClick={() => onClick(item.id)}>
                {language === 'en'
                    ? item.en
                    : language === 'cn'
                    ? item.cn
                    : language === 'jp'
                    ? item.jp
                    : item.kr}
            </Link>
        </li>
    );
};
