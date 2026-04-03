import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import TextCard from '../Components/Common/TextCard';
import Mask1 from '../Components/Layout/Mask1';
import Footer from '../Components/Layout/Footer';
import mask_1 from '../Assets/mask_1.svg';
import './Policy.css';

const Policy = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask1 title='EZ-Saver Policy'/>
        {/* <img id='myMasID' src={mask_1} alt="" /> */}

        {/* <div className='flex_column'> */}
        <TextCard title='Policy 1' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions.'/>
        <TextCard title='Policy 2' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in '/>
        <TextCard title='Policy 3' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions.'/>
        {/* </div> */}

        <Footer />
    </div> );
}
 
export default Policy;