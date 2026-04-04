import React, { Component } from 'react';
import './ContactInfo.css';

const ContactInfo = (props) => {
    return (  
                <div className='flex contact_info'>
                    <img className='contact_icon' src={props.icon} alt="e-mail" />
                    <div className=''>
                        <p className='icon_h'>{props.title}</p>
                        <p className='icon_p'>{props.info}</p>
                    </div>
                </div>
    );
}
 
export default ContactInfo;