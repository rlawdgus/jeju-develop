import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

import '../../static/stylesheets/Header.css';

const Header = () => {
    const [language, setLanguage] = useState('ko');

    const selectLanguage = (e) => setLanguage(e.target.value);

    return (
        <header>
            <HeaderLogo selectLanguage={selectLanguage} />
            <HeaderNav language={language} />
        </header>
    );
};

export default Header;