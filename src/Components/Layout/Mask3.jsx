import React, { Component } from 'react';
import H2 from '../Common/H2';
import './Mask3.css';

const Mask3 = (props) => {
    return ( <div className='body_home'>
        <div className='mask3'>
           <h2 className='mask3_h'>{props.title}</h2>
        </div>
    </div> );
}
 
export default Mask3;