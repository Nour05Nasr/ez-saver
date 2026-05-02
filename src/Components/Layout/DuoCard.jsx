import React, { Component, useEffect, useState } from 'react';

import CTA1 from '../Common/CTA1';
import CTA2 from '../Common/CTA2';
import H2 from '../Common/H2';
import { supabase } from '../../Supabase';
import './DuoCard.css';


const DuoCard = (props) => {
  return (
    <div className="flex_column marg">
              {/* <H2 title='What EZ-SAVER Offers?'/> */}
      
      <div className="card-outer">
 
        <div className="panel blue-panel">
          <div className="text-box left-text">
            <h2 className='about_h'>{props.title1}</h2>
            <p className='about_p'>{props.text1}</p>
            <CTA2 url={props.url1} title='Know More'/>
          </div>
        </div>

        <div className="panel orange-panel">
          <div className="text-box right-text">
            <h2 className='about_h'>{props.title2}</h2>
            <p className='about_p'>{props.text2}</p>
            <CTA1 url={props.url2} title='Know More'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuoCard;