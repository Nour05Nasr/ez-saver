import React, { Component } from 'react';
import CTA2 from '../Common/CTA2';
import './AboutCard.css';

const AboutCard = () => {
    return (<section className='about_section'>
        <div className='about_div'>
            <h2 className='about_h'>About EZ-SAVER</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
           <CTA2 url='/about' title='Know More'/>
        </div>
    </section> );
}
 
export default AboutCard;