import React, { Component } from 'react';
import '@google/model-viewer';
import ModelViewer from '../Components/Layout/ModelViewer';
import ScrollStack from '../Components/Layout/ScrollStack';
import ScrollStackItem from '../Components/Common/ScrollStackItem';
import Nav from '../Components/Layout/Nav';
import ScrollVelocity from '../Components/Layout/ScrollVelocity';
import DuoCard from '../Components/Layout/DuoCard';
import StackCard from '../Components/Common/StackCard';
import hero from '../Assets/hero.svg';
import hero_cart from '../Assets/hero_cart.png';
import AboutCard from '../Components/Layout/AboutCard'
import H2 from '../Components/Common/H2';
import CTA1 from '../Components/Common/CTA1';
import CTA2 from '../Components/Common/CTA2';
import time from '../Assets/time.png';
import money from '../Assets/money.png';
import effort from '../Assets/effort.png';
import blue from '../Assets/blue.svg';
import orange from '../Assets/orange.svg';
import bg from '../Assets/bg.svg';
import object_0 from '../Assets/object_0.glb';
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
           <h1 className='hero_h'>تجربة تسوق كما لم تجربها من قبل</h1>
           <CTA2 url='/about' title='Know More'/>
        </div>
    </section>
        <div className='hero_imgs'>

{/* <ModelViewer
  url={object_0}
  width={600}
  height={600}
  modelXOffset={-0.5}
  modelYOffset={-0.6}
  enableMouseParallax
  enableHoverRotation
  environmentPreset="city"
  fadeIn
  autoRotate={false}
  autoRotateSpeed={0.35}
  showScreenshotButton={false}
/> */}
            {/* <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/{{MODELVIEWER_VERSION}}/model-viewer.min.js"></script> */}
            {/* <div class="sketchfab-embed-wrapper"> <iframe title="Smart Shopping Cart"  allow="autoplay; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="500" height="600" src="https://sketchfab.com/models/4aca91a9135f4af59ef614b32bc69755/embed?autostart=1&transparent=1"> </iframe> </div> */}
           {/* <img className='hero_img' src={hero} alt="ez-saver hero" /> */}
           <img className='hero_img' src={hero_cart} alt="ez-saver hero" />
           {/* <img className='speed_img' src={speed} alt="ez-saver hero" /> */}
        </div>
   
    <ScrollVelocity
  texts={['Shopping Made Eazy.', 'Shopping Made Fast.']} 
  velocity={80}
  className="custom-scroll-text"
/>

<AboutCard />

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

<div className='flex_column'>
   <H2 title='What EZ-SAVER Offers?'/>

  <DuoCard title1='For Retailers' text1='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.' 
  title2='For Shoppers' text2='Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds.'/>
</div>

  <section className='bg_section flex_column'>
          <h4 className="scroll_h" >How It Works ?</h4>
          <ScrollAnimation />
  </section>


    <H2 title='Our Partners' />
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