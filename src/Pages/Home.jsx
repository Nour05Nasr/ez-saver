import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import hero from '../Assets/hero.png';
import speed from '../Assets/speed.png';
// import CTA1 from '../Common/CTA1';
import CTA2 from '../Components/Common/CTA2';
import './Home.css';
// import { Helmet } from 'react-helmet';

const Home = () => {
    return ( <div className='body_home'>
     {/* <Helmet>
        <title>NourNasrBackEndLogIn</title>
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="LogIn" />
    </Helmet> */}

    <Nav />
    <section className='hero'>
        <div className='hero_imgs'>
           <img className='hero_img' src={hero} alt="ez-saver hero" />
           <img className='speed_img' src={speed} alt="ez-saver hero" />
        </div>
        <div className='hero_text'>
           <h1 className='hero_h'>Experince Grocerry Shopping Like Never Before</h1>
           <CTA2 url='*' title='Know More'/>
        </div>
    </section>
   
    
    </div>);
}
export default Home;