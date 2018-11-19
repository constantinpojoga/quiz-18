import React, { Component}  from 'react';
import TopNav from 'components/containers/TopNav';
import logo from './marvel-logo.png';
import "./Header.scss";

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="Metlife Logo" className="image"/>

                </div>

                <TopNav />
            </header>
        )
    }
}
