import meDoodle from '../../assets/images/me-doodle.png';
import './index.scss';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY === 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home">
            <div className="intro"> 
                <img data-aos="zoom-in" src={meDoodle} alt="grace matsuoka" />
                <div data-aos="fade-left" className="animate__animated animate__fadeIn animate__slow">
                    <h1>hi, i’m grace 👋 <br></br>
                    a <b>computer science</b> student at cornell with a passion for <b>user-centered web development</b></h1>
                </div>
            </div>

            <div className={`below ${isVisible ? '' : 'hidden'}`}>
                <p>scroll to learn more</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
        </div>
    );
}

export default Home;