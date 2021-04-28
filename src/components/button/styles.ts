import { ITheme, VARIANT } from 'shared/interfaces';
import styled from 'styled-components';

export const ButtonStyle = styled.button<ITheme>`
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;

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
