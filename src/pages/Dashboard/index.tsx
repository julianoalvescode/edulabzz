import React, { useState } from 'react';

import * as C from 'components';

export function Dashboard(): React.ReactElement {
    const [isLoading, SetLoading] = useState<boolean>(true);
    return (
        <>
            <C.Coffe SetLoading={SetLoading} />
            {isLoading && <C.Loading />}
        </>
    );
}
