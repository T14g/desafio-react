import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Open Sans', sans-serif;      
    background: ${props => props.theme.body};
    color: ${props => props.lights ? '#000' : '#fff'};
`

export const Wrapper = styled.div`
    padding: 0 15px;
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

    @media(max-width: 659px){
        max-width: 300px;
        font-size: 24px;
        margin: 80px auto;
    }
`

export const Strong = styled.strong`
    font-weight: 700;
`