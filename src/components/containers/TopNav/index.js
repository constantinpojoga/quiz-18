import React, { useContext }  from 'react';
import PropTypes from 'prop-types';
import TopNavTrigger from 'components/presentational/TopNavTrigger';
import TopNavMenu from 'components/presentational/TopNavMenu';
import Overlay from 'components/presentational/Overlay';
import { setMenuState, setOverlayState } from 'store/actions';
import Store from 'store/';
import "./top-nav.scss";

const TopNav = () => {
    const { state, dispatch} = useContext(Store);

    return (
        <ConnectedTopNav 
            overlayIsActive = { state.overlayIsActive } 
            menuIsOpen = { state.menuIsOpen }
            setMenuState = { val => dispatch(setMenuState(val))}
            setOverlayState = { val => dispatch(setOverlayState(val)) }
        />
    )
}

const ConnectedTopNav = (props) => {
    const setMenuAndOverlayVisibility = (isVisible) => {
        props.setMenuState(isVisible);
        props.setOverlayState(isVisible);
    }
    const showMenuAndOverlay = () => setMenuAndOverlayVisibility(true);
    const hideMenuAndOverlay = () => setMenuAndOverlayVisibility(false);

    return (
        <div className="top-nav">                
            <TopNavTrigger handleClick={ showMenuAndOverlay }/>

            <Overlay 
                overlayIsActive={props.overlayIsActive} 
                handleClick={ hideMenuAndOverlay } 
            />

            <TopNavMenu 
                menuIsOpen={ props.menuIsOpen } 
                handleClose={ hideMenuAndOverlay } 
            />
        </div>
    )
}

TopNav.propTypes = {
    overlayIsActive: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
}

export default TopNav
