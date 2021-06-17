import styled from 'styled-components';

export const Container = styled.div`
    width: 700px;
    background-color: black;
    color: white;
    padding: 20px;
    margin:auto;
    margin-top: 50px;
`;

export const Btn = styled.button`
    background-color: lightblue;
    color: black;
    width: 50%;
    &:hover {
        background-color: paleGreen
    }
`;

export const Actual = styled.p`
    background-color: green;
`;