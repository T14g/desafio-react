import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme.header};
`

export const InnerContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 15px;

    &::after{
        display: table:
        content: '';
        clear: both;
    }
`

export const Logo = styled.img`
    max-width: 150px;
    margin-top: 15px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`

export const Hamburguer = styled.button`
    display: none;
    position: relative;
    top: 10px;
    width: 40px;
    height: 35px;
    float: right;
    background: none;
    border: 2px #fff solid;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 676px){
        display: block;
    }
`

export const LineSpan = styled.span`
    height: 4px;
    width: 24px;
    background: #fff;
    display: block;
    
    &:not(:last-child){
        margin-bottom: 5px;
    }
`