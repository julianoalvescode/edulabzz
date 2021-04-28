import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Name = styled.p`
    font-size: 14px;
    color: #fff;
`;

export const Cargo = styled.p`
    color: #fff;
    font-size: 12px;
`;

export const Cafes = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 15px;

    h1 {
        width: 30px;
        text-align: right;
    }
`;
