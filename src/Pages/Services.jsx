import React from 'react';
import { FaCheck } from 'react-icons/fa'; 
import Nav from '../Components/Layout/Nav';
import Mask4 from '../Components/Layout/Mask4';
import CTA1 from '../Components/Common/CTA1';
import CTA2 from '../Components/Common/CTA2';
import Footer from '../Components/Layout/Footer';
import './Services.css';

const Services = () => {
    return (
        <div className='body_home services_container '>
            <Nav />
                    <Mask4 title='EZ-SAVER SERVICES'/>

            {/* <h2 className='main_title_overlay'>EZ-SAVER SERVICES</h2> */}

            <div className='hero_section'>
                {/* <div className='hero_image_bg'></div> */}
                
                <div className='split_background'>
                    <div className='section_blue'>
                        <div className='content_wrapper'>
                            <h2 className='service_h2'>TRIAL DEMO</h2>
                            <p className='description'>
                                Navigate the store quickly with indoor navigation and AR directions to find items in seconds...
                            </p>
                            <h2 className='service_h2'>WHY PARTNER WITH EZ-SAVER ?</h2>
                            <ul className='benefit_list'>
                                <li className='about_p'><FaCheck className="icon2" /> Increase customer satisfaction and loyalty</li>
                                <li className='about_p'><FaCheck className="icon2" /> Reduce checkout lines and wait times</li>
                                <li className='about_p'><FaCheck className="icon2" /> Gain valuable shopping insights and analytics</li>
                                <li className='about_p'><FaCheck className="icon2" /> Easy integration with existing systems</li>
                                <li className='about_p'><FaCheck className="icon2" /> Dedicated support team</li>
                            </ul>
                        <div className='top_marg'>
                            <CTA2 title='Know Details' url='/Demo'/>
                            </div>
                        </div>
                    </div>

                    <div className='section_orange'>
                        <div className='content_wrapper'>
                            <h2 className='service_h2'>DOWNLOAD APP</h2>
                            <p className='description'>
                                Navigate the store quickly with indoor navigation and AR directions to find items in seconds...
                            </p>
                            <h2 className='service_h2'>WHY SHOP WITH EZ-SAVER ?</h2>
                            <ul className='benefit_list'>
                                <li className='about_p'><FaCheck className="icon" /> Increase efficiency and satisfaction</li>
                                <li className='about_p'><FaCheck className="icon" /> Reduce checkout lines and wait times</li>
                                <li className='about_p'><FaCheck className="icon" /> Digitalize in store shopping experiences</li>
                                <li className='about_p'><FaCheck className="icon" /> Saving time by reducing shopping trip duration</li>
                                <li className='about_p'><FaCheck className="icon" /> Seamless navigation and digital convenience.</li>
                            </ul>
                            <div className='top_marg'>
                            <CTA1 title='Know Details' url='/Download'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;