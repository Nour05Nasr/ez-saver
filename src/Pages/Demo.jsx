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
import './Demo.css';

const Demo = () => {
    return ( <>
<div className='body_home demo_body'>
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

        <section className='contact_section top primary_color top1'>
        <div className='demo_bg'></div>
          <Form className='primary_color' headline='Get in Touch'
          title1='Full Name' text1='Enter your full name'
          title2='Email' text2='Enter your e-mail address'
          title3='Number' text3='Enter your phone number'
          title4='Company/Store' text4='Enter your company/store name'
          title5='Message' text5='Enter your message'
          />

            <div className='column_start w'>
                        <h5 className='mask_h primary_color'>Contact Information</h5>
                        <div className='top w'>
            <WhyCard title='Why Partner with EZ-saver ?' 
                text1='Increase customer satisfaction and loyalty' 
                text2='Reduce checkout lines and wait times' 
                text3=' Gain valuable shopping insights and analytics' 
                text4='Easy integration with existing systemsy' 
                text5='Dedicated support team' />
                <HoursCard title='Business Hours' text1='Sunday - Thursday' text2='9:00 AM - 6:00 PM' text3='Friday - Saturday' text4='Closed'/>
                        </div>
            </div>
        </section>

    </div>
            <Footer />
        </> );
}
 
export default Demo;