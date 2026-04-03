import React, { Component } from 'react';
import './TextCard.css';

const TextCard = (props) => {
    return ( <div className='text_card'>
        <h5 className='mask_h'>{props.title}</h5>
        <p className='mask_p'>{props.text}</p>
    </div> );
}
 
export default TextCard;