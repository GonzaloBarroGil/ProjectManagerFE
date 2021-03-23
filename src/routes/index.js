import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router';

import {history} from '../store';
import App from "../components/App";

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </ConnectedRouter>
);

export default Routes;
