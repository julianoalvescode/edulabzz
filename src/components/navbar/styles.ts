import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ITheme, VARIANT } from '../../shared/interfaces';

import { mobile, desktop } from 'styles';

export const Container = styled.nav<ITheme>`
    display: flex;
    justify-content: center;

    ${(props) => {
        switch (props.variant) {
            case VARIANT.DARK:
                return `
                background-color: ${props.theme.palette.secondary.main};
        `;
            case VARIANT.PRIMARY:
            default:
                return `
                background-color: ${props.theme.palette.primary.main};
        `;
        }
    }}
`;

export const Nav = styled.nav<ITheme>`
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 1024px;

    ${desktop} {
        width: 1400px;
    }

    ${mobile} {
        width: 100%;
    }
`;

export const NavLink = styled(Link)<ITheme>`
    text-decoration: none;

    ${(props) => {
        switch (props.variant) {
            case VARIANT.DARK:
                return `
                color: ${props.theme.palette.secondary.contrastText};
        `;
            case VARIANT.PRIMARY:
            default:
                return `
                color: ${props.theme.palette.primary.contrastText};
        `;
        }
    }}
`;

export const Logout = styled.button`
    background: none;
    border: none;
    color: #fff;
    box-shadow: none;
    cursor: pointer;
`;
