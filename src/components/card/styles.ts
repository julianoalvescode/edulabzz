import { ITheme, VARIANT } from 'shared/interfaces';
import styled from 'styled-components';

export const Box = styled.div`
    font-weight: 400;
    line-height: 1;
    color: #9b9b9b;
    -webkit-font-smoothing: antialiased;
    list-style-position: outside;
    list-style-type: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-size: inherit;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    background: #f2efed;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: 100%;
    transition: all 2s;
`;

export const BoxImg = styled.div`
    font-weight: 400;
    line-height: 1;
    color: #9b9b9b;
    -webkit-font-smoothing: antialiased;
    list-style-position: outside;
    list-style-type: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-size: inherit;
    -webkit-box-direction: normal;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

export const Details = styled.div`
    font-weight: 400;
    line-height: 1;
    color: #9b9b9b;
    -webkit-font-smoothing: antialiased;
    list-style-position: outside;
    list-style-type: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-size: inherit;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1 0 auto;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-top: 3.625rem;
    margin-bottom: 3.625rem;

    h3 {
        padding: 0 20px;
    }
`;

export const Button = styled.button<ITheme>`
    width: 100%;
    background-color: #006c49;
    box-shadow: none;
    border: none;
    color: #fff;
    padding: 20px 15px;
    cursor: pointer;

    ${(props) => {
        switch (props.variant) {
            case VARIANT.DARK:
                return `
                background-color: ${props.theme.palette.secondary.main};
        `;
            default:
                return `
                background-color: ${props.theme.palette.primary.main};
        `;
        }
    }}
`;
