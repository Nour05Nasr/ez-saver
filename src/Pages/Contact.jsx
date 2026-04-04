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

        <section className='contact_section'>
            <div className='column_start w'>
                        <h5 className='mask_h'>Get in Touch</h5>                  
                            <div className='input_inner top'>
                              <p className='icon_h'>Full Name</p>
                              <input className='input_div top' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>Email</p>
                              <input className='input_div top' type='text' placeholder='Enter your full name' />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>Number</p>
                              <input className='input_div top' type='text' placeholder='Enter your phone number' />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>Company/Store</p>
                              <input className='input_div top' type='text' placeholder='Enter your e-mail address' />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>Message</p>
                              <input className='input_div2 top' type='text' placeholder='Enter your message' />
                            </div>

                            <div className='flex top2'>
                        <CTA2 url='/' title='Send'/>
                            </div>
            </div>
            <div className='column_start w'>
                        <h5 className='mask_h'>Contact Information</h5>
                        <div className='top column_start'>
                <ContactInfo icon={email} title='Email' info='hello@ez-saver.com'/>
                <ContactInfo icon={phone} title='Phone' info='+20 123 456 7890'/>
                <ContactInfo icon={location} title='Office' info='Cairo, Egypt'/>
                        </div>

                <TextCard title='Why Partner with EZ-saver ?' 
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