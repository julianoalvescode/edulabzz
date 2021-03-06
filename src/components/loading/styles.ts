import styled from 'styled-components';
import * as I from 'shared/interfaces';

export const Container = styled.div`
    background-color: #fff;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 999999;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
`;

export const Load = styled.div<I.ITheme>`
    border: 8px solid #f3f3f3;

    ${(props) => {
        switch (props.variant) {
            case I.VARIANT.DARK:
                return `
                border-top: 8px solid ${props.theme.palette.secondary.main};
        `;
            default:
                return `
                border-top: 8px solid ${props.theme.palette.primary.main};
        `;
        }
    }}

    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s ease infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
