import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import HoursCard from '../Components/Common/HoursCard';
import WhyCard from '../Components/Common/WhyCard';
import Form from '../Components/Layout/Form';
import ContactInfo from '../Components/Common/ContactInfo';
import Mask3 from '../Components/Layout/Mask3';
import Footer from '../Components/Layout/Footer';
import email from '../Assets/email.svg';
import phone from '../Assets/phone.svg';
import location from '../Assets/location.svg';
import './JobApp.css';

const JobApplication = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask3 title='Job Application'/>

        <section className='contact_section'>
          <Form headline='Application Form'
          title1='Full Name' text1='Enter your full name'
          title2='Email' text2='Enter your e-mail address'
          title3='Number' text3='Enter your phone number'
          title4='Expected Salary' text4='Enter your expected salary'
          title5='Resume/cv' text5='Upload your resume/cv'
          />

            <div className='column_start w'>
                        <h5 className='mask_h'>Contact Information</h5>
                        <div className='top column_start'>
                <ContactInfo icon={email} title='Email' info='hello@ez-saver.com'/>
                <ContactInfo icon={phone} title='Phone' info='+20 123 456 7890'/>
                <ContactInfo icon={location} title='Office' info='Cairo, Egypt'/>
                        </div>

                <WhyCard title='Why Partner with EZ-saver ?' 
                text1='Increase customer satisfaction and loyalty' 
                text2='Reduce checkout lines and wait times' 
                text3=' Gain valuable shopping insights and analytics' 
                text4='Easy integration with existing systemsy' 
                text5='Dedicated support team' />

                <HoursCard title='Business Hours' text1='Sunday - Thursday' text2='9:00 AM - 6:00 PM' text3='Friday - Saturday' text4='Closed'/>
            </div>
        </section>



        <Footer />
    </div> );
}
 
export default JobApplication;