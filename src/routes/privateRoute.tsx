/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import * as I from 'shared/interfaces';
import { LayoutDashboard } from 'layouts';
export const PrivateRoute = ({
    path,
    component,
    exact,
}: {
    path: string;
    component: React.FC;
    exact?: boolean;
}): any => {
    const user = useSelector((state: I.State) => state.user);

    if (user?.id === undefined) {
        return <Redirect to="/login"></Redirect>;
    }

    return (
        <>
            <LayoutDashboard>
                <Route path={path} component={component} exact={exact}></Route>
            </LayoutDashboard>
        </>
    );
};
