import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/Layout/Nav';
// import Mask1 from '../Components/Layout/Mask1';
import TextImgCard from '../Components/Common/TextImgCard';
import Footer from '../Components/Layout/Footer';
import blogs_img from '../Assets/blogs_img.png';
import blog1 from '../Assets/blog1.png';
import blog2 from '../Assets/blog2.png';
import blog3 from '../Assets/blog3.png';
import blog4 from '../Assets/blog4.png';
import './Blogs.css';

const Blogs = () => {
    return ( <div className='body_home'>
        <Nav />
        <div className='mask_blogs'>
            <h2 className='mask_blogs_h'>EZ-SAVER Blogs</h2>
        </div>

            <TextImgCard img={blogs_img} title='About Blogs' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items ate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>

            <section className='flex w'>
                        <div className='blog_text'>
                            <div className='text'>
                            <h3 className='about_h'>Shopping with EZ-SAVER</h3>
                            <hr className='line' />
                            <p className='arrow_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find......</p>
                            <Link to={"/"}>
                            <p className='blog_cta'>Know More</p>
                            </Link>                            
                            </div>
                        </div>
                  <div className='flex_column ww'>
                    <div className='flex www'>
                        <div className='blog_text2'>
                         <div className='text'>
                            <h3 className='about_h'>Shopping with EZ-SAVER</h3>
                            <hr className='line' />
                            <p className='arrow_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find......</p>
                            <Link to={"/"}>
                            <p className='blog_cta'>Know More</p>
                            </Link>                            
                            </div>
                        </div>
                        <div className='blog_text3'>
                          <div className='text'>
                            <h3 className='about_h'>Shopping with EZ-SAVER</h3>
                            <hr className='line' />
                            <p className='arrow_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find......</p>
                            <Link to={"/"}>
                            <p className='blog_cta'>Know More</p>
                            </Link>
                            </div>
                        </div>
                      {/* <img className='blog' src={blog2} alt="" />
                      <img className='blog' src={blog3} alt="" /> */}
                    </div>
                      <div className='blog_text4'>
                         <div className='text'>
                            <h3 className='about_h'>Shopping with EZ-SAVER</h3>
                            <hr className='line' />
                            <p className='arrow_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find......</p>
                            <Link to={"/"}>
                            <p className='blog_cta'>Know More</p>
                            </Link>                            
                            </div>
                      </div>
                    {/* <img className='blog' src={blog4} alt="" /> */}
                </div>
            </section>
        <Footer />
    </div> );
}
 
export default Blogs;