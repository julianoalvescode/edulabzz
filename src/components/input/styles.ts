import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputStyle = styled.input`
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    font-family: inherit;
    display: block;
    font-size: 16px;
    line-height: 1.5;
    color: #222326;
    width: 100%;
    height: 40px;
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9dadc;
    border-radius: 0;
    box-shadow: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Label = styled.label`
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    line-height: 1.5;
    color: #222326;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
`;
