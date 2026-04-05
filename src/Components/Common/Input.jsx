import React, { useState } from 'react';
import './Input.css';


const Input = (props) => {
  return ( 
    <>
       <input class="sub_input" type="text" placeholder={props.title} />
   </>
   );
}
 
export default Input;