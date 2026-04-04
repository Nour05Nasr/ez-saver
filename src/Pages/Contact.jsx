import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import TextCard from '../Components/Common/TextCard';
import ContactInfo from '../Components/Common/ContactInfo';
import Input from '../Components/Common/Input';
import CTA2 from '../Components/Common/CTA2';
import Footer from '../Components/Layout/Footer';
import email from '../Assets/email.svg';
import phone from '../Assets/phone.svg';
import location from '../Assets/location.svg';
import './Contact.css';

const Contact = () => {
    return ( <div className='body_home'>
        <Nav />
        <div className='mask_contact'>
            <h2 className='mask_contact_h'>Reach Out To Us</h2>
        </div>

        <section className='flex contact_section'>
            <div className='flex_column w'>
                        <h5 className='mask_h'>Get in Touch</h5>                  
                            <div className='input_inner'>
                              <p className='icon_h'>Full Name</p>
                              <input className='input_div' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='input_inner'>
                              <p className='icon_h'>Email</p>
                              <input className='input_div' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='input_inner'>
                              <p className='icon_h'>Number</p>
                              <input className='input_div' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='input_inner'>
                              <p className='icon_h'>Company/Store</p>
                              <input className='input_div' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='input_inner'>
                              <p className='icon_h'>Message</p>
                              <input className='input_div' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='contact_section'>

                        <CTA2 url='/' title='Send'/>
                            </div>
            </div>
            <div className='flex_column'>
                        <h5 className='mask_h'>Contact Information</h5>
                <ContactInfo icon={email} title='Email' info='hello@ez-saver.com'/>
                <ContactInfo icon={phone} title='Phone' info='+20 123 456 7890'/>
                <ContactInfo icon={location} title='Office' info='Cairo, Egypt'/>

                <TextCard title='Why Partner with EZ-saver' 
                text='Increase customer satisfaction and loyalty 
                Reduce checkout lines and wait times
                Gain valuable shopping insights and analytics
                Easy integration with existing systems
                Dedicated support team
                '/>

                <TextCard title='Business Hours' 
                text='
                '/>
            </div>
        </section>



        <Footer />
    </div> );
}
 
export default Contact;