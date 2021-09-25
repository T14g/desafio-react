import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Open Sans', sans-serif;       
    background: ${props => props.lights ? '#fff' : '#141418'};
    color: ${props => props.lights ? '#000' : '#fff'};
`

export const MainTitle = styled.h1`
    max-width: 952px;
    margin: 80px auto;
    text-align:center;
    font-weight: 300;
    font-size: 55px;
    line-height: 1;
    color: #FFCB00;
`

export const Strong = styled.strong`
    font-weight: 700;
`