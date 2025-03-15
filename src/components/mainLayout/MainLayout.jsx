import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';
import './mainLayout.css';
const MainLayout = () => {
    return (
        <div className='main-layout'>
            <NavBar />
            <div className="main-content">
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout