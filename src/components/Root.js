import React, { useReducer } from 'react';
import rootReducer from 'store/reducers';
import App from './App.js';
import Store, { initialState } from 'store/'
import '../global/styles/base.scss';

const Root = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <Store.Provider value={{state, dispatch}}>
            <App />
        </Store.Provider>
    );
}

export default Root
