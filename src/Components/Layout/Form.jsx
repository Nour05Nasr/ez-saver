import React, { useState } from 'react';
import CTA2 from '../Common/CTA2';
import './Form.css';


const Form = (props) => {
    return ( 
            <div className='column_start w'>
                        <h5 className='mask_h'>{props.headline}</h5>                  
                            <div className='input_inner top'>
                              <p className='icon_h'>{props.title1}</p>
                              <input className='input_div top' type='text' placeholder={props.text1} />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>{props.title2}</p>
                              <input className='input_div top' type='text' placeholder={props.text2} />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>{props.title3}</p>
                              <input className='input_div top' type='number' placeholder={props.text3} />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>{props.title4}</p>
                              <input className='input_div top' type='text' placeholder={props.text4} />
                            </div>
                            <div className='input_inner top'>
                              <p className='icon_h'>{props.title5}</p>
                              <input className='input_div2 top' type='text' placeholder={props.text5} />
                            </div>

                            <div className='contact_cta'>
                        <CTA2 url='/' title='Send'/>
                            </div>
            </div>
     );
}
 
export default Form;