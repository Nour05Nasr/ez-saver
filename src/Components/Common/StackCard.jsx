import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import H1 from '../Common/H1';
// import P from '../Common/P';
// import Button from '../Common/Button';    
// import H3 from '..//Common/H3';
// import cardbg2 from './../Assets/cardbg2.png';  
import CTA2 from '../Common/CTA2'
import './StackCard.css';

const StackCard = (props) => {
    return ( 
        <>
            {/* <div className="card_temp"> */}
                <div className='flex'>
                  <div className="div_temp1">
                    <h2 className='about_h'>{props.title}</h2>
                    <p className='about_p'>{props.text}</p>
                    <CTA2 url='+' title='Know More'/>
                  </div>
                  <img className='stack_img' src={props.img} alt="" />
                </div>
            {/* </div> */}

        </>
     );
}
 
export default StackCard;