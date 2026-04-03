import React, { Component } from 'react';
// import { FaPaperPlane } from "react-icons/fa";
import footer_logo from '../../Assets/footer_logo.svg';
import social from '../../Assets/social.svg';
import send from '../../Assets/send.svg';
import Input from '../Common/Input';
import CTA2 from '../Common/CTA2';
import './Footer.css';

const Footer = () => {
    return ( <>
     <section class="connect_temp">
                <footer class="footer-section">
                    <div class="copyright-area">
                          <div class="footer_container">
                        <div class="footer-content pt-5 pb-5">
                                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                          <h2 className='about_h'>Subscribe Now!</h2>
                                          <p className='footer_p'>To be the first to know about our newsletter!</p>
                                        </div>
                                        <div class="footer-text mb-25">
                                        </div>
                                            <form class="subscribe-form" action="#">
                                              <Input title='Enter your e-mail address' />                
                                                <button><img src={send} /></button>
                                            </form>
                                    </div>
                               </div>
                        </div>
                    </div>
                        <div class="container">
                            <div class="footer_row">
                                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                       <div class="footer-logo">
                                            <img className='nav-logo' src={footer_logo} alt="logo" />
                                        </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 mb-50">
                                    <div class="footer-widget flex_column">
                                    <div class="footer-menu flex">
                                        <ul>
                                            <li className='footer_menu_p'>About</li>
                                            <li><a href="#">Vision</a></li>
                                            <li><a href="#">Mission</a></li>
                                            <li><a href="#">Values</a></li>
                                        </ul>
                                        <ul>
                                            <li className='footer_menu_p'>Services</li>
                                            <li><a href="#">Shoppers</a></li>
                                            <li><a href="#">Retailers</a></li>
                                        </ul>
                                        <ul>
                                            <li className='footer_menu_p'>Blogs</li>
                                            <li><a href="#">New Blogs</a></li>
                                            <li><a href="#">Past Blogs</a></li>
                                        </ul>
                                        <ul>
                                            <li className='footer_menu_p'>Careers</li>
                                            <li><a href="#">EZ-SAVER Careers</a></li>
                                            <li><a href="#">Our Mission</a></li>
                                        </ul>
                                        <ul>
                                            <li className='footer_menu_p'>Contact</li>
                                            <li><a href="#">Request Demo</a></li>
                                            <li><a href="#">Contact Info</a></li>
                                            <li><a href="#">Business Hours</a></li>
                                        </ul>
                                    </div>
                                        <div class="copyright-text">
                                        <p>Copyright &copy; 2025, All Right Reserved <a href="#">EZ-SAVER</a></p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                    <div class="footer-menu">
                                        <ul>
                                            <h2 className='about_h'>Connect<br></br>with us on</h2>
                                            <img src={social} alt="logo" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
    </> );
}
 
export default Footer;