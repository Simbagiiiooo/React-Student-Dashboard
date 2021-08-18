import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import './Home.css'
import Graph from '../images/graph.jpg'


const Home = () => {

    const { t } = useTranslation();
    return (
        <div className="home-container">
            <h1 className="home-header">Home</h1>
        <div className="home">
            <div>
            <p className="home-1">{t('home-1')}</p><br/>
            <p className="home-2">{t('home-2')}</p><br/>
            <p className="home-3">{t('home-3')}</p><br/>
            <p className="home-4">{t('home-4')}</p>
            </div>
            <div className="img-home">
            <img src={Graph} alt="me" height="300px" />
            <button className="btn"><Link className="link" to="./OverviewWithVictory">{t('button')}</Link></button>
            </div>
        </div>
        </div>
    )
}

export default Home


            