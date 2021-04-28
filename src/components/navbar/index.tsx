import React from 'react';

import { Avatar } from 'components';

import * as S from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { IState } from 'shared/interfaces';

import LogoWhite from 'static/images/logo-white.svg';

export const Navbar: React.FC = () => {
    const user = useSelector((state: IState) => state.user);
    const dispatch = useDispatch();

    const isLogout = (): void => {
        dispatch({ type: 'User.Logout' });
    };

    return (
        <>
            <S.Container>
                <S.Nav>
                    <img height="60" src={LogoWhite} />
                    <Avatar
                        cargo={user?.cargo}
                        nome={user?.name}
                        url={user?.avatar}
                    />
                    {/* <S.Logout onClick={() => isLogout()}>Logout</S.Logout> */}
                </S.Nav>
            </S.Container>
        </>
    );
};
