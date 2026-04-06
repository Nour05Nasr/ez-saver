import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavCta.css';

const NavCta = (props) => {
    return ( <>
    <button className='nav_cta'>
    <Link className='' to={props.url1}>
            <img src={props.icon1} alt="icon" />
    </Link>
            <div className='column_start'>
              <h6 className='nav_title'>{props.title}</h6>
              <p className='nav_name'>{props.name}</p>
            </div>
    <Link className='' to={props.url2}>
            <img src={props.icon2} alt="icon" />
    </Link>
    </button>
    </> );
}
 
export default NavCta;
