import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Sign, Dashboard } from 'pages';

import { PrivateRoute } from './privateRoute';

const Routes: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Sign} />
            <Route
                path="/"
                exact
                component={() => <Redirect to="/dashboard" />}
            />
        </Switch>
    );
};

export default Routes;
