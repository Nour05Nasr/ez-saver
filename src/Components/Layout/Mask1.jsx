import React, { Component } from 'react';
import H2 from '../Common/H2';
import policy from '../../Assets/policy.png';
import './Mask1.css';

const Mask1 = (props) => {
    return ( <div className='body_home'>
        <div className='mask1'>
            <h2 className='mask1_h'>{props.title}</h2>
            {/* <img className='mask1' src={policy} alt="" /> */}
        </div>
    </div> );
}
 
export default Mask1;