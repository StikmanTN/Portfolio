import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Topbar from '../../portfolioContainer/TopBar/Topbar'
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Topbar />
            <Profile/>
            <Footer />            
        </div>
    );
}

export default Home;
