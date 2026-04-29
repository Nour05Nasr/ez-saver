import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import NavLi from '../Common/NavLi';
import CTA1 from '../Common/CTA1';
import CTA2 from '../Common/CTA2';
import './Nav.css';

const Nav = (props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Check if the current path ends with 'AR'
    const isArabic = currentPath.endsWith('AR');

    // Logic to determine the target URL:
    // If /aboutAR -> target is /about
    // If /about -> target is /aboutAR
    // Handle root path / separately for /HomeAR
    const toggleLanguagePath = () => {
        if (isArabic) {
            return currentPath.replace('AR', '');
        } else {
            // If at root '/', go to '/HomeAR', otherwise just append 'AR'
            return currentPath === '/' ? '/AR' : `${currentPath}AR`;
        }
    };

    return (
        <div className='nav'>            
            <div className='menu'>   
                <Link className='nav_logo' to={isArabic ? '/AR' : '/'}>
                    <img src={logo} alt="EZ-SAVER Logo"/>
                </Link>
                <NavLi url={isArabic ? '/AboutAR' : '/About'} title='About'/>
                <NavLi url={isArabic ? '/ServicesAR' : '/Services'} title='Services'/>
                <NavLi url={isArabic ? '/BlogsAR' : '/Blogs'} title='Blogs'/>
                <NavLi url={isArabic ? '/CareerAR' : '/Career'} title='Careers'/>
                <NavLi url={isArabic ? '/ContactAR' : '/Contact'} title='Contact'/>
                
                <div className='lang_div'>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to={toggleLanguagePath()}
                    >
                        <p className='lang'>
                            {isArabic ? 'EN' : 'AR'}
                        </p>
                    </Link>
                </div>
            </div>
            
            <div className='cta_div'>
                <CTA1 url='*' title='Download App'/>
                <CTA2 url='*' title='Book Demo'/>
            </div>
        </div>
    );
}

export default Nav;