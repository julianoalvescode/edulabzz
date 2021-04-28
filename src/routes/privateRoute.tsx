/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { IState } from 'shared/interfaces';
export const PrivateRoute = ({
    path,
    component,
    exact,
}: {
    path: string;
    component: React.FC;
    exact?: boolean;
}): any => {
    const user = useSelector((state: IState) => state.user);

    if (user?.id === undefined) {
        return <Redirect to="/login"></Redirect>;
    }

    return <Route path={path} component={component} exact={exact}></Route>;
};
