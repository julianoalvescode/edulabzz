import styled from 'styled-components';

import { desktop, mobile, mobileSmall } from 'styles';

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 27px;

    ${desktop} {
        width: 350px;
    }

    ${mobile} {
        width: 340px;
    }

    ${mobileSmall} {
        width: 300px;
    }
`;

export const Image = styled.img`
    margin-bottom: 20px;

    ${desktop} {
        height: 200px;
    }

    ${mobile} {
        height: 140px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Error = styled.span`
    color: red;
    font-size: 13px;
    height: 20px;
`;
