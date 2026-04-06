import React, { Component } from 'react';
import Input from '../Components/Input';
import CTA2 from '../Components/CTA2';
import './SignUp.css';

const SignUp = () => {
    return (<div className='log_body sign_div flex_column flex_row'>

            <div className='input_div'>
               <h1 className='log_h'>Create Your Account</h1>
            
            <div className='column_start'>
                <p className='login_p'>Username</p>
                <Input title="Enter Your Username" />

                <p className='login_p'>E-mail</p>
                <Input title="Enter Your E-mail" />

                <div className=''>
                    <p className='login_p'>Password</p>
                  <Input title="Enter Your Password" />
                  <Input title="Confirm Your Password" />
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
 
export default SignUp;