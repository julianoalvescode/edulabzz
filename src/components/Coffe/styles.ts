import styled from 'styled-components';

import { mobile, desktop } from 'styles';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 30px;
    padding: 40px 0px;
    transition: 2s;
    ${desktop} {
        grid-template-columns: repeat(auto-fit, 340px);
    }
    ${mobile} {
        grid-template-columns: repeat(auto-fit, 280px);
    }
`;
