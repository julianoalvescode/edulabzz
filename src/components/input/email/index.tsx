import React from 'react';

import * as S from './../styles';
import * as I from 'shared/interfaces';

import { FormattedMessage } from 'react-intl';
export function Email({
    placeholder = 'Endereço de e-mail',
    register,
}: I.Email): React.ReactElement {
    return (
        <>
            <S.Container>
                <S.Label>
                    <FormattedMessage id="email" />
                </S.Label>
                <S.InputStyle
                    {...register('email')}
                    type="email"
                    placeholder={placeholder}
                />
            </S.Container>
        </>
    );
}
