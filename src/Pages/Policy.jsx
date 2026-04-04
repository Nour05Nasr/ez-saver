import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import TextCard from '../Components/Common/TextCard';
import Footer from '../Components/Layout/Footer';
import mask_1 from '../Assets/mask_1.svg';
import './Policy.css';

const Policy = () => {
    return ( <div className='body_home'>
        <Nav />
        <div className='mask_policy'>
            <h2 className='mask_policy_h'>EZ-SAVER Policy</h2>
        </div>
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