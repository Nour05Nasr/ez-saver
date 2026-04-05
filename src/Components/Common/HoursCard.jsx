import React, { useState } from 'react';
import './HoursCard.css';

const HoursCard = (props) => {
  return ( <div className='text_card'>
        <h5 className='card_h'>{props.title}</h5>
        <div className='flex_end'>
          <p className='mask_p marg'>{props.text1}</p>
          <p className='mask_p marg'>{props.text2}</p>
        </div>
        <div className='flex_end'>
          <p className='mask_p marg'>{props.text3}</p>
          <p className='mask_p marg'>{props.text4}</p>
        </div>
    </div> );
}
 
export default HoursCard;