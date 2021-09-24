import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Open Sans', sans-serif;       
    background: ${props => props.lights ? '#fff' : '#141418'};
    color: ${props => props.lights ? '#000' : '#fff'};
`

export const MainTitle = styled.h1`
    max-width: 1200px;
    text-align:center;
    margin: 50px auto;
`

export const Strong = styled.strong`

`