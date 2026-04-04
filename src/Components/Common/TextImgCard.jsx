import React, { Component } from 'react';
import './TextImgCard.css';

const TextImgCard = (props) => {
    return (
    <div className='about_career'>
       <img className='career_img' src={props.img} alt="EZ-Saver Office Signgage" />
       <div className='text_card'>
          <h5 className='mask_h'>{props.title}</h5>
          <p className='text-img-p'>{props.text}</p>
       </div>        
    </div>);
}
 
export default TextImgCard;