import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import Mask2 from '../Components/Layout/Mask2';
import CardSwap from '../Components/Layout/CardSwap';
import AboutCard from '../Components/Layout/AboutCard'
import Footer from '../Components/Layout/Footer';
import ScrollVelocity from '../Components/Layout/ScrollVelocity';
import './About.css';

const About = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask2 title='About EZ-Saver'/>

        <CardSwap />

    <section className='flex_column arrows_section'>
        <div className='flex_start'>
        <div className='mission_card'>
            <h2 className='about_h'>Our Goals</h2>
            <p className='arrow_p'>To build a tech-smart ecosystem that helps users to shop easily, quickly, and intelligently through data-driven tools. EZ SAVER’s mission is to modernize the Egyptian retail experience by making shopping smarter, not harder through merging technology and design to enhance convenience and personalization. The brand stands for digital confidence, reliability, and elegance in everyday retail life.</p>
        </div>
        </div>
        
        <div className='flex_end'>
        <div className='vision_card'>
            <h2 className='about_h'>Our Goals</h2>
            <p className='arrow_p'>To redefine how Egyptians shop by transforming supermarket trips into simple, fast, and delightful experiences through human-centered technology. EZ SAVER’s mission is to empower every shopper, from tech-savvy youth to busy parents and the elderly, to navigate, save, and enjoy their time with ease. We aim to integrate smart AR navigation, personalized offers, and effortless checkout into one. </p>
        </div>
        </div>

        <div className='flex_start'>
        <div className='goals_card'>
            <h2 className='about_h'>Our Goals</h2>
            <p className='arrow_p'>cohesive ecosystem that respects users’ habits while enhancing them. EZ SAVER bridges digital innovation with cultural familiarity, ensuring that every feature feels intuitive, inclusive, and simple at heart.  EZ Saver strives to be the essential tool for the busy Egyptian family, empowering them to manage their time and budget effortlessly while delivering a reliable, engaging and personalized retail experience.</p>
        </div>
        </div>
    </section>

    {/* <ScrollVelocity
  texts={['Shopping Made Eazy.', 'Shopping Made Fast.']} 
  velocity={80}
  className="custom-scroll-text"
/> */}
    <AboutCard />



        <Footer />
    </div> );
}
 
export default About;