import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import Mask3 from '../Components/Layout/Mask3';
import Footer from '../Components/Layout/Footer';
import CTA2 from '../Components/Common/CTA2';
import TextCard from '../Components/Common/TextCard';
import './JobDesc.css';

const JobDesc = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask3 title='Job Descriptionr'/>

        <div className='flex_column'>
        <TextCard title='Description' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions.'/>
        <TextCard title='Requirements' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in '/>
        <TextCard title='Benefits' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions.'/>
        <CTA2 url='/JobApp' title='Apply Now'/>
        </div>

        <Footer />
    </div> );
}
 
export default JobDesc;