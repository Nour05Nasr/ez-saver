import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import ScrollVelocity from '../Components/Layout/ScrollVelocity';
import hero from '../Assets/hero.png';
import speed from '../Assets/speed.png';
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
        <div className='hero_text'>
           <h1 className='hero_h'>Experince Grocerry Shopping Like Never Before</h1>
           <CTA2 url='*' title='Know More'/>
        </div>
    </section>
        <div className='hero_imgs'>
           <img className='hero_img' src={hero} alt="ez-saver hero" />
           {/* <img className='speed_img' src={speed} alt="ez-saver hero" /> */}
        </div>
   
    <ScrollVelocity
  texts={['Shopping Made Eazy.', 'Shopping Made Fast.']} 
  velocity={80}
  className="custom-scroll-text"
/>

    <section className='about_section'>
        <div className='about_div'>
            <h2 className='about_h'>About EZ-SAVER</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
           <CTA2 url='*' title='Know More'/>
        </div>
    </section>


    </div>);
}
export default Home;