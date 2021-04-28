import React from 'react';

import * as S from './styles';

import { IButton } from 'shared/interfaces';

export function Button({
    type = 'button',
    message = 'Continuar',
    onClick,
}: IButton): React.ReactElement {
    return (
        <>
            {onClick ? (
                <>
                    <S.ButtonStyle onClick={() => onClick()} type={type}>
                        {message}
                    </S.ButtonStyle>
                </>
            ) : (
                <S.ButtonStyle type={type}>{message}</S.ButtonStyle>
            )}
        </>
    );
}
