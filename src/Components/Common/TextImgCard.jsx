import React, { Component } from 'react';
import Nav from '../Components/Layout/Nav';
import Mask3 from '../Components/Layout/Mask3';
import Footer from '../Components/Layout/Footer';
import DuoCard from '../Components/Layout/DuoCard';
import './TextImgCard.css';

const TextImgCard = () => {
    return ( <div className='body_home'>
        <Nav />

        <TextImgCard />

<DuoCard title1='Job 1' text1='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' 
  title2='Job 2' text2='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>

<DuoCard title1='Job 3' url='' text1='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' 
  title2='Job 4' text2='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>
        <Footer />
    </div> );
}
 
export default TextImgCard;