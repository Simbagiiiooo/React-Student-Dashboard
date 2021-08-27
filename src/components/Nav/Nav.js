import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const changeLanguage = (ln) => () => {
    i18n.changeLanguage(ln);
};

function Nav() {
    const { t } = useTranslation();
    return (
        <div>
            <nav>
          <div className="flags">
        <button
          className="flag--england"
          onClick={changeLanguage('nl')}
          type="button"
        >
          <img
            src="https://img.icons8.com/color/48/000000/great-britain-circular.png"
            alt="English"
          />
        </button>
        <button
          className="flag--netherlands"
          onClick={changeLanguage('en')}
          type="button"
        >
          <img
            src="https://img.icons8.com/color/48/000000/luxembourg-circular.png"
            alt="netherlands"
          />
        </button>
      </div>
                <h2 className="nav-h2">{t('nav-h2')}</h2>
                <div className="nav">
                    <button className="button button2"><Link className="link" to='/Home'>{t('button')}</Link></button>
                    <button className="button button2"><Link className="link" to='/students'>{t('button2')}</Link></button>
                </div>
            </nav>
        </div>
    )
}

export default Nav