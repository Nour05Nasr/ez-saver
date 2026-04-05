import React, { useState } from 'react';
import './WhyCard.css';

const WhyCard = (props) => {
  return ( <div className='text_card'>
        <h5 className='card_h'>{props.title}</h5>
        <div className='column_start'>
          <p className='mask_p marg'>{props.text1}</p>
          <p className='mask_p marg'>{props.text2}</p>
          <p className='mask_p marg'>{props.text3}</p>
          <p className='mask_p marg'>{props.text4}</p>
          <p className='mask_p marg'>{props.text5}</p>
        </div>
    </div> );
}
 
export default WhyCard;