import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import Mask3 from '../Components/Layout/Mask3';
import DuoCard from '../Components/Layout/DuoCard';
import TextCard from '../Components/Common/TextCard';
import TextImgCard from '../Components/Common/TextImgCard';
import Footer from '../Components/Layout/Footer';
import career_img from '../Assets/career_img.png';
import './Career.css';

const Career = () => {
    return ( <div className='body_home'>
        <Nav />
        <Mask3 title='Careers At EZ-Saver'/>

        <TextImgCard img={career_img} title='About Careers' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items ate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>

<DuoCard title1='Job 1' url1='/JobDesc' url2='/JobDesc'
text1='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' 
  title2='Job 2'
   text2='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>

<DuoCard title1='Job 3' url1='/JobDesc' url2='/JobDesc'
 text1='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' 
  title2='Job 4' 
  text2='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>
        <Footer />
    </div> );
}
 
export default Career;