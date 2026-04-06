import React, { useState } from 'react';
import './Input.css';


const Input = (props) => {
  return (<div className='input_div'>
    {/* <span class="icon"></span> */}
    <input class="log_input" type="text" placeholder={props.title} />
   </div>);
}
 
export default Input;