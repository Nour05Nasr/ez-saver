import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import TextCard from '../Components/Common/TextCard';
import HoursCard from '../Components/Common/HoursCard';
import WhyCard from '../Components/Common/WhyCard';
import Form from '../Components/Layout/Form';
import ContactInfo from '../Components/Common/ContactInfo';
import Input from '../Components/Common/Input';
import Footer from '../Components/Layout/Footer';
import email from '../Assets/email.svg';
import phone from '../Assets/phone.svg';
import location from '../Assets/location.svg';
import ScrollStack from '../Components/Layout/ScrollStack';
import ScrollStackItem from '../Components/Common/ScrollStackItem';
import StackCard from '../Components/Common/StackCard';
import H2 from '../Components/Common/H2';
import time from '../Assets/time.png';
import money from '../Assets/money.png';
import effort from '../Assets/effort.png';
import './Download.css';

const Download = () => {
    return ( <>
<div className='body_home download_body'>
        <Nav />

            <div className='top1'>
                <h2 className='mask_h primary_color'>EZ-SAVER BY NUMBERS</h2>
                <div className='flex_row gap top1'>
                    <div className='demo_card gap'>
                        <h3 className='demo_h'>30k</h3>
                        <p className='demo_p' >Downloads</p>
                    </div>
                    <div className='demo_card gap'>
                        <h3 className='demo_h'>80+</h3>
                        <p className='demo_p'>Partners</p>    
                    </div>
                    <div className='demo_card gap'>
                        <h3 className='demo_h'>30k</h3>
                        <p className='demo_p'>Downloads</p>
                    </div>
                    <div className='demo_card gap'>
                        <h3 className='demo_h'>80+</h3>
                        <p className='demo_p'>Partners</p>
                    </div>
                </div>
            </div>

        <ScrollStack useWindowScroll={true} >
      <H2 title='Why Choose EZ-SAVER ?'/>
  <ScrollStackItem>
    <StackCard img={effort} alt='ez-saver save effort'
     title='Save Effort'
     url="/Services"
      text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>
  </ScrollStackItem>

  <ScrollStackItem>
    <StackCard  img={time} alt='ez-saver save time'
     title="Save Time"
     url="/Services"
      text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' url="/Category/UI_UX_Design"/>
  </ScrollStackItem>

  <ScrollStackItem>
    <StackCard  img={money} alt='ez-saver save money' 
    title="Save Money" 
     url="/Services"
    text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' url="/Category/Web_Design"/>
  </ScrollStackItem>
  </ScrollStack>

  <div className='w flex_row'>
            <WhyCard title='Why Shop with EZ-saver ?' 
                text1='Increase efficiency and satisfaction' 
                text2='Reduce checkout lines and wait times' 
                text3='Digitalize in store shopping experience' 
                text4='Saving time by reducing shopping trip duration' 
                text5='Seamless navigation and digital convenience.' />
  </div>

    </div>
            <Footer />
        </> );
}
 
export default Download;