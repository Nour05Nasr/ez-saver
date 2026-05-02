import React, { Component } from 'react';
import H2 from '../Common/H2';
import './Mask4.css';

const Mask2 = (props) => {
    return ( <div className='body_home'>
        <div className='mask4'>
           <h2 className='main_title_overlay'>{props.title}</h2>
        </div>
    </div> );
}
 
export default Mask2;