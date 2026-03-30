import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import NavLi from '../Common/NavLi';
import CTA1 from '../Common/CTA1';
import CTA2 from '../Common/CTA2';
import './Nav.css';

const Nav = (props) => {
    return (<div className='nav'>            
            <div className='menu'>   
                <Link className='nav_logo' to='/'>
                    <img src={logo} alt="EZ-SAVER Logo"/>
                </Link>
                <NavLi url='/' title='About'/>
                <NavLi url='/' title='Services'/>
                <NavLi url='/' title='Blogs'/>
                <NavLi url='/' title='Careers'/>
                <NavLi url='/' title='Contact'/>
                <div className='lang_div'>
                <p className='lang'>AR</p>
                </div>
            </div>
            
            <div className='cta_div'>
                <CTA1 url='*' title='Download App'/>
                <CTA2 url='*' title='Book Demo'/>
            </div>
        </div>);
}
export default Nav;
