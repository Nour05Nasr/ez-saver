import React, { Component } from 'react';
// import ScrollStack, { ScrollStackItem } from '../Components/Layout/ScrollStack'
import ScrollStack from '../Components/Layout/ScrollStack';
import ScrollStackItem from '../Components/Common/ScrollStackItem';
import Nav from '../Components/Layout/Nav';
import ScrollVelocity from '../Components/Layout/ScrollVelocity';
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
import LogoLoop from '../Components/Layout/LogoLoop'
import ScrollAnimation from '../Components/Layout/ScrollAnimation'
import Faq from '../Components/Layout/Faq'
import Footer from '../Components/Layout/Footer'
import DomeGallery from '../Components/Layout/DomeGallery';
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
            {/* <div class="sketchfab-embed-wrapper"> <iframe title="Smart Shopping Cart"  allow="autoplay; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="500" height="600" src="https://sketchfab.com/models/4aca91a9135f4af59ef614b32bc69755/embed?autostart=1&transparent=1"> </iframe> </div> */}
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

  <section className='bg_section flex_column'>
          <h4 className="scroll_h" >How It Works ?</h4>
          <ScrollAnimation />
  </section>

  <LogoLoop />

  <Faq />

    <div className='flex_column' style={{ width: '100%', height: '100vh' }}>
                    <H2 title='Our Users & Partners Testimonials'/>
      <DomeGallery
  fit={0.6}
  minRadius={600}
  maxVerticalRotationDeg={0}
  segments={28}
  dragDampening={1.2}
  grayscale={false}
/>
    </div>

<Footer />
{/* export default function App() {
  return (
  );
} */}
    </div>);
}
export default Home;