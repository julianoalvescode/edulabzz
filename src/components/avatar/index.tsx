import React from 'react';

import * as S from './styles';

import * as I from 'shared/interfaces';

import { BiCoffeeTogo } from 'react-icons/bi';

import { useSelector } from 'react-redux';

export const Avatar = ({ url, cargo, nome }: I.Avatar): React.ReactElement => {
    const user = useSelector((state: I.State) => state.user);

    return (
        <>
            <S.Container>
                <S.Cafes>
                    <BiCoffeeTogo size="18" color="#fff" />
                    <h1>{user?.coffe}</h1>
                </S.Cafes>
                <S.Info>
                    <S.Name>{nome}</S.Name>
                    <S.Cargo>{cargo}</S.Cargo>
                </S.Info>
                <S.Avatar src={url} title="Avatar" alt="Avatar" />
            </S.Container>
        </>
    );
};
