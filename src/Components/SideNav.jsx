import React, { Component } from 'react';
import logo from './../Assets/logo.svg';
import profile from './../Assets/profile.svg';
import signout from './../Assets/signout.svg';
import email from './../Assets/email.svg';
import NavCta from '../Components/NavCta';
import NavLi from '../Components/NavLi';
import './SideNav.css';

const SideNav = () => {
    return ( <>
    <div className='side_nav'>
        <img className='nav_logo' src={logo} alt="EZ-SAVER Logo" />
        <div className='inner_nav'>
        <NavLi title="Dshboard" url="/Dashboard" img={email} />
        <NavLi title="Analytics" url="/Analytics" img={email} />
        <NavLi title="Partners" url="/Partners" img={email} />
        <NavLi title="Profiles" url="/Profiles" img={email} />
        <NavLi title="Lists" url="/List" img={email} />
        <NavLi title="Pages" url="/Pages" img={email} />
        <NavLi title="Notifications" url="/Notifications" img={email} />
        <NavLi title="Career Form" url="/Career" img={email} />
        <NavLi title="Contact Form" url="/Contact" img={email} />
        <NavLi title="Settings" url="/Settings" img={email} />
        </div>
        <NavCta title='Super Admin' name='Nour Nasr' url1='/' icon1={profile} url2='/' icon2={signout} />
    </div>
    </> );
}
 
export default SideNav;