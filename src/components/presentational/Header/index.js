import React from 'react';
import TopNav from 'components/containers/TopNav';
import logo from './marvel-logo.png';
import "./Header.scss";

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <img src={logo} alt="Quiz Logo" className="image"/>
        </div>

        <TopNav />
    </header>
);

export default  Header
