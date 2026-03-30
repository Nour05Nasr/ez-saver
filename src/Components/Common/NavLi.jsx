import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavLi.css';

const NavLi = (props) => {
    return (<Link className='nav_link' to={props.url}>
               <li className='nav_li'>{props.title}</li>
            </Link>);
}
export default NavLi;
