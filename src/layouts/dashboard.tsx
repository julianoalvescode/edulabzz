import React from 'react';

import { Navbar } from 'components';

export const LayoutDashboard = ({
    children,
}: {
    children: any;
}): React.ReactElement => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
