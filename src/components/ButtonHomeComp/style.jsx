import styled from "styled-components";

export const ButtonEditor = styled.button`
    border-radius: 15px;
    background-color: #000;
    border: 1px solid gray;
    width: 90px;
    color: #fff;
    margin-left: 205px;
    margin-top: 5px;
    cursor: pointer;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
    text-align: center;
    text-indent: 0px;
    line-height: 20px;
    text-decoration: none solid rgb(15,20,25);

    @media(max-width: 320px){
        width: 50px;
        font-size: 5px;
        margin-left: 70px;
        margin-top: 1px;
        margin-bottom: 7px;
    }
`;

export const ButtonVerify = styled.button`
    border-radius: 15px;
    background-color: #000;
    border: 1px solid gray;
    width: 100px;
    padding-left: 4px;
    color: #fff;
    margin-left: 2px;
    margin-top: 5px;
    cursor: pointer;
    font-size: 7px;
    font-style: normal;
    font-weight: 700;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
    text-align: center;
    text-indent: 0px;
    line-height: 20px;
    text-decoration: none solid rgb(15,20,25);

    @media(max-width: 320px){
        width: 40px;
        height: 20px;
        font-size: 2px;
        margin-left: 12px;
    }
`;