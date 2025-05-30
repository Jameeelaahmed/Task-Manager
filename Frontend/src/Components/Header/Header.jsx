import React, { useState, useEffect } from 'react';
import classes from './Header.module.css';
import i18n from '../../i18n';

function Header() {
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang)
            .then(() => setCurrentLang(lang))
            .catch((err) => console.error("Error changing language:", err));
    };

    useEffect(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }, [currentLang]);

    return (
        <div className={classes.header}>
            <button onClick={() => handleLanguageChange(currentLang === 'ar' ? 'en' : 'ar')}>
                {currentLang === 'ar' ? 'en' : 'ar'}
            </button>
        </div>
    );
}

export default Header;
