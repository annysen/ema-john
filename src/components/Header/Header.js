import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css"
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shopping">Shopping</a>
                <a href="/review">Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;