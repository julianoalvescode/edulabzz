import React from 'react';

import * as S from './styles';

export const Loading = (): React.ReactElement => {
    return (
        <>
            <S.Container>
                <S.Load />
            </S.Container>
        </>
    );
};
