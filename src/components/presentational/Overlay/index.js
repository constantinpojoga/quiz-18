
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import { ANIMATION_DURATION } from 'global/constants'
import './Overlay.scss';

class TopNavOverlay extends Component {
    constructor(props) {
        super(props);
        if (this.props.overlayIsActive) this.showOverlay();
    }

    showOverlay() {
        TweenLite.set(this.OverlayDiv, {display: "block"});
        TweenLite.to(this.OverlayDiv, ANIMATION_DURATION, {alpha: 1});
    }

    hideOverlay() {
        TweenLite.to(this.OverlayDiv, ANIMATION_DURATION, {alpha: 0});
        TweenLite.set(this.OverlayDiv, {display: "none", delay: this.ANIMATION_DURATION});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.overlayIsActive !== this.props.overlayIsActive) {
            if (nextProps.overlayIsActive) {
                this.showOverlay();
            } else {
                this.hideOverlay();
            }
        }   
    }

    render() {
        return <div className="overlay" onClick={this.props.handleClick} ref={div => this.OverlayDiv = div}></div>
    }
}

TopNavOverlay.propTypes = {
    handleClick: PropTypes.func.isRequired,
    overlayIsActive: PropTypes.bool
}

export default TopNavOverlay
