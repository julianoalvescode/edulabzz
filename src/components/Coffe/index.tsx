import React from 'react';

import * as S from './styles';

import { useDispatch } from 'react-redux';
import { Card } from 'components';

import { ToastMessage } from 'utils';

export function Coffe(): React.ReactElement {
    const dispatch = useDispatch();

    const addCoffe = () => {
        dispatch({ type: 'User.Coffe' });

        ToastMessage('Mais um café tomado ☕');
    };

    return (
        <>
            <S.Container>
                <Card
                    src="https://www.starbucksathome.com/br/sites/default/files/styles/plp_desktop/public/2021-03/C5_7613036942720_BR%2C%20AR%2C%20US%2C%20UY_C1C1_website.jpg?itok=C3-8rCVB"
                    onClick={addCoffe}
                />
                <Card
                    src="https://www.starbucksathome.com/br/sites/default/files/styles/plp_desktop/public/2021-03/C5_7613036943376_BR%2C%20AR%2C%20US%2C%20UY_C1C1_website.jpg?itok=-hdx-xMw"
                    onClick={addCoffe}
                />
                <Card
                    src="https://www.starbucksathome.com/br/sites/default/files/styles/plp_desktop/public/2021-03/C5_7613036941419_BR%2C%20AR%2C%20US%2C%20UY_C1C1_website_0.jpg?itok=Gl_qu3rf"
                    onClick={addCoffe}
                />
            </S.Container>
        </>
    );
}
