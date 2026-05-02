import React, { Component } from 'react';
import H2 from '../Common/H2';
import './Mask2.css';

const Mask4 = (props) => {
    return ( <div className='body_home'>
        <div className='mask2'>
           <h2 className='mask2_h'>{props.title}</h2>
        </div>
    </div> );
}
 
export default Mask4;