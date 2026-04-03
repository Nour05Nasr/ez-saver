import React, { Component, useEffect, useState } from 'react';
import CTA1 from '../Common/CTA1';
import CTA2 from '../Common/CTA2';
import H2 from '../Common/H2';
import { supabase } from '../../Supabase';
import './DuoCard.css';


const DuoCard = () => {
  return (
    <div className="flex_column marg">
              <H2 title='What EZ-SAVER Offers?'/>
      
      <div className="card-outer">
        {/* Blue Section */}
        <div className="panel blue-panel">
          <div className="text-box left-text">
            <h2 className='about_h'>For Retailers</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
            <CTA2 url='*' title='Know More'/>
          </div>
        </div>

        {/* Orange Section */}
        <div className="panel orange-panel">
          <div className="text-box right-text">
            <h2 className='about_h'>For Shoppers</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
            <CTA1 url='*' title='Know More'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuoCard;