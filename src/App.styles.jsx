import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Open Sans', sans-serif;
    padding: 0 15px;       
    background: ${props => props.theme.body};
    color: ${props => props.lights ? '#000' : '#fff'};
`

export const MainTitle = styled.h1`
    max-width: 952px;
    margin: 80px auto;
    text-align:center;
    font-weight: 300;
    font-size: 55px;
    line-height: 1;
    color: ${props => props.theme.h1};

    @media(max-width: 989px){
        max-width: 606px;
        font-size: 35px;
    }
`

export const Strong = styled.strong`
    font-weight: 700;
`