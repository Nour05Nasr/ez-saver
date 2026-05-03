import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; 
import './WhyCard.css';

const WhyCard = (props) => {
  return ( <div className='text_card why_w'>
        <h5 className='card_h'>{props.title}</h5>
        <ul className='benefit_list'>
            <li className='mask_p marg'><FaCheck className="icon2" /> {props.text1}</li>
            <li className='mask_p marg'><FaCheck className="icon2" /> {props.text2}</li>
            <li className='mask_p marg'><FaCheck className="icon2" /> {props.text3}</li>
            <li className='mask_p marg'><FaCheck className="icon2" /> {props.text4}</li>
            <li className='mask_p marg'><FaCheck className="icon2" /> {props.text5}</li>
        </ul>
        {/* <div className='column_start'>
          <p className='mask_p marg'>{props.text1}</p>
          <p className='mask_p marg'>{props.text2}</p>
          <p className='mask_p marg'>{props.text3}</p>
          <p className='mask_p marg'>{props.text4}</p>
          <p className='mask_p marg'>{props.text5}</p>
        </div> */}
    </div> );
}
 
export default WhyCard;