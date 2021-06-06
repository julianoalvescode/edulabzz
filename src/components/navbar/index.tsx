import React from 'react';

import { Avatar } from 'components';

import * as S from './styles';

import { useSelector } from 'react-redux';
import * as I from 'shared/interfaces';

import LogoWhite from 'static/images/logo-white.svg';

export const Navbar: React.FC = () => {
    const user = useSelector((state: I.State) => state.user);

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
