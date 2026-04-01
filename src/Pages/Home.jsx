import React, { Component } from 'react';
// import ScrollStack, { ScrollStackItem } from '../Components/Layout/ScrollStack'
import ScrollStack from '../Components/Layout/ScrollStack';
import ScrollStackItem from '../Components/Common/ScrollStackItem';
import Nav from '../Components/Layout/Nav';
import ScrollVelocity from '../Components/Layout/ScrollVelocity';
import DualCard from '../Components/Layout/DualCard';
import DuoCard from '../Components/Layout/DuoCard';
import StackCard from '../Components/Common/StackCard';
import hero from '../Assets/hero.svg';
// import speed from '../Assets/speed.png';
import H2 from '../Components/Common/H2';
import CTA1 from '../Components/Common/CTA1';
import CTA2 from '../Components/Common/CTA2';
import time from '../Assets/time.png';
import money from '../Assets/money.png';
import effort from '../Assets/effort.png';
import blue from '../Assets/blue.svg';
import orange from '../Assets/orange.svg';
import bg from '../Assets/bg.svg';
import Faq from '../Components/Layout/Faq'
import './Home.css';

const Home = () => {
    return ( <div className='body_home'>
     {/* <Helmet>
        <title>NourNasrBackEndLogIn</title>
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="LogIn" />
    </Helmet> */}

    <Nav />
    <section className='hero'>
        <div className='hero_text'>
           <h1 className='hero_h'>Experince Grocerry Shopping Like Never Before</h1>
           <CTA2 url='*' title='Know More'/>
        </div>
    </section>
        <div className='hero_imgs'>
           <img className='hero_img' src={hero} alt="ez-saver hero" />
           {/* <img className='speed_img' src={speed} alt="ez-saver hero" /> */}
        </div>
   
    <ScrollVelocity
  texts={['Shopping Made Eazy.', 'Shopping Made Fast.']} 
  velocity={80}
  className="custom-scroll-text"
/>

    <section className='about_section'>
        <div className='about_div'>
            <h2 className='about_h'>About EZ-SAVER</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
           <CTA2 url='*' title='Know More'/>
        </div>
    </section>

    <ScrollStack useWindowScroll={true} >
      <H2 title='Why Choose EZ-SAVER ?'/>
  <ScrollStackItem>
    <StackCard img={effort} alt='ez-saver save effort' title='Save Effort' text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>
  </ScrollStackItem>

  <ScrollStackItem>
    <StackCard  img={time} alt='ez-saver save time' title="Save Time" text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' url="/Category/UI_UX_Design"/>
  </ScrollStackItem>

  <ScrollStackItem>
    <StackCard  img={money} alt='ez-saver save money' title="Save Money" text='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' url="/Category/Web_Design"/>
  </ScrollStackItem>
  </ScrollStack>

  <DuoCard />

  <section className='bg_section'>
          <H2 title='How It Works ?'/>
  </section>

  <Faq />

    </div>);
}
export default Home;