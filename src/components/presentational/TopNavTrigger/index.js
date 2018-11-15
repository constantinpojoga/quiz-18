import React from 'react';
import PropTypes from 'prop-types';
import hamburger from './hamburger.svg';
import './top-nav-trigger.scss';

const TopNavTrigger = (props) => (

    <button href="" className="top-nav-trigger no-btn-styles" onClick={props.handleClick} title="Open Menu">
        <img src={hamburger} alt="Menu Trigger" className="top-nav-trigger__image"/>
    </button>
)

TopNavTrigger.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default TopNavTrigger