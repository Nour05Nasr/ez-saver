import React, { Component } from 'react';
import Input from '../Components/Input';
import CTA2 from '../Components/CTA2';
import './LogIn.css';

const LogIn = () => {
    return (<div className='log_body log_div flex_column flex_row'>

            <div className='input_div'>
               <h1 className='log_h'>Log In To Your Account</h1>
            
            <div className='column_start'>
                <p className='login_p left'>E-mail</p>
                <Input title="Enter Your Email" />

                <div className='space'>
                  <div className='flex_end'>
                    <p className='login_p'>Password</p>
                    <p className='login_p'>Forgot Your Password ?</p>
                  </div>
                  <Input title="Enter Your Password" />
                  <div className='checkbox_div'>
                    <div className='checkbox'></div>
                    <p className='login_p'>Remember Me</p>
                  </div>
                </div>

            </div>

                <CTA2 title="Log In" url="/dashboard" />
            </div>
    </div>);
}
 
export default LogIn;