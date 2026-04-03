import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import Mask1 from '../Components/Layout/Mask1';
import Footer from '../Components/Layout/Footer';
import './Contact.css';

const Contact = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask1 title='Reach Out To Us'/>



        <Footer />
    </div> );
}
 
export default Contact;