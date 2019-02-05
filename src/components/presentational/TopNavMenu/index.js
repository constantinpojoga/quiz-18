import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import { NavLink } from 'react-router-dom';
import closeBtnImg from './close-btn.svg';
import './top-nav-menu.scss';
import { ANIMATION_DURATION } from 'global/constants/index.js';

const TopNavMenu = (props) => {
    const handleKeyPress = (e) => {
        if (e.keyCode === 27) props.handleClose();
    }

    const showMenu = () => {
        TweenLite.to('.top-nav-menu', ANIMATION_DURATION, {alpha: 1});
        TweenLite.to('.top-nav-menu', ANIMATION_DURATION, {x: "0%"});
        
    }

    const hideMenu = () => {
        TweenLite.to('.top-nav-menu', ANIMATION_DURATION, {x: "-100%"});
        TweenLite.set('.top-nav-menu', {alpha: 0, delay: ANIMATION_DURATION});
    }

    // cDM, cWU
    useEffect(() => {
        if (props.menuIsOpen) {
            showMenu();
            document.addEventListener('keyup', handleKeyPress );
        } else {
            hideMenu();
            document.removeEventListener('keyup', handleKeyPress );
        }

        return () => document.removeEventListener('keyup', handleKeyPress );
    }, [props.menuIsOpen]);

    return (
        <div className="top-nav-menu" >
            <button className="top-nav-menu__close no-btn-styles" onClick={props.handleClose} title="Close Menu">
                <img src={closeBtnImg} alt="Close Menu" className="top-nav-menu__image"/>
            </button>

            <nav>
                <ul className="top-nav-menu__list">
                    <li className="top-nav-menu__list-item>">
                        <NavLink 
                            exact to="/" 
                            className="top-nav-menu__link" 
                            onClick={props.handleClose} 
                            activeClassName="top-nav-menu__link--active">Home
                        </NavLink>

                        <NavLink 
                            exact to="/quiz" 
                            className="top-nav-menu__link" 
                            onClick={props.handleClose} 
                            activeClassName="top-nav-menu__link--active">Quiz
                        </NavLink>

                        <NavLink 
                            exact to="/results" 
                            className="top-nav-menu__link" 
                            onClick={props.handleClose} 
                            activeClassName="top-nav-menu__link--active">Results
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

TopNavMenu.propTypes = {
    menuIsOpen: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
}

export default TopNavMenu;
