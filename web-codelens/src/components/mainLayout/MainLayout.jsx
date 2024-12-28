import React from 'react';
// import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import './mainLayout.css';
const MainLayout = ({ children }) => {
    return (
        <div className='main-layout'>
            <NavBar />
            <div className="main-content">
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default MainLayout