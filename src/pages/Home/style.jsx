import styled from 'styled-components'

export const Container = styled.div` 
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`;

export const ContentPage = styled.div`
    background-color: #000;
    border: 1px solid gray;
    width: 40vw;
    margin-right: 280px;
`;

export const Header = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 12px;
    color: #fff;
    margin: 0px;
    padding-left: 10px;
`;

export const ImagemVoltar = styled.img`
    width: 20px;
    margin: 10px;
    cursor: pointer;
`;

export const ImagemBanner = styled.img`
    width: 303px;
    cursor: pointer;
    display: flex;
    position: relative;
`;

export const ImagemRedonda = styled.img`
    border-radius: 50%;
    border: 2px solid black;
    width: 90px;
    position: absolute; 
    top: 98px;
    left: 190px; 
    cursor: pointer;
`;