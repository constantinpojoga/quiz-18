import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopNavTrigger from 'components/presentational/TopNavTrigger';
import TopNavMenu from 'components/presentational/TopNavMenu';
import Overlay from 'components/presentational/Overlay';
import { setMenuState, setOverlayState } from 'redux/actions';

import "./top-nav.scss";

const mapStateToProps = state => {
    return {
        overlayIsActive: state.overlayIsActive,
        menuIsOpen: state.menuIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMenuState: (val) => dispatch(setMenuState(val)),
        setOverlayState: (val) => dispatch(setOverlayState(val))
    };
};

class ConnectedTopNav extends Component {
    constructor(props) {
        super(props);
        
        this.handleTriggerClick = this.handleTriggerClick.bind(this);
        this.toggleVolumeState = this.toggleVolumeState.bind(this);
        this.hideMenuAndOverlay = this.hideMenuAndOverlay.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this);
    }

    muteTheAudio() {
        this.props.setVolume(false);
    }

    handleTriggerClick(event) {
        event.preventDefault();
        this.showMenuAndOverlay()
    }

    toggleVolumeState() {
        this.props.setVolume(!this.props.volumeIsOn);
    }

    handleKeyPress(event) {
        if (this.props.menuIsOpen && event.keyCode === 27) {
            this.hideMenuAndOverlay();
        }
    }

    handleCloseBtnClick(event) {
        event.preventDefault();
        this.hideMenuAndOverlay()
    }

    showMenuAndOverlay() {
        this.props.setMenuState(true);
        this.props.setOverlayState(true);
        document.addEventListener('keyup', this.handleKeyPress);
    }

    hideMenuAndOverlay() {
        this.props.setMenuState(false);
        this.props.setOverlayState(false);
        document.removeEventListener('keyup', this.handleKeyPress);
    }

    render() {
        return (
            <div className="top-nav">                
                <TopNavTrigger handleClick={this.handleTriggerClick}/>

                <Overlay overlayIsActive={this.props.overlayIsActive} handleClick={this.hideMenuAndOverlay} />

                <TopNavMenu menuIsOpen={this.props.menuIsOpen} handleCloseBtnClick={this.handleCloseBtnClick} handleLinkClick={this.hideMenuAndOverlay} />
            </div>
        )
    }
}

const TopNav = connect(mapStateToProps, mapDispatchToProps)(ConnectedTopNav);

TopNav.propTypes = {
    overlayIsActive: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
}

export default TopNav