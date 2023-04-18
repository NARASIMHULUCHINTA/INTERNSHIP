import React from 'react';
import { Provider } from 'react-redux';


import Home from './Home';
import ReduxCounterApp from './ReduxCounterApp';

import { store } from '../Redux/Store';

export default function ReduxStore() {

    return (
        <Provider store={store}>
            {/* <Home />*/}
            <ReduxCounterApp />
        </Provider>
    )
}