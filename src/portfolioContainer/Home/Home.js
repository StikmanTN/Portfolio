import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Topbar from '../../portfolioContainer/TopBar/Topbar'
import './Home.css';
import About from '../AboutMe/About';

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
