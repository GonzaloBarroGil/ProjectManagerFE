import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// TODO general - find out how to use absolute paths instead of relative paths
import store from './store';
import Routes from './routes';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);