import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import { NavLink } from 'react-router-dom';
import closeBtnImg from './close-btn.svg';
import './top-nav-menu.scss';
import { ANIMATION_DURATION } from 'global/constants/index.js';
// import navData from 'model/app.json';

class TopNavMenu extends Component {
    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);

        if (this.props.menuIsOpen) this.showMenu();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.menuIsOpen !== this.props.menuIsOpen) {
            if (nextProps.menuIsOpen) {
                this.showMenu()
            } else {
                this.hideMenu();
            }
        }   
    }

    showMenu() {
        TweenLite.to(this.menuDiv, ANIMATION_DURATION, {alpha: 1});
        TweenLite.to(this.menuDiv, ANIMATION_DURATION, {x: "0%"});
    }

    hideMenu() {
        TweenLite.to(this.menuDiv, ANIMATION_DURATION, {x: "-100%"});
        TweenLite.set(this.menuDiv, {alpha: 0, delay: ANIMATION_DURATION});
    }

    render() {
        return (
            <div className="top-nav-menu" ref={div => this.menuDiv = div}>
                <button href="" className="top-nav-menu__close no-btn-styles" onClick={this.props.handleCloseBtnClick} title="Close Menu">
                    <img src={closeBtnImg} alt="Close Menu" className="top-nav-menu__image"/>
                </button>

                <nav>
                    <ul className="top-nav-menu__list">
                        
                            <li className="top-nav-menu__list-item>">
                                <NavLink 
                                    exact to="/" className="top-nav-menu__link" 
                                    onClick={this.props.handleLinkClick} 
                                    activeClassName="top-nav-menu__link--active">Home
                                </NavLink>

                                <NavLink 
                                    exact to="/quiz" className="top-nav-menu__link" 
                                    onClick={this.props.handleLinkClick} 
                                    activeClassName="top-nav-menu__link--active">Quiz
                                </NavLink>

                                <NavLink 
                                    exact to="/results" className="top-nav-menu__link" 
                                    onClick={this.props.handleLinkClick} 
                                    activeClassName="top-nav-menu__link--active">Results
                                </NavLink>
                            </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

TopNavMenu.propTypes = {
    menuIsOpen: PropTypes.bool,
    handleCloseBtnClick: PropTypes.func.isRequired,
    handleLinkClick: PropTypes.func.isRequired
}

export default TopNavMenu;
