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

    const isArabic = currentPath.endsWith('AR');

    const toggleLanguagePath = () => {
        if (isArabic) {
            return currentPath.replace('AR', '');
        } else {
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
                <CTA1 url='/Download' title='Download App'/>
                <CTA2 url='/Demo' title='Book Demo'/>
            </div>
        </div>
    );
}

export default Nav;