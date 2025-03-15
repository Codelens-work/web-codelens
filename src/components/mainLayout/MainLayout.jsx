import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './mainLayout.css';
const MainLayout = () => {

    const { t } = useTranslation()

    return (
        <div className='main-layout'>
            <NavBar footerLists={t("footer-section.lists", {returnObjects: true})} />
            <div className="main-content">
                <Outlet/>
            </div>
            <Footer footerTexts={t('footer-section', { returnObjects: true })} />
        </div>
    )
}

export default MainLayout