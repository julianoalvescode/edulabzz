import React from 'react';

import * as S from './../styles';
import * as I from 'shared/interfaces';

import { FormattedMessage } from 'react-intl';
export function Password({
    placeholder = 'Senha',
    register,
}: I.Email): React.ReactElement {
    return (
        <>
            <S.Container>
                <S.Label>
                    <FormattedMessage id="password" />
                </S.Label>
                <S.InputStyle
                    {...register('password')}
                    type="password"
                    placeholder={placeholder}
                />
            </S.Container>
        </>
    );
}
