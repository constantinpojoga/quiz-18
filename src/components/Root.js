import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App.js';
// import '../global/styles/base.scss';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

Provider.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root