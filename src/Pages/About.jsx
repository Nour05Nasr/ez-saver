import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import Mask2 from '../Components/Layout/Mask2';
import Footer from '../Components/Layout/Footer';
import './About.css';

const About = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask2 title='About EZ-Saver'/>



        <Footer />
    </div> );
}
 
export default About;